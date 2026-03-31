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

                <h3>Games</h3>
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

function updateProgress() {
    const totalCredits = getTotalCredits();
    const completedCredits = getCompletedCredits();
    const completedCourses = getCompletedCourses();
    const percentage = Math.round((completedCredits / totalCredits) * 100);

    const percentageEl = document.getElementById('progressPercentage');
    const fillEl = document.getElementById('progressFill');
    const detailsEl = document.getElementById('progressDetails');

    if (percentageEl) {
        percentageEl.textContent = percentage + '%';
        fillEl.style.width = percentage + '%';
        detailsEl.innerHTML = `<span class="completed-count">${completedCredits} of ${totalCredits} credits • ${completedCourses} courses completed</span>`;
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
