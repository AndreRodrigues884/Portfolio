<template>
  <div class="w-full flex flex-col">
    <div class="flex flex-col gap-10 px-4 pb-10 pt-6">
      <div class="flex flex-col items-start gap-3">
        <span v-if="project.subtitle" class="font-mono text-[10px] tracking-[0.08em] uppercase text-amber border border-amber/35 px-2 py-[3px]">{{ project.subtitle }}</span>
        <h1 class="font-display text-[32px] sm:text-[44px] font-bold tracking-[-0.01em] text-text">{{ project.title }}</h1>
      </div>

      <div class="relative w-full h-86 border border-line bg-surface p-2 flex items-center justify-center">
        <span class="corner tl"></span>
        <span class="corner tr"></span>
        <span class="corner bl"></span>
        <span class="corner br"></span>
        <template v-if="isVideo">
          <video
            :src="project.background_image"
            autoplay
            muted
            loop
            playsinline
            class="max-w-full max-h-full object-contain"
          ></video>
        </template>
        <template v-else>
          <div class="w-full h-60 lg:h-full" :style="coverStyle"></div>
        </template>
      </div>

      <div v-if="projectLinks.length" class="flex flex-row flex-wrap gap-3">
        <a v-for="(link, i) in projectLinks" :key="link.href" :href="link.href" target="_blank" rel="noopener noreferrer"
           :class="['btn', i === 0 ? 'btn-primary' : 'btn-ghost']">
          {{ link.label }} <span aria-hidden="true">&nearr;</span>
        </a>
      </div>

      <div class="flex flex-col">
        <p class="section-label mb-4">// Overview</p>
        <div class="project-description text-[15px] sm:text-[16px] text-dim leading-relaxed" v-html="project.description"></div>
      </div>

      <div class="flex flex-col">
        <p class="section-label mb-4">// Stack</p>
        <div class="flex flex-row flex-wrap gap-2">
          <div v-for="tech in project.technologies" :key="tech.name"
               class="flex items-center gap-2 px-2.5 py-1.5 border border-line bg-raised">
            <span v-if="tech.icon" class="icon-tile w-5 h-5 p-0.5">
              <img :src="tech.icon" alt="" class="w-full h-full object-contain" />
            </span>
            <span class="font-mono text-[12px] text-dim">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
  links: { type: Array, default: () => [] },
})

const emit = defineEmits(['back'])

function onBack() {
  emit('back')
}

const coverStyle = computed(() => ({
  backgroundImage: props.project?.background_image ? `url(${props.project.background_image})` : '',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))

const projectLinks = computed(() => props.links || [])

const isVideo = computed(() => {
  const src = props.project?.background_image || ''
  return typeof src === 'string' && src.toLowerCase().endsWith('.mp4')
})
</script>

<style scoped>
.project-description :deep(strong) { color: var(--color-text); font-weight: 600; }
.project-description :deep(ul) { display: flex; flex-direction: column; gap: 6px; margin-top: 8px; }
</style>
