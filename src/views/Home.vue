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

  <!-- Toolbox -->
  <section class="flex flex-col px-4 py-16">
    <div class="mb-10">
      <p class="section-label mb-2.5">// 02 — Toolbox</p>
      <h2 class="font-display text-[28px] sm:text-[36px] font-semibold text-text">Tech stack</h2>
    </div>

    <ul class="flex flex-col">
      <li v-for="group in toolbox" :key="group.title"
        class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-4 border-b border-line">
        <span class="font-mono text-[12px] tracking-[0.04em] text-faint sm:w-[130px] shrink-0">{{ group.title }}</span>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in group.skills" :key="skill.name"
            class="inline-flex items-center gap-2 px-2.5 py-1.5 bg-surface border border-line">
            <img :src="skill.icon" alt="" :class="['w-4 h-4 object-contain', { 'invert': skill.invert }]" />
            <span class="font-mono text-[12px] text-dim">{{ skill.name }}</span>
          </span>
        </div>
      </li>
    </ul>

    <div class="flex justify-end mt-6">
      <router-link to="/aboutme" class="mono-link">Full toolbox &rarr;</router-link>
    </div>
  </section>

  <!-- About Me -->
  <section class="flex flex-col px-4 py-16">
    <div class="mb-10">
      <p class="section-label mb-2.5">// 03 — Background</p>
      <h2 class="font-display text-[28px] sm:text-[36px] font-semibold text-text">About</h2>
    </div>

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
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p class="text-[14px] text-dim">
          <span class="font-mono text-[12px] text-teal mr-1.5">// off duty</span>
          running, swimming, films &amp; series, travel and padel.
        </p>
        <router-link to="/aboutme" class="mono-link shrink-0">More about me &rarr;</router-link>
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
import { skillGroups } from '../data/skills.js'

const featuredProjects = computed(() => projects.slice(0, 3))

// Compact version of the About page's skills: only the ones marked for the home page
const toolbox = skillGroups.map(group => ({ ...group, skills: group.skills.filter(skill => skill.home) }))

const facts = [
  { label: 'Location', value: 'Portugal' },
  { label: 'Focus', value: 'Full Stack, Backend, AI products' },
  { label: 'Education', value: 'BSc Web Information Systems, P.Porto' },
  { label: 'Open to', value: 'Software Engineer roles' },
]
</script>
