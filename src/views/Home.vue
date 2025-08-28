<template>
  <div class="h-screen flex flex-col bg-white">
    <div class="flex flex-col md:flex-row items-center justify-between max-w-8xl mx-auto px-6 py-12 gap-32">
      <div class="flex-1 max-w-4xl">
        <h2 class="text-2xl font-semibold mb-4">{{ content.about.title }}</h2>
        <p class="mb-8 text-gray-700">
        <p v-html="content.about.description"></p>
        </p>

        <div class="flex gap-12">
          <div class="flex-1">
            <h3 class="text-xl font-medium mb-2">{{ content.skills.title }}</h3>
            <ul class="text-gray-700 list-disc list-inside space-y-1">
              <li v-html="content.skills.first_skill"></li>
              <li v-html="content.skills.second_skill"></li>
              <li v-html="content.skills.third_skill"></li>
              <li v-html="content.skills.fourth_skill"></li>
              <li v-html="content.skills.fifth_skill"></li>
              <li v-html="content.skills.sixth_skill"></li>
            </ul>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-medium mb-2">{{ content.degrees.title }}</h3>
            <ul class="text-gray-700 list-disc list-inside">
              <li v-html="content.degrees.first_degree"></li>
              <li v-html="content.degrees.seconde_degree"></li>
            </ul>
          </div>
        </div>

        <button
          class="mt-4 inline-block bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg hover:bg-blue-700 transition"
          @click="downloadCV">
          Descarregar Currículo
        </button>
      </div>


      <div class="relative flex-shrink-0">
        <img src="../assets/img/foto.png" alt="Foto de perfil" class="w-64 h-64 rounded-full object-cover" />
        <div class="absolute inset-0 flex items-center justify-center animate-spin-slow">
          <div v-for="(icon, index) in icons" :key="icon.src" :style="{
            transform: `rotate(${(360 / icons.length) * index}deg) translate(140px) rotate(-${(360 / icons.length) * index}deg)`
          }" class="absolute">
            <img :src="icon.src" :alt="icon.alt" class="w-8 h-8 rounded-md animate-spin-reverse-slow" />
          </div>
        </div>
      </div>
    </div>

    <!-- Seção de Projects -->
    <section class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-medium mb-6 text-center">{{ content.projects.title }}</h2> <!-- Título adicionado -->
      <div class="flex justify-center gap-8 overflow-x-auto scrollbar-hide">
        <ProjectCard v-for="project in projects" :key="project.id" :id="project.id" :title="project.title"
          :link="project.link" :background_image="project.background_image" />
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import content from '../data/content.json'
import { projects } from '../data/projects.js' // <-- Importa o array
import ProjectCard from '../components/ProjectCard.vue'
import Footer from '../components/Footer.vue'

const icons = [
  { src: '../src/assets/img/vue.png', alt: 'Vue Icon' },
  { src: '../src/assets/img/figma.png', alt: 'Figma Icon' },
  { src: '../src/assets/img/node.jpg', alt: 'Node Icon' },
  { src: '../src/assets/img/express.png', alt: 'Express Icon' },
  { src: '../src/assets/img/tailwind.png', alt: 'Tailwind Icon' },
  { src: '../src/assets/img/mongo.png', alt: 'Mongo Icon' },
  { src: '../src/assets/img/blender.png', alt: 'Blender Icon' },
  { src: '../src/assets/img/notion.png', alt: 'Notion Icon' },
  { src: '../src/assets/img/react.png', alt: 'React Native' },
]

// Função para o botão descarregar currículo
function downloadCV() {
  // Aqui podes colocar o caminho para o teu CV pdf, por exemplo em /public/cv.pdf
  window.open('/CV.pdf', '_blank')
}
</script>


<style scoped>
/* Esconde scrollbar horizontal do carrossel no Chrome, Firefox e Edge */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
