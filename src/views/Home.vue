<template>
  <Header></Header>
  <div class="pt-[80px] pb-[80px] flex justify-center">
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center gap-5">
        <div class="flex flex-col items-center gap-2.5">
          <img src="../assets/img/cadu.svg" alt="Exemplo" class="w-40 sm:w-50 h-auto rounded-lg animate-float" />
          <div class="text-center text-[20px] sm:text-[24px] font-medium text-[#676767] animate-fade-in-up stagger-1">
            Full Stack Dev<br>
            & UX/UI Designer
          </div>
          <div
            class="text-center text-[14px] sm:text-[16px] font-medium text-[#676067] px-4 animate-fade-in-up stagger-2">
            Transforming ideas into intuitive <span class="font-bold">digital</span> experiences
          </div>

        </div>
      </div>
    </div>
  </div>

  <!-- <ChatBot /> -->


  <div class="flex flex-col gap-8">
    <div class="text-left text-[16px] sm:text-[24px] font-semibold text-[#000000] px-4 animate-fade-in-left">
      &lt;Projects&gt;
    </div>

    <!--  Habtracker -->
    <div class="flex flex-col gap-8 max-w-5xl mx-auto">
      <div
        class="group relative flex flex-col lg:flex-row items-center gap-6 lg:gap-10 p-6 lg:p-10 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">

        <!-- Imagem com tamanho fixo em desktop e responsivo em mobile -->
        <div class="w-full lg:w-64 lg:h-48 rounded-[20px] overflow-hidden flex-shrink-0">
          <img src="../assets/img/project2.png" alt="Exemplo" class="w-full h-full object-cover" />
        </div>

        <!-- Conteúdo -->
        <div class="flex flex-col gap-4 lg:gap-6 w-full lg:w-auto">
          <div class="flex flex-col gap-3">
            <div class="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-[#434343]">
              HabTracker - Full-Stack Development & UI/UX Design Project
            </div>
            <div class="text-[12px] sm:text-[14px] lg:text-[15px] font-medium text-[#676067] leading-relaxed">
              HabTracker is a mobile application designed to help users build and maintain consistent habits through
              gamification. Users can create recurring habits, mark them as completed, and track their progress over
              time.
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex flex-row gap-2 sm:gap-4 flex-wrap">
                <div
                  class=" text-[#676767] font-regular text-[10px] sm:text-[12px] px-3 py-2 border border-[#676767] rounded-full text-center">
                  React Native
                </div>
                <div
                  class=" text-[#676767] font-regular text-[10px] sm:text-[12px] px-3 py-2 border border-[#676767] rounded-full text-center">
                  Node.js
                </div>
              </div>
              <div class="w-28 flex flex-row gap-2">
                <div
                  class=" text-[#676767] font-regular text-[10px] sm:text-[12px] px-2 py-2 border border-[#676767] rounded-full text-center">
                  MongoDB
                </div>
                <div
                  class=" text-[#676767] font-regular text-[10px] sm:text-[12px] px-2 py-2 border border-[#676767] rounded-full text-center">
                  TypeScript
                </div>
                <div
                  class=" text-[#676767] font-regular text-[10px] sm:text-[12px] px-2 py-2 border border-[#676767] rounded-full text-center">
                  JavaScript
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>



    </div>



    <div class="flex flex-col gap-8 max-w-5xl mx-auto">
      <div
        class="group relative flex flex-col lg:flex-row items-center gap-6 lg:gap-10 p-6 lg:p-10 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">

        <!-- GitHub Icon (top-right corner) -->
        <a href="https://github.com/AndreRodrigues884/cv_builder" target="_blank" rel="noopener noreferrer"
          class="absolute bottom-5 right-5 text-gray-500 hover:text-gray-800 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path
              d="M12 .5C5.37.5 0 5.87 0 12.52c0 5.3 3.438 9.795 8.205 11.385.6.11.82-.26.82-.58v-2.17c-3.338.73-4.03-1.61-4.03-1.61-.55-1.42-1.34-1.8-1.34-1.8-1.09-.76.08-.75.08-.75 1.2.09 1.83 1.24 1.83 1.24 1.07 1.86 2.8 1.32 3.49 1.01.11-.79.42-1.32.76-1.63-2.67-.31-5.48-1.37-5.48-6.08 0-1.34.47-2.44 1.24-3.3-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.25.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.58 3.3-1.25 3.3-1.25.66 1.69.24 2.94.12 3.25.77.86 1.24 1.96 1.24 3.3 0 4.73-2.82 5.76-5.5 6.07.43.37.82 1.1.82 2.23v3.3c0 .32.22.7.83.58C20.56 22.31 24 17.81 24 12.52 24 5.87 18.63.5 12 .5z" />
          </svg>
        </a>

        <!-- Image -->
        <div class="relative w-full lg:w-72 h-48 rounded-2xl overflow-hidden flex-shrink-0">
          <img src="../assets/img/cvbuilder_img.png" alt="CV Builder Project Preview"
            class="w-full lg:h-full object-contain group-hover:scale-105 transition-transform duration-500" />

          <!-- Caption -->
          <div
            class="absolute bottom-0 left-0 w-full text-center uppercase bg-gray-700/80 text-white text-[12px] tracking-wide py-1">
            In Development
          </div>
        </div>

        <!-- Content -->
        <div class="flex flex-col justify-between gap-5 w-full">
          <div class="flex flex-col gap-3">
            <h3 class="text-[22px] lg:text-[26px] font-semibold text-gray-800">
              CV Builder – AI-Powered Resume Generator
            </h3>
            <p class="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed">
              CV Builder is a full-stack web application that helps users create and customize
              professional resumes
              using AI-powered features. It generates ATS-optimized resumes, enhances descriptions, and
              suggests skills
              tailored to specific job positions.
            </p>
          </div>

          <!-- Tech stack -->
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
              Vue.js
            </span>
            <span class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
              Node.js + Express
            </span>
            <span class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
              OpenAI API
            </span>
            <span class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
              PostgreSQL + Prisma
            </span>
            <span class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
              Docker + GitHub Actions
            </span>
          </div>

          <!-- Button -->
        </div>
      </div>
    </div>

    <div class="w-full flex justify-end">
      <button
        class="flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white text-[14px] font-medium hover:from-gray-800 hover:to-gray-950 hover:-translate-y-0.5 transition-all duration-300">
        <router-link to="/projects" class="mr-2 font-regular text-[12px]">See More Projects</router-link>
        <img src="../assets/img/arrow.svg" alt="Menu Icon" class="h-4 w-4" />
      </button>
    </div>


    <div class="text-right text-[16px] sm:text-[24px] font-semibold text-[#000000] px-4 animate-fade-in-right">
      &lt;/Projects&gt;
    </div>




    <div class="text-left text-[16px] sm:text-[24px] font-semibold text-[#000000] px-4 animate-fade-in-left">
      &lt;About Me&gt;
    </div>

    <div class="flex flex-col lg:flex-row gap-8 items-center px-4">
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
        <div
          class="group relative flex flex-col lg:flex-col items-start gap-2 lg:gap-2 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md">
          <div class="text-[18px] sm:text-[20px] font-medium text-[#434343]">André Rodrigues</div>
          <div class="text-[14px] sm:text-[16px] font-medium text-[#434343]">Full Stack Dev & UX/UI Designer</div>
        </div>

        <div
          class="group relative flex flex-col lg:flex-row items-start gap-2 lg:gap-6 p-6 lg:p-6 rounded-3xl bg-white border border-gray-200 shadow-md">
          <div class="text-[12px] sm:text-[14px] font-medium text-[#434343] leading-relaxed">
            Hi, my name is André Rodrigues, I'm 21 years old. I'm currently in my third year of a Bachelor's Degree in
            Technologies and Information Systems for the Web. Throughout my studies, I've worked on design and web
            development projects in small teams, learning to manage tight deadlines and deliver clear results. I'm now
            looking for an internship or junior role where I can apply my programming and UI design skills, contribute
            to a
            company's growth, and continue developing professionally and personally.
          </div>
        </div>

        <div class="w-full flex justify-end">
          <button
            class="flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white text-[14px] font-medium hover:from-gray-800 hover:to-gray-950 hover:-translate-y-0.5 transition-all duration-300">
            <router-link to="/aboutme" class="mr-2 font-regular text-[12px]">More About Me</router-link>
            <img src="../assets/img/arrow.svg" alt="Menu Icon" class="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>

    <div class="text-right text-[16px] sm:text-[24px] font-semibold text-[#000000] px-4 animate-fade-in-right">
      &lt;/About Me&gt;
    </div>
  </div>

  <Footer></Footer>



