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
        <div class="flex flex-col gap-6">
            <div
                class="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 px-4 lg:px-10 py-8 lg:py-10 rounded-[24px] border border-[#434343] bg-[#EDEDED] cursor-pointer hover-lift smooth-transition">

                <!-- Imagem com tamanho fixo em desktop e responsivo em mobile -->
                <div class="w-full lg:w-64 lg:h-48 rounded-[20px] overflow-hidden flex-shrink-0">
                    <img src="../assets/img/project1.png" alt="Exemplo" class="w-full h-full object-cover" />
                </div>

                <!-- Conteúdo -->
                <div class="flex flex-col gap-4 lg:gap-6 w-full lg:w-auto">
                    <div class="flex flex-col gap-3">
                        <div class="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-[#434343]">Bitesy - UI/UX Design Project</div>
                        <div class="text-[12px] sm:text-[14px] lg:text-[15px] font-medium text-[#676067] leading-relaxed">
                            Bitesy is an application designed to help users
                            discover and follow personalized diets tailored to their health goals, preferences, and
                            lifestyle.
                            Through an initial questionnaire, it recommends meal plans, suggests the ideal duration for
                            each
                            diet,
                            and highlights their main benefits.
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex flex-row gap-2 sm:gap-4 flex-wrap">
                                <div
                                    class="text-[#676767] font-regular text-[10px] sm:text-[12px] px-3 py-2 border border-[#676767] rounded-full text-center">
                                    Personalized Nutrition
                                </div>
                                <div
                                    class="text-[#676767] font-regular text-[10px] sm:text-[12px] px-3 py-2 border border-[#676767] rounded-full text-center">
                                    Health Goals
                                </div>
                            </div>
                            <div class="w-24">
                                <div
                                    class="text-[#676767] font-regular text-[10px] sm:text-[12px] px-2 py-2 border border-[#676767] rounded-full text-center">
                                    UI/UX Design
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-end">
                <div class="flex items-center px-4 py-3 bg-[#676767] text-white rounded-[50px] cursor-pointer hover-scale hover-glow smooth-transition">
                    <a href="https://www.behance.net/gallery/217586327/Bitesy-Dieting-App" target="_blank"
                        rel="noopener noreferrer" class="mr-2 font-regular text-[12px]">
                        Full Project on Behance
                    </a>
                    <img src="../assets/img/arrow.svg" alt="Menu Icon" class="h-4 w-4" />
                </div>
            </div>
        </div>
        <!-- /1º Project -->

        <!-- 2º Project -->
        <div class="flex flex-col gap-6">
            <div
                class="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 px-4 lg:px-10 py-8 lg:py-10 rounded-[24px] border border-[#434343] bg-[#EDEDED] cursor-pointer hover-lift smooth-transition">

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
                            HabTracker is a mobile application designed to help users build and maintain consistent
                            habits
                            through
                            gamification. Users can create recurring habits, mark them as completed, and track their
                            progress over
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
                <div class=" text-[#676767] font-regular text-[10px] sm:text-[12px] px-2 py-2 border border-[#676767] rounded-full text-center">
                  MongoDB
                </div>
                <div class=" text-[#676767] font-regular text-[10px] sm:text-[12px] px-2 py-2 border border-[#676767] rounded-full text-center">
                  TypeScript
                </div>
                <div class=" text-[#676767] font-regular text-[10px] sm:text-[12px] px-2 py-2 border border-[#676767] rounded-full text-center">
                  JavaScript
                </div>
              </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="w-full flex flex-row sm:flex-row justify-center sm:justify-end gap-3 sm:gap-4">
                <button
                    class="flex items-center justify-center px-4 py-3 bg-[#676767] text-white rounded-[50px] cursor-pointer w-full sm:w-auto hover-scale hover-glow smooth-transition">
                    <a href="https://github.com/AndreRodrigues884/Habtracker" target="_blank" rel="noopener noreferrer"
                        class="mr-2 font-regular text-[12px] sm:text-[14px]">
                        See code on Git Hub
                    </a>
                    <img src="../assets/img/arrow.svg" alt="Menu Icon" class="h-4 w-4" />
                </button>
                <button @click="goToDetails('habtracker')"
                    class="flex items-center justify-center px-4 py-3 bg-[#434343] text-white rounded-[50px] cursor-pointer w-full sm:w-auto hover-scale hover-glow smooth-transition">
                    <span class="mr-2 font-regular text-[12px] sm:text-[14px]">View Project Details</span>
                    <img src="../assets/img/arrow.svg" alt="Open" class="h-4 w-4" />
                </button>
            </div>
        </div>
        <!-- 2/º Project -->

        <!-- 3º Project -->
        <div class="flex flex-col gap-6">
            <div
                class="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 px-4 lg:px-10 py-8 lg:py-10 rounded-[24px] border border-[#434343] bg-[#EDEDED] cursor-pointer hover-lift smooth-transition">

                <!-- Imagem com tamanho fixo em desktop e responsivo em mobile -->
                <div class="w-full lg:w-64 lg:h-48 rounded-[20px] overflow-hidden flex-shrink-0">
                    <img src="../assets/img/project3.png" alt="Exemplo" class="w-full h-full object-contain" />
                </div>

                <!-- Conteúdo -->
                <div class="flex flex-col gap-4 lg:gap-6 w-full lg:w-auto">
                    <div class="flex flex-col gap-3">
                        <div class="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-[#434343]">
                            EcoGuide - UI Design Project
                        </div>
                        <div class="text-[12px] sm:text-[14px] lg:text-[15px] font-medium text-[#676067] leading-relaxed">
                            EcoGuide is an application aimed at having a positive impact on the environment by promoting
                            the
                            widespread adoption of sustainable transportation practices, reducing carbon emissions, and
                            contributing to the preservation of the ecosystem. It guides users to make conscious
                            transportation choices and encourages a behavioral shift toward a greener and more
                            sustainable
                            future.
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex flex-row gap-2 sm:gap-4 flex-wrap">
                                <div
                                    class=" text-[#676767] font-regular text-[10px] sm:text-[12px] px-3 py-2 border border-[#676767] rounded-full text-center">
                                    Sustainable transportation
                                </div>
                                <div
                                    class=" text-[#676767] font-regular text-[10px] sm:text-[12px] px-3 py-2 border border-[#676767] rounded-full text-center">
                                    Environmental impact
                                </div>
                            </div>
                            <div class="w-28">
                                <div
                                    class=" text-[#676767] font-regular text-[10px] sm:text-[12px] px-2 py-2 border border-[#676767] rounded-full text-center">
                                    UI Design
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="w-full flex justify-end">
                <button class="flex items-center px-4 py-3 bg-[#676767] text-white rounded-[50px] cursor-pointer hover-scale hover-glow smooth-transition">
                    <a href="https://www.behance.net/gallery/173602993/EcoGuide(EcoApp-UIUX-Concept)" target="_blank"
                        rel="noopener noreferrer" class="mr-2 font-regular text-[12px]">
                        Full Project on Behance
                    </a>
                    <img src="../assets/img/arrow.svg" alt="Menu Icon" class="h-4 w-4" />
                </button>
            </div>
        </div>
        <!-- /3º Project -->
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