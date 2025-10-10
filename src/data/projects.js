// Importa as imagens para garantir que o Vite/Webpack as processa corretamente
import project1Img from '../assets/img/presentation.png'
import project2Img from '../assets/img/project1.png'
import project3Img from '../assets/img/project1.png'

import background_project1 from '../assets/img/project1.png'
import background_project2 from '../assets/img/project2.png'
import habtrackerVideo from '../assets/video/Habtracker.mp4'
import bulleye_project from '../assets/img/bulleye.png'
import cvbuilder_project from '../assets/img/cvbuilder.png'

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
import pythonIcon from '../assets/img/python.svg'
import fastIcon from '../assets/img/fast.svg'
import TensorFlowIcon from '../assets/img/tensorflow.svg'
import dockerIcon from '../assets/img/docker.svg'
import prismaIcon from '../assets/img/prisma.svg'
import openaiIcon from '../assets/img/openai.svg'

export const projects = [
  {
    id: 1,
    title: 'Bitesy - UI/UX Design Project',
    background_image: background_project1,
    link: '/projects/1',
    image: project1Img,
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
    title: 'HabTracker – Gamified Habit Tracking App',
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
    <li> - <strong>Calendar view</strong>to monitor habits over time and plan ahead.</li>
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
    title: 'BullEye - Stock Market ML Prediction',
    link: '/projects/3',
    image: project3Img,
    background_image: bulleye_project,
    description: `
  <p><strong>BullEye</strong> is a complete stock market prediction system powered by Machine Learning. It combines a modern web interface, robust backend, and intelligent data models to forecast stock price trends with high accuracy.</p>
  <br>
  <p>The system integrates multiple technologies across different layers:</p>
  <ul>
    <li> - <strong>Frontend:</strong> Built with Vue.js 3, Vuetify, and Chart.js for interactive data visualization.</li>
    <li> - <strong>Backend:</strong> Developed with Node.js, Express, PostgreSQL, and Redis for caching and high performance.</li>
    <li> - <strong>Machine Learning Service:</strong> Implemented in Python using TensorFlow and FastAPI to serve real-time predictions.</li>
    <li> - <strong>DevOps & Deployment:</strong> Fully containerized with Docker and orchestrated using Docker Compose, with CI/CD via GitHub Actions.</li>
  </ul>
  <br>
  <p><strong>Main features include:</strong></p>
  <ul>
    <li> - Automated financial data collection and preprocessing.</li>
    <li> - Real-time prediction API powered by trained ML models.</li>
    <li> - Interactive dashboard displaying price forecasts and performance metrics.</li>
    <li> - Authentication and user management system with JWT.</li>
    <li> - Monitoring, logs, and error tracking for all services.</li>
  </ul>
  <br>
  <p>The goal of BullEye is to provide traders and analysts with actionable insights and predictive analytics through an elegant and data-driven interface.</p>
  <br>
`,

    technologies: [
      { name: 'Vue Js', icon: vueIcon },
      { name: 'Express Js', icon: expressIcon },
      { name: 'Node Js', icon: nodeIcon },
      { name: 'Postgre SQL', icon: postgreIcon },
      { name: 'Python', icon: pythonIcon },
      { name: 'FastAPI', icon: fastIcon },
      { name: 'TensorFlow', icon: TensorFlowIcon },
      { name: 'Docker', icon: dockerIcon },
    ]
  },
  {
    id: 4,
    title: 'CV Builder – AI-Powered Resume Generator',
    link: '/projects/4',
    image: cvbuilder_project,
    background_image: cvbuilder_project,
    description: `
  <p><strong>CV Builder</strong> is a full-stack web application designed to help users create and customize professional resumes effortlessly. With a modern UI and AI-powered assistance, it generates resumes optimized for Applicant Tracking Systems (ATS) and tailored to specific job descriptions.</p>
  <br>
  <p>The system integrates several key technologies across the stack:</p>
  <ul>
    <li> - <strong>Frontend:</strong> Developed with Vue 3 and Pinia, offering a responsive and intuitive resume editing experience.</li>
    <li> - <strong>Backend:</strong> Built using Node.js, Express, and Prisma ORM for efficient data management and scalability.</li>
    <li> - <strong>AI Integration:</strong> Enhances job descriptions and professional summaries using intelligent text generation.</li>
  </ul>
  <br>
  <p><strong>Main features include:</strong></p>
  <ul>
    <li> - <strong>Resume Creation:</strong> Clean and intuitive interface for building and editing resumes.</li>
    <li> - <strong>ATS Optimization:</strong> Automatically formats resumes to be compatible with Applicant Tracking Systems.</li>
    <li> - <strong>Description Enhancement:</strong> Uses AI to improve professional experience sections.</li>
    <li> - <strong>Skill Suggestions:</strong> Recommends relevant skills based on desired job positions.</li>
    <li> - <strong>Personalized Summary:</strong> Generates unique professional summaries tailored to each user.</li>
  </ul>
  <br>
  <p>The goal of CV Builder is to streamline the resume creation process and empower users to present their skills and experience effectively through a smart, elegant, and data-driven platform.</p>
  <br>
`,


    technologies: [
      { name: 'Vue Js', icon: vueIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'Express Js', icon: expressIcon },
      { name: 'Node Js', icon: nodeIcon },
      { name: 'Postgre SQL', icon: postgreIcon },
      { name: 'Prisma', icon: prismaIcon },
      { name: 'Open AI API', icon: openaiIcon },
      { name: 'Docker', icon: dockerIcon },
    ]
  }
]