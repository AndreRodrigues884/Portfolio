<template>
  <header class="w-full flex items-center justify-between px-4 py-2">
    <!-- Div com nome e emoji -->
    <div class="flex items-center gap-2 text-[18px] sm:text-[24px] font-medium">
      <div>André Rodrigues</div>
      <div>😎</div>
    </div>

    <!-- Container do botão e dropdown -->
    <div class="relative inline-block">
      <!-- Dropdown / Menu -->
      <button @click="toggleDropdown"
        class="flex items-center px-3 py-2 sm:px-6 sm:py-3 bg-[#002473] text-white rounded-[50px] cursor-pointer text-[12px] sm:text-[16px]">
        <h3 class="mr-1 sm:mr-2">Menu</h3>
        <img src="../assets/img/menu.svg" alt="Menu Icon" class="h-4 w-4 sm:h-6 sm:w-6" />
      </button>

      <!-- Dropdown Items -->
      <div v-if="isOpen"
        class="absolute right-0 mt-2 bg-[#002473] rounded-[20px] flex flex-col overflow-hidden shadow-lg min-w-[80px] sm:min-w-[120px]">
        <button class="px-3 py-1 sm:px-2 sm:py-3 text-white hover:bg-[#001f54] transition text-[12px] sm:text-[16px]">Projects</button>
        <button class="px-3 py-1 sm:px-2 sm:py-3 text-white hover:bg-[#001f54] transition text-[12px] sm:text-[16px]">About</button>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>