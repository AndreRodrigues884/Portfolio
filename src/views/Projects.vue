<template>
  <Header />

  <div class="flex items-center justify-between pt-24 pb-6 px-4">
    <router-link
      to="/"
      class="flex items-center gap-1 text-[#434343] hover:text-black font-medium transition-colors text-[14px]"
    >
      <img src="../assets/img/arrow-left.svg" class="w-4 h-4" alt="" />
      Back
    </router-link>
    <span class="text-[15px] font-semibold text-black">&lt;Projects&gt;</span>
  </div>

  <div class="flex flex-col gap-5 max-w-5xl mx-auto w-full px-4 pb-16">
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
