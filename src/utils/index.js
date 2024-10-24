import ora from "../assets/images/ora.png";
import chat from "../assets/images/chat.png";
import cast from "../assets/images/cast.png";
import insta from "../assets/images/insta.png";
import tracer from "../assets/images/tracer.png";
import pen from "../assets/images/pen.png";
import ai1 from "../assets/images/AI-1.jpg";
import ai2 from "../assets/images/AI-2.jpg";
import bc1 from "../assets/images/bc-1.jpg";
import bc2 from "../assets/images/bc-2.jpg";
import estate from "../assets/images/full-3.png";

export const headlines = [
    "Hi, I'm Emile Brown.",
    "I'm a Blockchain Developer",
    "I am a Blockchain   developer with experience in various web front-end and back-end languages/frameworks, artificial intelligence and blockchain technologies with 9 years of experience in various SDLC phases including requirements gathering, analysis, implementation, software application maintenance, client/server and web application testing."
];

export const fixedNavItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Contact" }
]

export const fullprojects = [
    {
        title: 'SkyCast',
        image: cast,
        linkGithub: 'https://github.com/bjclayton/SkyCast',
        linkOnline: 'https://sky-cast-taupe.vercel.app/',
        description: 'SkyCast is a web app that provides real-time weather conditions and forecasts for selected cities.',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Weather API']
    },
    {
        title: 'ORA-API',
        image: ora,
        linkOnline: 'https://ora-api-documentation.vercel.app/',
        linkGithub: null,
        description: 'A RESTful API that provides access to a wide range of Bible-related information, including versions, books, verses, and search functionality.',
        techStack: ['JavaScript', 'Express', 'Mongoose']
    },
    {
        title: 'Estate',
        image: estate,
        linkGithub: 'https://github.com/bjclayton/ChatGenius',
        linkOnline: 'https://realadvisor.ch/',
        description: 'A digital platform that provides tools to help evaluate property values, find real estate listings, and access various real estate-related resources.',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Replicate', 'Llama2']
    },
    {
        title: 'History Tracer',
        image: tracer,
        linkGithub: 'https://github.com/bjclayton/History-Tracer',
        linkOnline: null,
        description: 'History Tracer is A desktop application that reads history data from different web browsers and displays it in a table.',
        techStack: ['Java Swing', 'SQLite JDBC']
    }
];

export const aibcprojects = [
    {
        title: 'FlowGPT',
        image: ai1,
        linkOnline: 'https://flowgpt.com/',
        description: 'The AI platform, for free! Get instant answers from characters, resume editor, essay generator, coding wizard',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Weather API']
    },
    {
        title: 'Ayehigh',
        image: ai2,
        linkOnline: 'https://ayehigh.com/',
        description: 'AyeHigh GenAI Solutions Suite for Students. Trending Solutions Resume Suite, Resume Judge, Creators Suite, Image Lab.',
        techStack: ['JavaScript', 'Express', 'Mongoose']
    },
    {
        title: 'Cbet',
        image: bc1,
        linkGithub: 'https://github.com/bjclayton/ChatGenius',
        linkOnline: 'https://cbet.work',
        description: 'A web application that harnesses the power of Large Language Models (LLMs) to facilitate natural and engaging conversations.',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Replicate', 'Llama2']
    },
    {
        title: 'Bloxmoon',
        image: bc2,
        linkGithub: 'https://github.com/bjclayton/History-Tracer',
        linkOnline: 'https://bloxmoon.com/',
        description: 'Leading Roblox Gambling website allowing users to deposit and withdraw Robux and Limiteds. Play Roulette, Crash, Mines and other games.',
        techStack: ['Java Swing', 'SQLite JDBC']
    }
];

export const fullstackSkills = [
    'JavaScript',
    'TypeScript',
    'C#',
    'Python',
    'React',
    'Vue',
    'Svelte',
    'Next.js',
    'ASP.Net',
    'Django',
    'Tailwind',
    'Bootstrap'
];

export const aiBlockchainSkills = [
    'GPT-4',
    'AI Chatbot',
    'Rag',
    'Llama',
    'LlamaIndex',
    'LangChain',
    'Generative AI',
    'Image GEN',
    'Solidity',
    'Web3.js',
    'Web3',
    'Trading Bot',
    'Smart Contract',
    'Ethereum',
    'Solana'

];

export const articles = [
//     {
//         title: "LLaMA CPP and Python: The Easiest Way to Build Your Own ChatGPT",
//         resume: "Today, we hear a lot about large language models (LLMs) like GPT-3, GPT-4, PaLM, Gopher, etc. These models have shown their capacity to solve problems and generate text.",
//         url:
//             "https://medium.com/ai-mind-labs/llama-cpp-and-python-the-easiest-way-to-build-your-own-chatgpt-e473a9847878",
//         image: a1
//     },
//     {
//         title: "How AI can inherit our biases",
//         resume: " In 2014, a prominent example occurred when Amazon developed an AI-based recruiting tool. Designed to streamline resume screening, the algorithm ended up discriminating against women. Why? Because it was trained on a dataset...",
//         url: "https://medium.com/p/e3a367a18104",
//         image: a5
//     },
//     {
//         title: "Google Search vs Local PC Search",
//         resume: "Have you ever experienced the frustration of waiting for your computer to cough up search results while Google effortlessly delivers them in the blink of an eye? 😩 A simple Google search yields results in a mere 0.28 seconds...",
//         url: "https://medium.com/ai-mind-labs/google-search-vs-local-pc-search-902a6291e6ce",
//         image: a4
//     },
//     {
//         title: "The JavaScript Universe: Imperfections and Essential Insights",
//         resume: "In the ever-evolving world of web development, JavaScript reigns supreme. From crafting dynamic, interactive websites to powering complex server-side applications, its versatility knows no bounds.",
//         url:
//             "https://pub.aimind.so/the-javascript-universe-imperfections-and-essential-insights-fc9be3e65af4",
//         image: a2
//     },
];


export const metadata = {
    title: "Emile Brown",
    description: "This portfolio is a collection of my work that showcases my skills and creativity.",
    imageURL: "../assets/images/profile.webp",
    pageUrl: "https://www.johnclaytonblanc.com"
};
