<template>
  <header class="fixed top-0 left-0 w-full flex items-center justify-between px-6 lg:px-12 py-4 bg-[#f8f8f8] z-50 border-b border-gray-100">
    <router-link to="/" class="text-[18px] sm:text-[22px] font-medium text-black hover:opacity-70 transition-opacity duration-200">
      André Rodrigues
    </router-link>

    <!-- Desktop nav -->
    <nav class="hidden sm:flex items-center gap-1">
      <router-link
        to="/projects"
        :class="['px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200', isProjects ? 'bg-gray-900 text-white' : 'text-[#434343] hover:bg-gray-100']"
      >Projects</router-link>
      <router-link
        to="/aboutme"
        :class="['px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200', isAbout ? 'bg-gray-900 text-white' : 'text-[#434343] hover:bg-gray-100']"
      >About Me</router-link>
    </nav>

    <!-- Mobile hamburger -->
    <div ref="menuRef" class="relative sm:hidden">
      <button
        @click="isOpen = !isOpen"
        class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full text-[12px] font-medium cursor-pointer"
      >
        Menu
        <img :src="isOpen ? closeIcon : menuIcon" class="h-3.5 w-3.5" alt="" />
      </button>

      <Transition name="dropdown">
        <div v-if="isOpen" class="absolute right-0 mt-2 bg-gray-900 rounded-2xl overflow-hidden shadow-xl min-w-[140px] z-50">
          <router-link
            to="/projects"
            @click="isOpen = false"
            class="block px-4 py-3 text-white hover:bg-white/10 text-[14px] text-center transition-colors"
          >Projects</router-link>
          <router-link
            to="/aboutme"
            @click="isOpen = false"
            class="block px-4 py-3 text-white hover:bg-white/10 text-[14px] text-center transition-colors"
          >About Me</router-link>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import menuIcon from '../assets/img/menu.svg'
import closeIcon from '../assets/img/close.svg'

const route = useRoute()
const isOpen = ref(false)
const menuRef = ref(null)

const isProjects = computed(() => route.path.startsWith('/projects'))
const isAbout = computed(() => route.path === '/aboutme')

function handleOutsideClick(e) {
  if (menuRef.value && !menuRef.value.contains(e.target)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleOutsideClick))
onUnmounted(() => document.removeEventListener('click', handleOutsideClick))
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
