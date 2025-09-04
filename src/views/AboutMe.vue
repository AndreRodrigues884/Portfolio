<template>
    <Header></Header>

    <div class="flex flex-row justify-between items-center pt-[120px] pb-[64px] px-4">
        <button @click="goBack" class="cursor-pointer flex items-center text-[#434343] hover:text-[#000] font-medium">
            <img src="../assets/img/arrow-left.svg" alt="Back" class="w-4 h-4 mr-1" />
            Back
        </button>
        <div class="text-[#000] text-[16px] font-medium">&lt;About Me&gt;</div>
    </div>

    <!-- About me -->
    <div class="flex flex-col gap-10">
        <div class="flex flex-col lg:flex-row gap-8 items-center">
            <!-- Imagem com ícones circulares -->
            <div class="relative flex-shrink-0 w-full lg:w-64 h-64 flex items-center justify-center">
                <img src="../assets/img/cadu.png" alt="Foto de perfil"
                    class="lg:w-full h-full rounded-full object-cover" />
            </div>

            <!-- Conteúdo -->
            <div class="flex flex-col gap-4 w-full">
                <div class="flex flex-col border-2 border-[#434343] bg-[#ffffff] p-4 rounded-[24px] w-full">
                    <div class="text-[20px] font-medium text-[#434343]">André Rodrigues</div>
                    <div class="text-[16px] font-medium text-[#434343]">Full Stack Dev & UX/UI Designer</div>
                </div>

                <div class="flex flex-col border-2 border-[#434343] bg-[#ffffff] p-4 rounded-[24px] w-full">
                    <div class="text-[14px] font-medium text-[#434343]">
                        Hi, my name is André Rodrigues, I’m 21 years old. I’m currently in my third year of a Bachelor's
                        Degree in
                        Technologies and Information Systems for the Web. Throughout my studies, I’ve worked on design
                        and
                        web
                        development projects in small teams, learning to manage tight deadlines and deliver clear
                        results.
                        I’m now
                        looking for an internship or junior role where I can apply my programming and UI design skills,
                        contribute
                        to a
                        company’s growth, and continue developing professionally and personally.
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- What I studied -->
    <div class="text-[#000] text-[16px] pt-20 pb-4 font-medium">
        &lt;What I Studied&gt;
    </div>
    <div class="flex flex-row items-start">
        <div class="flex-1 flex flex-col gap-4 p-4">
            <div class="flex-1 flex flex-col gap-4 border-1 border-[#434343] rounded-[12px] p-4">
                <div class="flex flex-row items-start">
                    <span class="text-[#434343] text-[12px] font-regular">out 2021 - jul 2023</span>
                </div>
                <div class="flex flex-col gap-1">
                    <span class="text-[#000000] text-[16px] font-bold">Higher Technical Course in Design and
                        Technologies for Mobile Applications</span>
                    <span class="text-[#434343] text-[14px] font-normal">ESMAD - Superior School of Media Arts and
                        Design</span>
                </div>
            </div>
            <div class="flex-1 flex flex-col gap-4 border-1 border-[#434343] rounded-[12px] p-4">
                <div class="flex flex-row items-start">
                    <span class="text-[#434343] text-[12px] font-regular">set 2023 - jul 2026</span>
                </div>
                <div class="flex flex-col gap-1">
                    <span class="text-[#000000] text-[16px] font-bold">Bachelor’s Degree in Web Information Systems and
                        Technologies</span>
                    <span class="text-[#434343] text-[14px] font-normal">ESMAD - Superior School of Media Arts and
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
     <div class="text-[#000] text-[16px] pt-20 pb-8 font-medium">
        &lt;Tech Skills&gt;
    </div>
    <div class="w-full flex flex-col gap-4">
        <div class="flex flex-row justify-between">
            <div class="flex flex-col items-center gap-4 border-1 border-[#434343] rounded-[12px] p-4 text-center">
                <img src="../assets/img/react.svg" class="w-8 h-8" alt="">
                <span>React</span>
            </div>
            <div class="flex flex-col items-center gap-4 border-1 border-[#434343] rounded-[12px] p-4 text-center">
                <img src="../assets/img/vue.svg" class="w-8 h-8" alt="">
                <span>Vue JS</span>
            </div>
            <div class="flex flex-col items-center gap-4 border-1 border-[#434343] rounded-[12px] p-4 text-center">
                <img src="../assets/img/express.svg" class="w-8 h-8" alt="">
                <span>Express JS</span>
            </div>
            <div class="flex flex-col items-center gap-4 border-1 border-[#434343] rounded-[12px] p-4 text-center">
                <img src="../assets/img/node.svg" class="w-8 h-8" alt="">
                <span>Node JS</span>
            </div>
            <div class="flex flex-col items-center gap-4 border-1 border-[#434343] rounded-[12px] p-4 text-center">
                <img src="../assets/img/mongo.svg" class="w-8 h-8" alt="">
                <span>Mongo DB</span>
            </div>
            <div class="flex flex-col items-center gap-4 border-1 border-[#434343] rounded-[12px] p-4 text-center">
                <img src="../assets/img/typescript.svg" class="w-8 h-8" alt="">
                <span>Typescript</span>
            </div>
        </div>
        <div class="flex flex-row justify-between">
            <div class="flex flex-col items-center gap-4 border-1 border-[#434343] rounded-[12px] p-4 text-center">
                <img src="../assets/img/tailwind.svg" class="w-8 h-8" alt="">
                <span>Tailwind</span>
            </div>
            <div class="flex flex-col items-center gap-4 border-1 border-[#434343] rounded-[12px] p-4 text-center">
                <img src="../assets/img/vite.svg" class="w-8 h-8" alt="">
                <span>Vite</span>
            </div>
            <div class="flex flex-col items-center gap-4 border-1 border-[#434343] rounded-[12px] p-4 text-center">
                <img src="../assets/img/js.svg" class="w-8 h-8" alt="">
                <span>Javascript</span>
            </div>
            <div class="flex flex-col items-center gap-4 border-1 border-[#434343] rounded-[12px] p-4 text-center">
                <img src="../assets/img/figma.svg" class="w-8 h-8" alt="">
                <span>Figma</span>
            </div>
            <div class="flex flex-col items-center gap-4 border-1 border-[#434343] rounded-[12px] p-4 text-center">
                <img src="../assets/img/notion.svg" class="w-8 h-8" alt="">
                <span>Notion</span>
            </div>
            <div class="flex flex-col items-center gap-4 border-1 border-[#434343] rounded-[12px] p-4 text-center">
                <img src="../assets/img/trello.svg" class="w-8 h-8" alt="">
                <span>Trello</span>
            </div>
            <div class="flex flex-col items-center gap-4 border-1 border-[#434343] rounded-[12px] p-4 text-center">
                <img src="../assets/img/blender.svg" class="w-8 h-8" alt="">
                <span>Blender</span>
            </div>
        </div>
        
    </div>


    <div class="w-full flex justify-end pt-8">
        <div class="text-[#000] text-[16px] font-medium">
            &lt;/Tech Skills&gt;
        </div>
    </div>

    <!-- Fun Facys -->
     <div class="text-[#000] text-[16px] pt-20 pb-8 font-medium">
        &lt;Fun Facts&gt;
    </div>

    <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between">
            <div class="flex flex-col p-4 items-start gap-4 border-1 border-[#434343] rounded-[12px]">
                <img class="w-auto h-60" src="../assets/img/fav_movie.svg" alt="">
                <div class="flex flex-col gap-1">
                    <span class="text-[#000] text-[12px] font-regular">Favorite Movie</span>
                    <span class="text-[#000] text-[16px] font-medium">La La Land</span>
                </div>
            </div>
             <div class="flex flex-col p-4 items-start gap-4 border-1 border-[#434343] rounded-[12px]">
                <img class="w-auto h-60" src="../assets/img/fav-tvshow.svg" alt="">
                <div class="flex flex-col gap-1">
                    <span class="text-[#000] text-[12px] font-regular">Favorite TV Show</span>
                    <span class="text-[#000] text-[16px] font-medium">Friends</span>
                </div>
            </div>
             <div class="flex flex-col p-4 items-start gap-4 border-1 border-[#434343] rounded-[12px]">
                <img class="w-auto h-60" src="../assets/img/fav-band.svg" alt="">
                <div class="flex flex-col gap-1">
                    <span class="text-[#000] text-[12px] font-regular">Favorite Band</span>
                    <span class="text-[#000] text-[16px] font-medium">Arctic Monkeys</span>
                </div>
            </div>
        </div>
         <div class="flex flex-row justify-between">
            <div class="flex flex-col p-4 items-start gap-4 border-1 border-[#434343] rounded-[12px]">
                <img class="w-auto h-60" src="../assets/img/yoshi.svg" alt="">
                <div class="flex flex-col gap-1">
                    <span class="text-[#000] text-[16px] font-medium">I love animals <br>This is “Yoshi”. My dog</span>
                </div>
            </div>
             <div class="flex flex-col p-4 items-start gap-4 border-1 border-[#434343] rounded-[12px]">
                <img class="w-auto h-60" src="../assets/img/place.svg" alt="">
                <div class="flex flex-col gap-1">
                    <span class="text-[#000] text-[16px] font-medium">I love traveling and<br>discovering new places</span>
                </div>
            </div>
             <div class="flex flex-col p-4 items-start gap-4 border-1 border-[#434343] rounded-[12px]">
                <img class="w-auto h-60" src="../assets/img/sport.svg" alt="">
                <div class="flex flex-col gap-1">
                    <span class="text-[#000] text-[16px] font-medium">I’m passionate<br> about sports</span>
                </div>
            </div>
        </div>
    </div>

     <div class="w-full flex justify-end pt-8">
        <div class="text-[#000] text-[16px] font-medium">
            &lt;/Fun Facts&gt;
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