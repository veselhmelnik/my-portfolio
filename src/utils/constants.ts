import { FaGithub, FaLinkedin, FaTelegram, FaReact, FaNodeJs, FaWhatsapp } from "react-icons/fa";
import { BsStack, BsTypescript } from "react-icons/bs";
import { FaMicrochip } from "react-icons/fa6";
import { TbApi, TbHexagonLetterEFilled } from "react-icons/tb";
import { IoExtensionPuzzleSharp, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux, SiTailwindcss, SiAntdesign, SiMongodb, SiVercel, SiRender } from "react-icons/si";
import { LiaMicrochipSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";

export const LINKS = {
    main: '/',
    portfolio: '/portfolio',
    contacts: '/contacts'
}

export const CONTACT_ITEMS = [
    {
        name: 'Email',
        contact: 'nikitadomitrak@gmail.com',
        icon: MdEmail
    },
    {
        name: 'WhatsApp',
        contact: '+380671352816',
        icon: FaWhatsapp
    },
    {
        name: 'Telegram',
        contact: 'https://t.me/nikita_hmelnik',
        icon: FaTelegram
    },
    {
        name: 'Linkedin',
        contact: 'https://www.linkedin.com/in/nikitadomitrak/',
        icon: FaLinkedin
    },
]
export const MENU_ITEMS = [
    {
        name: 'Home',
        link: LINKS.main
    },
    {
        name: 'Portfolio',
        link: LINKS.portfolio
    },
    {
        name: 'Contacts',
        link: LINKS.contacts
    }
]

export const SOCIAL_ITEMS = [
    {
        name: 'GitHub',
        icon: FaGithub,
        link: 'https://github.com/veselhmelnik'
    },
    {
        name: 'Linkedin',
        icon: FaLinkedin,
        link: 'https://www.linkedin.com/in/nikita-domitrak-013561424/'
    },
    {
        name: 'Telegram',
        icon: FaTelegram,
        link: 'https://t.me/nikita_hmelnik'
    },
]

export const ABOUT_ITEMS = [
    {
        title: 'Real-World Projects',
        count: '6+'
    },
    {
        title: 'Focus Areas',
        count: '3'
    },
    {
        title: 'Production IoT System',
        count: '1'
    },
]

export const WORK_ITEMS = [
    {
        id: 6,
        area: 'front',
        slug: 'personnel-management-system',
        title: 'Personnel Management System',

        frontend:
            'React 18, TypeScript, Material UI, Redux Toolkit, Redux Saga, Dnd Kit, React Router, Axios',
        backend: '',
        embedded: '',

        demo: '',
        github: '',
        githubBack: '',

        description:
            'Interactive monitoring and layout editor developed as part of a private personnel management platform. The module allows users to build and organize complex monitoring boards using drag-and-drop interactions.',

        challenge:
            'The main challenge was implementing a flexible grid-based editor where multiple types of elements could be created, moved, grouped and rearranged while preventing invalid placements and preserving complex relationships between layout entities.',

        solution:
            'I developed the Monitor module using React, TypeScript and Dnd Kit. I implemented custom drag-and-drop behavior, grid placement calculations, collision validation, drop previews, grouped element movement and dynamic layout updates. The module also supports connected position groups, counters, expandable elements and automatic layout adjustments when content changes.',

        privateProject: true,

        hasImages: true,
        images: [
            '/projects/personnel-management/preview.png',
        ],
    },
    {
        id: 1,
        area: 'front',
        slug: "radio-initiators-system",
        title: "Radio Initiators Control System",

        frontend: "Next.js, Leaflet, Recharts and other",
        backend: "Node.js, Express, MongoDB",
        embedded: "ESP32, MQTT, LoRa",

        demo: "https://demo-init-system-front.vercel.app/",
        githubFront: 'https://github.com/veselhmelnik/demo-init-system-front',
        githubBack: 'https://github.com/veselhmelnik/demo-init-system-back',


        description:
            "Full-stack control and monitoring platform for distributed embedded devices.",

        challenge:
            "The main challenge was reducing latency between the server and remote devices.",

        solution:
            "MQTT replaced HTTP polling and enabled event-driven communication.",
        hasImages: true,
        images: [
            "/projects/radio/radio-preview.png",
            "/projects/radio/radio-dashboard.png",
            "/projects/radio/radio-admin.png",
            "/projects/radio/radio-map.png",
            "/projects/radio/radio-gps.png",
        ],
    },
    {
        id: 2,
        area: 'front',
        slug: 'ammunition-production-management-system',
        title: 'Ammunition Production Management System',

        frontend: 'React 19, TypeScript, Vite, React Router, TanStack Query, React Hook Form, Zod, Tailwind CSS, RSuite UI',
        backend: 'Node.js, Express 5, MongoDB, Mongoose, JOSE (JWT), Google Authentication',
        embedded: '',

        demo: 'https://ammunition-production-management-system.onrender.com/',
        github: 'https://github.com/veselhmelnik/Ammunition-Production-Management-System-demo',
        githubBack: '',

        description:
            'Full-stack web application for managing ammunition production orders, inventory calculations and production planning.',

        challenge:
            'The main challenge was building a flexible system that could automate material calculations, aggregate requirements across multiple orders and support role-based workflows for production management.',

        solution:
            'I designed a modular full-stack system with automatic material calculation, inventory tracking, reporting and production planning tools. The application centralizes production workflows and reduces manual calculation errors.',
        hasImages: true,
        
        images: [
            '/projects/ammunition/ammunition-preview.png',
            '/projects/ammunition/ammunition-table.png',
            '/projects/ammunition/ammunition-admin.png',
            '/projects/ammunition/ammunition-ammo.png',
            '/projects/ammunition/ammunition-calendar.png',
            '/projects/ammunition/ammunition-order.png',
        ],
    },
    
    {
        id: 3,
        area: 'front',
        slug: 'internal-project-automation-platform',
        title: 'Internal Project Automation Platform',

        frontend:
            'React, Vite, React Router, Ant Design, Axios',

        backend:
            'Node.js, Express, pdf-parse',

        embedded: '',

        demo: 'https://pdf-report-helper.onrender.com/',
        github: '',
        githubFront: 'https://github.com/veselhmelnik/Internal-Project-Automation-Platform-frontend',
        githubBack: 'https://github.com/veselhmelnik/Internal-Project-Automation-Platform-backend',

        description:
            'Workflow automation platform that reduced repetitive project verification and document validation tasks for coordinators handling up to 1000 new projects per day.',

        challenge:
            'Project coordinators handled up to 1000 new projects per day and manually checked project ownership and Property Report documents, making the workflow slow and error-prone.',

        solution:
            'I automated both workflows by building batch project assignment processing and a PDF validation engine that detects missing, duplicated and incorrectly named rooms.',
        hasImages: false,
        images: [
            '/projects/automation/preview.png',
            '/projects/automation/assignment-checker.png',
            '/projects/automation/pdf-validation.png',
            '/projects/automation/validation-results.png',
        ],
    },
    {
        id: 4,
        area: 'back',
        slug: 'performance-optimizer-extension',
        title: 'Performance Optimizer Extension',

        frontend:
            'TypeScript, JavaScript, Chrome Extension API, Manifest V3, Declarative Net Request API, Content Scripts',
        backend: '',
        embedded: '',

        demo: 'https://chromewebstore.google.com/detail/request-blocker/jdieknojjmbimgjcjjcbpgphnjhkdlpg?authuser=0&hl=en',
        github: 'https://github.com/veselhmelnik/performance-optimizer-extension',
        githubBack: '',

        description:
            'Chrome Extension developed to optimize the performance of an internal web platform by blocking unnecessary network requests and removing unused interface elements.',

        challenge:
            'The main challenge was improving the performance of a large internal web application that loaded many unnecessary assets and interface sections on every page, slowing down operators during daily work.',

        solution:
            'I built a lightweight Chrome Extension that automatically blocks non-essential requests using Declarative Net Request and removes unnecessary DOM elements with content scripts. This reduced visual clutter, improved page responsiveness, and made the workflow faster without requiring any user configuration.',

        hasImages: true,
        images: [
            '/projects/performance-optimizer/preview.png',
            '/projects/performance-optimizer/1.png',
        ],
    },
    {
        id: 5,
        area: 'back',
        slug: 'operator-productivity-extension',
        title: 'Operator Productivity Extension',

        frontend:
            'React, TypeScript, Material UI, Chrome Extension API, Content Scripts, Background Scripts, Webpack',
        backend: '',
        embedded: '',

        demo: '',
        github: 'https://github.com/veselhmelnik/Operator-Productivity-Extension',
        githubBack: '',

        description:
            'Chrome Extension developed to automate repetitive project tracking tasks by extracting project data from an internal web application and exporting it directly to Google Sheets.',

        challenge:
            'Operators had to manually copy project information, calculate working durations, and update shared Google Sheets for every completed project. This repetitive workflow consumed time and increased the risk of data entry errors.',

        solution:
            'I developed a Chrome Extension that collects project information directly from the webpage, calculates required time metrics, and prepares the data for export to Google Sheets with a single click. The extension uses content scripts, background communication, persistent settings, and a React-based popup interface to automate the entire workflow.',

        hasImages: true,
        images: [
            '/projects/operator-productivity/preview.png',
        ],
    }
];

export const SKILL_ITEMS = [
    {
        id: 1,
        title: 'Frontend',
        icon: FaReact,
        description: 'React, Next.js, TypeScript and responsive interfaces built from designs or existing requirements.'
    },
    {
        id: 2,
        title: 'Backend',
        icon: FaNodeJs,
        description: 'Node.js, Express, REST APIs, MongoDB and server-side application logic.'
    },
    {
        id: 3,
        title: 'Full-Stack',
        icon: BsStack,
        description: 'End-to-end web applications connecting modern frontend interfaces with scalable backend services.'
    },
    {
        id: 4,
        title: 'IoT & Embedded',
        icon: FaMicrochip,
        description: 'ESP32-based devices, MQTT communication, sensor integration and hardware-to-server connectivity.'
    },
    {
        id: 5,
        title: 'API',
        icon: TbApi,
        description: 'REST APIs, third-party services, real-time data exchange and integration between different systems.'
    },
    {
        id: 6,
        title: 'Browser Extensions',
        icon: IoExtensionPuzzleSharp,
        description: 'Chrome extensions and custom automation tools designed to simplify repetitive workflows.'
    },
]

export const CAROUSEL_ITEMS = [
    {
        id: 1,
        skill: 'React',
        icon: FaReact
    },
    {
        id: 2,
        skill: 'Next.js',
        icon: RiNextjsFill
    },
    {
        id: 3,
        skill: 'Node.js',
        icon: FaNodeJs
    },
    {
        id: 4,
        skill: 'TypeScript',
        icon: BsTypescript
    },


    {
        id: 5,
        skill: 'JavaScript',
        icon: IoLogoJavascript
    },
    {
        id: 6,
        skill: 'Express',
        icon: TbHexagonLetterEFilled
    },
    {
        id: 7,
        skill: 'Redux',
        icon: SiRedux
    },
    {
        id: 8,
        skill: 'Tailwind',
        icon: SiTailwindcss
    },
    {
        id: 9,
        skill: 'Ant Design',
        icon: SiAntdesign
    },
    {
        id: 10,
        skill: 'MongoDB',
        icon: SiMongodb
    },
    {
        id: 11,
        skill: 'ESP32',
        icon: LiaMicrochipSolid
    },
    {
        id: 12,
        skill: 'GitHub',
        icon: FaGithub
    },
    {
        id: 13,
        skill: 'Vercel',
        icon: SiVercel
    },
    {
        id: 14,
        skill: 'Render',
        icon: SiRender
    },
]

export const EXPERIENCE_ITEMS = [
    {
        title: 'Background', items: [
            {
                years: '2017 – Present',
                title: 'Self-Directed Software Development',
                description: 'Continuous hands-on learning in JavaScript, TypeScript, React, Node.js, embedded systems and IoT through real-world projects.'
            },
            {
                years: '2020 – Present',
                title: 'Web & Backend Development',
                description: 'Building web applications, APIs, automation tools and integrations using modern JavaScript technologies.'
            },
            {
                years: '2025 – Present',
                title: 'Embedded & IoT Development',
                description: 'Practical development with ESP32, MQTT, networking protocols and hardware-to-server communication.'
            },
        ]
    },
    {
        title: 'Experience', items: [
            {
                years: 'Military Technology Project · 2025 – 2026',
                title: 'Full-Stack & Embedded Developer',
                description: 'Developed full-stack services and embedded solutions connecting microcontrollers with backend systems. Worked with React, Node.js, MQTT and real-time device communication.'
            },
            {
                years: 'InsideMaps Company · 2018 – 2025',
                title: 'Automation & Software Developer',
                description: 'Initiated and developed internal automation tools to reduce repetitive manual work, including web data processing and browser-based solutions.'
            },
            {
                years: '2023 – Present',
                title: 'Independent Software Development',
                description: 'Building personal and freelance-oriented projects in frontend, backend, browser extensions and IoT technologies.'
            },
        ]
    }
]

export const AREA_ARRAY = ['', 'front', 'back', 'embedded']