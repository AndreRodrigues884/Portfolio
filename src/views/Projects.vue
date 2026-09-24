<template>
  <Header />

  <div class="flex flex-col pt-28 pb-8 px-4">
    <router-link to="/" class="self-start font-mono text-[13px] text-dim hover:text-teal transition-colors mb-10">
      &larr; Back
    </router-link>
    <p class="section-label mb-2.5">// All work</p>
    <h1 class="font-display text-[32px] sm:text-[40px] font-semibold text-text">Projects</h1>
  </div>

  <div class="flex flex-col gap-6 max-w-5xl mx-auto w-full px-4 pb-16">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>

  <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects.js'
</script>
