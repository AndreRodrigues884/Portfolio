<template>
  <Header />

  <!-- Hero -->
  <section class="relative pt-28 pb-24 mb-8 flex justify-center px-4">
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="relative flex flex-col items-center text-center max-w-[720px]">
      <div class="relative w-40 h-40 sm:w-44 sm:h-44 p-3 mb-8 animate-scale-in">
        <img src="../assets/img/cadu.png" alt="André Rodrigues" class="w-full h-full rounded-full object-cover" />
        <span class="corner tl"></span>
        <span class="corner tr"></span>
        <span class="corner bl"></span>
        <span class="corner br"></span>
      </div>
      <h1 class="font-display text-[40px] sm:text-[56px] lg:text-[64px] font-bold tracking-[-0.01em] leading-tight text-text animate-fade-in-up stagger-1">
        André Rodrigues
      </h1>
      <p class="font-display text-[18px] sm:text-[22px] font-medium text-dim mt-2 mb-6 animate-fade-in-up stagger-2">
        Software Engineer · Systems &amp; AI Integration
      </p>
      <p class="text-[15px] sm:text-[16px] text-dim max-w-[560px] mb-10 animate-fade-in-up stagger-3">
        I design and build reliable backends, scalable architectures and <span class="text-text font-medium">AI-integrated</span> products.
      </p>
      <div class="flex flex-wrap justify-center gap-3.5 animate-fade-in-up stagger-4">
        <router-link to="/projects" class="btn btn-primary">See the work</router-link>
        <a href="mailto:andreprodrigues0512@gmail.com" class="btn btn-ghost">Get in touch</a>
      </div>
    </div>
  </section>

  <!-- Featured Projects -->
  <section class="flex flex-col px-4 py-16">
    <div class="mb-12">
      <p class="section-label mb-2.5">// 01 — Selected work</p>
      <h2 class="font-display text-[28px] sm:text-[36px] font-semibold text-text">Projects</h2>
    </div>

    <div class="flex flex-col gap-6 max-w-5xl mx-auto w-full">
      <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
    </div>

    <div class="flex justify-end max-w-5xl mx-auto w-full mt-8">
      <router-link to="/projects" class="mono-link">See all projects &rarr;</router-link>
    </div>
  </section>

  <!-- About Me -->
  <section class="flex flex-col px-4 py-16">
    <div class="mb-12">
      <p class="section-label mb-2.5">// 02 — Background</p>
      <h2 class="font-display text-[28px] sm:text-[36px] font-semibold text-text">About</h2>
    </div>

    <div class="flex flex-col lg:flex-row gap-12 items-center max-w-5xl mx-auto w-full">
      <!-- Profile photo with spinning icons -->
      <div class="relative flex-shrink-0 w-56 h-56 flex items-center justify-center">
        <img src="../assets/img/cadu.png" alt="André Rodrigues" class="w-full h-full rounded-full object-cover" />
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center animate-spin-slow">
          <div v-for="(icon, index) in icons" :key="icon.src"
            :style="{ transform: `rotate(${(360 / icons.length) * index}deg) translate(110px) rotate(-${(360 / icons.length) * index}deg)` }"
            class="absolute">
            <div class="icon-tile w-8 h-8 p-1 animate-spin-reverse-slow">
              <img :src="icon.src" :alt="icon.alt" class="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      <!-- Bio -->
      <div class="flex flex-col gap-6 w-full">
        <p class="text-[15px] sm:text-[16px] text-dim leading-relaxed">
          Hi, my name is André Rodrigues, I'm 22 years old. I recently graduated with a Bachelor's Degree
          in Technologies and Information Systems for the Web from P.Porto. During my studies and
          curricular internship, I built full-stack web and mobile projects.
          I'm now looking for opportunities as a Software Engineer, where I can go deep on backend
          and system architecture, keep growing into AI-integrated products, and work alongside
          people who take their craft seriously.
        </p>
        <ul class="flex flex-col">
          <li v-for="fact in facts" :key="fact.label"
            class="flex justify-between gap-4 py-3 border-b border-line text-[14px] text-text">
            <span class="font-mono text-[12px] tracking-[0.04em] text-faint">{{ fact.label }}</span>
            <span class="text-right">{{ fact.value }}</span>
          </li>
        </ul>
        <div class="flex justify-end">
          <router-link to="/aboutme" class="mono-link">More about me &rarr;</router-link>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import { computed } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects.js'

import reactNativeIcon from '../assets/img/react.png'
import nodeIcon from '../assets/img/node.jpg'
import mongoIcon from '../assets/img/mongo.png'
import typescriptIcon from '../assets/img/typescript.svg'
import javascriptIcon from '../assets/img/js.svg'
import vueIcon from '../assets/img/vue.svg'
import postgreIcon from '../assets/img/postgre.svg'
import nextjsIcon from '../assets/img/nextjsIcon.svg'
import supabaseIcon from '../assets/img/supabaseIcon.svg'
import dockerIcon from '../assets/img/docker.svg'

const featuredProjects = computed(() => projects.slice(0, 3))

const icons = [
  { src: vueIcon, alt: 'Vue' },
  { src: dockerIcon, alt: 'Docker' },
  { src: nodeIcon, alt: 'Node' },
  { src: supabaseIcon, alt: 'Supabase' },
  { src: reactNativeIcon, alt: 'React' },
  { src: mongoIcon, alt: 'Mongo' },
  { src: javascriptIcon, alt: 'JavaScript' },
  { src: typescriptIcon, alt: 'TypeScript' },
  { src: postgreIcon, alt: 'PostgreSQL' },
  { src: nextjsIcon, alt: 'Next.js' },
]

const facts = [
  { label: 'Location', value: 'Portugal' },
  { label: 'Focus', value: 'Full Stack, Backend, AI products' },
  { label: 'Education', value: 'BSc Web Information Systems, P.Porto' },
  { label: 'Open to', value: 'Software Engineer roles' },
]
</script>
