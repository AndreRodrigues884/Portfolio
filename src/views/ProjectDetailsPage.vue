<template>
  <div>
    <Header></Header>
     <div class="flex flex-row justify-between items-center pt-[80px] pb-[64px] px-4">
        <button @click="goBack" class="cursor-pointer flex items-center text-[#434343] hover:text-[#000] font-medium">
            <img src="../assets/img/arrow-left.svg" alt="Back" class="w-4 h-4 mr-1" />
            Back
        </button>
    </div>
    <ProjectDetails v-if="project" :project="project" :links="links" @back="goBack" />
    <div v-else class="px-4 pt-[80px] pb-8 text-[#434343]">Project not found.</div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ProjectDetails from './ProjectDetails.vue'
import { projects } from '../data/projects'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

const slugToId = {
  bitesy: 1,
  habtracker: 2,
  bulleye: 3,
  cv_builder: 4
}

const projectId = computed(() => slugToId[String(route.params.slug || '').toLowerCase()])
const project = computed(() => projects.find(p => p.id === projectId.value))

const links = computed(() => {
  if (!project.value) return []
  const list = []
  if (project.value.id === 2) {
    list.push({ label: 'See code on GitHub', href: 'https://github.com/AndreRodrigues884/Habtracker' })
  }
  if (project.value.id === 1) {
    list.push({ label: 'Full Project on Behance', href: 'https://www.behance.net/gallery/217586327/Bitesy-Dieting-App' })
  }
  if (project.value.id === 3) {
    list.push({ label: 'See code on GitHub', href: 'https://github.com/AndreRodrigues884/BullEye' })
  }
  if (project.value.id === 3) {
    list.push({ label: 'See code on GitHub', href: 'https://github.com/AndreRodrigues884/cv_builder' })
  }
  return list
})

function goBack() {
  router.push('/projects')
}
</script>


