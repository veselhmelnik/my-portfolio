import { FaGithub, FaLinkedin, FaTelegram, FaReact, FaNodeJs, FaWhatsapp  } from "react-icons/fa";
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
        count: '3+'
    },
    {
        title: 'Focus Areas',
        count: '2'
    },
    {
        title: 'Production IoT System',
        count: '1'
    },
]

export const WORK_ITEMS = [
    {
        id: 1,
        title: "Project One",
        image: "",
        link: "#",
        area: 'front'
    },
    {
        id: 2,
        title: "Project Two",
        image: "",
        link: "#",
        area: 'front'
    },
    {
        id: 3,
        title: "Project Three",
        image: "",
        link: "#",
        area: 'front'
    },
    {
        id: 4,
        title: "Project Four",
        image: "",
        link: "#",
        area: 'back'
    },
    {
        id: 5,
        title: "Project Four",
        image: "",
        link: "#",
        area: 'back'
    },
    {
        id: 6,
        title: "Project Four",
        image: "",
        link: "#",
        area: 'embedded'
    },
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