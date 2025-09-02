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
    <div class="flex flex-col gap-30">
        <div class="flex flex-col lg:flex-row gap-8 items-center">
            <!-- Imagem com ícones circulares -->
            <div class="relative flex-shrink-0 w-full lg:w-64 h-64 flex items-center justify-center">
                <img src="../assets/img/foto.png" alt="Foto de perfil"
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

        <!-- What I studied -->
        <div class="flex flex-row items-start px-4 gap-4">
            <div class="text-[#000] text-[16px] font-medium">
                &lt;What I Studied&gt;
            </div>

            <div class="flex-1 flex flex-col gap-4">
                <div>
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div class="text-[#000] text-[16px] font-medium self-end">
                &lt;/What I Studied&gt;
            </div>
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