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
    pipelineTitle: 'The RAG pipeline',
    pipelineIntro: "From an uploaded PDF to a flashcard in a student's review queue.",
    pipeline: [
      {
        title: 'PDF upload',
        tech: 'Nuxt 3 PWA',
        detail: 'A teacher uploads the course material (slides, notes or handouts) as a PDF from the mobile-first interface.',
        artifact: 'lecture-03.pdf',
      },
      {
        title: 'Text extraction',
        tech: 'unpdf · custom Directus extension',
        detail: 'A custom Directus extension extracts the text with unpdf, chosen after testing alternatives that gave lower extraction fidelity.',
        artifact: 'raw text',
      },
      {
        title: 'Orchestration',
        tech: 'Directus Flows',
        detail: 'Directus Flows react to the new document and drive each stage of the pipeline, so every step runs in order and stays traceable.',
        artifact: 'flow triggered',
      },
      {
        title: 'Embedding & indexing',
        tech: 'nomic-embed-text · Qdrant',
        detail: 'The text is split into chunks, turned into vectors with nomic-embed-text and stored in Qdrant, tagged with the parent_id of the deck they belong to.',
        artifact: 'chunks → vectors',
      },
      {
        title: 'Retrieval & generation',
        tech: 'Langflow · Groq llama-3.3-70b · Ollama',
        detail: 'A Langflow webhook retrieves the relevant chunks, filtered by parent_id so content from different decks never mixes, and the LLM generates the flashcards. Groq runs in production; Ollama runs local models for offline or private generation.',
        artifact: 'flashcards.json',
      },
      {
        title: 'Teacher approval',
        tech: 'Directus RBAC',
        detail: 'Generated flashcards go through a review workflow. A teacher approves or edits them before students can see them.',
        artifact: 'status: approved',
      },
      {
        title: 'Spaced repetition',
        tech: 'SM-2 · Dexie.js',
        detail: 'Students review the flashcards. SM-2 schedules each card based on how well it was remembered, and progress is kept offline and synced later.',
        artifact: 'next review: +3 days',
      },
    ],
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
    architecture: {
      title: 'Architecture',
      intro: 'Three containers orchestrated by Docker Compose. Click any box to see what it does.',
      frame: 'Docker Compose',
      selected: 2,
      nodes: [
        {
          id: 'browser',
          label: 'Browser',
          sub: 'user',
          detail: 'The user opens the app on port 4000. Every request goes through the frontend container.',
        },
        {
          id: 'frontend',
          label: 'frontend',
          sub: 'nginx + Angular',
          detail: 'nginx serves the Angular 22 app (standalone components, signals, httpResource, lazy-loaded pages) and forwards every /api call to the backend. An interceptor attaches the JWT to each request and ends the session on a 401.',
        },
        {
          id: 'backend',
          label: 'backend',
          sub: 'Spring Boot',
          detail: 'A Java 21 + Spring Boot 4 REST API, organised by feature (invoice, expense, client…), where every feature follows the same layers. Spring Security with signed JWTs, Bean Validation, and every error returned in the same ProblemDetail format (RFC 9457).',
        },
        {
          id: 'db',
          label: 'db',
          sub: 'PostgreSQL 17',
          detail: 'The schema is versioned with Flyway migrations. Rules are also enforced by UNIQUE, CHECK and foreign-key constraints, and dashboard aggregations (SUM, COUNT, GROUP BY) run in the database, backed by indexes.',
        },
      ],
      links: ['HTTP :4000', '/api → :8080', 'JDBC :5432'],
      note: '// multi-stage Docker builds · the whole system starts with a single Docker command',
    },
    pipelineTitle: 'A request through the backend',
    pipelineIntro: 'What happens when a user issues an invoice: the request crosses the same layers as every other feature.',
    pipeline: [
      {
        title: 'Security',
        tech: 'SecurityFilterChain · JWT (HS256)',
        detail: 'The signed token is checked and the access rules are applied in one central place. Destructive and tax-relevant operations are restricted to admins. 401 and 403 responses use the same ProblemDetail format as every other error.',
        artifact: 'authenticated request',
      },
      {
        title: 'Controller',
        tech: 'REST · Bean Validation',
        detail: 'Input is validated before reaching the business logic. Validation errors point to the exact field, such as lines[0].quantity, so the Angular form can show them in the right place.',
        artifact: 'validated request',
      },
      {
        title: 'Service',
        tech: 'Spring transactions',
        detail: 'Numbering and issuing run in the same transaction (Propagation.MANDATORY). If issuing fails, the rollback returns the number to the counter, so the series never has gaps.',
        artifact: 'one transaction',
      },
      {
        title: 'Domain',
        tech: 'Rich entities · @Version',
        detail: 'Business rules live in the entities: the lifecycle DRAFT → ISSUED → PAID / CANCELLED only moves forward through intention-revealing methods, never a setStatus. An optimistic lock rejects a double click on Issue instead of consuming two numbers.',
        artifact: 'DRAFT → ISSUED',
      },
      {
        title: 'Repository',
        tech: 'Spring Data JPA · Hibernate 7',
        detail: 'A pessimistic lock (SELECT ... FOR UPDATE) on the series counter queues concurrent requests. Specifications build dynamic filters, and @EntityGraph avoids the N+1 problem.',
        artifact: 'FT 2026/0001',
      },
      {
        title: 'PostgreSQL',
        tech: 'Flyway · constraints',
        detail: 'Invoice lines keep a snapshot of the product (price, VAT rate, description) and the client details at issue time, so later changes never alter past invoices. Amounts are NUMERIC(12,2), calculated with BigDecimal and HALF_UP rounding.',
        artifact: 'committed',
      },
    ],
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
    pipelineTitle: 'How the AI works',
    pipelineIntro: 'One CV, several AI tools: from an uploaded PDF to a job-ready CV, a career plan and interview practice.',
    pipeline: [
      {
        title: 'Your CV',
        tech: 'Next.js 15 · step-by-step wizard',
        detail: 'Users either build a CV from scratch with the step-by-step wizard or upload an existing one as a PDF.',
        artifact: 'cv.pdf',
      },
      {
        title: 'Text extraction',
        tech: 'Mistral OCR',
        detail: 'Uploaded PDFs go through Mistral OCR, which turns the document into text the language model can work with.',
        artifact: 'cv text',
      },
      {
        title: 'Storage & auth',
        tech: 'Next.js API Routes · Supabase (PostgreSQL)',
        detail: 'Next.js API Routes handle every request. Supabase stores the CVs and application data in PostgreSQL and manages authentication.',
        artifact: 'saved to Supabase',
      },
      {
        title: 'AI Review',
        tech: 'Groq · LLaMA 3.3 70B',
        detail: 'The CV is analysed by LLaMA 3.3 70B on Groq, returning an ATS score, a keyword analysis, strengths, weaknesses and concrete improvement suggestions.',
        artifact: 'ATS score + suggestions',
      },
      {
        title: 'Job Match',
        tech: 'Groq · LLaMA 3.3 70B',
        detail: 'Given a job description, the model adapts the CV to that role. It only rewords and reorders what the user actually has, without fabricating experience or skills.',
        artifact: 'tailored CV',
      },
      {
        title: 'Career Copilot & Interview Prep',
        tech: 'Groq · LLaMA 3.3 70B',
        detail: 'The same model generates a personalized career plan (skills to learn, certifications and action phases) and role-specific interview questions, with feedback and a score for each answer.',
        artifact: 'plan + interview feedback',
      },
      {
        title: 'Export & track',
        tech: 'PDF export · Application Tracker',
        detail: 'The final CV is exported as a PDF, and every job application is tracked with its status in one place.',
        artifact: 'cv-final.pdf',
      },
    ],
    technologies: [
      { name: 'Next Js', icon: nextjsIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'Tailwind CSS', icon: tailwindIcon },
      { name: 'Supabase', icon: supabaseIcon },
      { name: 'Groq API', icon: groqIcon },
      { name: 'Mistral OCR', icon: mistralIcon },
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
