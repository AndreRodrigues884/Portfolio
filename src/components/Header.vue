<template>
  <header
    class="fixed top-0 left-0 w-full flex items-center justify-between px-6 lg:px-12 pt-6 pb-4 bg-[#f8f8f8] z-50">

    <!-- Nome + emoji -->
    <div class="flex items-center gap-2 text-[18px] sm:text-[24px] font-medium">
      <div>André Rodrigues</div>
    </div>

    <!-- Botão + dropdown -->
    <div class="relative">
      <button
        @click="toggleDropdown"
        class="flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#676767] text-white rounded-[50px] cursor-pointer text-[12px] sm:text-[16px] hover-scale hover-glow smooth-transition">
        <h3 class="mr-2">Menu</h3>
        <img
          :src="isOpen ? closeIcon : menuIcon"
          alt="Menu Icon"
          class="h-4 w-4 sm:h-6 sm:w-6"
        />
      </button>

      <!-- Dropdown -->
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 bg-[#676767] rounded-[20px] flex flex-col overflow-hidden shadow-lg min-w-[120px] sm:min-w-[160px] z-50 animate-scale-in">
        <router-link
          to="/projects"
          class="px-3 py-2 sm:px-4 sm:py-3 text-white hover:bg-[#555] transition text-[12px] sm:text-[16px] text-center">
          Projects
        </router-link>
        <router-link
          to="/aboutme"
          class="px-3 py-2 sm:px-4 sm:py-3 text-white hover:bg-[#555] transition text-[12px] sm:text-[16px] text-center">
          About Me
        </router-link>
      </div>
    </div>
  </header>
</template>



<script>
import menuIcon from '../assets/img/menu.svg'
import closeIcon from '../assets/img/close.svg'

export default {
  data() {
    return {
      isOpen: false,
      menuIcon,
      closeIcon
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    // Fechar dropdown quando clicar fora
    document.addEventListener('click', (event) => {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    });
  },
};
</script>