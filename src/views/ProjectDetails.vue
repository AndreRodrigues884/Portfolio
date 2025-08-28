<template>
   <!-- Botão Voltar -->
    <router-link 
      to="/" 
      class="flex items-center text-gray-600 hover:text-gray-900 mb-6 pt-12 pl-12"
    >
      <!-- Ícone seta -->
      <svg xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           stroke-width="1.5" 
           stroke="currentColor" 
           class="w-6 h-6 mr-2">
        <path stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
      Back to Home
    </router-link>
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

    <!-- Coluna esquerda -->
    <div class="flex-1 pr-6">
      <h1 class="text-3xl font-medium mb-6">{{ project.title }}</h1>
      <div class="text-gray-700 mb-4" v-html="project.description"></div>

      <h2 class="text-xl font-medium mb-2">Technologies:</h2>
      <div class="flex gap-4 flex-wrap mb-4">
        <img v-for="tech in project.technologies" :key="tech.name" :src="tech.icon" :alt="tech.name"
          class="w-12 h-12 object-contain" />
      </div>

    </div>

    <!-- Coluna direita -->
    <div class="flex-shrink-0 md:w-1/2 max-h-[600px] overflow-y-auto">
  <img :src="project.image" :alt="project.title" class="w-full object-contain" />
</div>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { projects } from '../data/projects.js'

const route = useRoute()
const projectId = Number(route.params.id)
const project = projects.find(p => p.id === projectId) || {}
</script>
