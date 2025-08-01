<template>
  <a
    :href="link"
    class="w-60 flex flex-col items-center space-y-3 cursor-pointer transform hover:scale-105 transition"
  >
    <div
      class="w-full h-40 bg-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-600 font-semibold text-xl"
    >
      <!-- Aqui podes trocar pelo screenshot ou imagem do projeto -->
      Imagem Projeto
    </div>
    <h3 class="text-lg font-medium text-gray-800 text-center">{{ title }}</h3>
  </a>
</template>

<script setup>
defineProps({
  title: String,
  link: String,
})
</script>
