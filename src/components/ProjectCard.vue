<template>
  <div
    class="card-hover group relative flex flex-col lg:flex-row items-center gap-6 lg:gap-10 p-6 lg:p-8 bg-surface border border-line hover:border-line-strong hover:-translate-y-0.5 transition-all duration-150"
  >
    <span class="corner tl"></span>
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>

    <!-- External link icon -->
    <a
      v-if="project.externalLink"
      :href="project.externalLink"
      target="_blank"
      rel="noopener noreferrer"
      class="absolute top-5 right-5 text-faint hover:text-teal transition-colors duration-150 z-10"
      :aria-label="project.externalType === 'github' ? 'Source code on GitHub' : 'Project on Behance'"
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
      <img v-else :src="beIcon" class="w-5 h-5 invert opacity-60 hover:opacity-100" alt="" />
    </a>

    <!-- Thumbnail -->
    <div class="w-full lg:w-64 h-48 overflow-hidden flex-shrink-0 bg-raised border border-line">
      <img
        :src="project.image"
        :alt="project.title"
        :class="['w-full h-full group-hover:scale-105 transition-transform duration-500', project.imageFit === 'contain' ? 'object-contain p-2' : 'object-cover']"
      />
    </div>

    <!-- Content -->
    <div class="flex flex-col justify-between gap-4 w-full">
      <div class="flex flex-col items-start gap-2">
        <span class="font-mono text-[10px] tracking-[0.08em] uppercase text-amber border border-amber/35 px-2 py-[3px]">{{ project.subtitle }}</span>
        <h3 class="font-display text-[20px] lg:text-[22px] font-semibold text-text pr-6 mt-1">{{ project.title }}</h3>
        <p class="text-[14px] text-dim leading-relaxed">{{ project.summary }}</p>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="font-mono text-[11px] text-dim bg-raised border border-line px-2 py-[3px]"
          >{{ tag }}</span>
        </div>
        <div class="flex items-center justify-end gap-5">
          <a
            v-if="project.demoLink"
            :href="project.demoLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 font-mono text-[13px] text-dim hover:text-text transition-colors duration-150"
            @click.stop
          >
            <span class="w-1.5 h-1.5 rounded-full bg-teal inline-block"></span>
            Live demo
          </a>
          <button @click="goToDetails" class="mono-link">
            View details &rarr;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import beIcon from '../assets/img/be.svg'

const props = defineProps({ project: { type: Object, required: true } })
const router = useRouter()

function goToDetails() {
  router.push({ name: 'ProjectDetails', params: { slug: props.project.slug } })
}
</script>
