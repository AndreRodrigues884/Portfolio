import background_project2 from '../assets/img/project2.png'
import background_project1 from '../assets/img/project6.png'
import habtrackerVideo from '../assets/video/Habtracker.mp4'
import cvbuilderVideo from '../assets/video/CVBuilder.mp4'
import cvbuilder_img from '../assets/img/cvbuilder_img.png'
import learnlyVideo from '../assets/video/video_learnly.mp4'
import learnly_img from '../assets/img/background_learnly.svg'
import saldo_img from '../assets/img/saldo1.png'
import saldoInvoices from '../assets/img/saldo2.png'
import saldoExpenses from '../assets/img/saldo3.png'
import saldoVideo from '../assets/video/saldo.mp4'
import dataStructures_img from '../assets/img/code1.png'
import dataStructuresVideo from '../assets/video/code.mp4'

import reactNativeIcon from '../assets/img/react.png'
import expressIcon from '../assets/img/express.png'
import nodeIcon from '../assets/img/node.jpg'
import mongoIcon from '../assets/img/mongo.png'
import typescriptIcon from '../assets/img/typescript.svg'
import javascriptIcon from '../assets/img/js.svg'
import nextjsIcon from '../assets/img/nextjsIcon.svg'
import tailwindIcon from '../assets/img/tailwind.svg'
import supabaseIcon from '../assets/img/supabaseIcon.svg'
import vercelIcon from '../assets/img/vercel.svg'
import groqIcon from '../assets/img/groq.svg'
import mistralIcon from '../assets/img/mistral.svg'
import nuxtIcon from '../assets/img/nuxtIcon.svg'
import vueIcon from '../assets/img/vue.svg'
import dockerIcon from '../assets/img/docker.svg'
import directusIcon from '../assets/img/directus.png'
import langflowIcon from '../assets/img/langflow.png'
import qdrantIcon from '../assets/img/qdrant.png'
import groqLogo from '../assets/img/groq.png'
import ollamaIcon from '../assets/img/ollama.png'
import dexieIcon from '../assets/img/dexie.png'
import vitestIcon from '../assets/img/vitest.png'
import * as saldoMap from './saldoArchitecture.js'
import * as learnlyMap from './learnlyArchitecture.js'
import * as cvbuilderMap from './cvbuilderArchitecture.js'
import postgreIcon from '../assets/img/postgre.svg'
import pythonIcon from '../assets/img/python.svg'
import viteIcon from '../assets/img/vite.svg'

