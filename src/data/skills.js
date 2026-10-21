import reactIcon from '../assets/img/react.svg'
import nextjsIcon from '../assets/img/nextjsIcon.svg'
import vueIcon from '../assets/img/vue.svg'
import nuxtIcon from '../assets/img/nuxtIcon.svg'
import angularIcon from '../assets/img/si_angular.svg'
import typescriptIcon from '../assets/img/typescript.svg'
import jsIcon from '../assets/img/si_javascript.svg'
import tailwindIcon from '../assets/img/tailwind.svg'
import nodeIcon from '../assets/img/si_nodedotjs.svg'
import expressIcon from '../assets/img/express.svg'
import javaIcon from '../assets/img/si_openjdk.svg'
import springIcon from '../assets/img/si_spring.svg'
import supabaseIcon from '../assets/img/supabaseIcon.svg'
import directusIcon from '../assets/img/directus.png'
import postgreIcon from '../assets/img/si_postgresql.svg'
import mongoIcon from '../assets/img/mongo.svg'
import qdrantIcon from '../assets/img/qdrant.png'
import groqIcon from '../assets/img/groq.png'
import ollamaIcon from '../assets/img/ollama.png'
import langflowIcon from '../assets/img/langflow.png'
import mistralIcon from '../assets/img/mistral.svg'
import dockerIcon from '../assets/img/docker.svg'
import githubIcon from '../assets/img/si_github.svg'
import vercelIcon from '../assets/img/vercel.svg'
import vitestIcon from '../assets/img/vitest.png'
import junitIcon from '../assets/img/si_junit5.svg'

// Skills grouped by area; each one is used in at least one project on this site.
// `home: true` marks the ones shown in the compact toolbox on the home page.
// `invert` turns dark monochrome logos white so they stay visible on the dark tiles.
export const skillGroups = [
  {
    title: 'Front-End',
    text: 'Interfaces for the web and for mobile: component-driven, typed and responsive.',
    skills: [
      { name: 'React', icon: reactIcon, home: true },
      { name: 'Next.js', icon: nextjsIcon, home: true },
      { name: 'Vue.js', icon: vueIcon, home: true },
      { name: 'Nuxt', icon: nuxtIcon },
      { name: 'Angular', icon: angularIcon },
      { name: 'React Native', icon: reactIcon },
      { name: 'TypeScript', icon: typescriptIcon, home: true },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'Tailwind CSS', icon: tailwindIcon },
    ],
  },
  {
    title: 'Back-End',
    text: 'APIs, business rules and authentication, from Express services to Spring Boot.',
    skills: [
      { name: 'Node.js', icon: nodeIcon, home: true },
      { name: 'Express', icon: expressIcon },
      { name: 'Java', icon: javaIcon },
      { name: 'Spring Boot', icon: springIcon, home: true },
      { name: 'Supabase', icon: supabaseIcon, home: true },
      { name: 'Directus', icon: directusIcon },
    ],
  },
  {
    title: 'Data',
    text: 'Relational, document and vector storage, chosen for the shape of the data.',
    skills: [
      { name: 'PostgreSQL', icon: postgreIcon, home: true },
      { name: 'MongoDB', icon: mongoIcon, home: true },
      { name: 'Qdrant', icon: qdrantIcon, home: true },
    ],
  },
  {
    title: 'AI & LLMs',
    text: 'LLM integration and RAG pipelines: embeddings, retrieval, generation and OCR.',
    skills: [
      { name: 'Groq', icon: groqIcon, home: true },
      { name: 'Ollama', icon: ollamaIcon, home: true },
      { name: 'Langflow', icon: langflowIcon, home: true },
      { name: 'Mistral OCR', icon: mistralIcon },
    ],
  },
  {
    title: 'Tools & DevOps',
    text: 'The environment around the code: containers, deploys, version control and tests.',
    skills: [
      { name: 'Docker', icon: dockerIcon, home: true },
      { name: 'GitHub', icon: githubIcon, home: true },
      { name: 'Vercel', icon: vercelIcon, invert: true, home: true },
      { name: 'Vitest', icon: vitestIcon },
      { name: 'JUnit', icon: junitIcon },
    ],
  },
]
