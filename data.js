const degreeData = {
    sections: [
        {
            id: "general",
            title: "General Education",
            description: "Foundation courses every gamer must experience, regardless of skill level or preference.",
            required: "All 6 courses (25 credits required)",
            courses: [
                {
                    code: "GAM 1010",
                    title: "Sandbox Literacy",
                    credits: 3,
                    games: [
                        { name: "Minecraft", requirements: "Build a house and survive 3 full nights (sleep in a bed 3 times)", credits: 3 }
                    ]
                },
                {
                    code: "GAM 1020",
                    title: "Platforming Literacy",
                    credits: 4,
                    games: [
                        { name: "Super Mario Bros.", requirements: "Reach the final castle and defeat Bowser", credits: 4 },
                        { name: "Super Mario Bros. 3", requirements: "Complete all 8 worlds and defeat Bowser", credits: 4 },
                        { name: "Super Mario World", requirements: "Collect at least 40 Dragon Coins and defeat Bowser", credits: 4 }
                    ]
                },
                {
                    code: "GAM 1030",
                    title: "Adventure Literacy",
                    credits: 4,
                    games: [
                        { name: "Zelda: A Link to the Past", requirements: "Collect all 3 pendants and defeat Ganon", credits: 4 },
                        { name: "Zelda: Ocarina of Time", requirements: "Collect all spiritual stones and defeat Ganondorf", credits: 4 },
                        { name: "Zelda: Breath of the Wild", requirements: "Destroy 4 Divine Beasts and defeat Calamity Ganon", credits: 4 }
                    ]
                },
                {
                    code: "GAM 1040",
                    title: "Shooter Literacy",
                    credits: 5,
                    games: [
                        { name: "DOOM (1993) or Doom Eternal", requirements: "DOOM 1993: Complete all 32 levels | Doom Eternal: Beat the campaign on Ultra-Violence", credits: 5 },
                        { name: "Halo: Combat Evolved", requirements: "Complete all 10 campaign missions on at least Normal difficulty", credits: 5 },
                        { name: "Half-Life 2", requirements: "Reach the end and defeat the Combine's Synth forces", credits: 5 }
                    ]
                },
                {
                    code: "GAM 1050",
                    title: "Puzzle Literacy",
                    credits: 4,
                    games: [
                        { name: "Portal", requirements: "Complete all 19 main test chambers and escape the facility", credits: 4 },
                        { name: "Tetris", requirements: "Reach level 10 or clear 50 lines without losing", credits: 4 },
                        { name: "Baba Is You", requirements: "Complete all 200+ main and optional levels (50% completion minimum)", credits: 4 }
                    ]
                },
                {
                    code: "GAM 1060",
                    title: "Multiplayer Literacy",
                    credits: 5,
                    games: [
                        { name: "Mario Kart 8 Deluxe", requirements: "Win 50 online races or complete Grand Prix on 150cc difficulty", credits: 5 },
                        { name: "Super Smash Bros. Ultimate", requirements: "Unlock 20 characters and win 30 matches online or in arcade mode", credits: 5 },
                        { name: "Fortnite Battle Royale", requirements: "Achieve 10 Victory Royales or reach Level 100", credits: 5 }
                    ]
                }
            ]
        },
        {
            id: "depth",
            title: "Depth Education",
            description: "Explore interesting and influential games across different styles. Choose 2 courses.",
            required: "2 of 6 courses (10 credits required)",
            courses: [
                {
                    code: "GAM 2010",
                    title: "Indie Studies",
                    credits: 5,
                    games: [
                        { name: "Undertale", requirements: "Complete the game on any route and reach one of three endings (True Pacifist, Genocide, Neutral)", credits: 5 },
                        { name: "Hades", requirements: "Clear the game (escape from Hell once) and unlock 10 weapon aspects", credits: 5 },
                        { name: "Celeste", requirements: "Beat all 8 main levels and collect 20 strawberries and 4 crystal hearts", credits: 5 },
                        { name: "Hollow Knight", requirements: "Defeat the Hollow Knight boss and collect 20 Vessel Fragments", credits: 5 },
                        { name: "Five Nights at Freddy's", requirements: "Survive all 5 nights on Night 4+ difficulty and unlock custom night mode", credits: 4 },
                        { name: "REPO", requirements: "Complete 10 expeditions on Moderate difficulty or higher and escape with team intact", credits: 5 }
                    ]
                },
                {
                    code: "GAM 2020",
                    title: "Narrative Excellence",
                    credits: 5,
                    games: [
                        { name: "Persona 5 Royal", requirements: "Complete the main story and reach the true ending (unlock the third semester)", credits: 5 },
                        { name: "Disco Elysium", requirements: "Complete all major investigations and reach any ending", credits: 5 },
                        { name: "What Remains of Edith Finch", requirements: "Explore all family vignettes and unlock all 11 memories", credits: 5 }
                    ]
                },
                {
                    code: "GAM 2030",
                    title: "Systems Design",
                    credits: 5,
                    games: [
                        { name: "Civilization VI", requirements: "Complete one full game (500+ turns) and achieve any victory condition", credits: 5 },
                        { name: "Factorio", requirements: "Launch a rocket to space (complete the final technology tree)", credits: 5 },
                        { name: "StarCraft: Brood War", requirements: "Complete all 30 campaign missions across all three races", credits: 5 }
                    ]
                },
                {
                    code: "GAM 2040",
                    title: "Horror Studies",
                    credits: 5,
                    games: [
                        { name: "Resident Evil 4", requirements: "Complete the campaign on Professional difficulty and defeat El Gigante", credits: 5 },
                        { name: "Silent Hill 2", requirements: "Reach any ending (4 main endings available) and defeat final boss", credits: 5 },
                        { name: "Dead Space", requirements: "Complete all 12 chapters and defeat Necromorph horrors throughout", credits: 5 },
                        { name: "Amnesia: The Dark Descent", requirements: "Escape the castle and uncover all story elements for true ending", credits: 5 }
                    ]
                },
                {
                    code: "GAM 2050",
                    title: "Simulation & Life",
                    credits: 5,
                    games: [
                        { name: "Stardew Valley", requirements: "Play through 2 full years, earn 50,000 gold, marry a partner, and complete 50 bundle items", credits: 5 },
                        { name: "The Sims 4", requirements: "Create a family of 4, build a house, achieve 2 promotions, and play for 20+ hours", credits: 5 },
                        { name: "Animal Crossing: New Horizons", requirements: "Catch 100 unique creatures, decorate 5+ home rooms, and unlock Resident Services upgrade", credits: 5 }
                    ]
                },
                {
                    code: "GAM 2060",
                    title: "Live Service Design",
                    credits: 5,
                    games: [
                        { name: "Final Fantasy XIV", requirements: "Complete A Realm Reborn main story and reach level 60 in any job class", credits: 5 },
                        { name: "Destiny 2", requirements: "Reach power level 1500+ and complete one full raid or strike playlist", credits: 5 },
                        { name: "World of Warcraft", requirements: "Reach max level (70), join a guild, and complete 5 dungeons or raids", credits: 5 }
                    ]
                }
            ]
        },
        {
            id: "preprofessional",
            title: "Pre-Professional Program",
            description: "Landmark titles in gaming history. Essential study of influential games that shaped the industry.",
            required: "All 8 courses (35 credits required)",
            courses: [
                {
                    code: "GAM 3010",
                    title: "Nintendo Landmark I",
                    credits: 5,
                    games: [
                        { name: "Super Mario Bros. 3", requirements: "Defeat Bowser and rescue Princess Peach across all 8 worlds", credits: 5 },
                        { name: "Super Mario World", requirements: "Defeat Bowser and Koopa Kids, unlock Secret World, collect 30+ Dragon Coins", credits: 5 },
                        { name: "Super Mario 64", requirements: "Collect 70 Power Stars and defeat Bowser in his castle", credits: 5 }
                    ]
                },
                {
                    code: "GAM 3020",
                    title: "Nintendo Landmark II",
                    credits: 5,
                    games: [
                        { name: "The Legend of Zelda: Ocarina of Time", requirements: "Collect all 3 Spiritual Stones and 6 Medallions, defeat Ganondorf", credits: 5 },
                        { name: "The Legend of Zelda: Breath of the Wild", requirements: "Activate all 4 Divine Beasts, complete Calamity Ganon boss fight, unlock true ending", credits: 5 },
                        { name: "The Legend of Zelda: Tears of the Kingdom", requirements: "Unlock all regions, complete main story, defeat Ganondorf", credits: 5 }
                    ]
                },
                {
                    code: "GAM 3030",
                    title: "PC Landmark I",
                    credits: 5,
                    games: [
                        { name: "DOOM (1993)", requirements: "Complete all 32 levels including the secret Doom II preview level", credits: 5 },
                        { name: "Half-Life or Half-Life 2", requirements: "HL1: Escape Black Mesa | HL2: Reach and defeat the Combine overlord", credits: 5 },
                        { name: "Quake", requirements: "Complete all 4 episodes and defeat Shub-Niggurath", credits: 5 }
                    ]
                },
                {
                    code: "GAM 3040",
                    title: "PC Landmark II",
                    credits: 4,
                    games: [
                        { name: "StarCraft: Brood War", requirements: "Complete Terran, Protoss, and Zerg campaigns on any difficulty", credits: 4 },
                        { name: "The Sims", requirements: "Create a family, build a house with 6+ rooms, and achieve success for 20+ sim days", credits: 4 },
                        { name: "Minecraft", requirements: "Locate and defeat the Ender Dragon in survival mode", credits: 4 }
                    ]
                },
                {
                    code: "GAM 3050",
                    title: "RPG Fundamentals I",
                    credits: 4,
                    games: [
                        { name: "Chrono Trigger", requirements: "Defeat Lavos and reach one of 12 possible endings by completing sidequest bosses", credits: 4 },
                        { name: "Final Fantasy VI", requirements: "Recruit all 14 characters, complete the Floating Island, and defeat Kefka", credits: 4 },
                        { name: "Pokémon Red/Blue", requirements: "Catch 50+ Pokémon, defeat all 8 Gym Leaders and the Elite Four Champion", credits: 4 }
                    ]
                },
                {
                    code: "GAM 3060",
                    title: "RPG Fundamentals II",
                    credits: 5,
                    games: [
                        { name: "Baldur's Gate 3", requirements: "Complete the main story, reach Act III ending, defeat the final boss, obtain Legendary items", credits: 5 },
                        { name: "The Elder Scrolls V: Skyrim", requirements: "Defeat Alduin, complete main questline, earn Dragonborn status by collecting 20 Dragon Souls", credits: 5 },
                        { name: "The Witcher 3: Wild Hunt", requirements: "Complete all 3 acts, defeat the Wild Hunt, achieve any ending, complete 15+ side quests", credits: 5 },
                        { name: "Mass Effect 2", requirements: "Recruit all 12 squad members, unlock all loyalty missions, survive the suicide mission finale", credits: 5 }
                    ]
                },
                {
                    code: "GAM 3070",
                    title: "Multiplayer Classics",
                    credits: 3,
                    games: [
                        { name: "Counter-Strike 2", requirements: "Reach Rank 20 in competitive mode and earn 100 competitive wins", credits: 3 },
                        { name: "League of Legends", requirements: "Reach Gold rank or play 100+ matches, mastery level 5 on 2 champions", credits: 3 },
                        { name: "Fortnite", requirements: "Achieve 50 Victory Royales or reach Level 100 in ranked season", credits: 3 },
                        { name: "Halo 3", requirements: "Complete campaign on Legendary difficulty and achieve 50-kill multiplayer streak", credits: 3 }
                    ]
                },
                {
                    code: "GAM 3080",
                    title: "Modern Prestige Titles",
                    credits: 4,
                    games: [
                        { name: "Dark Souls", requirements: "Defeat all Lordsouls bosses and Gwyn, unlock secret ending, collect 5+ humanity", credits: 4 },
                        { name: "Elden Ring", requirements: "Defeat Starscourge Radahn, Rennala, Maliketh, and Radagon of the Golden Order; reach one ending", credits: 4 },
                        { name: "Red Dead Redemption 2", requirements: "Complete main story chapters 1-6, earn Gold rating on 50% of missions, unlock secret ending", credits: 4 }
                    ]
                }
            ]
        },
        {
            id: "professional",
            title: "Professional Program",
            description: "Specialized study in specific genres and design philosophies. Choose 35 credits total from the categories below.",
            required: "35 credits required (mix of specializations)",
            courses: [
                {
                    section: "OPEN WORLD / ACTION",
                    courses: [
                        {
                            code: "GAM 4010",
                            title: "Advanced Systems Exploration",
                            credits: 5,
                            games: [
                                { name: "Breath of the Wild", requirements: "Complete all 120 shrines, defeat all 4 Divine Beasts, earn all 13 heart containers", credits: 5 },
                                { name: "Tears of the Kingdom", requirements: "Unlock all regions, activate all Geoglyphs, defeat Construct King, reach true ending", credits: 5 }
                            ]
                        },
                        {
                            code: "GAM 4015",
                            title: "Comparative Zelda Systems",
                            credits: 5,
                            games: [
                                { name: "Ocarina of Time", requirements: "Collect all 52 Gold Skulltulas and all Spiritual Stones, defeat Ganondorf", credits: 5 },
                                { name: "Majora's Mask", requirements: "Collect all 24 masks and all heart pieces, defeat Majora in final form", credits: 5 }
                            ]
                        },
                        {
                            code: "GAM 4020",
                            title: "Immersion and World Simulation",
                            credits: 5,
                            games: [
                                { name: "Red Dead Redemption 2", requirements: "Complete Chapter 6, earn 50 Gold rating missions, unlock all secrets and legendary animals", credits: 5 }
                            ]
                        },
                        {
                            code: "GAM 4030",
                            title: "Nonlinear Design and Player Discovery",
                            credits: 5,
                            games: [
                                { name: "Elden Ring", requirements: "Defeat Margit, Radahn, Rennala, and Maliketh; explore all 6 regions; unlock any of 6 endings", credits: 5 }
                            ]
                        },
                        {
                            code: "GAM 4040",
                            title: "Modern Open World Design",
                            credits: 5,
                            games: [
                                { name: "Ghost of Tsushima", requirements: "Complete all 4 acts, achieve Samurai rank 5, complete all side quests, unlock true ending", credits: 5 },
                                { name: "Horizon Zero Dawn", requirements: "Complete main quest, override all 4 machine types, collect 45+ machine parts, defeat HADES", credits: 5 }
                            ]
                        }
                    ]
                },
                {
                    section: "SYSTEMS / STRATEGY",
                    courses: [
                        {
                            code: "GAM 4110",
                            title: "Automation Systems",
                            credits: 4,
                            games: [
                                { name: "Factorio", requirements: "Reach space science era, automate blue chips and rocket fuel production, launch rocket", credits: 4 }
                            ]
                        },
                        {
                            code: "GAM 4120",
                            title: "Grand Strategy",
                            credits: 4,
                            games: [
                                { name: "Civilization VI", requirements: "Play 600+ turns, reach Medieval Era or later, achieve any victory (Science/Domination/Cultural)", credits: 4 }
                            ]
                        },
                        {
                            code: "GAM 4130",
                            title: "Tactical Systems",
                            credits: 4,
                            games: [
                                { name: "Into the Breach", requirements: "Complete all 3 island campaigns on any difficulty, unlock secret final island", credits: 4 }
                            ]
                        },
                        {
                            code: "GAM 4140",
                            title: "Competitive Systems",
                            credits: 4,
                            games: [
                                { name: "StarCraft II", requirements: "Complete all campaign missions on Hard difficulty, reach Gold league in ranked ladder", credits: 4 },
                                { name: "Dota 2", requirements: "Reach 3000+ MMR or win 50 ranked matches with 50% win rate", credits: 4 }
                            ]
                        }
                    ]
                },
                {
                    section: "NARRATIVE / RPG",
                    courses: [
                        {
                            code: "GAM 4210",
                            title: "Narrative Systems",
                            credits: 4,
                            games: [
                                { name: "Persona 5 Royal", requirements: "Complete third semester, unlock true ending, max all confidant ranks, achieve 100+ relationship points", credits: 4 }
                            ]
                        },
                        {
                            code: "GAM 4220",
                            title: "Systems-Driven Roleplaying",
                            credits: 4,
                            games: [
                                { name: "Baldur's Gate 3", requirements: "Complete main story with all companions loyal, achieve any ending, unlock secret Dark Urge ending", credits: 4 }
                            ]
                        },
                        {
                            code: "GAM 4230",
                            title: "Cinematic Narrative",
                            credits: 4,
                            games: [
                                { name: "The Last of Us", requirements: "Complete all 4 parts, collect all optional documents and audio logs, unlock secret ending", credits: 4 }
                            ]
                        },
                        {
                            code: "GAM 4240",
                            title: "Knowledge-Based Progression",
                            credits: 4,
                            games: [
                                { name: "Outer Wilds", requirements: "Explore all 6 planets, solve all core mysteries, reach the Eye of the Universe", credits: 4 }
                            ]
                        }
                    ]
                },
                {
                    section: "HORROR / TENSION STUDIES",
                    courses: [
                        {
                            code: "GAM 4310",
                            title: "Action-Horror Design",
                            credits: 4,
                            games: [
                                { name: "Resident Evil 4", requirements: "Complete Professional difficulty, unlock all weapons, defeat final boss El Gigante", credits: 4 }
                            ]
                        },
                        {
                            code: "GAM 4315",
                            title: "Psychological Horror",
                            credits: 4,
                            games: [
                                { name: "Silent Hill 2", requirements: "Unlock all 4 main endings plus UFO ending, collect all 3 puzzle solutions", credits: 4 }
                            ]
                        },
                        {
                            code: "GAM 4320",
                            title: "Atmosphere and Pressure",
                            credits: 4,
                            games: [
                                { name: "Dead Space", requirements: "Complete all 12 chapters on any difficulty, upgrade suit and weapons, defeat final Necromorph", credits: 4 }
                            ]
                        },
                        {
                            code: "GAM 4325",
                            title: "Vulnerability Design",
                            credits: 4,
                            games: [
                                { name: "Amnesia: The Dark Descent", requirements: "Escape the castle, collect all diary pages for complete story, reach ending without dying", credits: 4 },
                                { name: "Alien Isolation", requirements: "Complete all 15 missions, survive the alien encounters, unlock secret ending", credits: 4 }
                            ]
                        }
                    ]
                },
                {
                    section: "MULTIPLAYER / LIVE SERVICE",
                    courses: [
                        {
                            code: "GAM 4410",
                            title: "Live Service Design",
                            credits: 4,
                            games: [
                                { name: "Final Fantasy XIV", requirements: "Complete A Realm Reborn and Heavensward main stories, reach level 65, clear 2 raid tiers", credits: 4 },
                                { name: "Destiny 2", requirements: "Reach 1600 power level, complete one full raid, earn 15+ Exotic weapons", credits: 4 }
                            ]
                        },
                        {
                            code: "GAM 4420",
                            title: "Battle Royale Systems",
                            credits: 4,
                            games: [
                                { name: "Fortnite", requirements: "Achieve 50 Victory Royales, reach Champion rank, unlock battle pass tier 100", credits: 4 }
                            ]
                        },
                        {
                            code: "GAM 4430",
                            title: "Cooperative Systems",
                            credits: 4,
                            games: [
                                { name: "Monster Hunter", requirements: "Hunt 50+ monsters, unlock Master Rank content, craft high-rarity equipment", credits: 4 },
                                { name: "Helldivers 2", requirements: "Complete 50 missions, unlock all difficulties, achieve victory on 10 planet campaigns", credits: 4 }
                            ]
                        },
                        {
                            code: "GAM 4440",
                            title: "Competitive Multiplayer",
                            credits: 4,
                            games: [
                                { name: "Counter-Strike 2", requirements: "Achieve Rank 25 and reach Gold rank in competitive, earn 100 competitive wins", credits: 4 },
                                { name: "Valorant", requirements: "Reach Gold rank, earn 50 ranked wins, achieve 20-kill game, unlock all agents", credits: 4 }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "electives",
            title: "Electives",
            description: "Fun and experimental games. Choose 15 credits total from any combination.",
            required: "15 credits required",
            courses: [
                {
                    section: "SERIES STUDIES",
                    courses: [
                        {
                            code: "GAM 5100",
                            title: "Elder Scrolls Series",
                            credits: 3,
                            games: [
                                { name: "Any Elder Scrolls game", requirements: "Complete main questline, reach max level in any skill tree, collect 20+ unique artifacts", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5105",
                            title: "Fallout Series",
                            credits: 3,
                            games: [
                                { name: "Any Fallout game", requirements: "Complete main story, reach level 30+, collect 15+ unique weapons and armor", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5110",
                            title: "Assassin's Creed Series",
                            credits: 3,
                            games: [
                                { name: "Any Assassin's Creed game", requirements: "Complete main story, unlock all abilities, achieve 100% synchronization on 10+ missions", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5115",
                            title: "Final Fantasy Series",
                            credits: 3,
                            games: [
                                { name: "Any Final Fantasy game", requirements: "Defeat final boss, unlock secret ending if available, complete all character storylines", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5120",
                            title: "Persona Series",
                            credits: 3,
                            games: [
                                { name: "Persona 3, 4, or 5", requirements: "Complete main story (200+ hours), unlock true ending, max 10+ social links/confidants", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5125",
                            title: "Shin Megami Tensei Series",
                            credits: 3,
                            games: [
                                { name: "Any SMT game", requirements: "Complete any route, recruit 20+ demons, achieve alignment ending", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5130",
                            title: "Metal Gear Solid Series",
                            credits: 3,
                            games: [
                                { name: "Any MGS game", requirements: "Complete main story, unlock special weapons, achieve no-kill pacifist run", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5135",
                            title: "Resident Evil Series",
                            credits: 3,
                            games: [
                                { name: "Any Resident Evil game (not used elsewhere)", requirements: "Complete campaign, unlock all files, defeat all boss encounters", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5140",
                            title: "Monster Hunter Series",
                            credits: 3,
                            games: [
                                { name: "Any Monster Hunter game", requirements: "Reach High Rank or Master Rank, hunt 30+ unique monsters, craft rare equipment sets", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5155",
                            title: "Legend of Zelda Series",
                            credits: 3,
                            games: [
                                { name: "Any Zelda game (additional title)", requirements: "Complete game, collect all heart pieces and/or medallions, defeat final boss", credits: 3 }
                            ]
                        }
                    ]
                },
                {
                    section: "INDIE / MODERN FAVORITES",
                    courses: [
                        {
                            code: "GAM 5200",
                            title: "Roguelike Deck Building",
                            credits: 3,
                            games: [
                                { name: "Slay the Spire", requirements: "Beat Ascension Level 10+, unlock all cards with 100+ deck combinations tried", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5205",
                            title: "Roguelike Action",
                            credits: 3,
                            games: [
                                { name: "Dead Cells", requirements: "Reach Boss Rush tier 3, beat the Hand of the King, unlock 30+ weapons/mutations", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5210",
                            title: "Roguelike Shooter",
                            credits: 3,
                            games: [
                                { name: "Risk of Rain 2", requirements: "Beat Mithrix on Monsoon difficulty, unlock all survivors, collect 100+ items in single run", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5215",
                            title: "Survival Action",
                            credits: 3,
                            games: [
                                { name: "Vampire Survivors", requirements: "Unlock all 20+ characters, survive 30-minute sessions on 5 stages, achieve Arcana level 50", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5220",
                            title: "Roguelike Puzzle",
                            credits: 3,
                            games: [
                                { name: "Inscryption", requirements: "Unlock all three endings, defeat Leshy on Kaycee's Mod, collect all unique card combinations", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5225",
                            title: "Mystery Puzzle",
                            credits: 3,
                            games: [
                                { name: "Return of the Obra Dinn", requirements: "Solve all 60 fates correctly, uncover the complete mystery of the ship", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5230",
                            title: "Adventure Puzzle",
                            credits: 3,
                            games: [
                                { name: "Tunic", requirements: "Obtain all 13 pages of instruction manual, unlock secret underground city, reach true ending", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5235",
                            title: "Cozy Adventure",
                            credits: 3,
                            games: [
                                { name: "Dave the Diver", requirements: "Complete main story across all seasons, unlock Kyoto ending, catch 50+ fish species", credits: 3 }
                            ]
                        }
                    ]
                },
                {
                    section: "MULTIPLAYER / SOCIAL",
                    courses: [
                        {
                            code: "GAM 5300",
                            title: "Social Deduction",
                            credits: 3,
                            games: [
                                { name: "Among Us", requirements: "Play 50+ rounds with friends, achieve 20 Imposter wins and 20 Crewmate victories", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5305",
                            title: "Cooperative Horror",
                            credits: 3,
                            games: [
                                { name: "Phasmophobia", requirements: "Complete 25+ investigations, identify all 24 ghost types, earn evidence collection mastery", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5310",
                            title: "Cooperative Survival",
                            credits: 3,
                            games: [
                                { name: "Lethal Company", requirements: "Complete 30+ expeditions, survive Titan difficulty, collect all company equipment upgrades", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5315",
                            title: "Competitive Sports",
                            credits: 3,
                            games: [
                                { name: "Rocket League", requirements: "Reach Champion rank or higher, score 500+ goals, complete season challenges", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5320",
                            title: "Party Games",
                            credits: 3,
                            games: [
                                { name: "Jackbox Party Pack (any version)", requirements: "Host 15+ parties, unlock all achievements, play through all game types twice", credits: 3 }
                            ]
                        }
                    ]
                },
                {
                    section: "SIMULATION / SANDBOX",
                    courses: [
                        {
                            code: "GAM 5400",
                            title: "City Management",
                            credits: 3,
                            games: [
                                { name: "Cities: Skylines", requirements: "Build city with 100,000+ population, achieve all happiness levels, unlock all landmarks", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5405",
                            title: "Colony Simulation",
                            credits: 3,
                            games: [
                                { name: "RimWorld", requirements: "Reach the ship ending, manage 10+ colonists, establish trade routes with 5+ factions", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5410",
                            title: "Space Simulation",
                            credits: 3,
                            games: [
                                { name: "Kerbal Space Program", requirements: "Land on Mun, establish space station orbit, complete 10+ contracts successfully", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5420",
                            title: "Flight Simulation",
                            credits: 3,
                            games: [
                                { name: "Microsoft Flight Simulator", requirements: "Complete 20+ flights, visit all 6 continents, achieve 100% accuracy landing rating", credits: 3 }
                            ]
                        }
                    ]
                },
                {
                    section: "ACTION / FUN CORE",
                    courses: [
                        {
                            code: "GAM 5500",
                            title: "Stylish Action",
                            credits: 3,
                            games: [
                                { name: "Devil May Cry 5", requirements: "Beat all 20 missions on Dante Must Die difficulty, S-rank all combat encounters", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5505",
                            title: "Spectacle Action",
                            credits: 3,
                            games: [
                                { name: "Bayonetta", requirements: "Complete on Hard difficulty, unlock all torture attacks, achieve Pure Platinum on 15+ chapters", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5510",
                            title: "Fast-Paced Action",
                            credits: 3,
                            games: [
                                { name: "Doom Eternal", requirements: "Beat on Ultra-Nightmare difficulty, unlock all cheat codes, max all weapon upgrades", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5515",
                            title: "Campaign or Multiplayer",
                            credits: 3,
                            games: [
                                { name: "Titanfall 2", requirements: "Complete campaign on Hard, reach Pilot rank 50, win 50 multiplayer matches", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5520",
                            title: "Action Adventure",
                            credits: 3,
                            games: [
                                { name: "Spider-Man (Insomniac)", requirements: "Complete all story missions, unlock all suits, achieve 100% completion with all collectibles", credits: 3 }
                            ]
                        }
                    ]
                },
                {
                    section: "PUZZLE / BRAIN GAMES",
                    courses: [
                        {
                            code: "GAM 5600",
                            title: "Environmental Puzzles",
                            credits: 3,
                            games: [
                                { name: "The Witness", requirements: "Solve 400+ puzzles, unlock main island fully, achieve secret ending completion", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5605",
                            title: "Advanced Completion",
                            credits: 3,
                            games: [
                                { name: "Baba Is You", requirements: "Complete all bonus levels, unlock level 199 and beyond, solve all meta-puzzles", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5610",
                            title: "Programming Puzzles",
                            credits: 3,
                            games: [
                                { name: "Human Resource Machine / 7 Billion Humans", requirements: "Complete all 40+ levels with optimal solutions (fewer commands than required)", credits: 3 }
                            ]
                        }
                    ]
                },
                {
                    section: "CHAOS / CULTURE",
                    courses: [
                        {
                            code: "GAM 5700",
                            title: "Chaotic Sandbox",
                            credits: 3,
                            games: [
                                { name: "Goat Simulator", requirements: "Unlock all DLC areas, achieve all joke endings, trigger 50+ environmental physics events", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5705",
                            title: "Mischief Simulator",
                            credits: 3,
                            games: [
                                { name: "Untitled Goose Game", requirements: "Complete entire to-do list, unlock garden paradise, achieve 100% achievement rate", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5710",
                            title: "Brutalist Challenge",
                            credits: 3,
                            games: [
                                { name: "Getting Over It with Bennett Foddy", requirements: "Reach the summit and meet the Dumbbell god, persist through 10+ frustrating deaths", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5715",
                            title: "Hidden Gems",
                            credits: 3,
                            games: [
                                { name: "Any game you bought on sale", requirements: "Complete it (20+ hours or main story completion), write brief reflection on gameplay experience", credits: 3 }
                            ]
                        }
                    ]
                },
                {
                    section: "SPEED / MASTERY",
                    courses: [
                        {
                            code: "GAM 5800",
                            title: "Speedrunning Studies",
                            credits: 3,
                            games: [
                                { name: "Any game", requirements: "Complete speedrun under 2 hours, practice routing with 10+ practice runs, submit time to leaderboard", credits: 3 }
                            ]
                        },
                        {
                            code: "GAM 5805",
                            title: "Completionism Studies",
                            credits: 3,
                            games: [
                                { name: "Any game", requirements: "Achieve 100% completion - all achievements, collectibles, side missions, and secrets", credits: 3 }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
