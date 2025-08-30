<template>
  <header class="w-full flex items-center justify-between">
    <!-- Div com nome e emoji -->
    <div class="flex items-center gap-4 w-max h-auto">
      <div class="flex items-center gap-2">
        <div class="text-[24px] font-medium">André Rodrigues</div>
        <div class="text-[24px]">😎</div>
      </div>
    </div>

    <!-- Container do botão e dropdown -->
    <div class="relative inline-block">
      <!-- Dropdown / Menu -->
      <button @click="toggleDropdown"
        class="flex items-center px-6 py-3 bg-[#002473] text-white rounded-[50px] cursor-pointer">
        <h3 class="mr-2">Menu</h3>
        <img src="../assets/img/menu.svg" alt="Menu Icon" class="h-6 w-6" />
      </button>

      <!-- Dropdown Items -->
      <div v-if="isOpen"
        class="absolute right-0 mt-2 bg-[#002473] rounded-[20px] flex flex-col overflow-hidden shadow-lg">
        <button class="px-6 py-3 text-white hover:bg-[#001f54] transition">Projects</button>
        <button class="px-6 py-3 text-white hover:bg-[#001f54] transition">About</button>
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