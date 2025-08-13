// Importa as imagens para garantir que o Vite/Webpack as processa corretamente
import project1Img from '../assets/img/presentation.png'
import project2Img from '../assets/img/project1.png'
import project3Img from '../assets/img/project1.png'

import background_project1 from '../assets/img/project1.png'

import figmaIcon from '../assets/img/figma.png'
import miroIcon from '../assets/img/miro.png'
import protopieIcon from '../assets/img/protopie.png'
import illustratorIcon from '../assets/img/illustrator.png'
import premiereIcon from '../assets/img/premiere.png'
import afterEffectsIcon from '../assets/img/aftereffects.jpg'

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
    title: 'HabTracker',
    link: '/projects/2',
    image: project2Img,
    background_image: background_project1,
    description: 'Website pessoal para apresentar trabalhos e competências, com design responsivo e animações suaves.',
    technologies: ['Vue.js', 'Tailwind CSS']
  },
  {
    id: 3,
    title: 'Task Manager App',
    link: '/projects/3',
    image: project3Img,
    background_image: background_project1,
    description: 'Aplicação de gestão de tarefas com autenticação e sincronização em tempo real.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS']
  }
]