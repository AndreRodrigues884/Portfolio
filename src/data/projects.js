// Importa as imagens para garantir que o Vite/Webpack as processa corretamente
import project1Img from '../assets/img/presentation.png'
import project2Img from '../assets/img/project1.png'
import project3Img from '../assets/img/project1.png'

import background_project1 from '../assets/img/project1.png'
import background_project2 from '../assets/img/project2.png'

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
    title: 'HabTracker - Full-Stack Development & UI/UX Design Project',
    link: '/projects/2',
    image: background_project2,
    background_image: background_project2,
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
    longDescription: `
      <h2>🧠 HabTracker</h2>
      <p><strong>Transform your life, one habit at a time.</strong></p>
      <p>HabTracker is a modern habit tracking application designed to help you build better habits and achieve your goals. Track your daily progress, earn XP, unlock achievements, and watch your personal growth unfold through an engaging gamified experience.</p>
      <br>
      <h3>✨ What Makes HabTracker Special</h3>
      <h4>🎯 Smart Habit Management</h4>
      <ul>
        <li>Create custom habits across categories (Health, Productivity, Learning, Social, Creativity, Lifestyle)</li>
        <li>Flexible scheduling: daily, weekly, bi-weekly, or custom frequencies</li>
        <li>Visual progress tracking with streaks and completion history</li>
      </ul>
      <h4>🏆 Gamified Experience</h4>
      <ul>
        <li><strong>XP System</strong>: Earn points for completing habits and daily logins</li>
        <li><strong>Leveling Up</strong>: Progress through levels as you build consistency</li>
        <li><strong>Achievements</strong>: Unlock badges for milestones and streaks</li>
        <li><strong>Visual Rewards</strong>: Beautiful icons and animations</li>
      </ul>
      <h4>📱 Mobile-First Design</h4>
      <ul>
        <li>React Native + Expo</li>
        <li>Intuitive, clean interface optimized for daily use</li>
        <li>Offline-capable with smart data synchronization</li>
        <li>Cross-platform support (iOS, Android, Web)</li>
      </ul>
      <h4>🔐 Secure & Private</h4>
      <ul>
        <li>JWT-based authentication with refresh tokens</li>
        <li>Secure user data storage and avatar uploads</li>
        <li>Rate limiting and account protection</li>
        <li>Privacy-focused design</li>
      </ul>
      <h3>🛠️ Built With Modern Technology</h3>
      <p><strong>Backend Infrastructure</strong>: Node.js & Express, MongoDB, JWT, Multer, Rate Limiting</p>
      <p><strong>Mobile Application</strong>: React Native, Expo, TypeScript, React Navigation, AsyncStorage</p>
      <h3>Key Features</h3>
      <ul>
        <li>Real-time habit completion tracking</li>
        <li>Automatic XP and achievement calculations</li>
        <li>User profile management with avatar uploads</li>
        <li>Responsive design for all screen sizes</li>
        <li>Comprehensive error handling and validation</li>
      </ul>
      <h3>🎨 App Categories</h3>
      <p>🏥 Health • ⚡ Productivity • 📚 Learning • 👥 Social • 🎨 Creativity • 🏠 Lifestyle</p>
      <h3>🚀 Getting Started</h3>
      <p>The app consists of two main components: <strong>Backend API</strong> and <strong>Mobile App</strong> working together seamlessly.</p>
      <h3>📊 User Experience</h3>
      <ul>
        <li>Onboarding, Habit Creation, Daily Tracking</li>
        <li>Progress Visualization and Achievement System</li>
        <li>Profile Management with avatars and settings</li>
      </ul>
      <h3>🔮 Future Vision</h3>
      <ul>
        <li>Social features and community challenges</li>
        <li>Advanced analytics and insights</li>
        <li>Integration with health apps and wearables</li>
        <li>Custom habit templates and sharing</li>
        <li>Advanced achievement systems</li>
      </ul>
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
    title: 'In Progress...',
    link: '/projects/3',
    image: project3Img,
    background_image: background_project1,
    description: 'Aplicação de gestão de tarefas com autenticação e sincronização em tempo real.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS']
  }
]