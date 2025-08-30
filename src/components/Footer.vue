<template>
  <div class="flex flex-col gap-16 w-full h-auto mt-8">
    <div class="flex flex-col gap-12 w-full h-auto">
      <div class="flex flex-col gap-2">
        <div class="text-left text-[20px] font-medium text-[#000000]">Let’s build something amazing together – get in
          touch! 👐</div>
        <div class="flex flex-col gap-1">
          <div class="flex flex-row gap-1">
            <img src="../assets/img/email.svg" alt="Email Icon" class="h-5 w-5" />
            <div class="text-left text-[16px] font-medium text-[#434343]">andreprodrigues0512@gmail.com</div>
          </div>
          <div class="flex flex-row gap-1">
            <img src="../assets/img/phone.svg" alt="Email Icon" class="h-5 w-5" />
            <div class="text-left text-[16px] font-medium text-[#434343]">+351 913531636</div>
          </div>
        </div>
      </div>
      <div class="flex flex-row w-full gap-4 justify-between">
        <div class="cursor-pointer font-medium text-[#434343]" @click="openLinkedin">&lt;Linkedin&gt;</div>
        <div class="cursor-pointer font-medium text-[#434343]" @click="openBehance">&lt;Behance&gt;</div>
        <div class="cursor-pointer font-medium text-[#434343]" @click="openGitHub">&lt;GitHub&gt;</div>
        <div class="cursor-pointer font-medium text-[#434343]" @click="downloadCV">
          &lt;CV&gt;
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function downloadCV() {
  window.open('/CV.pdf', '_blank')
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