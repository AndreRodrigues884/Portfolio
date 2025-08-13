<template>
  <a :href="`/projects/${id}`" class="w-60 flex flex-col pb-12 items-center space-y-3 cursor-pointer">
    <div class="w-full h-40 rounded-lg shadow-md flex items-center justify-center text-gray-600 font-semibold text-xl"
      :style="{
        backgroundImage: background_image ? `url(${background_image})` : '',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"></div>

    <h3 class="text-lg font-medium text-gray-800 text-center">{{ title }}</h3>
  </a>
</template>

<script setup>
defineProps({
  id: Number,
  title: String,
  background_image: String,
})
</script>
