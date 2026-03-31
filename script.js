// Load completion state from localStorage
function getCompletionState() {
    const saved = localStorage.getItem('degreeCompletion');
    return saved ? JSON.parse(saved) : {};
}

function saveCompletionState(state) {
    localStorage.setItem('degreeCompletion', JSON.stringify(state));
}

function isCompleted(courseCode) {
    const state = getCompletionState();
    return state[courseCode] || false;
}

function toggleCompletion(courseCode) {
    const state = getCompletionState();
    state[courseCode] = !state[courseCode];
    saveCompletionState(state);
    updateCourseCard(courseCode);
    updateProgress();
}

function updateCourseCard(courseCode) {
    const card = document.querySelector(`[data-course="${courseCode}"]`);
    if (!card) return;

    const checkbox = card.querySelector('input[type="checkbox"]');
    if (isCompleted(courseCode)) {
        card.classList.add('completed');
        checkbox.checked = true;
    } else {
        card.classList.remove('completed');
        checkbox.checked = false;
    }
}

function openCourseModal(course) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'courseModal';

    let gamesHtml = '';
    course.games.forEach(game => {
        gamesHtml += `
            <div class="game-item">
                <div class="game-header">
                    <h4>${game.name}</h4>
                    <span class="game-credits">${game.credits} credits</span>
                </div>
                <p><strong>Requirements:</strong> ${game.requirements}</p>
            </div>
        `;
    });

    // Calculate how many games need to be completed
    const firstGameCredits = course.games[0]?.credits || course.credits;
    const gamesNeeded = Math.ceil(course.credits / firstGameCredits);
    const gamesText = gamesNeeded === 1 ? `1 of the following:` : `${gamesNeeded} of the following:`;

    const completed = isCompleted(course.code);
    const checkedAttr = completed ? 'checked' : '';

    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal()">&times;</button>
            <div class="modal-header">
                <h2>${course.title}</h2>
                <p class="modal-code">${course.code}</p>
            </div>

            <div class="modal-body">
                <p class="modal-credits"><strong>${course.credits}</strong> credits</p>

                <h3>${course.games.length > 1 ? gamesText : 'Game'}</h3>
                <div class="games-list">
                    ${gamesHtml}
                </div>

                <div class="modal-completion">
                    <label>
                        <input
                            type="checkbox"
                            data-course="${course.code}"
                            onchange="toggleCompletion('${course.code}'); closeModal();"
                            ${checkedAttr}
                        />
                        Mark as completed
                    </label>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

function closeModal() {
    const modal = document.getElementById('courseModal');
    if (modal) modal.remove();
}

function getTotalCredits() {
    let total = 0;
    degreeData.sections.forEach(section => {
        total += getRequiredCreditsForSection(section);
    });
    return total;
}

function getMaxPossibleCredits() {
    let total = 0;
    degreeData.sections.forEach(section => {
        if (section.courses[0]?.section) {
            // Has subsections
            section.courses.forEach(subsection => {
                subsection.courses.forEach(course => {
                    total += course.credits;
                });
            });
        } else {
            // Regular courses
            section.courses.forEach(course => {
                total += course.credits;
            });
        }
    });
    return total;
}

function getAllCourses() {
    const courses = [];
    degreeData.sections.forEach(section => {
        if (section.courses[0]?.section) {
            section.courses.forEach(subsection => {
                courses.push(...subsection.courses);
            });
        } else {
            courses.push(...section.courses);
        }
    });
    return courses;
}

function getCompletedCredits() {
    const state = getCompletionState();
    let credits = 0;
    const allCourses = getAllCourses();
    allCourses.forEach(course => {
        if (state[course.code]) {
            credits += course.credits;
        }
    });
    return credits;
}

function getCompletedCourses() {
    const state = getCompletionState();
    return Object.values(state).filter(v => v).length;
}

function getRequiredCreditsForSection(section) {
    // Parse required credits from the "required" field (e.g., "All 6 courses (25 credits required)")
    const match = section.required.match(/(\d+)\s+credits\s+required/);
    return match ? parseInt(match[1]) : 0;
}

function getCompletedCreditsForSection(section) {
    const state = getCompletionState();
    let credits = 0;

    if (section.courses[0]?.section) {
        // Has subsections
        section.courses.forEach(subsection => {
            subsection.courses.forEach(course => {
                if (state[course.code]) {
                    credits += course.credits;
                }
            });
        });
    } else {
        // Regular courses
        section.courses.forEach(course => {
            if (state[course.code]) {
                credits += course.credits;
            }
        });
    }
    return credits;
}

