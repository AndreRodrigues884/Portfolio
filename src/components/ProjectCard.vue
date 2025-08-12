<template>
  <a
    :href="link"
    class="w-60 flex flex-col pb-12 items-center space-y-3 cursor-pointer"
  >
    <div
      class="w-full h-40 rounded-lg shadow-md flex items-center justify-center text-gray-600 font-semibold text-xl"
      :style="{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
    >
      <!-- Se a imagem não carregar, pode ter um texto alternativo -->
      <span v-if="!image">Imagem Projeto</span>
    </div>
    <h3 class="text-lg font-medium text-gray-800 text-center">{{ title }}</h3>
  </a>
</template>

<script setup>
defineProps({
  title: String,
  link: String,
  image: String,
})
</script>
