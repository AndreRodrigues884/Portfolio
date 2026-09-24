<template>
  <div>
    <Header />
    <div class="flex items-center pt-28 pb-4 px-4">
      <button
        @click="goBack"
        class="font-mono text-[13px] text-dim hover:text-teal transition-colors cursor-pointer"
      >
        &larr; Back
      </button>
    </div>
    <ProjectDetails v-if="project" :project="project" :links="links" @back="goBack" />
    <div v-else class="px-4 pb-8 font-mono text-[14px] text-dim">// Project not found.</div>
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ProjectDetails from './ProjectDetails.vue'
import { projects } from '../data/projects.js'

const route = useRoute()
const router = useRouter()

const project = computed(() =>
  projects.find(p => p.slug === String(route.params.slug || '').toLowerCase())
)

const links = computed(() => {
  if (!project.value) return []
  const list = []
  if (project.value.demoLink) {
    list.push({ label: 'Live Demo', href: project.value.demoLink })
  }
  if (project.value.externalLink) {
    const label = project.value.externalType === 'behance' ? 'Full Project on Behance' : 'See code on GitHub'
    list.push({ label, href: project.value.externalLink })
  }
  return list
})

function goBack() {
  router.push('/projects')
}
</script>