function updateProgress() {
    let totalSectionPercentage = 0;
    let sectionCount = 0;
    let allSectionsComplete = true;

    degreeData.sections.forEach(section => {
        const requiredCredits = getRequiredCreditsForSection(section);
        const completedCredits = getCompletedCreditsForSection(section);
        // Calculate percentage for this section, capped at 100%
        const sectionPercentage = Math.min(
            Math.round((completedCredits / requiredCredits) * 100),
            100
        );
        totalSectionPercentage += sectionPercentage;
        sectionCount++;

        // Check if this section is incomplete
        if (sectionPercentage < 100) {
            allSectionsComplete = false;
        }
    });

    // Average the section percentages
    const percentage = sectionCount > 0 ? Math.round(totalSectionPercentage / sectionCount) : 0;
    const completedCourses = getCompletedCourses();
    const totalCredits = getTotalCredits();
    const completedCredits = getCompletedCredits();

    const completionEl = document.getElementById('completionMessage');
    const inProgressCard = document.getElementById('inProgressCard');
    const completionCard = document.getElementById('completionCard');

    // Show congratulations message if degree is complete
    if (allSectionsComplete && percentage === 100) {
        completionEl.style.display = 'block';
        inProgressCard.style.display = 'none';
        completionCard.style.display = 'block';

        // Update completion card with total credits vs max possible
        const maxCredits = getMaxPossibleCredits();
        const creditsPercentage = Math.round((completedCredits / maxCredits) * 100);
        document.getElementById('creditsPercentage').textContent = `${completedCredits}/${maxCredits}`;
        document.getElementById('creditsProgressFill').style.width = creditsPercentage + '%';
        document.getElementById('creditsProgressDetails').innerHTML = `<span class="completed-count">${completedCredits} of ${totalCredits} required credits earned</span>`;
    } else {
        completionEl.style.display = 'none';
        inProgressCard.style.display = 'block';
        completionCard.style.display = 'none';

        // Update in-progress card
        const percentageEl = document.getElementById('progressPercentage');
        const fillEl = document.getElementById('progressFill');
        const detailsEl = document.getElementById('progressDetails');

        if (percentageEl) {
            percentageEl.textContent = percentage + '%';
            fillEl.style.width = percentage + '%';
            detailsEl.innerHTML = `<span class="completed-count">${completedCourses} courses completed</span>`;
        }
    }
}

function renderSections() {
    const container = document.getElementById('sections-container');

    degreeData.sections.forEach((section) => {
        const sectionEl = document.createElement('div');
        sectionEl.className = 'degree-section';

        const headerEl = document.createElement('div');
        headerEl.className = 'section-header';
        headerEl.onclick = () => toggleSection(headerEl, contentEl);

        headerEl.innerHTML = `
            <div class="section-title">
                <h2>${section.title}</h2>
                <p class="section-desc">${section.description}</p>
                <p class="section-required">${section.required}</p>
            </div>
            <div class="section-toggle">▼</div>
        `;

        const contentEl = document.createElement('div');
        contentEl.className = 'section-content';
        contentEl.innerHTML = renderCoursesForSection(section);

        sectionEl.appendChild(headerEl);
        sectionEl.appendChild(contentEl);
        container.appendChild(sectionEl);
    });
}

function renderCoursesForSection(section) {
    const hasSubsections = section.courses.some(item => item.section);

    if (hasSubsections) {
        let html = '<div class="courses-grid">';

        const subsections = {};
        section.courses.forEach(item => {
            if (!subsections[item.section]) {
                subsections[item.section] = [];
            }
            subsections[item.section].push(...item.courses);
        });

        Object.entries(subsections).forEach(([subsectionName, courses]) => {
            html += `<div class="subsection"><h3 class="subsection-title">${subsectionName}</h3>`;
            courses.forEach(course => {
                html += renderCourse(course);
            });
            html += '</div>';
        });

        html += '</div>';
        return html;
    } else {
        let html = '<div class="courses-grid">';
        section.courses.forEach(course => {
            html += renderCourse(course);
        });
        html += '</div>';
        return html;
    }
}

function renderCourse(course) {
    const completed = isCompleted(course.code);
    const completedClass = completed ? 'completed' : '';
    const checkedAttr = completed ? 'checked' : '';

    // Show first 2 games in preview
    const previewGames = course.games.slice(0, 2).map(g => g.name).join(', ');
    const hasMore = course.games.length > 2;
    const gamesPreview = hasMore ? previewGames + '...' : previewGames;

    return `
        <div class="course-card ${completedClass}" data-course="${course.code}">
            <div class="course-header" onclick="openCourseModal(${JSON.stringify(course).replace(/"/g, '&quot;')})">
                <div class="course-code">${course.code}</div>
                <div class="course-title">${course.title}</div>
                <div class="course-credits"><strong>${course.credits}</strong> credits</div>
                <div class="course-games-preview">
                    ${gamesPreview}
                </div>
            </div>
            <div class="course-checkbox-card">
                <input
                    type="checkbox"
                    id="course-${course.code}"
                    data-course="${course.code}"
                    ${checkedAttr}
                    onchange="toggleCompletion('${course.code}')"
                    onclick="event.stopPropagation()"
                />
            </div>
        </div>
    `;
}

function toggleSection(headerEl, contentEl) {
    const isExpanded = contentEl.classList.contains('expanded');

    if (isExpanded) {
        contentEl.classList.remove('expanded');
        headerEl.classList.remove('expanded');
        headerEl.querySelector('.section-toggle').classList.remove('expanded');
    } else {
        contentEl.classList.add('expanded');
        headerEl.classList.add('expanded');
        headerEl.querySelector('.section-toggle').classList.add('expanded');
    }
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem('degreeCompletion');
        location.reload();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderSections();
    updateProgress();
    // Add escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});
