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
    <h2 class="font-display text-[26px] sm:text-[32px] font-semibold text-text mb-10">Tech skills</h2>

    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
      <div v-for="skill in skills" :key="skill.name"
        class="flex flex-col items-center gap-3 p-5 bg-surface border border-line hover-lift smooth-transition">
        <span class="icon-tile w-10 h-10 p-1.5">
          <img :src="skill.icon" alt="" class="w-full h-full object-contain" />
        </span>
        <span class="font-mono text-[12px] text-dim text-center">{{ skill.name }}</span>
      </div>
    </div>
  </section>

  <Footer></Footer>
</template>

<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

import { useRouter } from 'vue-router'

import reactSkillIcon from '../assets/img/react.svg'
import vueSkillIcon from '../assets/img/vue.svg'
import expressSkillIcon from '../assets/img/express.svg'
import nodeSkillIcon from '../assets/img/node.svg'
import mongoSkillIcon from '../assets/img/mongo.svg'
import typescriptSkillIcon from '../assets/img/typescript.svg'
import jsSkillIcon from '../assets/img/js.svg'
import nuxtSkillIcon from '../assets/img/nuxtIcon.svg'
import postgreSkillIcon from '../assets/img/postgre.svg'
import dockerSkillIcon from '../assets/img/docker.svg'
import supabaseSkillIcon from '../assets/img/supabaseIcon.svg'
import nextjsSkillIcon from '../assets/img/nextjsIcon.svg'

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

const skills = [
  { name: 'React', icon: reactSkillIcon },
  { name: 'Vue JS', icon: vueSkillIcon },
  { name: 'Express JS', icon: expressSkillIcon },
  { name: 'Node JS', icon: nodeSkillIcon },
  { name: 'Mongo DB', icon: mongoSkillIcon },
  { name: 'Typescript', icon: typescriptSkillIcon },
  { name: 'Javascript', icon: jsSkillIcon },
  { name: 'Nuxt', icon: nuxtSkillIcon },
  { name: 'Postgre SQL', icon: postgreSkillIcon },
  { name: 'Docker', icon: dockerSkillIcon },
  { name: 'Supabase', icon: supabaseSkillIcon },
  { name: 'Next JS', icon: nextjsSkillIcon },
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