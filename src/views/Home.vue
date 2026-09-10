<template>
  <Header />

  <!-- Hero -->
  <div class="pt-28 pb-16 flex justify-center px-4">
    <div class="flex flex-col items-center gap-4 text-center">
      <img src="../assets/img/cadu.svg" alt="André Rodrigues" class="w-36 sm:w-44 h-auto rounded-lg animate-float" />
      <div class="text-[20px] sm:text-[24px] font-medium text-[#676767] animate-fade-in-up stagger-1">
        Full Stack Dev<br />& UX/UI Designer
      </div>
      <div class="text-[14px] sm:text-[15px] font-medium text-[#676067] animate-fade-in-up stagger-2">
        Transforming ideas into intuitive <span class="font-bold">digital</span> experiences
      </div>
    </div>
  </div>

  <!-- Featured Projects -->
  <div class="flex flex-col gap-6 px-4">
    <div class="text-[16px] sm:text-[22px] font-semibold text-black animate-fade-in-left">
      &lt;Projects&gt;
    </div>

    <div class="flex flex-col gap-5 max-w-5xl mx-auto w-full">
      <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
    </div>

    <div class="flex justify-end max-w-5xl mx-auto w-full">
      <router-link to="/projects"
        class="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white text-[13px] font-medium hover:from-gray-800 hover:to-gray-950 hover:-translate-y-0.5 transition-all duration-300">
        See All Projects
        <img src="../assets/img/arrow.svg" class="h-4 w-4" alt="" />
      </router-link>
    </div>

    <div class="text-right text-[16px] sm:text-[22px] font-semibold text-black animate-fade-in-right">
      &lt;/Projects&gt;
    </div>
  </div>

  <!-- About Me -->
  <div class="flex flex-col gap-6 px-4 mt-8">
    <div class="text-[16px] sm:text-[22px] font-semibold text-black animate-fade-in-left">
      &lt;About Me&gt;
    </div>

    <div class="flex flex-col lg:flex-row gap-8 items-center max-w-5xl mx-auto w-full">
      <!-- Profile photo with spinning icons -->
      <div class="relative flex-shrink-0 w-56 h-56 flex items-center justify-center">
        <img src="../assets/img/cadu.png" alt="André Rodrigues" class="w-full h-full rounded-full object-cover" />
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center animate-spin-slow">
          <div v-for="(icon, index) in icons" :key="icon.src"
            :style="{ transform: `rotate(${(360 / icons.length) * index}deg) translate(110px) rotate(-${(360 / icons.length) * index}deg)` }"
            class="absolute">
            <img :src="icon.src" :alt="icon.alt" class="w-7 h-7 rounded-md animate-spin-reverse-slow" />
          </div>
        </div>
      </div>

      <!-- Bio -->
      <div class="flex flex-col gap-3 w-full">
        <div class="p-5 rounded-3xl bg-white border border-gray-200 shadow-md">
          <div class="text-[17px] sm:text-[19px] font-semibold text-[#434343]">André Rodrigues</div>
          <div class="text-[13px] sm:text-[14px] font-medium text-[#676767] mt-0.5">Full Stack Dev & UX/UI Designer
          </div>
        </div>
        <div class="p-5 rounded-3xl bg-white border border-gray-200 shadow-md">
          <p class="text-[13px] sm:text-[14px] font-medium text-[#434343] leading-relaxed">
            Hi, my name is André Rodrigues, I'm 22 years old. I recently graduated with a Bachelor's Degree
            in Technologies and Information Systems for the Web from P.Porto. During my studies and
            curricular internship, I built full-stack web and mobile projects.
            I'm now looking for opportunities as a Software Engineer, where I can go deep on backend
            and system architecture, keep growing into AI-integrated products, and work alongside
            people who take their craft seriously.
          </p>
        </div>
        <div class="flex justify-end">
          <router-link to="/aboutme"
            class="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white text-[13px] font-medium hover:from-gray-800 hover:to-gray-950 hover:-translate-y-0.5 transition-all duration-300">
            More About Me
            <img src="../assets/img/arrow.svg" class="h-4 w-4" alt="" />
          </router-link>
        </div>
      </div>
    </div>

    <div class="text-right text-[16px] sm:text-[22px] font-semibold text-black animate-fade-in-right">
      &lt;/About Me&gt;
    </div>
  </div>

  <Footer />
</template>

<script setup>
import { computed } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects.js'

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

const featuredProjects = computed(() => projects.filter(p => p.id === 2 || p.id === 4))

const icons = [
  { src: vueIcon, alt: 'Vue' },
  { src: figmaIcon, alt: 'Figma' },
  { src: nodeIcon, alt: 'Node' },
  { src: expressIcon, alt: 'Express' },
  { src: reactNativeIcon, alt: 'React' },
  { src: mongoIcon, alt: 'Mongo' },
  { src: javascriptIcon, alt: 'JavaScript' },
  { src: typescriptIcon, alt: 'TypeScript' },
  { src: postgreIcon, alt: 'PostgreSQL' },
  { src: pythonIcon, alt: 'Python' },
]
</script>
