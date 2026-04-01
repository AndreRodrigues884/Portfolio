// Importa as imagens para garantir que o Vite/Webpack as processa corretamente
import project1Img from '../assets/img/presentation.png'
import project2Img from '../assets/img/project1.png'
import project3Img from '../assets/img/project1.png'
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
    title: 'Ticket Engine - High-Concurrency Ticketing System',
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
      { name: 'TypeScript', icon: typescriptIcon }, // Adicionado TypeScript
      { name: 'RabbitMQ', icon: rabbitIcon }, // Adicionado RabbitMQ
      { name: 'MongoDB', icon: mongoIcon }, // Alterado para MongoDB
      { name: 'Docker', icon: dockerIcon },
    ]
  },
  {
    id: 4,
    title: 'CV Builder – AI-Powered Resume Generator',
    link: '/projects/4',
    image: cvbuilder_img,
    background_image: cvbuilderVideo,
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