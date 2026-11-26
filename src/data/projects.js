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
import threejsIcon from '../assets/img/si_threedotjs.svg'
import pitViewer_img from '../assets/img/pit-viewer1.png'
import pitViewerOre from '../assets/img/pit-viewer2.png'
import pitViewerOrtho from '../assets/img/pit-viewer3.png'
import pitViewerMeasure from '../assets/img/pit-viewer4.png'
import pitViewerSelect from '../assets/img/pit-viewer5.png'
import trekerApp_img from '../assets/img/treker-app-cover.jpg'
import trekerAppProfile from '../assets/img/treker-app1.jpeg'
import trekerAppStats from '../assets/img/treker-app2.jpeg'
import trekerAppWorkouts from '../assets/img/treker-app3.jpeg'
import trekerAppToday from '../assets/img/treker-app4.jpeg'
import trekerAppMenu from '../assets/img/treker-app5.jpeg'
import expoIcon from '../assets/img/si_expo.svg'
import reactQueryIcon from '../assets/img/si_reactquery.svg'
import jestIcon from '../assets/img/si_jest.svg'
import githubActionsIcon from '../assets/img/si_githubactions.svg'

// Order of the Projects page (the home page picks its featured projects by slug)
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
    device: { type: 'phone', size: [1440, 2560], status: 'PWA · mobile-first' },
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
    device: { type: 'browser', url: 'localhost:4000', status: 'local demo', size: [1898, 910] },
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
    // the recording includes Chrome's own tab and address bar: cropTop hides it
    device: { type: 'browser', url: 'cvbuilder-ten-lime.vercel.app', status: 'live', size: [1920, 1020], cropTop: 110 },
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
    id: 8,
    slug: 'treker_app',
    title: 'Treker App',
    subtitle: 'React Native Training Log',
    summary: 'Gym and swimming in one training log for self-coached athletes, built with React Native and Expo. Log a session or a swim time, see personal records as they happen and follow your progress in a single history.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'TanStack Query'],
    link: '/projects/8',
    image: trekerApp_img,
    background_image: trekerAppToday,
    device: { type: 'phone', size: [1080, 2400], status: 'React Native · Expo' },
    description: `
  <p><strong>Treker App</strong> is a mobile training log for self-coached athletes, built with React Native and Expo on top of Supabase. Gym and swimming live in one place: log a gym session or a swim time, see records as they happen, and follow your progress across both sports in a single history.</p>
  <br>
  <p><strong>Gym</strong></p>
  <ul>
    <li> - <strong>Sessions from saved workouts</strong>, grouped into folders and reordered by dragging.</li>
    <li> - <strong>Progress on every set:</strong> each exercise is compared with the last time you did it ("4 of 6 exercises progressed").</li>
    <li> - <strong>Records:</strong> a personal record when the estimated one-rep max (1RM) goes up, highlighted as it happens.</li>
    <li> - <strong>Exercise library</strong> of 68 common exercises in English and Portuguese, plus your own.</li>
    <li> - <strong>Safe on bad connections:</strong> the session in progress is kept as a draft on the phone until the server confirms it.</li>
  </ul>
  <br>
  <p><strong>Swimming</strong></p>
  <ul>
    <li> - <strong>Race and training times</strong> for short course (25 m), long course (50 m) and yards, never mixed.</li>
    <li> - <strong>Fast time entry,</strong> digits only, like a stopwatch (<code>10245</code> → <code>1:02.45</code>).</li>
    <li> - <strong>Sanity checks:</strong> a time faster than the world record is refused (limits from World Aquatics), and a time over 3× the record asks for confirmation.</li>
    <li> - <strong>One screen per event</strong> with your record, your last time and a chart where faster is higher.</li>
  </ul>
  <br>
  <p><strong>Everywhere</strong></p>
  <ul>
    <li> - <strong>One history for both sports:</strong> Today (weekly goal), Calendar, Records, Statistics and Profile.</li>
    <li> - <strong>Statistics:</strong> workouts per week against your goal, the strength trend of up to 5 exercises, volume per muscle group and your most used workouts.</li>
    <li> - <strong>Passwordless sign-in</strong> with a 6-digit email code, English and Portuguese, metric or imperial units.</li>
    <li> - <strong>Accessible:</strong> every chart has a spoken summary, and every control has a label.</li>
  </ul>
  <br>
`,
    galleryLayout: 'phone',
    gallery: [
      { src: trekerAppMenu, alt: 'Side menu with the weekly goal and every section' },
      { src: trekerAppWorkouts, alt: 'Saved workouts and folders, reordered by dragging' },
      { src: trekerAppStats, alt: 'Statistics: workouts per week and strength trend' },
      { src: trekerAppProfile, alt: 'Profile with the sports and recent workouts' },
    ],
    decisionsTitle: 'Technical highlights',
    decisions: [
      {
        title: 'The database is the source of truth',
        text: 'Personal records are computed by Postgres triggers, and screens read ready-made results from SQL functions instead of loading every set or time.',
      },
      {
        title: 'Security in the database',
        text: 'Every table has Row Level Security, and write functions run as the caller (security invoker), so a user can never reach another user\'s data.',
      },
      {
        title: 'Idempotent writes',
        text: 'Ids are created on the phone, so retrying after a network failure never duplicates a workout, and the session in progress stays as a local draft until the server confirms it.',
      },
      {
        title: 'Shared rules, tested twice',
        text: 'Rules that exist both in the app and in Postgres, like swim events and progress, are tested against the same JSON fixtures by Jest and by pgTAP.',
      },
      {
        title: 'Thin screens, pure core',
        text: 'Screens are routes only (Expo Router). Business logic lives in a pure, unit-tested core, and each feature has one repository that is the only caller of Supabase, wrapped in TanStack Query hooks for cache, retries and pagination.',
      },
      {
        title: 'CI and builds',
        text: 'GitHub Actions runs the checks, and EAS Build produces the app builds.',
      },
    ],
    technologies: [
      { name: 'Expo SDK 58', icon: expoIcon },
      { name: 'React Native 0.88', icon: reactNativeIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'Expo Router' },
      { name: 'TanStack Query', icon: reactQueryIcon },
      { name: 'Supabase', icon: supabaseIcon },
      { name: 'Jest', icon: jestIcon },
      { name: 'pgTAP' },
      { name: 'GitHub Actions', icon: githubActionsIcon },
    ]
  },
  {
    id: 7,
    slug: 'pit_viewer',
    title: 'Pit Viewer',
    subtitle: '3D Open-Pit Mine Viewer',
    summary: 'An interactive 3D viewer for an open-pit mine block model: inspect blocks, measure distances, slice through the model and play a mining challenge that uses the same precedence rule real pit-optimisation tools rely on.',
    tags: ['three.js', 'React', 'TypeScript', 'Vitest', 'Playwright'],
    externalLink: 'https://github.com/AndreRodrigues884/Pit-Viewer',
    externalType: 'github',
    demoLink: 'https://pitviewer.vercel.app/',
    link: '/projects/7',
    image: pitViewer_img,
    background_image: pitViewer_img,
    device: { type: 'browser', url: 'pitviewer.vercel.app', status: 'live', size: [1917, 807] },
    description: `
  <p><strong>Pit Viewer</strong> is an interactive 3D viewer for an open-pit mine block model, built with three.js, React and TypeScript. A benched pit made of around 10,000 blocks can be inspected, measured, sliced and mined.</p>
  <br>
  <p><strong>Main features include:</strong></p>
  <ul>
    <li> - <strong>Instanced terrain:</strong> one <code>InstancedMesh</code> per block type, so the whole pit takes 3 draw calls.</li>
    <li> - <strong>Two cameras:</strong> perspective and orthographic with orbit controls; switching keeps the same framing.</li>
    <li> - <strong>Lighting and shadows:</strong> ambient and directional light with a shadow map that can be turned off.</li>
    <li> - <strong>Block selection:</strong> raycasting shows the type, position, grade, tonnage and economic value of the clicked block.</li>
    <li> - <strong>Distance measurement</strong> between two points on the terrain, with markers and a connecting line.</li>
    <li> - <strong>Extraction challenge:</strong> mine blocks to reach an ore target within a block budget and stay profitable. A block can only be mined once the 3 × 3 blocks above it are gone, a 45° slope.</li>
    <li> - <strong>Settings panel:</strong> hide block types to reveal the ore body, cut a live cross-section and regenerate the model with different pit and ore-body parameters.</li>
  </ul>
  <br>
  <p>Blocks are 10 m cubes with a density of 2.7 t/m³. The ore body is a synthetic ellipsoid with grades from 0.3 % to 2 % Cu, and prices and costs are illustrative.</p>
  <br>
`,
    gallery: [
      { src: pitViewerOre, alt: 'Settings panel open, with the ore body revealed inside the pit' },
      { src: pitViewerOrtho, alt: 'Orthographic camera in the middle of the extraction challenge' },
      { src: pitViewerMeasure, alt: 'Distance measured between two points on the terrain' },
      { src: pitViewerSelect, alt: 'An ore block selected, with its grade, tonnage and value' },
    ],
    decisionsTitle: 'Technical highlights',
    decisions: [
      {
        title: 'React for state, three.js for the scene',
        text: 'three.js lives in a plain TypeScript module with a small imperative API (setCameraMode, loadModel, resetGame…). The React wrapper creates it once, forwards each prop change to the matching method, keeps callbacks in a ref and disposes every GPU resource on unmount, so the scene is never rebuilt on a re-render.',
      },
      {
        title: 'O(1) block removal',
        text: 'A raycast against an InstancedMesh returns an instanceId that maps back to the block\'s data. Mining a block swaps it with the last instance and decreases mesh.count: no buffer reallocation.',
      },
      {
        title: 'Precedence by induction',
        text: 'A block is mineable only when the 3 × 3 blocks on the level above are gone. Checking one level is enough, because those blocks had to satisfy the same rule, so the full 45° cone follows by induction.',
      },
      {
        title: 'A cross-section that respects picking',
        text: 'A THREE.Plane is passed to the materials as a clipping plane and the slider only updates its constant. The cut snaps to block boundaries, clipShadows hides the shadows of clipped blocks, and picking skips anything you cannot see.',
      },
      {
        title: 'Rendering-free domain logic',
        text: 'Economy, precedence, excavation and the win/loss rules have no dependency on rendering, so they are covered by fast Vitest unit tests.',
      },
      {
        title: 'WebGL tested end to end',
        text: 'A Playwright test opens the app, clicks a block and checks the panel. It runs Chromium with SwiftShader, so WebGL works without a GPU.',
      },
    ],
    technologies: [
      { name: 'three.js', icon: threejsIcon },
      { name: 'React', icon: reactNativeIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'Vite', icon: viteIcon },
      { name: 'Vitest', icon: vitestIcon },
      { name: 'Playwright' },
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
    externalType: 'github',
    externalLink: 'https://github.com/AndreRodrigues884/data-structures',
    link: '/projects/6',
    image: dataStructures_img,
    background_image: dataStructuresVideo,
    device: { type: 'browser', url: 'localhost:5173', status: 'local demo', size: [1900, 908] },
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
]
