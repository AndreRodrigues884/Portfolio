<template>
  <div class="h-screen flex flex-col bg-white">
    <div class="flex flex-col md:flex-row items-center justify-between max-w-8xl mx-auto px-6 py-12 gap-32">
      <div class="flex-1 max-w-4xl">
        <h2 class="text-2xl font-semibold mb-4">Who I Am?</h2>
        <p class="mb-8 text-gray-700">
          I’m currently in my third year of a <strong>Bachelor's Degree in Technologies and Information Systems for the
            Web.</strong>
          <br>Throughout my studies, I’ve worked on <strong>design and web development projects</strong> in small teams,
          learning to
          manage
          tight deadlines and deliver clear results.</br>
          <br>I’m now looking for an <strong>internship or junior role</strong> where I can apply my programming and UI
          design skills,
          contribute to a company’s growth, and continue developing professionally and personally.</br>
        </p>

        <div class="flex gap-12">
          <div class="flex-1">
            <h3 class="text-xl font-medium mb-2">Skills</h3>
            <ul class="text-gray-700 list-disc list-inside space-y-1">
              <li><strong>UI/UX Design:</strong> Experienced with Figma and Miro</li>
              <li><strong>3D & Prototyping:</strong> Worked with Blender and ProtoPie</li>
              <li><strong>Project Management:</strong> Familiar with Trello and Notion</li>
              <li><strong>Backend Development:</strong> Node.js, Express.js, MongoDB</li>
              <li><strong>Frontend Development:</strong> Vue.js, Vite</li>
              <li><strong>Styling:</strong> Tailwind CSS & Bootstrap</li>
            </ul>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-medium mb-2">Degrees</h3>
            <ul class="text-gray-700 list-disc list-inside">
              <li>Higher Technical Professional Course in Design and Technologies for Mobile Applications (CTeSP)</li>
              <li>3º Bachelor's Degree in Technologies and Information Systems for the Web</li>
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
      <h2 class="text-3xl font-bold mb-6 text-center">My Projects</h2> <!-- Título adicionado -->
      <div class="flex justify-center gap-8 overflow-x-auto scrollbar-hide">
        <ProjectCard v-for="project in projects" :key="project.id" :title="project.title" :link="project.link"
          :image="project.image" />
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import Footer from '../components/Footer.vue'

// Dados dos projetos - podes depois substituir por API ou store
const projects = ref([
  { id: 1, title: 'Bitesy', link: '/projects/projeto1', image: '../src/assets/img/project1.png' },
  { id: 2, title: 'HabTracker', link: '/projects/projeto2', image: '../src/assets/img/project1.png' },
  { id: 3, title: 'Projeto 3', link: '/projects/projeto3', image: '../src/assets/img/project1.png' },
])

const icons = [
  { src: '../src/assets/img/vue.png', alt: 'Vue Icon' },
  { src: '../src/assets/img/figma.png', alt: 'Figma Icon' },
  { src: '../src/assets/img/node.jpg', alt: 'Node Icon' },
  { src: '../src/assets/img/express.png', alt: 'Express Icon' },
  { src: '../src/assets/img/tailwind.png', alt: 'Tailwind Icon' },
  { src: '../src/assets/img/mongo.png', alt: 'Mongo Icon' },
  { src: '../src/assets/img/blender.png', alt: 'Blender Icon' },
  { src: '../src/assets/img/notion.png', alt: 'Notion Icon' },
]

// Função para o botão descarregar currículo
function downloadCV() {
  // Aqui podes colocar o caminho para o teu CV pdf, por exemplo em /public/cv.pdf
  window.open('/cv.pdf', '_blank')
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
