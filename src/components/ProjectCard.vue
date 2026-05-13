<template>
  <div
    class="group relative flex flex-col lg:flex-row items-center gap-6 lg:gap-10 p-6 lg:p-10 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
  >
    <!-- External link icon -->
    <a
      v-if="project.externalLink"
      :href="project.externalLink"
      target="_blank"
      rel="noopener noreferrer"
      class="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors duration-200 z-10"
      @click.stop
    >
      <svg
        v-if="project.externalType === 'github'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-5 h-5"
      >
        <path d="M12 .5C5.37.5 0 5.87 0 12.52c0 5.3 3.438 9.795 8.205 11.385.6.11.82-.26.82-.58v-2.17c-3.338.73-4.03-1.61-4.03-1.61-.55-1.42-1.34-1.8-1.34-1.8-1.09-.76.08-.75.08-.75 1.2.09 1.83 1.24 1.83 1.24 1.07 1.86 2.8 1.32 3.49 1.01.11-.79.42-1.32.76-1.63-2.67-.31-5.48-1.37-5.48-6.08 0-1.34.47-2.44 1.24-3.3-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.25.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.58 3.3-1.25 3.3-1.25.66 1.69.24 2.94.12 3.25.77.86 1.24 1.96 1.24 3.3 0 4.73-2.82 5.76-5.5 6.07.43.37.82 1.1.82 2.23v3.3c0 .32.22.7.83.58C20.56 22.31 24 17.81 24 12.52 24 5.87 18.63.5 12 .5z" />
      </svg>
      <img v-else :src="beIcon" class="w-5 h-5" alt="Behance" />
    </a>

    <!-- Thumbnail -->
    <div class="w-full lg:w-64 h-48 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    <!-- Content -->
    <div class="flex flex-col justify-between gap-4 w-full">
      <div class="flex flex-col gap-1.5">
        <p class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{{ project.subtitle }}</p>
        <h3 class="text-[20px] lg:text-[24px] font-semibold text-gray-800 pr-6">{{ project.title }}</h3>
        <p class="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed mt-1">{{ project.summary }}</p>
      </div>

      <div class="flex flex-col gap-3 mt-1">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200"
          >{{ tag }}</span>
        </div>
        <div class="flex items-center justify-end gap-2">
          <a
            v-if="project.demoLink"
            :href="project.demoLink"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 text-gray-700 text-[12px] font-medium hover:border-gray-500 hover:-translate-y-0.5 transition-all duration-300"
            @click.stop
          >
            <span class="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
            Live Demo
          </a>
          <button
            @click="goToDetails"
            class="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white text-[12px] font-medium hover:from-gray-800 hover:to-gray-950 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            View Details
            <img :src="arrowIcon" class="h-3 w-3" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import beIcon from '../assets/img/be.svg'
import arrowIcon from '../assets/img/arrow.svg'

const props = defineProps({ project: { type: Object, required: true } })
const router = useRouter()

function goToDetails() {
  router.push({ name: 'ProjectDetails', params: { slug: props.project.slug } })
}
</script>
