<template>
  <div class="h-screen flex flex-col bg-white">
    <div class="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-12 gap-32">
     <div class="flex-1 max-w-4xl">
  <h2 class="text-2xl font-semibold mb-4">Who I Am?</h2>
  <p class="mb-8 text-gray-700">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.
    Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Nulla at risus.
  </p>

  <div class="flex gap-12">
    <div class="flex-1">
      <h3 class="text-xl font-medium mb-2">Skills</h3>
      <p class="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.
        Aliquam nonummy auctor massa.
      </p>
    </div>
    <div class="flex-1">
      <h3 class="text-xl font-medium mb-2">Degrees</h3>
      <p class="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.
        Aliquam nonummy auctor massa.
      </p>
    </div>
  </div>

        <button
          class="mt-4 inline-block bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg hover:bg-blue-700 transition"
          @click="downloadCV"
        >
          Descarregar Currículo
        </button>
      </div>

      <!-- Imagem com ícones sobrepostos -->
      <div class="relative flex-shrink-0">
        <img
          src="../assets/img/foto.png"
          alt="Foto de perfil"
          class="w-64 h-64 rounded-full object-cover"
        />
        <!-- Ícones sobrepostos (exemplo) -->
        <div class="absolute top-2 left-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
          <!-- Exemplo: ícone Figma -->
          <img src="../assets/img/figma.png" alt="Figma" class="w-12 h-auto" />
        </div>
        <div class="absolute top-2 right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
          <!-- Exemplo: ícone Vue -->
          <img src="../assets/img/vue.png" alt="Vue" class="w-12 h-auto" />
        </div>
        <!-- Outros quadrados cinzentos decorativos -->
        <div class="absolute bottom-10 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
             <img src="../assets/img/node.jpg" alt="Vue" class="w-12 h-auto" />
        </div>
        <div class="absolute bottom-4 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
             <img src="../assets/img/express.png" alt="Vue" class="w-12 h-auto" />
        </div>
      </div>
    </div>

    <!-- Seção de Projects -->
    <section class="max-w-7xl mx-auto px-6">
  <h2 class="text-3xl font-bold mb-6 text-center">My Projects</h2> <!-- Título adicionado -->
  <div class="flex justify-center gap-8 overflow-x-auto scrollbar-hide">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :title="project.title"
      :link="project.link"
    />
  </div>
</section>

    <!-- Footer -->
    <footer class="bg-gray-100 py-8 mt-auto">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-700">
        <div>
          <p>Email: <a href="mailto:teuemail@exemplo.com" class="text-blue-600 underline">andreprodrigues0512@gmail.com</a></p>
        </div>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/andr%C3%A9-rodrigues-2b526a285/" class="hover:text-blue-600">LinkedIn</a>
          <a href="https://github.com/AndreRodrigues884" class="hover:text-blue-600">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'

// Dados dos projetos - podes depois substituir por API ou store
const projects = ref([
  { id: 1, title: 'Projeto 1', link: '/projects/projeto1' },
  { id: 2, title: 'Projeto 2', link: '/projects/projeto2' },
  { id: 3, title: 'Projeto 3', link: '/projects/projeto3' },
])

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
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>



