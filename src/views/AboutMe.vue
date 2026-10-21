<template>
  <Header></Header>

  <div class="flex flex-col pt-28 pb-4 px-4">
    <button @click="goBack" class="self-start font-mono text-[13px] text-dim hover:text-teal transition-colors cursor-pointer mb-10">
      &larr; Back
    </button>
    <p class="section-label mb-2.5">// Background</p>
    <h1 class="font-display text-[32px] sm:text-[40px] font-semibold text-text">About</h1>
  </div>

  <!-- About me -->
  <section class="flex flex-col lg:flex-row gap-12 items-center px-4 py-12">
    <div class="relative flex-shrink-0 w-56 h-56 lg:w-64 lg:h-64 p-3">
      <img src="../assets/img/cadu.png" alt="André Rodrigues" class="w-full h-full rounded-full object-cover" />
      <span class="corner tl"></span>
      <span class="corner tr"></span>
      <span class="corner bl"></span>
      <span class="corner br"></span>
    </div>

    <div class="flex flex-col gap-4 w-full">
      <div>
        <h2 class="font-display text-[22px] sm:text-[26px] font-semibold text-text">André Rodrigues</h2>
        <p class="font-display text-[16px] sm:text-[18px] font-medium text-dim">Software Engineer · Systems &amp; AI Integration</p>
      </div>
      <p class="text-[15px] sm:text-[16px] text-dim leading-relaxed">
        Hi, my name is André Rodrigues, I'm 22 years old. I recently graduated with a Bachelor's Degree
        in Technologies and Information Systems for the Web from P.Porto. During my studies and
        curricular internship, I built full-stack web and mobile projects, including Learnly, an
        AI-powered micro-learning platform with a complete RAG pipeline and LLM integration.
        I'm now looking for opportunities as a Software Engineer, where I can go deep on backend
        and system architecture, keep growing into AI-integrated products, and work alongside
        people who take their craft seriously.
      </p>
    </div>
  </section>

  <!-- What I studied -->
  <section class="flex flex-col px-4 py-12">
    <p class="section-label mb-2.5">// 01 — Education</p>
    <h2 class="font-display text-[26px] sm:text-[32px] font-semibold text-text mb-10">What I studied</h2>

    <div class="flex flex-col gap-4">
      <div v-for="course in education" :key="course.title"
        class="card-hover relative flex flex-col gap-3 p-6 bg-surface border border-line hover:border-line-strong transition-colors duration-150">
        <span class="corner tl"></span>
        <span class="corner tr"></span>
        <span class="corner bl"></span>
        <span class="corner br"></span>
        <span class="font-mono text-[12px] text-teal">{{ course.period }}</span>
        <div class="flex flex-col gap-1">
          <span class="font-display text-[16px] sm:text-[18px] font-semibold text-text">{{ course.title }}</span>
          <span class="text-[13px] sm:text-[14px] text-dim">{{ course.school }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section class="flex flex-col px-4 py-12">
    <p class="section-label mb-2.5">// 02 — Toolbox</p>
    <h2 class="font-display text-[26px] sm:text-[32px] font-semibold text-text mb-12">Tech skills</h2>

    <div class="flex flex-col gap-14">
      <div v-for="group in skillGroups" :key="group.title" class="flex flex-col gap-6">
        <div>
          <h3 class="font-display text-[22px] sm:text-[26px] font-semibold text-text">{{ group.title }}</h3>
          <p class="text-[14px] sm:text-[15px] text-dim leading-relaxed mt-1.5 max-w-[52ch]">{{ group.text }}</p>
        </div>
        <ul class="skill-grid">
          <li v-for="skill in group.skills" :key="skill.name" class="group flex flex-col items-center gap-2.5">
            <span class="skill-tile">
              <img :src="skill.icon" alt="" :class="['w-9 h-9 object-contain', { 'invert': skill.invert }]" />
            </span>
            <span class="font-mono text-[11px] sm:text-[12px] text-dim group-hover:text-text text-center transition-colors">{{ skill.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Off duty -->
  <section class="flex flex-col px-4 py-12">
    <div class="flex items-center gap-4 mb-8">
      <span class="font-mono text-[12px] text-teal">03</span>
      <span class="flex-1 h-px bg-line"></span>
      <span class="font-mono text-[12px] tracking-[0.2em] text-faint">OFF DUTY</span>
    </div>
    <h2 class="font-display text-[44px] sm:text-[60px] font-bold leading-[0.98] tracking-[-0.02em] text-text">
      What I do when I'm <span class="text-teal">not</span> coding.
    </h2>
    <p class="text-[15px] sm:text-[16px] text-dim leading-relaxed mt-6 mb-10 max-w-[56ch]">
      Life outside the editor: training, a long watchlist, new places and a racquet.
    </p>

    <!-- Featured -->
    <article class="card-hover relative grid grid-cols-1 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] bg-surface border border-line hover:border-line-strong transition-colors">
      <span class="corner tl"></span>
      <span class="corner tr"></span>
      <span class="corner bl"></span>
      <span class="corner br"></span>
      <div class="relative overflow-hidden min-h-[220px] bg-bg">
        <img :src="featured.image" :alt="featured.imageAlt" class="absolute inset-0 w-full h-full object-cover object-left-top" />
      </div>
      <div class="flex flex-col p-7 sm:p-9 border-t md:border-t-0 md:border-l border-line">
        <div class="flex items-center justify-between mb-5">
          <span class="font-mono text-[12px] text-teal">01</span>
          <span class="font-mono text-[11px] tracking-[0.2em] text-teal">FEATURED</span>
        </div>
        <h3 class="font-display text-[26px] sm:text-[30px] font-semibold text-text">{{ featured.title }}</h3>
        <p class="font-mono text-[12px] text-faint mt-1.5">{{ featured.sub }}</p>
        <p class="text-[15px] text-dim leading-relaxed mt-5">{{ featured.text }}</p>
        <router-link :to="featured.to" class="mono-link mt-auto pt-8 self-start text-text">
          {{ featured.linkLabel }} &rarr;
        </router-link>
      </div>
    </article>

    <!-- Other hobbies -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
      <article v-for="(hobby, i) in hobbies" :key="hobby.title"
        class="card-hover relative flex flex-col p-6 bg-surface border border-line hover:border-line-strong transition-colors">
        <span class="corner tl"></span>
        <span class="corner tr"></span>
        <span class="corner bl"></span>
        <span class="corner br"></span>
        <div class="flex items-start justify-between mb-4">
          <span class="font-mono text-[12px] text-teal">{{ String(i + 2).padStart(2, '0') }}</span>
          <svg viewBox="0 0 24 24" class="w-5 h-5 text-faint" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" v-html="hobby.icon"></svg>
        </div>
        <h3 class="font-display text-[20px] font-semibold text-text">{{ hobby.title }}</h3>
        <p class="font-mono text-[12px] text-faint mt-1">{{ hobby.sub }}</p>
        <p class="text-[14px] text-dim leading-relaxed mt-4">{{ hobby.text }}</p>
        <a v-if="hobby.href" :href="hobby.href" target="_blank" rel="noopener noreferrer" class="mono-link mt-auto pt-5 self-start">{{ hobby.linkLabel }} &nearr;</a>
      </article>
    </div>
  </section>

  <Footer></Footer>
</template>

<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

import { useRouter } from 'vue-router'

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
import trekerImage from '../assets/img/project6.png'

const education = [
  {
    period: 'out 2021 - jul 2023',
    title: 'Higher Technical Course in Design and Technologies for Mobile Applications',
    school: 'ESMAD - Superior School of Media Arts and Design',
  },
  {
    period: 'set 2023 - jul 2026',
    title: "Bachelor's Degree in Web Information Systems and Technologies",
    school: 'ESMAD - Superior School of Media Arts and Design',
  },
]

// Skills grouped by area; each one is used in at least one project on this site.
// `invert` turns dark monochrome logos white so they stay visible on the dark tiles.
const skillGroups = [
  {
    title: 'Front-End',
    text: 'Interfaces for the web and for mobile: component-driven, typed and responsive.',
    skills: [
      { name: 'React', icon: reactIcon },
      { name: 'Next.js', icon: nextjsIcon },
      { name: 'Vue.js', icon: vueIcon },
      { name: 'Nuxt', icon: nuxtIcon },
      { name: 'Angular', icon: angularIcon },
      { name: 'React Native', icon: reactIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'Tailwind CSS', icon: tailwindIcon },
    ],
  },
  {
    title: 'Back-End',
    text: 'APIs, business rules and authentication, from Express services to Spring Boot.',
    skills: [
      { name: 'Node.js', icon: nodeIcon },
      { name: 'Express', icon: expressIcon },
      { name: 'Java', icon: javaIcon },
      { name: 'Spring Boot', icon: springIcon },
      { name: 'Supabase', icon: supabaseIcon },
      { name: 'Directus', icon: directusIcon },
    ],
  },
  {
    title: 'Data',
    text: 'Relational, document and vector storage, chosen for the shape of the data.',
    skills: [
      { name: 'PostgreSQL', icon: postgreIcon },
      { name: 'MongoDB', icon: mongoIcon },
      { name: 'Qdrant', icon: qdrantIcon },
    ],
  },
  {
    title: 'AI & LLMs',
    text: 'LLM integration and RAG pipelines: embeddings, retrieval, generation and OCR.',
    skills: [
      { name: 'Groq', icon: groqIcon },
      { name: 'Ollama', icon: ollamaIcon },
      { name: 'Langflow', icon: langflowIcon },
      { name: 'Mistral OCR', icon: mistralIcon },
    ],
  },
  {
    title: 'Tools & DevOps',
    text: 'The environment around the code: containers, deploys, version control and tests.',
    skills: [
      { name: 'Docker', icon: dockerIcon },
      { name: 'GitHub', icon: githubIcon },
      { name: 'Vercel', icon: vercelIcon, invert: true },
      { name: 'Vitest', icon: vitestIcon },
      { name: 'JUnit', icon: junitIcon },
    ],
  },
]

// Off duty
const featured = {
  title: 'Running & Swimming',
  sub: 'endurance training',
  text: 'Keeps my head clear and my week structured. I track every session in Treker, the app I built for exactly this: gym, swimming and running in one place.',
  image: trekerImage,
  imageAlt: 'Treker dashboard',
  to: '/projects/treker',
  linkLabel: 'See Treker',
}

// Feather icons (MIT) and a custom padel racket, drawn on a 24×24 grid
const hobbies = [
  {
    title: 'Movies & TV Shows',
    sub: 'a long watchlist',
    text: 'I watch a lot of films and series, and I log every one of them on Letterboxd.',
    icon: '<rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>',
    href: 'https://letterboxd.com/cadu_rodrigues/',
    linkLabel: 'Letterboxd',
  },
  {
    title: 'Travel',
    sub: 'new places',
    text: 'I love discovering new cities, cultures and food, and coming back with a different way of looking at things.',
    icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  },
  {
    title: 'Padel',
    sub: 'on court',
    text: 'Fast games with friends, and the best way to switch off between projects.',
    icon: '<ellipse cx="10" cy="8" rx="6" ry="6.5"/><rect x="8.6" y="14.5" width="2.8" height="7" rx="1.2"/><circle cx="8" cy="6" r=".55" fill="currentColor"/><circle cx="12" cy="6" r=".55" fill="currentColor"/><circle cx="10" cy="8.5" r=".55" fill="currentColor"/><circle cx="8" cy="11" r=".55" fill="currentColor"/><circle cx="12" cy="11" r=".55" fill="currentColor"/><circle cx="19.5" cy="18" r="2.3"/>',
  },
]

const router = useRouter()
function goBack() {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push("/") // fallback para home
  }
}
</script>

<style scoped>
.skill-tile {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1;
  background: var(--color-surface);
  border: 1px solid var(--color-line);
  transition: border-color 0.15s ease, transform 0.15s ease;
}
.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 92px);
  gap: 20px 18px;
}
@media (max-width: 420px) {
  .skill-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 12px; }
}
.group:hover .skill-tile { border-color: var(--color-line-strong); transform: translateY(-2px); }
</style>
