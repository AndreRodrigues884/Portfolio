import background_project2 from '../assets/img/project2.png'
import background_project1 from '../assets/img/project6.png'
import habtrackerVideo from '../assets/video/Habtracker.mp4'
import cvbuilderVideo from '../assets/video/CVBuilder.mp4'
import cvbuilder_img from '../assets/img/cvbuilder_img.png'

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

export const projects = [
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
]
