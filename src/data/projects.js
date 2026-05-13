import ticketflow_project from '../assets/img/ticketflow.png'
import ticketflowBackground from '../assets/video/ticketflow.mp4'
import background_project1 from '../assets/img/project1.png'
import background_project2 from '../assets/img/project2.png'
import habtrackerVideo from '../assets/video/Habtracker.mp4'
import cvbuilderVideo from '../assets/video/CVBuilder.mp4'
import cvbuilder_img from '../assets/img/cvbuilder_img.png'

import figmaIcon from '../assets/img/figma.png'
import miroIcon from '../assets/img/miro.png'
import protopieIcon from '../assets/img/protopie.png'
import illustratorIcon from '../assets/img/illustrator.png'
import premiereIcon from '../assets/img/premiere.png'
import afterEffectsIcon from '../assets/img/aftereffects.jpg'
import reactNativeIcon from '../assets/img/react.png'
import expressIcon from '../assets/img/express.png'
import nodeIcon from '../assets/img/node.jpg'
import mongoIcon from '../assets/img/mongo.png'
import typescriptIcon from '../assets/img/typescript.svg'
import javascriptIcon from '../assets/img/js.svg'
import vueIcon from '../assets/img/vue.svg'
import postgreIcon from '../assets/img/postgre.svg'
import dockerIcon from '../assets/img/docker.svg'
import prismaIcon from '../assets/img/prisma.svg'
import openaiIcon from '../assets/img/openai.svg'
import rabbitIcon from '../assets/img/rabbitIcon.svg'
import nextjsIcon from '../assets/img/nextjsIcon.svg'
import tailwindIcon from '../assets/img/tailwind.svg'
import supabaseIcon from '../assets/img/supabaseIcon.svg'
import vercelIcon from '../assets/img/vercel.svg'
import groqIcon from '../assets/img/groq.svg'
import mistralIcon from '../assets/img/mistral.svg'

export const projects = [
  {
    id: 1,
    slug: 'bitesy',
    title: 'Bitesy',
    subtitle: 'UI/UX Design Project',
    summary: 'A nutrition app designed to help users discover and follow personalized diets tailored to their health goals, preferences, and lifestyle.',
    tags: ['Figma', 'Miro', 'Protopie', 'Adobe Suite'],
    externalLink: 'https://www.behance.net/gallery/217586327/Bitesy-Dieting-App',
    externalType: 'behance',
    image: background_project1,
    background_image: background_project1,
    link: '/projects/1',
    description: `
      <p><strong>BITESY</strong> is an application designed to help users discover and follow personalized diets tailored to their health goals, preferences, and lifestyle. Through an initial questionnaire, it recommends meal plans, suggests the ideal duration for each diet, and highlights their main benefits.</p>
      <br>
      <p>The app offers features such as:</p>
      <ul>
        <li> - Progress tracking and history of diets followed.</li>
        <li> - Shopping List based on the ingredients needed for recommended diets.</li>
        <li> - Water Tracking and Calories/Macros Tracking to monitor hydration and nutritional intake.</li>
        <li> - Intermittent Fasting with reminders and visual progress tracking.</li>
        <li> - Cooking Mode with simplified recipe steps and integrated timers.</li>
        <li> - Gamification with badges and rewards to keep users motivated.</li>
      </ul>
    <br>
    `,
    technologies: [
      { name: 'Figma', icon: figmaIcon },
      { name: 'Miro', icon: miroIcon },
      { name: 'Protopie', icon: protopieIcon },
      { name: 'Adobe Illustrator', icon: illustratorIcon },
      { name: 'Adobe Premiere Pro', icon: premiereIcon },
      { name: 'Adobe After Effects', icon: afterEffectsIcon },
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
  {
    id: 3,
    slug: 'ticket_flow',
    title: 'Ticket Engine',
    subtitle: 'High-Concurrency Ticketing System',
    summary: 'A robust ticketing platform for high-traffic events using message queuing to handle massive booking spikes with resilience and data integrity.',
    tags: ['Vue.js 3', 'Node.js', 'RabbitMQ', 'MongoDB', 'Docker'],
    externalLink: 'https://github.com/AndreRodrigues884/ticket-flow',
    externalType: 'github',
    link: '/projects/3',
    image: ticketflow_project,
    background_image: ticketflowBackground,
    description: `
  <p><strong>Ticket Engine</strong> is a high-performance event ticketing system engineered to handle massive traffic spikes and ensure reliable transaction processing during peak sales periods.</p>
  <br>
  <p>The architecture leverages a modern distributed stack to maintain stability under pressure:</p>
  <ul>
    <li> - <strong>Frontend:</strong> Developed with Vue.js 3 for a reactive and seamless user experience.</li>
    <li> - <strong>Backend:</strong> Built using Node.js and Express with TypeScript, ensuring type safety and robust business logic.</li>
    <li> - <strong>Messaging & Resilience:</strong> Implementation of RabbitMQ message queues to manage high-concurrency booking requests and prevent system overload.</li>
    <li> - <strong>Database:</strong> MongoDB for flexible and scalable data storage of events and ticket inventory.</li>
    <li> - <strong>Infrastructure:</strong> Fully containerized environment using Docker for consistent deployment and scaling.</li>
  </ul>
  <br>
  <p><strong>Main features include:</strong></p>
  <ul>
    <li> - Scalable queue-based ticket processing system.</li>
    <li> - High-concurrency handling for massive event launches.</li>
    <li> - Real-time inventory management and availability tracking.</li>
    <li> - Secure authentication and user management.</li>
    <li> - Resilient architecture designed to recover from service interruptions.</li>
  </ul>
  <br>
  <p>The goal of Ticket Engine is to provide a rock-solid infrastructure for event organizers, ensuring that every user has a fair and smooth experience even during the most demanded "on-sale" moments.</p>
  <br>
`,
    technologies: [
      { name: 'Vue Js', icon: vueIcon },
      { name: 'Express Js', icon: expressIcon },
      { name: 'Node Js', icon: nodeIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'RabbitMQ', icon: rabbitIcon },
      { name: 'MongoDB', icon: mongoIcon },
      { name: 'Docker', icon: dockerIcon },
    ]
  },
  {
    id: 4,
    slug: 'cv_builder',
    title: 'CV Builder',
    subtitle: 'AI-Powered Resume Generator',
    summary: 'A full-stack AI platform that helps users create professional resumes, optimize for ATS, match job descriptions, and prepare for interviews.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Groq API', 'Vercel'],
    externalLink: 'https://github.com/AndreRodrigues884/cvbuilder',
    externalType: 'github',
    demoLink: 'https://cvbuilder-ten-lime.vercel.app/',
    link: '/projects/4',
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
    technologies: [
      { name: 'Next Js', icon: nextjsIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'Tailwind CSS', icon: tailwindIcon },
      { name: 'Supabase', icon: supabaseIcon },
      { name: 'Groq API', icon: groqIcon },
      { name: 'Mistral OCR', icon: mistralIcon },
      { name: 'Vercel', icon: vercelIcon },
    ]
  }
]
