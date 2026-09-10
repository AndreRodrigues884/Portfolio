<template>
  <Header></Header>

  <div class="flex flex-row justify-between items-center pt-[80px] pb-[64px] px-4">
    <button @click="goBack" class="cursor-pointer flex items-center text-[#434343] hover:text-[#000] font-medium">
      <img src="../assets/img/arrow-left.svg" alt="Back" class="w-4 h-4 mr-1" />
      Back
    </button>
    <div class="text-[#000] text-[16px] font-medium">&lt;About Me&gt;</div>
  </div>

  <!-- About me -->
  <div class="flex flex-col gap-10">
    <div class="flex flex-col lg:flex-row gap-8 items-center px-4">
      <!-- Imagem com ícones circulares -->
      <div class="relative flex-shrink-0 w-full lg:w-64 h-64 flex items-center justify-center">
        <img src="../assets/img/cadu.png" alt="Foto de perfil"
          class="lg:w-full h-full rounded-full object-cover animate-float" />
      </div>

      <!-- Conteúdo -->
      <div class="flex flex-col gap-4 w-full">
        <div
          class="group relative flex flex-col lg:flex-col items-start gap-2 lg:gap-2 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md">
          <div class="text-[18px] sm:text-[20px] font-medium text-[#434343]">André Rodrigues</div>
          <div class="text-[14px] sm:text-[16px] font-medium text-[#434343]">Full Stack Dev & UX/UI Designer</div>
        </div>

        <div
          class="group relative flex flex-col lg:flex-row items-start gap-2 lg:gap-6 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md">
          <div class="text-[12px] sm:text-[14px] font-medium text-[#434343] leading-relaxed">
            Hi, my name is André Rodrigues, I'm 22 years old. I recently graduated with a Bachelor's Degree
            in Technologies and Information Systems for the Web from P.Porto. During my studies and
            curricular internship, I built full-stack web and mobile projects, including Learnly, an
            AI-powered micro-learning platform with a complete RAG pipeline and LLM integration.
            I'm now looking for opportunities as a Software Engineer, where I can go deep on backend
            and system architecture, keep growing into AI-integrated products, and work alongside
            people who take their craft seriously.
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- What I studied -->
  <div class="text-[#000] text-[16px] pt-20 pb-4 font-medium px-4 animate-fade-in-left">
    &lt;What I Studied&gt;
  </div>
  <div class="flex flex-row items-start px-4">
    <div class="flex-1 flex flex-col gap-4">
      <div
        class="group relative flex flex-col lg:flex-col items-start gap-2 lg:gap-6 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md">
        <div class="flex flex-row items-start">
          <span class="text-[#434343] text-[12px] font-regular">out 2021 - jul 2023</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-[#000000] text-[14px] sm:text-[16px] font-bold">Higher Technical Course in Design and
            Technologies for Mobile Applications</span>
          <span class="text-[#434343] text-[12px] sm:text-[14px] font-normal">ESMAD - Superior School of Media Arts and
            Design</span>
        </div>
      </div>
      <div
        class="group relative flex flex-col lg:flex-col items-start gap-2 lg:gap-6 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md">
        <div class="flex flex-row items-start">
          <span class="text-[#434343] text-[12px] font-regular">set 2023 - jul 2026</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-[#000000] text-[14px] sm:text-[16px] font-bold">Bachelor's Degree in Web Information Systems
            and
            Technologies</span>
          <span class="text-[#434343] text-[12px] sm:text-[14px] font-normal">ESMAD - Superior School of Media Arts and
            Design</span>
        </div>
      </div>

    </div>
  </div>
  <div class="w-full flex justify-end pt-4">
    <div class="text-[#000] text-[16px] font-medium">
      &lt;/What I Studied&gt;
    </div>
  </div>

  <!-- Skills -->
  <div class="text-[#000] text-[16px] pt-20 pb-8 font-medium px-4 animate-fade-in-left">
    &lt;Tech Skills&gt;
  </div>

  <div class="w-full flex flex-col gap-4 px-4">
    <!-- Linha 1 -->
    <div class="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4">
      <div
        class="flex flex-col lg:flex-col items-center gap-2 lg:gap-2 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover-lift smooth-transition">
        <img src="../assets/img/react.svg" class="w-8 h-8" alt="">
        <span class="text-[12px] sm:text-[14px]">React</span>
      </div>
      <div
        class="flex flex-col lg:flex-col items-center gap-2 lg:gap-2 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover-lift smooth-transition">
        <img src="../assets/img/vue.svg" class="w-8 h-8" alt="">
        <span class="text-[12px] sm:text-[14px]">Vue JS</span>
      </div>
      <div
        class="flex flex-col lg:flex-col items-center gap-2 lg:gap-2 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover-lift smooth-transition">
        <img src="../assets/img/express.svg" class="w-8 h-8" alt="">
        <span class="text-[12px] sm:text-[14px]">Express JS</span>
      </div>
      <div
        class="flex flex-col lg:flex-col items-center gap-2 lg:gap-2 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover-lift smooth-transition">
        <img src="../assets/img/node.svg" class="w-8 h-8" alt="">
        <span class="text-[12px] sm:text-[14px]">Node JS</span>
      </div>
      <div
        class="flex flex-col lg:flex-col items-center gap-2 lg:gap-2 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover-lift smooth-transition">
        <img src="../assets/img/mongo.svg" class="w-8 h-8" alt="">
        <span class="text-[12px] sm:text-[14px]">Mongo DB</span>
      </div>
      <div
        class="flex flex-col lg:flex-col items-center gap-2 lg:gap-2 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover-lift smooth-transition">
        <img src="../assets/img/typescript.svg" class="w-8 h-8" alt="">
        <span class="text-[12px] sm:text-[14px]">Typescript</span>
      </div>
      <div
        class="flex flex-col lg:flex-col items-center gap-2 lg:gap-2 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover-lift smooth-transition">
        <img src="../assets/img/nuxtIcon.svg" class="w-8 h-8" alt="">
        <span class="text-[12px] sm:text-[14px]">Nuxt</span>
      </div>
    </div>

    <!-- Linha 2 -->
    <div class="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4">
      <div
        class="flex flex-col lg:flex-col items-center gap-2 lg:gap-2 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover-lift smooth-transition">
        <img src="../assets/img/postgre.svg" class="w-8 h-8" alt="">
        <span class="text-[12px] sm:text-[14px]">Postgre SQL</span>
      </div>
      <div
        class="flex flex-col lg:flex-col items-center gap-2 lg:gap-2 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover-lift smooth-transition">
        <img src="../assets/img/prisma.svg" class="w-8 h-8" alt="">
        <span class="text-[12px] sm:text-[14px]">Prisma</span>
      </div>
      <div
        class="flex flex-col lg:flex-col items-center gap-2 lg:gap-2 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover-lift smooth-transition">
        <img src="../assets/img/fast.svg" class="w-8 h-8" alt="">
        <span class="text-[12px] sm:text-[14px]">Fast API</span>
      </div>
      <div
        class="flex flex-col lg:flex-col items-center gap-2 lg:gap-2 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover-lift smooth-transition">
        <img src="../assets/img/js.svg" class="w-8 h-8" alt="">
        <span class="text-[12px] sm:text-[14px]">Javascript</span>
      </div>
      <div
        class="flex flex-col lg:flex-col items-center gap-2 lg:gap-2 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover-lift smooth-transition">
        <img src="../assets/img/python.svg" class="w-8 h-8" alt="">
        <span class="text-[12px] sm:text-[14px]">Python</span>
      </div>
      <div
        class="flex flex-col lg:flex-col items-center gap-2 lg:gap-2 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover-lift smooth-transition">
        <img src="../assets/img/docker.svg" class="w-8 h-8" alt="">
        <span class="text-[12px] sm:text-[14px]">Docker</span>
      </div>
      <div
        class="flex flex-col lg:flex-col items-center gap-2 lg:gap-2 p-4 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover-lift smooth-transition">
        <img src="../assets/img/figma.svg" class="w-8 h-8" alt="">
        <span class="text-[12px] sm:text-[14px]">Figma</span>
      </div>
    </div>
  </div>

  <div class="w-full flex justify-end pt-8">
    <div class="text-[#000] text-[16px] font-medium">
      &lt;/Tech Skills&gt;
    </div>
  </div>

  <Footer></Footer>
</template>

<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

import { useRouter } from 'vue-router'

const router = useRouter()
function goBack() {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push("/") // fallback para home
  }
}
</script>