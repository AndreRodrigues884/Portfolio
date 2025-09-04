<template>
  <Header></Header>
  <div class="pt-[80px] pb-[80px] flex justify-center">
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center gap-5">
        <div class="flex flex-col items-center gap-2.5">
          <img src="../assets/img/cadu.svg" alt="Exemplo" class="w-50 h-auto rounded-lg" />
          <div class="text-center text-[24px] font-medium text-[#676767]">
            Full Stack Dev<br>
            & UX/UI Designer
          </div>
          <div class="text-center text-[16px] font-medium text-[#676067]">
            Transforming ideas into intuitive <span class="font-bold">digital</span> experiences
          </div>

        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col gap-8">
     <div class="text-left text-[16px] sm:text-[24px] font-semibold text-[#000000] px-4">
      &lt;Projects&gt;
    </div>
    <!--  1º Project -->
  <div
  class="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 px-4 lg:px-10 py-8 lg:py-10 rounded-[24px] border border-[#434343] bg-[#EDEDED]">

  <!-- Imagem (100% no mobile + iPad, fixa no desktop) -->
  <div class="w-full lg:w-64 lg:h-48 rounded-[20px] overflow-hidden flex-shrink-0">
    <img src="../assets/img/project1.png" alt="Exemplo" class="w-full h-full object-cover" />
  </div>

  <!-- Conteúdo -->
  <div class="flex flex-col gap-4 lg:gap-6 w-full lg:w-auto">
    <div class="flex flex-col gap-3">
      <div class="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#434343]">
        Bitesy - UI/UX Design Project
      </div>
      <div class="text-[12px] sm:text-[14px] lg:text-[15px] font-medium text-[#676067] leading-relaxed">
        Bitesy is an application designed to help users
        discover and follow personalized diets tailored to their health goals, preferences, and lifestyle.
        Through an initial questionnaire, it recommends meal plans, suggests the ideal duration for each diet,
        and highlights their main benefits.
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row gap-2 sm:gap-4 flex-wrap">
          <div class="text-[#676767] font-regular text-[10px] sm:text-[12px] px-3 py-2 border border-[#676767] rounded-full text-center">
            Personalized Nutrition
          </div>
          <div class="text-[#676767] font-regular text-[10px] sm:text-[12px] px-3 py-2 border border-[#676767] rounded-full text-center">
            Health Goals
          </div>
        </div>
        <div class="w-28">
          <div class="text-[#676767] font-regular text-[10px] sm:text-[12px] px-2 py-2 border border-[#676767] rounded-full text-center">
            UI/UX Design
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    <!--  2º Project -->
    <div class="flex flex-col gap-6">
      <div
        class="flex flex-col lg:flex-row items-center gap-8 px-10 py-10 rounded-[24px] border border-[#434343] bg-[#EDEDED]">

        <!-- Imagem com tamanho fixo em desktop e responsivo em mobile -->
        <div class="w-full lg:w-64 lg:h-48 rounded-[20px] overflow-hidden flex-shrink-0">
          <img src="../assets/img/project2.png" alt="Exemplo" class="w-full h-full object-cover" />
        </div>

        <!-- Conteúdo -->
        <div class="flex flex-col gap-6 w-full lg:w-auto">
          <div class="flex flex-col gap-3">
            <div class="text-[24px] font-semibold text-[#434343]">
              HabTracker - Full-Stack Development & UI/UX Design Project
            </div>
            <div class="text-[12px] font-medium text-[#676067]">
              HabTracker is a mobile application designed to help users build and maintain consistent habits through
              gamification. Users can create recurring habits, mark them as completed, and track their progress over
              time.
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex flex-row gap-4 flex-wrap">
                <div class=" text-[#676767] font-regular text-[10px] px-3 py-2 border border-[#676767] rounded-full text-center">
                  Habit Tracking
                </div>
                <div class=" text-[#676767] font-regular text-[10px] px-3 py-2 border border-[#676767] rounded-full text-center">
                  Gamification
                </div>
              </div>
              <div class="w-28">
                <div class=" text-[#676767] font-regular text-[10px] px-2 py-2 border border-[#676767] rounded-full text-center">
                  Full Stack Project
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="w-full flex justify-end">
        <button class="flex items-center px-4 py-3 bg-[#676767] text-white rounded-[50px] cursor-pointer">
          <router-link to="/projects" class="mr-2 font-regular text-[12px]">See More Projects</router-link>
          <img src="../assets/img/arrow.svg" alt="Menu Icon" class="h-4 w-4" />
        </button>
      </div>


       <div class="text-right text-[16px] sm:text-[24px] font-semibold text-[#000000] px-4">
        &lt;/Projects&gt;
      </div>
    </div>

     <div class="text-left text-[16px] sm:text-[24px] font-semibold text-[#000000] px-4">
      &lt;About Me&gt;
    </div>

    <div class="flex flex-col lg:flex-row gap-8 items-center">
      <!-- Imagem com ícones circulares -->
      <div class="relative flex-shrink-0 w-full lg:w-64 h-64 flex items-center justify-center">
        <img src="../assets/img/cadu.png" alt="Foto de perfil" class="lg:w-full h-full rounded-full object-cover" />
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center animate-spin-slow">
          <div v-for="(icon, index) in icons" :key="icon.src" :style="{
            transform: `rotate(${(360 / icons.length) * index}deg) translate(140px) rotate(-${(360 / icons.length) * index}deg)`
          }" class="absolute">
            <img :src="icon.src" :alt="icon.alt" class="w-8 h-8 rounded-md animate-spin-reverse-slow" />
          </div>
        </div>
      </div>

      <!-- Conteúdo -->
      <div class="flex flex-col gap-4 w-full">
        <div class="flex flex-col border-2 border-[#434343] bg-[#ffffff] p-4 rounded-[24px] w-full">
          <div class="text-[20px] font-medium text-[#434343]">André Rodrigues</div>
          <div class="text-[16px] font-medium text-[#434343]">Full Stack Dev & UX/UI Designer</div>
        </div>

        <div class="flex flex-col border-2 border-[#434343] bg-[#ffffff] p-4 rounded-[24px] w-full">
          <div class="text-[14px] font-medium text-[#434343]">
            Hi, my name is André Rodrigues, I’m 21 years old. I’m currently in my third year of a Bachelor's Degree in
            Technologies and Information Systems for the Web. Throughout my studies, I’ve worked on design and web
            development projects in small teams, learning to manage tight deadlines and deliver clear results. I’m now
            looking for an internship or junior role where I can apply my programming and UI design skills, contribute
            to a
            company’s growth, and continue developing professionally and personally.
          </div>
        </div>

        <div class="w-full flex justify-end">
          <button class="flex items-center px-4 py-3 bg-[#676767] text-white rounded-[50px] cursor-pointer">
            <router-link to="/aboutme" class="mr-2 font-regular text-[12px]">More About Me</router-link>
            <img src="../assets/img/arrow.svg" alt="Menu Icon" class="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>

    <div class="text-right text-[16px] sm:text-[24px] font-semibold text-[#000000] px-4">
      &lt;/About Me&gt;
    </div>
  </div>

  <Footer></Footer>



</template>

<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

import vueIcon from '../assets/img/vue.png'
import figmaIcon from '../assets/img/figma.png'
import nodeIcon from '../assets/img/node.jpg'
import expressIcon from '../assets/img/express.png'
import tailwindIcon from '../assets/img/tailwind.png'
import mongoIcon from '../assets/img/mongo.png'
import blenderIcon from '../assets/img/blender.png'
import notionIcon from '../assets/img/notion.png'
import reactIcon from '../assets/img/react.png'

const icons = [
  { src: vueIcon, alt: 'Vue Icon' },
  { src: figmaIcon, alt: 'Figma Icon' },
  { src: nodeIcon, alt: 'Node Icon' },
  { src: expressIcon, alt: 'Express Icon' },
  { src: tailwindIcon, alt: 'Tailwind Icon' },
  { src: mongoIcon, alt: 'Mongo Icon' },
  { src: blenderIcon, alt: 'Blender Icon' },
  { src: notionIcon, alt: 'Notion Icon' },
  { src: reactIcon, alt: 'React Native' },
]
</script>


<style scoped>
/* Esconde scrollbar horizontal do carrossel no Chrome, Firefox e Edge */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
