<template>
  <div class="flex flex-col gap-16 w-full h-auto mt-8">
    <div class="flex flex-col gap-12 w-full h-auto">
      <div class="flex flex-col gap-2 px-4 py-4">
        <div class="text-left text-[14px] sm:text-[16px] lg:text-[20px] font-medium text-[#000000]">
          Let's build something amazing together – get in touch! 👐
        </div>
        <div class="flex flex-col gap-1">
          <div class="flex flex-row gap-1 items-center">
            <img src="../assets/img/email.svg" alt="Email Icon" class="h-4 w-4 sm:h-5 sm:w-5" />
            <div class="text-left text-[12px] sm:text-[14px] lg:text-[16px] font-medium text-[#434343]">
              andreprodrigues0512@gmail.com
            </div>
          </div>
          <div class="flex flex-row gap-1 items-center">
            <img src="../assets/img/phone.svg" alt="Phone Icon" class="h-4 w-4 sm:h-5 sm:w-5" />
            <div class="text-left text-[12px] sm:text-[14px] lg:text-[16px] font-medium text-[#434343]">
              +351 913531636
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row w-full gap-4 sm:justify-between items-left px-4 py-6">
        <div class="cursor-pointer font-medium text-[#434343] text-[12px] sm:text-[14px] hover-scale smooth-transition" @click="openLinkedin">&lt;Linkedin&gt;</div>
        <div class="cursor-pointer font-medium text-[#434343] text-[12px] sm:text-[14px] hover-scale smooth-transition" @click="openBehance">&lt;Behance&gt;</div>
        <div class="cursor-pointer font-medium text-[#434343] text-[12px] sm:text-[14px] hover-scale smooth-transition" @click="openGitHub">&lt;GitHub&gt;</div>
        <div class="cursor-pointer font-medium text-[#434343] text-[12px] sm:text-[14px] hover-scale smooth-transition" @click="downloadCV">&lt;CV&gt;</div>
      </div>

    </div>
  </div>
</template>

<script setup>
function downloadCV() {
    window.open('/Portfolio/CV_EN.pdf', '_blank')
}

const openGitHub = () => {
  window.open("https://github.com/AndreRodrigues884", "_blank")
}

const openBehance = () => {
  window.open("https://www.behance.net/ricardorodrigu226/projects", "_blank")
}

const openLinkedin = () => {
  window.open("https://www.linkedin.com/in/andr%C3%A9-rodrigues-2b526a285/", "_blank")
}
</script>