<template>
  <header class="fixed top-0 left-0 w-full flex items-center justify-between px-6 lg:px-12 py-5 bg-bg/85 backdrop-blur-md z-50 border-b border-line">
    <router-link to="/" class="font-mono text-[13px] tracking-[0.08em] text-teal hover:text-teal-hover transition-colors duration-150">
      A.R.
    </router-link>

    <!-- Desktop nav -->
    <nav class="hidden sm:flex items-center gap-7">
      <router-link
        to="/projects"
        :class="['text-[14px] transition-colors duration-150', isProjects ? 'text-text' : 'text-dim hover:text-text']"
      >Projects</router-link>
      <router-link
        to="/aboutme"
        :class="['text-[14px] transition-colors duration-150', isAbout ? 'text-text' : 'text-dim hover:text-text']"
      >About</router-link>
    </nav>

    <!-- Mobile hamburger -->
    <div ref="menuRef" class="relative sm:hidden">
      <button
        @click="isOpen = !isOpen"
        class="flex items-center gap-2 px-3 py-2 border border-line-strong rounded-[2px] text-text text-[12px] font-mono cursor-pointer"
      >
        Menu
        <img :src="isOpen ? closeIcon : menuIcon" class="h-3.5 w-3.5" alt="" />
      </button>

      <Transition name="dropdown">
        <div v-if="isOpen" class="absolute right-0 mt-2 bg-surface border border-line rounded-[2px] overflow-hidden min-w-[140px] z-50">
          <router-link
            to="/projects"
            @click="isOpen = false"
            class="block px-4 py-3 text-dim hover:text-text hover:bg-raised text-[14px] text-center transition-colors"
          >Projects</router-link>
          <router-link
            to="/aboutme"
            @click="isOpen = false"
            class="block px-4 py-3 text-dim hover:text-text hover:bg-raised text-[14px] text-center transition-colors"
          >About</router-link>
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
