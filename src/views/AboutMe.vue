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

    <!-- Hobbies: one row of four, wider than the text column -->
    <div class="hobbies-bleed grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <article v-for="(hobby, i) in hobbies" :key="hobby.title"
        class="card-hover relative flex flex-col bg-surface border border-line hover:border-line-strong transition-colors">
        <span class="corner tl"></span>
        <span class="corner tr"></span>
        <span class="corner bl"></span>
        <span class="corner br"></span>
        <div class="relative aspect-[4/3] overflow-hidden border-b border-line bg-bg">
          <img v-if="hobby.image" :src="hobby.image" :alt="hobby.imageAlt" loading="lazy" class="w-full h-full object-cover" :style="{ objectPosition: hobby.imagePosition || 'center' }" />
          <div v-else class="film-header" aria-hidden="true">
            <span class="film-dots"><i style="background:#ff8000"></i><i style="background:#00e054"></i><i style="background:#40bcf4"></i></span>
          </div>
          <span v-if="hobby.caption" class="photo-caption">{{ hobby.caption }}</span>
        </div>
        <div class="flex flex-col flex-1 p-6">
          <div class="flex items-start justify-between mb-4">
            <span class="font-mono text-[12px] text-teal">{{ String(i + 1).padStart(2, '0') }}</span>
            <svg viewBox="0 0 24 24" class="w-5 h-5 text-faint" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" v-html="hobby.icon"></svg>
          </div>
          <h3 class="font-display text-[20px] font-semibold text-text">{{ hobby.title }}</h3>
          <p class="font-mono text-[12px] text-faint mt-1">{{ hobby.sub }}</p>
          <p class="text-[14px] text-dim leading-relaxed mt-4">{{ hobby.text }}</p>
          <a v-if="hobby.href" :href="hobby.href" target="_blank" rel="noopener noreferrer" class="mono-link mt-auto pt-5 self-start">{{ hobby.linkLabel }} &nearr;</a>
          <router-link v-else-if="hobby.to" :to="hobby.to" class="mono-link mt-auto pt-5 self-start">{{ hobby.linkLabel }} &rarr;</router-link>
        </div>
      </article>
    </div>
  </section>

  <Footer></Footer>
</template>

<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

import { useRouter } from 'vue-router'

import { skillGroups } from '../data/skills.js'
import runningPhoto from '../assets/img/offduty_running.jpg'
import travelPhoto from '../assets/img/offduty_travel.jpg'
import padelPhoto from '../assets/img/offduty_padel.jpg'

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

// Off duty
// Feather icons (MIT) and a custom padel racket, drawn on a 24×24 grid
const hobbies = [
  {
    title: 'Running & Swimming',
    sub: 'endurance training',
    text: 'Keeps my head clear and my week structured. I track every session in Treker, the app I built for exactly this.',
    icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    image: runningPhoto,
    imagePosition: 'center 15%',
    imageAlt: 'André running the São Silvestre race in Famalicão',
    caption: 'S. Silvestre · Famalicão',
    to: '/projects/treker',
    linkLabel: 'See Treker',
  },
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
    image: travelPhoto,
    imageAlt: 'André looking over the Picos de Europa',
    caption: 'Picos de Europa',
    text: 'I love discovering new cities, cultures and food, and coming back with a different way of looking at things.',
    icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  },
  {
    title: 'Padel',
    sub: 'on court',
    image: padelPhoto,
    imageAlt: 'André playing in a padel tournament',
    caption: 'Padel tournament',
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
.photo-caption {
  position: absolute;
  left: 10px;
  bottom: 10px;
  padding: 3px 8px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text);
  background: rgba(10, 14, 20, 0.75);
  border: 1px solid var(--color-line);
  backdrop-filter: blur(4px);
}
/* Header for cards without a photo: a film strip with Letterboxd's three dots */
.film-header {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    repeating-linear-gradient(90deg, transparent 0 14px, rgba(255, 255, 255, 0.05) 14px 22px) top / 100% 14px no-repeat,
    repeating-linear-gradient(90deg, transparent 0 14px, rgba(255, 255, 255, 0.05) 14px 22px) bottom / 100% 14px no-repeat,
    radial-gradient(ellipse 70% 60% at 50% 50%, rgba(64, 188, 244, 0.08), transparent 70%),
    var(--color-bg);
}
.film-dots { display: flex; }
.film-dots i { width: 30px; height: 30px; border-radius: 9999px; display: block; margin: 0 -4px; mix-blend-mode: screen; opacity: 0.9; }
.hobbies-bleed {
  width: min(1100px, calc(100vw - 32px));
  margin-left: calc(50% - min(550px, 50vw - 16px));
}
</style>
