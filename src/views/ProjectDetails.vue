<template>
  <div class="min-h-screen w-full flex flex-col">
    <div class="flex flex-row justify-between items-center pt-[20px] pb-[24px] px-4">
      
    </div>

    <div class="flex flex-col gap-6 px-4 pb-10">
      <div class="w-full h-86 md:h-86 rounded-[24px] border border-[#434343] overflow-hidden bg-[#EDEDED]"
           :style="coverStyle"></div>

      <div class="flex flex-col gap-4">
        <h1 class="text-[22px] sm:text-[28px] font-semibold text-[#111]">{{ project.title }}</h1>
        <div class="text-[14px] sm:text-[15px] font-medium text-[#676067] leading-relaxed" v-html="project.description"></div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-[16px] sm:text-[18px] font-semibold text-[#434343]">Technologies</div>
        <div class="flex flex-row flex-wrap gap-3">
          <div v-for="tech in project.technologies" :key="tech.name"
               class="flex items-center gap-2 px-3 py-2 border border-[#676767] rounded-full bg-white">
            <img v-if="tech.icon" :src="tech.icon" :alt="tech.name" class="w-4 h-4" />
            <span class="text-[12px] sm:text-[13px] text-[#676767]">{{ tech.name }}</span>
          </div>
        </div>
      </div>

      <div v-if="projectLinks.length" class="mt-2 flex flex-row flex-wrap gap-3">
        <a v-for="link in projectLinks" :key="link.href" :href="link.href" target="_blank" rel="noopener noreferrer"
           class="flex items-center px-4 py-3 bg-[#676767] text-white rounded-[50px] hover-scale hover-glow smooth-transition">
          <span class="mr-2 font-regular text-[12px] sm:text-[14px]">{{ link.label }}</span>
          <img src="../assets/img/arrow.svg" alt="Open" class="h-4 w-4" />
        </a>
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
</script>

<style scoped>
.hover-scale {
  transition: transform 150ms ease;
}
.hover-scale:hover {
  transform: translateY(-2px);
}
.hover-glow:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}
</style>


