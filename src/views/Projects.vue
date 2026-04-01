<template>
    <Header></Header>
    <div class="flex flex-row justify-between items-center pt-[80px] pb-[64px] px-4">
        <button @click="goBack" class="cursor-pointer flex items-center text-[#434343] hover:text-[#000] font-medium">
            <img src="../assets/img/arrow-left.svg" alt="Back" class="w-4 h-4 mr-1" />
            Back
        </button>

        <div class="text-[#000] text-[16px] font-medium">&lt;Projects&gt;</div>
    </div>

    <div class="flex flex-col gap-4">

        <!-- Habtracker Project -->
        <div class="flex flex-col gap-8 max-w-5xl mx-auto">
            <div
                class="group relative flex flex-col lg:flex-row items-center gap-6 lg:gap-10 p-6 lg:p-10 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">

                <!-- GitHub Icon (top-right corner) -->
                <a href="https://github.com/AndreRodrigues884/Habtracker" target="_blank" rel="noopener noreferrer"
                    class="absolute bottom-5 right-5 text-gray-500 hover:text-gray-800 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path
                            d="M12 .5C5.37.5 0 5.87 0 12.52c0 5.3 3.438 9.795 8.205 11.385.6.11.82-.26.82-.58v-2.17c-3.338.73-4.03-1.61-4.03-1.61-.55-1.42-1.34-1.8-1.34-1.8-1.09-.76.08-.75.08-.75 1.2.09 1.83 1.24 1.83 1.24 1.07 1.86 2.8 1.32 3.49 1.01.11-.79.42-1.32.76-1.63-2.67-.31-5.48-1.37-5.48-6.08 0-1.34.47-2.44 1.24-3.3-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.25.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.58 3.3-1.25 3.3-1.25.66 1.69.24 2.94.12 3.25.77.86 1.24 1.96 1.24 3.3 0 4.73-2.82 5.76-5.5 6.07.43.37.82 1.1.82 2.23v3.3c0 .32.22.7.83.58C20.56 22.31 24 17.81 24 12.52 24 5.87 18.63.5 12 .5z" />
                    </svg>
                </a>

                <!-- Image -->
                <div class="w-full lg:w-72 h-48 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src="../assets/img/project2.png" alt="HabTracker App"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                <!-- Content -->
                <div class="flex flex-col justify-between gap-5 w-full">
                    <div class="flex flex-col gap-3">
                        <h3 class="text-[22px] lg:text-[26px] font-semibold text-gray-800">
                            HabTracker – Gamified Habit Tracking App
                        </h3>
                        <p class="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed">
                            HabTracker is a mobile app that helps users build and maintain consistent habits through
                            gamification.
                            Users can create recurring habits, mark them as completed, and track their progress over
                            time — making self-improvement both fun and rewarding.
                        </p>
                    </div>

                    <!-- Tech stack -->
                    <div class="flex flex-wrap gap-2">
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            React Native
                        </span>
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            Node.js
                        </span>
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            MongoDB
                        </span>
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            TypeScript
                        </span>
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            JavaScript
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Button -->
        <div class="flex justify-end mt-3">
            <button @click="goToDetails('habtracker')"
                class="flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white text-[14px] font-medium hover:from-gray-800 hover:to-gray-950 hover:-translate-y-0.5 transition-all duration-300">
                <span class="mr-2">View Project Details</span>
            </button>
        </div>

        <!-- Habtracker Project -->

        <!-- Ticket-Flow Project -->
        <div class="flex flex-col gap-8 max-w-5xl mx-auto">
            <div
                class="group relative flex flex-col lg:flex-row items-center gap-6 lg:gap-10 p-6 lg:p-10 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">

                <a href="https://github.com/AndreRodrigues884/ticket-flow" target="_blank" rel="noopener noreferrer"
                    class="absolute bottom-5 right-5 text-gray-500 hover:text-gray-800 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path
                            d="M12 .5C5.37.5 0 5.87 0 12.52c0 5.3 3.438 9.795 8.205 11.385.6.11.82-.26.82-.58v-2.17c-3.338.73-4.03-1.61-4.03-1.61-.55-1.42-1.34-1.8-1.34-1.8-1.09-.76.08-.75.08-.75 1.2.09 1.83 1.24 1.83 1.24 1.07 1.86 2.8 1.32 3.49 1.01.11-.79.42-1.32.76-1.63-2.67-.31-5.48-1.37-5.48-6.08 0-1.34.47-2.44 1.24-3.3-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.25.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.58 3.3-1.25 3.3-1.25.66 1.69.24 2.94.12 3.25.77.86 1.24 1.96 1.24 3.3 0 4.73-2.82 5.76-5.5 6.07.43.37.82 1.1.82 2.23v3.3c0 .32.22.7.83.58C20.56 22.31 24 17.81 24 12.52 24 5.87 18.63.5 12 .5z" />
                    </svg>
                </a>

                <div class="relative w-full lg:w-72 h-48 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50">
                    <img src="../assets/img/ticketflow.png" alt="Ticket Engine Project Preview"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>

                <div class="flex flex-col justify-between gap-5 w-full">
                    <div class="flex flex-col gap-3">
                        <h3 class="text-[22px] lg:text-[26px] font-semibold text-gray-800">
                            Ticket Engine – High-Concurrency Ticketing System
                        </h3>
                        <p class="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed">
                            A robust ticketing platform designed for high-traffic events. It utilizes message queuing to
                            handle
                            massive booking spikes, ensuring system resilience and data integrity through a distributed
                            architecture and containerized services.
                        </p>
                    </div>

                    <div class="flex flex-wrap gap-2">
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            Vue.js 3
                        </span>
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            Node.js + Express + TypeScript
                        </span>
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] font-medium rounded-full border border-gray-200">
                            RabbitMQ (Queuing)
                        </span>
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            MongoDB
                        </span>
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            Docker
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Button -->
        <div class="flex justify-end mt-3">
            <button @click="goToDetails('ticket_flow')"
                class="flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white text-[14px] font-medium hover:from-gray-800 hover:to-gray-950 hover:-translate-y-0.5 transition-all duration-300">
                <span class="mr-2">View Project Details</span>
            </button>
        </div>

        <!-- /Ticket-Flow Project -->

        <!-- CV BUILDER Project -->
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
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            Vue.js
                        </span>
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            Node.js + Express
                        </span>
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            OpenAI API
                        </span>
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            PostgreSQL + Prisma
                        </span>
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            Docker + GitHub Actions
                        </span>
                    </div>

                    <!-- Button -->
                </div>
            </div>
        </div>
        <div class="flex justify-end mt-3">
            <button @click="goToDetails('cv_builder')"
                class="flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white text-[14px] font-medium hover:from-gray-800 hover:to-gray-950 hover:-translate-y-0.5 transition-all duration-300">
                <span class="mr-2">View Project Details</span>
            </button>
        </div>
        <!-- /CV Builder Project -->

        <!-- Bitesy Project -->
        <div class="flex flex-col gap-8 max-w-5xl mx-auto">
            <div
                class="group relative flex flex-col lg:flex-row items-center gap-6 lg:gap-10 p-6 lg:p-10 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">

                <!-- Behance Icon (top-right corner) -->
                <a href="https://www.behance.net/gallery/217586327/Bitesy-Dieting-App" target="_blank"
                    rel="noopener noreferrer" class="absolute bottom-5 right-5">
                    <img class="w-6 h-6 z-50" src="../assets/img/be.svg" alt="" srcset="">


                </a>

                <!-- Image -->
                <div class="relative w-full lg:w-72 h-48 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src="../assets/img/project1.png" alt="Bitesy App Preview"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                <!-- Content -->
                <div class="flex flex-col justify-between gap-5 w-full">
                    <div class="flex flex-col gap-3">
                        <h3 class="text-[22px] lg:text-[26px] font-semibold text-gray-800">
                            Bitesy – UI/UX Design Project
                        </h3>
                        <p class="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed">
                            Bitesy is a modern UI/UX design project for a nutrition app that helps users discover and
                            follow personalized
                            diets tailored to their health goals, preferences, and lifestyle. It includes meal plan
                            recommendations,
                            dynamic benefits tracking, and user-centered design for intuitive interaction.
                        </p>
                    </div>

                    <!-- Tech stack -->
                    <div class="flex flex-wrap gap-2">
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            Personalized Nutrition
                        </span>
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            Health Goals
                        </span>
                        <span
                            class="px-3 py-1.5 bg-gray-100 text-gray-700 text-[12px] rounded-full border border-gray-200">
                            Figma
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Bitesy Project -->



    </div>

    <Footer></Footer>
</template>

<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

import { useRouter } from 'vue-router'

const router = useRouter()
function goBack() {
    router.push("/") // fallback para home
}

function goToDetails(slug) {
    router.push({ name: 'ProjectDetails', params: { slug } })
}
</script>