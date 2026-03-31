const degreeData = {
  sections: [
    {
      id: "general",
      title: "General Education",
      description:
        "Foundation courses every gamer must experience, regardless of skill level or preference.",
      required: "All 6 courses (25 credits required)",
      courses: [
        {
          code: "GAM 1010",
          title: "Sandbox Literacy",
          credits: 3,
          games: [
            {
              name: "Minecraft",
              requirements: "Complete the game",
              credits: 3,
            },
          ],
        },
        {
          code: "GAM 1020",
          title: "Platforming Literacy",
          credits: 4,
          games: [
            {
              name: "Super Mario Bros.",
              requirements: "Complete the game",
              credits: 4,
            },
          ],
        },
        {
          code: "GAM 1030",
          title: "Adventure Literacy",
          credits: 4,
          games: [
            {
              name: "Zelda: A Link to the Past",
              requirements: "Complete the game",
              credits: 4,
            },
          ],
        },
        {
          code: "GAM 1040",
          title: "Shooter Literacy",
          credits: 5,
          games: [
            {
              name: "Halo: Combat Evolved",
              requirements: "Complete the campaign",
              credits: 5,
            },
          ],
        },
        {
          code: "GAM 1050",
          title: "Puzzle Literacy",
          credits: 4,
          games: [
            {
              name: "Tetris",
              requirements: "Reach level 10",
              credits: 4,
            },
          ],
        },
        {
          code: "GAM 1060",
          title: "Multiplayer Literacy",
          credits: 5,
          games: [
            {
              name: "Mario Kart 8 Deluxe",
              requirements: "Complete 20 online races",
              credits: 5,
            },
          ],
        },
      ],
    },
    {
      id: "depth",
      title: "Depth Education",
      description:
        "Explore interesting and influential games across different styles. Choose 2 courses.",
      required: "2 of 6 courses (10 credits required)",
      courses: [
        {
          code: "GAM 2010",
          title: "Indie Studies",
          credits: 5,
          games: [
            {
              name: "Undertale",
              requirements: "Complete the game",
              credits: 5,
            },
            {
              name: "Hades",
              requirements: "Escape from Hell once",
              credits: 5,
            },
            {
              name: "Celeste",
              requirements: "Beat all main levels",
              credits: 5,
            },
            {
              name: "Hollow Knight",
              requirements: "Defeat the final boss",
              credits: 5,
            },
            {
              name: "Five Nights at Freddy's",
              requirements: "Complete all 5 nights",
              credits: 4,
            },
            {
              name: "REPO",
              requirements: "Complete the game",
              credits: 5,
            },
            {
              name: "Noita",
              requirements: "Complete the game",
              credits: 5,
            },
            {
              name: "Expedition 33",
              requirements: "Complete the game",
              credits: 5,
            },
            {
              name: "Starbound",
              requirements: "Complete the main story",
              credits: 5,
            },
          ],
        },
        {
          code: "GAM 2020",
          title: "Narrative Excellence",
          credits: 5,
          games: [
            {
              name: "The Witcher 3: Wild Hunt",
              requirements: "Complete the main story",
              credits: 5,
            },
            {
              name: "The Last of Us",
              requirements: "Complete the main story",
              credits: 5,
            },
            {
              name: "Red Dead Redemption 2",
              requirements: "Complete the main story",
              credits: 5,
            },
            {
              name: "God of War",
              requirements: "Complete the main story",
              credits: 5,
            },
            {
              name: "Baldur's Gate 3",
              requirements: "Complete the main story",
              credits: 5,
            },
            {
              name: "Persona 5 Royal",
              requirements: "Complete the main story",
              credits: 5,
            },
            {
              name: "Disco Elysium",
              requirements: "Complete the main story",
              credits: 5,
            },
            {
              name: "What Remains of Edith Finch",
              requirements: "Complete the game",
              credits: 5,
            },
            {
              name: "Firewatch",
              requirements: "Complete the game",
              credits: 5,
            },
            {
              name: "Life is Strange",
              requirements: "Complete the game",
              credits: 5,
            },
          ],
        },
        {
          code: "GAM 2030",
          title: "Systems Design",
          credits: 5,
          games: [
            {
              name: "Civilization VI",
              requirements: "Complete one full game and achieve any victory",
              credits: 5,
            },
            {
              name: "Factorio",
              requirements: "Launch a rocket to space",
              credits: 5,
            },
            {
              name: "StarCraft: Brood War",
              requirements: "Complete all campaign missions",
              credits: 5,
            },
          ],
        },
        {
          code: "GAM 2040",
          title: "Horror Studies",
          credits: 5,
          games: [
            {
              name: "Resident Evil 4",
              requirements: "Complete the campaign",
              credits: 5,
            },
            {
              name: "Silent Hill 2",
              requirements: "Reach any ending",
              credits: 5,
            },
            {
              name: "Dead Space",
              requirements: "Complete all chapters",
              credits: 5,
            },
            {
              name: "Amnesia: The Dark Descent",
              requirements: "Escape the castle",
              credits: 5,
            },
          ],
        },
        {
          code: "GAM 2050",
          title: "Simulation & Life",
          credits: 5,
          games: [
            {
              name: "Stardew Valley",
              requirements: "Complete the main story",
              credits: 5,
            },
            {
              name: "The Sims 4",
              requirements: "Play through at least one full family story",
              credits: 5,
            },
            {
              name: "Animal Crossing: New Horizons",
              requirements: "Reach the main ending",
              credits: 5,
            },
          ],
        },
        {
          code: "GAM 2060",
          title: "Live Service Design",
          credits: 5,
          games: [
            {
              name: "Final Fantasy XIV",
              requirements: "Complete A Realm Reborn main story",
              credits: 5,
            },
            {
              name: "Destiny 2",
              requirements: "Complete the main campaign",
              credits: 5,
            },
            {
              name: "World of Warcraft",
              requirements: "Reach max level",
              credits: 5,
            },
          ],
        },
      ],
    },
    {
      id: "preprofessional",
      title: "Pre-Professional Program",
      description:
        "Landmark titles in gaming history. Essential study of influential games that shaped the industry.",
      required: "All 8 courses (35 credits required)",
      courses: [
        {
          code: "GAM 3010",
          title: "3D Platforming Innovation",
          credits: 5,
          games: [
            {
              name: "Super Mario 64",
              requirements: "Collect 70 Power Stars",
              credits: 5,
            },
          ],
        },
        {
          code: "GAM 3020",
          title: "3D Adventure Design",
          credits: 5,
          games: [
            {
              name: "The Legend of Zelda: Ocarina of Time",
              requirements: "Complete the main story",
              credits: 5,
            },
          ],
        },
        {
          code: "GAM 3030",
          title: "First-Person Shooter Foundations",
          credits: 5,
          games: [
            {
              name: "DOOM (1993)",
              requirements: "Complete all levels",
              credits: 5,
            },
          ],
        },
        {
          code: "GAM 3040",
          title: "Sandbox & Creative Systems",
          credits: 4,
          games: [
            {
              name: "Grand Theft Auto III",
              requirements: "Complete all story missions",
              credits: 4,
            },
          ],
        },
        {
          code: "GAM 3050",
          title: "RPG Design Fundamentals",
          credits: 4,
          games: [
            {
              name: "Final Fantasy VII (1997)",
              requirements: "Complete the main story",
              credits: 4,
            },
          ],
        },
        {
          code: "GAM 3060",
          title: "Open-World Design Fundamentals",
          credits: 5,
          games: [
            {
              name: "The Elder Scrolls V: Skyrim",
              requirements: "Defeat Alduin",
              credits: 5,
            },
          ],
        },
        {
          code: "GAM 3070",
          title: "Competitive Multiplayer Design",
          credits: 3,
          games: [
            {
              name: "Counter-Strike 1.6",
              requirements: "Complete 20+ matches",
              credits: 3,
            },
          ],
        },
        {
          code: "GAM 3080",
          title: "Boss Combat & Challenge Design",
          credits: 4,
          games: [
            {
              name: "Dark Souls",
              requirements: "Defeat the final boss",
              credits: 4,
            },
          ],
        },
      ],
    },
    {
      id: "professional",
      title: "Professional Program",
      description:
        "Specialized study in specific genres and design philosophies. Choose 35 credits total from the categories below.",
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
                {
                  name: "Breath of the Wild",
                  requirements: "Defeat Ganon",
                  credits: 5,
                },
                {
                  name: "Tears of the Kingdom",
                  requirements: "Defeat Ganondorf",
                  credits: 5,
                },
              ],
            },
            {
              code: "GAM 4015",
              title: "Comparative Zelda Systems",
              credits: 5,
              games: [
                {
                  name: "Ocarina of Time",
                  requirements: "Complete the main story",
                  credits: 5,
                },
                {
                  name: "Majora's Mask",
                  requirements: "Defeat Majora",
                  credits: 5,
                },
              ],
            },
            {
              code: "GAM 4020",
              title: "Immersion and World Simulation",
              credits: 5,
              games: [
                {
                  name: "Red Dead Redemption 2",
                  requirements: "Complete the main story",
                  credits: 5,
                },
              ],
            },
            {
              code: "GAM 4030",
              title: "Nonlinear Design and Player Discovery",
              credits: 5,
              games: [
                {
                  name: "Elden Ring",
                  requirements: "Reach any ending",
                  credits: 5,
                },
              ],
            },
            {
              code: "GAM 4040",
              title: "Modern Open World Design",
              credits: 5,
              games: [
                {
                  name: "Ghost of Tsushima",
                  requirements: "Complete all acts",
                  credits: 5,
                },
                {
                  name: "Horizon Zero Dawn",
                  requirements: "Complete the main story",
                  credits: 5,
                },
              ],
            },
            {
              code: "GAM 4050",
              title: "2D Exploration & Sandbox",
              credits: 4,
              games: [
                {
                  name: "Terraria",
                  requirements: "Complete the main story",
                  credits: 4,
                },
              ],
            },
          ],
        },
        {
          section: "SYSTEMS / STRATEGY",
          courses: [
            {
              code: "GAM 4110",
              title: "Automation Systems",
              credits: 4,
              games: [
                {
                  name: "Factorio",
                  requirements: "Launch a rocket",
                  credits: 4,
                },
              ],
            },
            {
              code: "GAM 4120",
              title: "Grand Strategy",
              credits: 4,
              games: [
                {
                  name: "Civilization VI",
                  requirements: "Achieve any victory condition",
                  credits: 4,
                },
              ],
            },
            {
              code: "GAM 4130",
              title: "Tactical Systems",
              credits: 4,
              games: [
                {
                  name: "Into the Breach",
                  requirements: "Complete all island campaigns",
                  credits: 4,
                },
              ],
            },
            {
              code: "GAM 4140",
              title: "Competitive Systems",
              credits: 4,
              games: [
                {
                  name: "StarCraft II",
                  requirements: "Complete the campaign",
                  credits: 4,
                },
                {
                  name: "Dota 2",
                  requirements: "Win 10 ranked matches",
                  credits: 4,
                },
              ],
            },
          ],
        },
        {
          section: "NARRATIVE / RPG",
          courses: [
            {
              code: "GAM 4210",
              title: "Narrative Systems",
              credits: 4,
              games: [
                {
                  name: "Persona 5 Royal",
                  requirements: "Complete the main story",
                  credits: 4,
                },
              ],
            },
            {
              code: "GAM 4220",
              title: "Systems-Driven Roleplaying",
              credits: 4,
              games: [
                {
                  name: "Baldur's Gate 3",
                  requirements: "Complete the main story",
                  credits: 4,
                },
              ],
            },
            {
              code: "GAM 4230",
              title: "Cinematic Narrative",
              credits: 4,
              games: [
                {
                  name: "The Last of Us",
                  requirements: "Complete the game",
                  credits: 4,
                },
              ],
            },
            {
              code: "GAM 4240",
              title: "Knowledge-Based Progression",
              credits: 4,
              games: [
                {
                  name: "Outer Wilds",
                  requirements: "Reach the Eye of the Universe",
                  credits: 4,
                },
              ],
            },
          ],
        },
        {
          section: "HORROR / TENSION STUDIES",
          courses: [
            {
              code: "GAM 4310",
              title: "Action-Horror Design",
              credits: 4,
              games: [
                {
                  name: "Resident Evil 4",
                  requirements: "Complete the campaign",
                  credits: 4,
                },
              ],
            },
            {
              code: "GAM 4315",
              title: "Psychological Horror",
              credits: 4,
              games: [
                {
                  name: "Silent Hill 2",
                  requirements: "Reach any ending",
                  credits: 4,
                },
              ],
            },
            {
              code: "GAM 4320",
              title: "Atmosphere and Pressure",
              credits: 4,
              games: [
                {
                  name: "Dead Space",
                  requirements: "Complete all chapters",
                  credits: 4,
                },
              ],
            },
            {
              code: "GAM 4325",
              title: "Vulnerability Design",
              credits: 4,
              games: [
                {
                  name: "Amnesia: The Dark Descent",
                  requirements: "Escape the castle",
                  credits: 4,
                },
                {
                  name: "Alien Isolation",
                  requirements: "Complete all missions",
                  credits: 4,
                },
              ],
            },
          ],
        },
        {
          section: "MULTIPLAYER / LIVE SERVICE",
          courses: [
            {
              code: "GAM 4410",
              title: "Live Service Design",
              credits: 4,
              games: [
                {
                  name: "Final Fantasy XIV",
                  requirements: "Complete A Realm Reborn main story",
                  credits: 4,
                },
                {
                  name: "Destiny 2",
                  requirements: "Complete the main campaign",
                  credits: 4,
                },
              ],
            },
            {
              code: "GAM 4420",
              title: "Battle Royale Systems",
              credits: 4,
              games: [
                {
                  name: "Fortnite",
                  requirements: "Achieve 10 Victory Royales",
                  credits: 4,
                },
              ],
            },
            {
              code: "GAM 4430",
              title: "Cooperative Systems",
              credits: 4,
              games: [
                {
                  name: "Monster Hunter: World",
                  requirements: "Reach High Rank",
                  credits: 4,
                },
                {
                  name: "Helldivers 2",
                  requirements: "Complete 20 missions",
                  credits: 4,
                },
                {
                  name: "Phasmophobia",
                  requirements: "Complete 15 investigations",
                  credits: 4,
                },
                {
                  name: "Lethal Company",
                  requirements: "Complete 15 expeditions",
                  credits: 4,
                },
                {
                  name: "Left 4 Dead 2",
                  requirements: "Complete all campaigns",
                  credits: 4,
                },
              ],
            },
            {
              code: "GAM 4440",
              title: "Competitive Multiplayer",
              credits: 4,
              games: [
                {
                  name: "Counter-Strike 2",
                  requirements: "Complete 20 competitive matches",
                  credits: 4,
                },
                {
                  name: "Valorant",
                  requirements: "Reach Gold rank",
                  credits: 4,
                },
                {
                  name: "League of Legends",
                  requirements: "Reach Gold rank",
                  credits: 4,
                },
                {
                  name: "Dota 2",
                  requirements: "Reach 3000+ MMR",
                  credits: 4,
                },
                {
                  name: "Team Fortress 2",
                  requirements: "Complete 20 competitive matches",
                  credits: 4,
                },
              ],
            },
            {
              code: "GAM 4450",
              title: "Competitive Sports Games",
              credits: 4,
              games: [
                {
                  name: "Rocket League",
                  requirements: "Reach Diamond rank",
                  credits: 4,
                },
                {
                  name: "Mario Kart 8 Deluxe",
                  requirements: "Complete 20 online races",
                  credits: 4,
                },
                {
                  name: "NBA 2K25",
                  requirements: "Reach Superstar rank in MyCareer",
                  credits: 4,
                },
                {
                  name: "Madden NFL 25",
                  requirements: "Win 10 competitive multiplayer games",
                  credits: 4,
                },
                {
                  name: "EA Sports FC 25",
                  requirements: "Reach Elite Division in Ultimate Team",
                  credits: 4,
                },
                {
                  name: "Gran Turismo Sport",
                  requirements: "Complete 20 online races",
                  credits: 4,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "electives",
      title: "Electives",
      description:
        "Fun and experimental games. Choose 15 credits total from any combination.",
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
                {
                  name: "The Elder Scrolls III: Morrowind",
                  requirements: "Complete the main quest",
                  credits: 3,
                },
                {
                  name: "The Elder Scrolls IV: Oblivion",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "The Elder Scrolls V: Skyrim",
                  requirements: "Defeat Alduin",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5102",
              title: "Choice & Consequence RPGs",
              credits: 3,
              games: [
                {
                  name: "Fallout: New Vegas",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Fallout 4",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Fallout 3",
                  requirements: "Complete the main story",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5110",
              title: "Assassin's Creed Series",
              credits: 3,
              games: [
                {
                  name: "Assassin's Creed II",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Assassin's Creed: Brotherhood",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Assassin's Creed IV: Black Flag",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Assassin's Creed Origins",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Assassin's Creed Odyssey",
                  requirements: "Complete the main story",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5115",
              title: "Final Fantasy Series",
              credits: 3,
              games: [
                {
                  name: "Final Fantasy VII (1997)",
                  requirements: "Defeat Sephiroth",
                  credits: 3,
                },
                {
                  name: "Final Fantasy VIII",
                  requirements: "Defeat Ultimecia",
                  credits: 3,
                },
                {
                  name: "Final Fantasy X",
                  requirements: "Defeat Sin",
                  credits: 3,
                },
                {
                  name: "Final Fantasy XV",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Final Fantasy XIV",
                  requirements: "Complete A Realm Reborn main story",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5120",
              title: "Persona Series",
              credits: 3,
              games: [
                {
                  name: "Persona 3",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Persona 4 Golden",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Persona 5",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Persona 5 Royal",
                  requirements: "Complete the main story",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5121",
              title: "Shin Megami Tensei Series",
              credits: 3,
              games: [
                {
                  name: "Shin Megami Tensei III: Nocturne",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Shin Megami Tensei V",
                  requirements: "Complete the main story",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5122",
              title: "Kingdom Hearts Series",
              credits: 3,
              games: [
                {
                  name: "Kingdom Hearts",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Kingdom Hearts II",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Kingdom Hearts III",
                  requirements: "Complete the main story",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5130",
              title: "Metal Gear Solid Series",
              credits: 3,
              games: [
                {
                  name: "Metal Gear Solid",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Metal Gear Solid 2: Sons of Liberty",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Metal Gear Solid 3: Snake Eater",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Metal Gear Solid 4: Guns of the Patriots",
                  requirements: "Complete all acts",
                  credits: 3,
                },
                {
                  name: "Metal Gear Solid V: The Phantom Pain",
                  requirements: "Complete the main story",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5135",
              title: "Resident Evil Series",
              credits: 3,
              games: [
                {
                  name: "Resident Evil 2 Remake",
                  requirements: "Complete the game",
                  credits: 3,
                },
                {
                  name: "Resident Evil 4",
                  requirements: "Complete the campaign",
                  credits: 3,
                },
                {
                  name: "Resident Evil 5",
                  requirements: "Complete the campaign",
                  credits: 3,
                },
                {
                  name: "Resident Evil 7",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "Resident Evil Village",
                  requirements: "Complete the main story",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5140",
              title: "Monster Hunter Series",
              credits: 3,
              games: [
                {
                  name: "Monster Hunter: Freedom Unite",
                  requirements: "Reach High Rank",
                  credits: 3,
                },
                {
                  name: "Monster Hunter Tri",
                  requirements: "Reach High Rank",
                  credits: 3,
                },
                {
                  name: "Monster Hunter: World",
                  requirements: "Reach High Rank",
                  credits: 3,
                },
                {
                  name: "Monster Hunter World: Iceborne",
                  requirements: "Reach Master Rank",
                  credits: 3,
                },
                {
                  name: "Monster Hunter Rise",
                  requirements: "Reach High Rank",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5155",
              title: "Legend of Zelda Series",
              credits: 3,
              games: [
                {
                  name: "The Legend of Zelda: A Link to the Past",
                  requirements: "Defeat Ganon",
                  credits: 3,
                },
                {
                  name: "The Legend of Zelda: Majora's Mask",
                  requirements: "Defeat Majora",
                  credits: 3,
                },
                {
                  name: "The Legend of Zelda: Wind Waker",
                  requirements: "Defeat Ganondorf",
                  credits: 3,
                },
                {
                  name: "The Legend of Zelda: Twilight Princess",
                  requirements: "Defeat Ganondorf",
                  credits: 3,
                },
                {
                  name: "The Legend of Zelda: Breath of the Wild",
                  requirements: "Defeat Ganon",
                  credits: 3,
                },
                {
                  name: "The Legend of Zelda: Tears of the Kingdom",
                  requirements: "Defeat Ganondorf",
                  credits: 3,
                },
              ],
            },
          ],
        },
        {
          section: "INDIE / MODERN FAVORITES",
          courses: [
            {
              code: "GAM 5200",
              title: "Roguelike Deck Building",
              credits: 3,
              games: [
                {
                  name: "Slay the Spire",
                  requirements: "Reach Ascension Level 10",
                  credits: 3,
                },
                {
                  name: "Inscryption",
                  requirements: "Unlock all endings",
                  credits: 3,
                },
                {
                  name: "Monster Train",
                  requirements: "Reach champion rank",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5205",
              title: "Roguelike Action",
              credits: 3,
              games: [
                {
                  name: "Dead Cells",
                  requirements: "Defeat the final boss",
                  credits: 3,
                },
                {
                  name: "Hades",
                  requirements: "Escape the Underworld",
                  credits: 3,
                },
                {
                  name: "Binding of Isaac",
                  requirements: "Defeat Isaac",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5210",
              title: "Wave Survival",
              credits: 3,
              games: [
                {
                  name: "Risk of Rain 2",
                  requirements: "Defeat Mithrix",
                  credits: 3,
                },
                {
                  name: "Vampire Survivors",
                  requirements: "Survive a 30-minute session",
                  credits: 3,
                },
                {
                  name: "Brotato",
                  requirements: "Reach wave 100",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5215",
              title: "Logic & Deduction Puzzles",
              credits: 3,
              games: [
                {
                  name: "Return of the Obra Dinn",
                  requirements: "Solve the mystery",
                  credits: 3,
                },
                {
                  name: "Tunic",
                  requirements: "Reach the true ending",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5220",
              title: "Cozy & Relaxing Games",
              credits: 3,
              games: [
                {
                  name: "Dave the Diver",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "A Short Hike",
                  requirements: "Climb the mountain",
                  credits: 3,
                },
                {
                  name: "Spiritfarer",
                  requirements: "Complete the game",
                  credits: 3,
                },
                {
                  name: "Unpacking",
                  requirements: "Complete all levels",
                  credits: 3,
                },
                {
                  name: "Stardew Valley",
                  requirements: "Play through 2 full years",
                  credits: 3,
                },
                {
                  name: "Animal Crossing: New Horizons",
                  requirements: "Reach the main ending",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5225",
              title: "Artistic Exploration",
              credits: 3,
              games: [
                {
                  name: "Journey",
                  requirements: "Complete the game",
                  credits: 3,
                },
                {
                  name: "Abzu",
                  requirements: "Explore the ocean depths",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5235",
              title: "Meta & Narrative Games",
              credits: 3,
              games: [
                {
                  name: "The Stanley Parable",
                  requirements: "Experience all major endings",
                  credits: 3,
                },
                {
                  name: "Spec Ops: The Line",
                  requirements: "Complete the main story",
                  credits: 3,
                },
              ],
            },
          ],
        },
        {
          section: "MULTIPLAYER / SOCIAL",
          courses: [
            {
              code: "GAM 5300",
              title: "Social Deduction",
              credits: 3,
              games: [
                {
                  name: "Among Us",
                  requirements: "Play 20+ rounds",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5305",
              title: "Fighting & Party Fighters",
              credits: 3,
              games: [
                {
                  name: "Super Smash Bros. Ultimate",
                  requirements: "Unlock 20 characters",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5320",
              title: "Party Games",
              credits: 3,
              games: [
                {
                  name: "Jackbox Party Pack",
                  requirements: "Host 10+ parties",
                  credits: 3,
                },
                {
                  name: "Mario Party Superstars",
                  requirements: "Play 10+ matches",
                  credits: 3,
                },
                {
                  name: "Overcooked! 2",
                  requirements: "Complete 25+ levels",
                  credits: 3,
                },
                {
                  name: "Keep Talking and Nobody Explodes",
                  requirements: "Defuse 15+ bombs",
                  credits: 3,
                },
                {
                  name: "It Takes Two",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "WarioWare: Move It!",
                  requirements: "Complete story mode",
                  credits: 3,
                },
              ],
            },
          ],
        },
        {
          section: "SIMULATION / SANDBOX",
          courses: [
            {
              code: "GAM 5400",
              title: "Management Simulation",
              credits: 3,
              games: [
                {
                  name: "Cities: Skylines",
                  requirements: "Build a city with 100,000+ population",
                  credits: 3,
                },
                {
                  name: "RimWorld",
                  requirements: "Reach the ending",
                  credits: 3,
                },
                {
                  name: "Two Point Hospital",
                  requirements: "Build 5+ hospitals",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5410",
              title: "Space & Science Simulation",
              credits: 3,
              games: [
                {
                  name: "Kerbal Space Program",
                  requirements: "Land on the Mun",
                  credits: 3,
                },
                {
                  name: "Spaceflight Simulator",
                  requirements: "Reach orbit",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5420",
              title: "Flight Simulation",
              credits: 3,
              games: [
                {
                  name: "Microsoft Flight Simulator",
                  requirements: "Complete 20+ flights",
                  credits: 3,
                },
              ],
            },
          ],
        },
        {
          section: "ACTION / FUN CORE",
          courses: [
            {
              code: "GAM 5500",
              title: "Character Action Combat",
              credits: 3,
              games: [
                {
                  name: "Devil May Cry 5",
                  requirements: "Beat all missions",
                  credits: 3,
                },
                {
                  name: "Bayonetta",
                  requirements: "Complete on Hard difficulty",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5505",
              title: "Fast-Paced Action",
              credits: 3,
              games: [
                {
                  name: "Doom Eternal",
                  requirements: "Beat the game",
                  credits: 3,
                },
                {
                  name: "DOOM (1993)",
                  requirements: "Complete all levels",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5510",
              title: "Campaign-Multiplayer Integration",
              credits: 3,
              games: [
                {
                  name: "Titanfall 2",
                  requirements: "Complete the campaign",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5512",
              title: "Narrative-Driven Shooters",
              credits: 3,
              games: [
                {
                  name: "Half-Life 2",
                  requirements: "Complete the game",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5515",
              title: "Action Adventure",
              credits: 3,
              games: [
                {
                  name: "Spider-Man (Insomniac)",
                  requirements: "Complete all story missions",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5520",
              title: "2D Platformers",
              credits: 3,
              games: [
                {
                  name: "Super Mario Bros. 3",
                  requirements: "Complete all worlds",
                  credits: 3,
                },
                {
                  name: "Super Mario World",
                  requirements: "Defeat Bowser",
                  credits: 3,
                },
              ],
            },
          ],
        },
        {
          section: "PUZZLE / BRAIN GAMES",
          courses: [
            {
              code: "GAM 5600",
              title: "Environmental Puzzles",
              credits: 3,
              games: [
                {
                  name: "The Witness",
                  requirements: "Solve the main puzzles",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5605",
              title: "Advanced Completion",
              credits: 3,
              games: [
                {
                  name: "Baba Is You",
                  requirements: "Complete all bonus levels",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5610",
              title: "Programming Puzzles",
              credits: 3,
              games: [
                {
                  name: "Human Resource Machine",
                  requirements: "Complete all levels",
                  credits: 3,
                },
                {
                  name: "7 Billion Humans",
                  requirements: "Complete all levels",
                  credits: 3,
                },
              ],
            },
          ],
        },
        {
          section: "CHAOS / CULTURE",
          courses: [
            {
              code: "GAM 5700",
              title: "Physics & Mischief Sandbox",
              credits: 3,
              games: [
                {
                  name: "Goat Simulator",
                  requirements: "Unlock all areas",
                  credits: 3,
                },
                {
                  name: "Untitled Goose Game",
                  requirements: "Complete the to-do list",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5710",
              title: "Brutalist Challenge",
              credits: 3,
              games: [
                {
                  name: "Getting Over It with Bennett Foddy",
                  requirements: "Reach the summit",
                  credits: 3,
                },
                {
                  name: "Jump King",
                  requirements: "Reach the top",
                  credits: 3,
                },
                {
                  name: "Pogostuck",
                  requirements: "Reach the end",
                  credits: 3,
                },
                {
                  name: "I Am Bread",
                  requirements: "Complete the story",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5715",
              title: "Hidden Gems",
              credits: 3,
              games: [
                {
                  name: "Disco Elysium",
                  requirements: "Complete the main story",
                  credits: 3,
                },
                {
                  name: "What Remains of Edith Finch",
                  requirements: "Complete the game",
                  credits: 3,
                },
                {
                  name: "Gris",
                  requirements: "Complete the game",
                  credits: 3,
                },
              ],
            },
          ],
        },
        {
          section: "SPEED / MASTERY",
          courses: [
            {
              code: "GAM 5800",
              title: "Speedrunning Studies",
              credits: 3,
              games: [
                {
                  name: "Super Metroid",
                  requirements: "Complete a speedrun in under 2 hours",
                  credits: 3,
                },
                {
                  name: "The Legend of Zelda: Ocarina of Time",
                  requirements: "Complete a speedrun in under 2 hours",
                  credits: 3,
                },
                {
                  name: "Portal",
                  requirements: "Complete a speedrun in under 30 minutes",
                  credits: 3,
                },
                {
                  name: "Super Mario 64",
                  requirements: "Complete a speedrun in under 2.5 hours",
                  credits: 3,
                },
                {
                  name: "Banjo-Kazooie",
                  requirements: "Complete a speedrun in under 2 hours",
                  credits: 3,
                },
                {
                  name: "DOOM (1993)",
                  requirements: "Complete a speedrun in under 45 minutes",
                  credits: 3,
                },
                {
                  name: "Half-Life 2",
                  requirements: "Complete a speedrun in under 3 hours",
                  credits: 3,
                },
                {
                  name: "Celeste",
                  requirements: "Complete any route speedrun in under 1 hour",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 5805",
              title: "Completionism Studies",
              credits: 3,
              games: [
                {
                  name: "Hollow Knight",
                  requirements: "Achieve 100% completion",
                  credits: 3,
                },
                {
                  name: "Celeste",
                  requirements: "Achieve 100% completion",
                  credits: 3,
                },
              ],
            },
          ],
        },
        {
          section: "LANDMARK ALTERNATIVES",
          courses: [
            {
              code: "GAM 4505",
              title: "Nintendo Platforming II",
              credits: 5,
              games: [
                {
                  name: "Super Mario Bros. 3",
                  requirements: "Defeat Bowser",
                  credits: 5,
                },
                {
                  name: "Super Mario World",
                  requirements: "Defeat Bowser",
                  credits: 5,
                },
              ],
            },
            {
              code: "GAM 4510",
              title: "Zelda Landscape Variations",
              credits: 5,
              games: [
                {
                  name: "The Legend of Zelda: Breath of the Wild",
                  requirements: "Defeat Ganon",
                  credits: 5,
                },
                {
                  name: "The Legend of Zelda: Tears of the Kingdom",
                  requirements: "Defeat Ganondorf",
                  credits: 5,
                },
              ],
            },
            {
              code: "GAM 4515",
              title: "First-Person Shooters: The Classics",
              credits: 5,
              games: [
                {
                  name: "Half-Life 2",
                  requirements: "Complete the game",
                  credits: 5,
                },
                {
                  name: "Quake",
                  requirements: "Complete all episodes",
                  credits: 5,
                },
              ],
            },
            {
              code: "GAM 4520",
              title: "PC Strategy Legends",
              credits: 4,
              games: [
                {
                  name: "StarCraft: Brood War",
                  requirements: "Complete all campaigns",
                  credits: 4,
                },
                {
                  name: "The Sims",
                  requirements: "Achieve success in one family",
                  credits: 4,
                },
              ],
            },
            {
              code: "GAM 4525",
              title: "Early RPG Masterpieces",
              credits: 4,
              games: [
                {
                  name: "Chrono Trigger",
                  requirements: "Defeat Lavos",
                  credits: 4,
                },
                {
                  name: "Final Fantasy VI",
                  requirements: "Defeat Kefka",
                  credits: 4,
                },
                {
                  name: "Pokémon Red/Blue",
                  requirements: "Defeat the Champion",
                  credits: 4,
                },
              ],
            },
            {
              code: "GAM 4530",
              title: "Modern RPG Alternatives",
              credits: 5,
              games: [
                {
                  name: "Baldur's Gate 3",
                  requirements: "Complete the main story",
                  credits: 5,
                },
                {
                  name: "The Witcher 3: Wild Hunt",
                  requirements: "Complete the main story",
                  credits: 5,
                },
                {
                  name: "Mass Effect 2",
                  requirements: "Complete the suicide mission",
                  credits: 5,
                },
              ],
            },
            {
              code: "GAM 4535",
              title: "Multiplayer Excellence",
              credits: 3,
              games: [
                {
                  name: "Halo 3",
                  requirements: "Complete the campaign",
                  credits: 3,
                },
                {
                  name: "Super Smash Bros. Ultimate",
                  requirements: "Unlock 20 characters",
                  credits: 3,
                },
              ],
            },
            {
              code: "GAM 4540",
              title: "Prestige Souls-Likes",
              credits: 4,
              games: [
                {
                  name: "Elden Ring",
                  requirements: "Reach any ending",
                  credits: 4,
                },
                {
                  name: "Red Dead Redemption 2",
                  requirements: "Complete the main story",
                  credits: 4,
                },
              ],
            },
            {
              code: "GAM 4545",
              title: "Puzzle & Portal Game Design",
              credits: 4,
              games: [
                {
                  name: "Portal",
                  requirements: "Complete all test chambers",
                  credits: 4,
                },
                {
                  name: "Portal 2",
                  requirements: "Complete all test chambers",
                  credits: 4,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
