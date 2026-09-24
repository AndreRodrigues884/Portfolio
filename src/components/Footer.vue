<template>
  <footer class="flex flex-col w-full mt-24 px-4">
    <div class="mb-10">
      <p class="section-label mb-2.5">// Contact</p>
      <h2 class="font-display text-[28px] sm:text-[36px] font-semibold text-text">Let's build something together</h2>
    </div>

    <div class="flex flex-col">
      <a v-for="link in links" :key="link.label" :href="link.href" :target="link.external ? '_blank' : null"
        :rel="link.external ? 'noopener noreferrer' : null"
        class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 py-5 border-b border-line text-text hover:text-teal transition-colors duration-150">
        <span class="font-mono text-[12px] tracking-[0.06em] text-faint">{{ link.label }}</span>
        <span class="text-[15px] sm:text-[16px] break-all">{{ link.value }}</span>
      </a>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { label: 'Email', value: 'andreprodrigues0512@gmail.com', href: 'mailto:andreprodrigues0512@gmail.com' },
  { label: 'Phone', value: '+351 913 531 636', href: 'tel:+351913531636' },
  { label: 'LinkedIn', value: 'linkedin.com/in/andrerodrigues-dev', href: 'https://www.linkedin.com/in/andrerodrigues-dev/', external: true },
  { label: 'GitHub', value: 'github.com/AndreRodrigues884', href: 'https://github.com/AndreRodrigues884', external: true },
  { label: 'Behance', value: 'behance.net/ricardorodrigu226', href: 'https://www.behance.net/ricardorodrigu226/projects', external: true },
  { label: 'CV', value: 'Download PDF →', href: '/Portfolio/CV_AndreRodrigues_EN.pdf', external: true },
]
</script>