</template>

<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
/* import ChatBot from '../components/ChatBot.vue' */

import figmaIcon from '../assets/img/figma.png'
import reactNativeIcon from '../assets/img/react.png'
import expressIcon from '../assets/img/express.png'
import nodeIcon from '../assets/img/node.jpg'
import mongoIcon from '../assets/img/mongo.png'
import typescriptIcon from '../assets/img/typescript.svg'
import javascriptIcon from '../assets/img/js.svg'
import vueIcon from '../assets/img/vue.svg'
import postgreIcon from '../assets/img/postgre.svg'
import pythonIcon from '../assets/img/python.svg'

const icons = [
  { src: vueIcon, alt: 'Vue Icon' },
  { src: figmaIcon, alt: 'Figma Icon' },
  { src: nodeIcon, alt: 'Node Icon' },
  { src: expressIcon, alt: 'Express Icon' },
  { src: reactNativeIcon, alt: 'Tailwind Icon' },
  { src: mongoIcon, alt: 'Mongo Icon' },
  { src: javascriptIcon, alt: 'JavaScript Icon' },
  { src: typescriptIcon, alt: 'TypeScript Icon' },
  { src: postgreIcon, alt: 'React Native' },
  { src: pythonIcon, alt: 'Python' },
]
</script>


<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