// Order matters: the first three are featured on the home page
export const projects = [
  {
    id: 4,
    slug: 'learnly',
    title: 'Learnly',
    subtitle: 'AI Micro-Learning Platform',
    summary: 'An AI micro-learning platform that turns PDFs into flashcards through a RAG pipeline and schedules reviews with spaced repetition (SM-2). Built during my curricular internship at CIP/IPP.',
    tags: ['Nuxt 3', 'TypeScript', 'Directus', 'Qdrant', 'Langflow', 'Groq'],
    externalLink: 'https://github.com/AndreRodrigues884/Learnly',
    externalType: 'github',
    link: '/projects/4',
    image: learnly_img,
    imageFit: 'contain',
    background_image: learnlyVideo,
    description: `
  <p><strong>Learnly</strong> is an AI-powered micro-learning platform focused on long-term memory retention. It generates study material automatically from PDFs and organizes review sessions with spaced repetition.</p>
  <br>
  <p>Developed during my curricular internship at the <strong>Centre for Pedagogical Innovation of the Polytechnic Institute of Porto (CIP/IPP)</strong>.</p>
  <br>
  <p><strong>The problem</strong></p>
  <p>Students spend hours turning slides, PDFs and notes into something they can actually review. Learnly automates that process: it extracts the content from PDFs, generates flashcards with AI and schedules reviews with SM-2, a scientifically validated spaced repetition algorithm.</p>
  <br>
  <p><strong>Main features include:</strong></p>
  <ul>
    <li> - <strong>Automatic content extraction</strong> from PDF files.</li>
    <li> - <strong>RAG-generated flashcards</strong>, approved by a teacher before they are published.</li>
    <li> - <strong>Spaced repetition</strong> based on the SM-2 algorithm.</li>
    <li> - <strong>Offline-first PWA</strong>: Dexie.js (IndexedDB) stores data locally and a <code>useOfflineSync</code> composable syncs it with the server when the connection returns.</li>
    <li> - <strong>Gamification</strong> with streaks to encourage consistent study.</li>
    <li> - <strong>Role-based access control (RBAC)</strong> through Directus.</li>
  </ul>
  <br>
`,
    architectureMap: {
      data: learnlyMap,
      title: 'How Learnly works, end to end',
      intro: "From a PDF uploaded by a teacher to a flashcard on a student's phone. Click any box for its role and real code, or pick a scenario and follow it step by step.",
    },
    decisions: [
      {
        title: 'Deck isolation with parent_id',
        text: 'During development, flashcard generation could mix content from different decks. I fixed it by filtering retrieval by parent_id in the Langflow webhooks.',
      },
      {
        title: 'Local LLMs with a cloud fallback',
        text: 'Ollama runs local models for offline or private generation, with Groq (llama-3.3-70b-versatile) as the production fallback.',
      },
      {
        title: 'Custom PDF extraction',
        text: 'I built a custom Directus extension with unpdf after testing and discarding alternatives with lower extraction fidelity.',
      },
      {
        title: 'Offline-first by design',
        text: 'Dexie.js keeps the app usable without a connection, and the useOfflineSync composable reconciles local and server state when it comes back.',
      },
    ],
    technologies: [
      { name: 'Nuxt 3', icon: nuxtIcon },
      { name: 'Vue.js', icon: vueIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'Directus', icon: directusIcon },
      { name: 'Langflow', icon: langflowIcon },
      { name: 'Qdrant', icon: qdrantIcon },
      { name: 'nomic-embed-text' },
      { name: 'Groq API', icon: groqLogo },
      { name: 'Ollama', icon: ollamaIcon },
      { name: 'Dexie.js', icon: dexieIcon },
      { name: 'Vitest', icon: vitestIcon },
      { name: 'Docker', icon: dockerIcon },
    ]
  },
  {
    id: 5,
    slug: 'saldo',
    title: 'Saldo',
    subtitle: 'Invoicing & Expense Management',
    summary: 'An invoicing and expense management system for small businesses, with a Spring Boot API, an Angular frontend and PostgreSQL. The whole system starts with a single Docker command.',
    tags: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
    externalLink: 'https://github.com/AndreRodrigues884/faturacao',
    externalType: 'github',
    link: '/projects/5',
    image: saldo_img,
    background_image: saldoVideo,
    description: `
  <p><strong>Saldo</strong> is an invoicing and expense management system built for a service company with 5 to 20 people that wants to track what it bills and what it spends in one place, and see month by month whether it is making money.</p>
  <br>
  <p>It follows Portuguese invoicing rules (VAT per rate, invoice series, gapless sequential numbering). It is a <strong>demo project</strong>: it is not certified by the Portuguese Tax Authority (AT) and must not be used for real invoicing.</p>
  <br>
  <p><strong>Main features include:</strong></p>
  <ul>
    <li> - <strong>Invoices:</strong> drafts with dynamic lines, issuing with a sequential number per series and year (<code>FT 2026/0001</code>), payment, cancellation with a reason and overdue detection.</li>
    <li> - <strong>Expenses:</strong> recorded from the supplier's document, by category and payment method, with supplier VAT number validation.</li>
    <li> - <strong>Catalogue:</strong> clients with Portuguese VAT number check-digit validation, products and services with VAT rates (23%, 13%, 6%) and categories.</li>
    <li> - <strong>Dashboard:</strong> yearly revenue, expenses and result, receivables, a monthly chart, expenses by category and the most overdue invoices.</li>
    <li> - <strong>Users:</strong> JWT authentication, Admin and User roles, account management, password change and reset.</li>
  </ul>
  <br>
`,
    gallery: [
      { src: saldoInvoices, alt: 'Saldo invoices list with filters and status' },
      { src: saldoExpenses, alt: 'Saldo expenses list with categories and deductible VAT' },
    ],
    architectureMap: {
      data: saldoMap,
      title: 'How Saldo works, end to end',
      intro: 'Two applications that only meet over HTTP. Angular runs in the browser and owns the screen. Spring Boot runs on the server, owns the rules, and is the only thing that talks to PostgreSQL. Click any box for its role and real code, or pick a request and follow its journey step by step.',
    },
    decisionsTitle: 'Technical highlights',
    decisions: [
      {
        title: 'Gapless numbering under concurrency',
        text: 'Two simultaneous issue requests never get the same number, and a failed issue never leaves a gap. Proven by an integration test that fires 20 simultaneous issue requests against a real PostgreSQL database.',
      },
      {
        title: 'Money handled with care',
        text: 'BigDecimal and NUMERIC(12,2) across the backend with explicit HALF_UP rounding, VAT calculated per line as in real documents, and integer cents for the totals preview in the frontend to avoid floating-point errors.',
      },
      {
        title: 'Rich domain model',
        text: 'An issued invoice cannot be changed or deleted, regardless of where the request comes from, because the rule lives in the entity and not in the controller.',
      },
      {
        title: 'Layered security',
        text: 'BCrypt password hashing, secrets in environment variables, admin-only rules centralised in the SecurityFilterChain, and one login error message so the API never reveals which accounts exist.',
      },
      {
        title: 'Performance and integrity',
        text: 'Pagination with a maximum page size, sorting restricted to an allow-list, open-in-view disabled, and aggregations computed by the database with indexes on the queried columns.',
      },
      {
        title: 'Tested against real infrastructure',
        text: 'JUnit 5, AssertJ, MockMvc and Spring Security Test, with Testcontainers running the integration tests against a real PostgreSQL database.',
      },
    ],
    technologies: [
      { name: 'Java 21' },
      { name: 'Spring Boot 4' },
      { name: 'Spring Security' },
      { name: 'Hibernate 7' },
      { name: 'Angular 22' },
      { name: 'Angular Material' },
      { name: 'RxJS' },
      { name: 'Chart.js' },
      { name: 'PostgreSQL 17', icon: postgreIcon },
      { name: 'Flyway' },
      { name: 'JUnit 5' },
      { name: 'Testcontainers' },
      { name: 'Docker', icon: dockerIcon },
      { name: 'nginx' },
    ]
  },
  {
    id: 3,
    slug: 'cv_builder',
    title: 'CV Builder',
    subtitle: 'AI-Powered Resume Generator',
    summary: 'A full-stack AI platform that helps users create professional resumes, optimize for ATS, match job descriptions, and prepare for interviews.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Groq API', 'Vercel'],
    externalLink: 'https://github.com/AndreRodrigues884/cvbuilder',
    externalType: 'github',
    demoLink: 'https://cvbuilder-ten-lime.vercel.app/',
    link: '/projects/3',
    image: cvbuilder_img,
    background_image: cvbuilderVideo,
    description: `
  <p><strong>CVBuilder</strong> is a full-stack AI-powered platform designed to help people throughout the entire job search process — from creating and optimizing CVs to preparing for interviews and planning career growth.</p>
  <br>
  <p>The platform integrates several key technologies across the stack:</p>
  <ul>
    <li> - <strong>Frontend:</strong> Built with Next.js 15, TypeScript and Tailwind CSS, offering a responsive and modern experience across desktop and mobile.</li>
    <li> - <strong>Backend:</strong> Next.js API Routes with Supabase (PostgreSQL) for data management and authentication.</li>
    <li> - <strong>AI Integration:</strong> Groq API (LLaMA 3.3 70B) for analysis and generation, Mistral OCR for PDF text extraction.</li>
  </ul>
  <br>
  <p><strong>Main features include:</strong></p>
  <ul>
    <li> - <strong>CV Builder:</strong> Step-by-step wizard to create professional CVs with PDF export.</li>
    <li> - <strong>AI Review:</strong> Instant ATS score, keyword analysis, strengths, weaknesses and improvement suggestions.</li>
    <li> - <strong>Job Match:</strong> Adapts the CV to a specific job description using AI — without fabricating information.</li>
    <li> - <strong>Career Copilot:</strong> Personalized career plan with skills to learn, certifications and action phases.</li>
    <li> - <strong>Interview Prep:</strong> AI-generated interview questions for specific roles with per-answer feedback and scoring.</li>
    <li> - <strong>Application Tracker:</strong> Track all job applications and manage their status in one place.</li>
  </ul>
  <br>
  <p>The goal of CVBuilder is to be the all-in-one assistant for job seekers — helping them stand out, prepare confidently, and land their next role.</p>
  <br>
`,
    architectureMap: {
      data: cvbuilderMap,
      title: 'How CV Builder works, end to end',
      intro: "Follow an AI Review from a PDF upload to the result on screen: authentication, rate limiting, OCR, a hash-based cache and the LLM call. Click any box for its role and real code.",
    },
    technologies: [
      { name: 'Next Js', icon: nextjsIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'Tailwind CSS', icon: tailwindIcon },
      { name: 'Supabase', icon: supabaseIcon },
      { name: 'Groq API', icon: groqIcon },
      { name: 'Mistral OCR', icon: mistralIcon },
      { name: 'Zustand' },
      { name: 'Puppeteer' },
      { name: 'Vercel', icon: vercelIcon },
    ]
  },
  {
    id: 1,
    slug: 'treker',
    title: 'Treker',
    subtitle: 'FullStack Fitness App',
    summary: 'Treker is a full-stack training tracker that lets autonomous athletes log and visualize their progress across gym, swimming, and running from one app.',
    tags: ['NextJS', 'Typescript', 'Supabase', 'Tailwind CSS'],
    demoLink: 'https://treker-beta.vercel.app/',
    image: background_project1,
    background_image: background_project1,
    link: '/projects/1',
    description: `
      <p><strong>TREKER</strong> is a multi-sport training tracker built for autonomous athletes who train across gym, swimming, and running without a coach dictating every session. It logs workouts and swim times, turns them into progress charts, and detects real personal records and milestones as they happen.</p>
      <br>
      <p>The app offers features such as:</p>
      <ul>
        <li> - Progress Tracking with charts for volume, estimated 1RM, and swim times per event.</li>
        <li> - Personal Records & Achievements, detected automatically the moment they happen.</li>
        <li> - Goal-Based Projections for swimming, estimating when you'll hit a target time from your own pace trend.</li>
        <li> - Bodyweight Tracking with daily logging and progress history.</li>
        <li> - Statistics Dashboard covering Total Strength, Deload Analysis, and Volume per Muscle Group.</li>
        <li> - Google Sign-In alongside email/password authentication.</li>
      </ul>
    <br>
    `,
    technologies: [
      { name: 'Next.js', icon: nextjsIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'Supabase', icon: supabaseIcon },
      { name: 'Tailwind CSS', icon: tailwindIcon },
      { name: 'Vercel', icon: vercelIcon },
    ]

  },
  {
    id: 6,
    slug: 'data_structures',
    title: 'Data Structures',
    subtitle: 'Interactive Visualizer',
    summary: 'An interactive platform to see, understand and play with 14 fundamental data structures, each with an explanation, a diagram, a step-by-step animation and a tested reference implementation.',
    tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vitest'],
    demoLink: 'https://data-structures-tau.vercel.app/',
    externalType: 'github',
    externalLink: 'https://github.com/AndreRodrigues884/data-structures',
    link: '/projects/6',
    image: dataStructures_img,
    background_image: dataStructuresVideo,
    description: `
  <p><strong>Data Structures</strong> is an interactive platform to see, understand and play with 14 fundamental data structures. The interface is in Portuguese.</p>
  <br>
  <p><strong>Every structure has four views:</strong></p>
  <ul>
    <li> - <strong>Explanation:</strong> how it works, when to use it and the time complexity of each operation.</li>
    <li> - <strong>Diagram:</strong> a static visual of the internal layout.</li>
    <li> - <strong>Animation:</strong> an interactive playground to run operations and watch each step.</li>
    <li> - <strong>Code:</strong> the tested TypeScript implementation, its unit tests and a Python version.</li>
  </ul>
  <br>
  <p><strong>Structures covered:</strong></p>
  <ul>
    <li> - <strong>Linear:</strong> Array, Linked List, Stack, Queue, Deque.</li>
    <li> - <strong>Hashing:</strong> HashMap, Bloom Filter.</li>
    <li> - <strong>Trees:</strong> Tree, Binary Search Tree, Heap (min / max), Trie.</li>
    <li> - <strong>Graphs & Sets:</strong> Graph, Disjoint Set (Union-Find).</li>
    <li> - <strong>Composite:</strong> LRU Cache.</li>
  </ul>
  <br>
`,
    decisionsTitle: 'Technical highlights',
    decisions: [
      {
        title: 'What you read is what is tested',
        text: 'The Code tab renders the real source files (TypeScript, tests and Python) with highlight.js, so the code on screen is exactly the code under test.',
      },
      {
        title: 'Animations without libraries',
        text: 'Every animation is built with plain SVG and reactive state, without any animation library.',
      },
      {
        title: 'Tested in two languages',
        text: 'Vitest unit tests cover every data structure, and the Python versions are checked in CI through assert-based examples.',
      },
      {
        title: 'One chunk per structure',
        text: 'Vue Router lazy-loads each structure as its own chunk, so visitors only download the structure they open.',
      },
    ],
    technologies: [
      { name: 'Vue 3', icon: vueIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'Vite', icon: viteIcon },
      { name: 'Tailwind CSS 4', icon: tailwindIcon },
      { name: 'Vue Router' },
      { name: 'highlight.js' },
      { name: 'Vitest', icon: vitestIcon },
      { name: 'Python', icon: pythonIcon },
      { name: 'Vercel', icon: vercelIcon },
    ]
  },
  {
    id: 2,
    slug: 'habtracker',
    title: 'HabTracker',
    subtitle: 'Gamified Habit Tracking App',
    summary: 'A mobile app that helps users build and maintain consistent habits through gamification, XP, streaks, and achievement badges.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'TypeScript'],
    externalLink: 'https://github.com/AndreRodrigues884/Habtracker',
    externalType: 'github',
    link: '/projects/2',
    image: background_project2,
    background_image: habtrackerVideo,
    description: `
  <p><strong>HabTracker</strong> is a mobile application designed to help users build and maintain consistent habits through gamification. Users can create recurring habits, mark them as completed, and track their progress over time.</p>
  <br>
  <p>The app offers features such as:</p>
  <ul>
    <li> - <strong>Habit creation</strong> with customizable frequency (daily, weekly, etc.) and optional end dates.</li>
    <li> - <strong>Streak tracking</strong> to visualize consistency for each habit.</li>
    <li> - <strong>Experience points (XP)</strong> and level system to reward progress and motivate users.</li>
    <li> - <strong>Achievements and badges unlocked</strong> when specific milestones are reached (e.g., completing a habit 3 days in a row).</li>
    <li> - <strong>User profile with statistics</strong>, achievements overview, and XP/level display.</li>
    <li> - <strong>Calendar view</strong> to monitor habits over time and plan ahead.</li>
    <li> - <strong>Notifications and visual feedback</strong> for completed habits, level-ups, and unlocked achievements.</li>
  </ul>
  <br>
`,
    technologies: [
      { name: 'React', icon: reactNativeIcon },
      { name: 'Express', icon: expressIcon },
      { name: 'Node', icon: nodeIcon },
      { name: 'Mongo', icon: mongoIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'JavaScript', icon: javascriptIcon },
    ]
  },
]
