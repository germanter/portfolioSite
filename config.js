// config.js
const portfolioData = {
    profile: {
        name: "Hüseyn Məmmədzadə",
        title: "Data Analyst & Systems Developer",
        avatar: "assets/avatar.jpeg", // Replace with your image name, e.g., "profile.jpg"
        about: "I am a developer who focuses on building fast, durable, and zero-cost architectures. I don't just write code; I design pipelines. Whether it's setting up automated data scrapers, building client-side apps, or optimizing memory in game engines, I believe in the philosophy of keeping systems simple, robust, and maintenance-free. If there isn't a good tool for a problem, I build it myself.",
        links: [
            { label: "GitHub", url: "https://github.com/" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/huseyn-mammadzada-806046394/" },
            { label: "Email", url: "mailto:huseynmemmedzade416@gmail.com" }
        ]
    },
skills: [
        { 
            category: "Languages", 
            items: "Python, JavaScript, C#, SQL, HTML/CSS",
            icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            ]
        },
        { 
            category: "Backend & APIs", 
            items: "FastAPI, Flask, Node.js, HTTPX, Fetch API",
            icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
            ]
        },
        { 
            category: "Data & Analytics", 
            items: "PowerBI, Pandas, MySQL, Excel",
            icons: [
                "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
                "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg"
            ]
        },
        { 
            category: "Tools & Architecture", 
            items: "GitHub Actions, Playwright, Object Pooling, REST APIs",
            icons: [
                "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
            ]
        }
    ],

    projects: [
        {
            title: "1. API-Engine: Zero-Cost Automated API Directory",
            subtitle: "A fully automated, self-updating API directory built to solve the problem of outdated, deprecated open-source API lists.",
            links: [
                { label: "Live Demo", url: "https://api-engine.vercel.app" },
                { label: "GitHub Repo", url: "https://github.com/germanter/apiEngine" }
            ],
            paragraphs: [],
            bullets: [
                "**The Architecture:** Split into three decoupled repositories to ensure zero downtime and zero hosting costs.",
                "**The Pipeline (Backend):** Built a custom ETL (Extract, Transform, Load) pipeline using **Python, HTTPX, and Playwright**. It scrapes 150+ modern AI and development APIs, tests their endpoints asynchronously for live/dead status, and cleans the data.",
                "**Automation:** Wrapped the entire Python scraping and validation script into a `runner.py` executed via **GitHub Actions** cron jobs, ensuring the data is always fresh.",
                "**Data Optimization:** Wrote a compression script to reduce the raw JSON payload size from 60kb to 20kb (`apiCmp.json`) for lightning-fast client requests.",
                "**The Frontend:** Built a purely client-side, highly responsive UI using Vanilla JS, HTML, and CSS. Implemented a custom fuzzy-logic search engine to make filtering instant."
            ],
            images: [
                "assets/apiEngine.png",
            ]
        },
        {
            title: "2. API-Engine Data Dashboard (PowerBI)",
            subtitle: "",
            links: [
                { label: "GitHub Repo", url: "https://github.com/germanter/dataAnalaystProjects/blob/main/README(apiEngineDashboard).md" }
            ],
            paragraphs: [],
            bullets: [
                "**The Goal:** Visualize the real-time health of the API-Engine database.",
                "**The Execution:** Connected **PowerBI** directly to the live, raw `api.json` web endpoint. Built a clean, automated dashboard that dynamically visualizes data status, alive/dead ratios, and categorizations without manual data entry."
            ],
            images: [
              "https://github.com/germanter/dataAnalaystProjects/blob/main/assets/img2X.jpg?raw=true"
            ]
        },
        {
            title: "3. Dumbux.com: Client-Side Gaming Hub",
            subtitle: "",
            links: [
                { label: "Live App", url: "https://dumbux.com" },
                { label: "GitHub Repo", url: "https://github.com/germanter/sandboxSite" }
            ],
            paragraphs: [],
            bullets: [
                "**The Goal:** Build and deploy a production-ready, interactive web application.",
                "**The Execution:** Developed a responsive hub for HTML5-based games using **JavaScript, HTML, CSS, and Tailwind**. Handled DOM manipulation, state management for client-side gaming, and deployed it on a custom domain. Optimized for both desktop and mobile layouts."
            ],
            images: [
              "assets/dumbux.jpg",
              "https://i.postimg.cc/dts1cT0S/shoot-The-Orbs2d.webp",
              "https://i.postimg.cc/9QSF98Y1/crazy-Drone.webp"
            ]
        },
        {
            title: "4. Isometric 2D Runner Game (Unity)",
            subtitle: "",
            links: [
                { label: "Showcase Repo", url: "https://github.com/germanter/unityRunner2d" }
            ],
            paragraphs: [],
            bullets: [
                "**The Goal:** Build a 2D game that simulates an isometric 3D environment while maintaining high frame rates.",
                "**The Execution:** Developed in **Unity and C#**. Focused heavily on system performance and memory management by engineering **Object Pooling** and **First-In-First-Out (FIFO)** queue systems to prevent memory leaks during continuous asset generation."
            ],
            images: [
              "https://github.com/germanter/unityRunner2d/blob/main/assets/road1.jpg?raw=true",
              "https://github.com/germanter/unityRunner2d/blob/main/assets/road2.jpg?raw=true"
            ]
        }
    ],
    lab: [
        {
            title: "Radar & Flight Simulation",
            subtitle: "Physics/Flight Simulation System",
            links: [
              {label:"Github Repo" ,url:"https://github.com/germanter/python-radar-simulation"}
            ],
            paragraphs: [],
            bullets: [
                "Engineered a simulation handling complex state logic for military radar tracking, missile trajectories, and fighter jet interactions."
            ],
            images: [
              "https://github.com/germanter/python-radar-simulation/blob/main/preview2D.png?raw=true",
              "https://github.com/germanter/python-radar-simulation/blob/main/preview3D.png?raw=true"
            ] // Put your screenshots or GIF paths here!
        },
        {
            title: "Student-Tools Web App",
            subtitle: "",
            links: [],
            paragraphs: [],
            bullets: [
                "A client-side utility suite for university students (PDF converters, math tools). Integrated **Groq API** for AI functionality, mapping out the architecture for a Backend-For-Frontend (BFF) to securely handle API keys."
            ],
            images: [
              "assets/cosmix.png"
            ]
        },
        {
            title: "Cross-Platform Micro-Chat",
            subtitle: "",
            links: [],
            paragraphs: [],
            bullets: [
                "Built an experimental chat pipeline connecting a native **Kotlin** Android app and a **Swift** iOS app, routed through a custom **Node.js** backend."
            ],
            images: [
              "https://i.postimg.cc/kgTkRyhx/chat2.png"
            ]
        }
    ]
};