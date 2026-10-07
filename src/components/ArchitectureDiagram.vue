<template>
  <div class="relative bg-surface border border-line p-5 sm:p-7">
    <span class="corner tl"></span>
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>

    <!-- Horizontal when there is room, vertical otherwise (container query, see styles) -->
    <div class="arch-wrap">
      <div class="arch">
        <button @click="selected = 0" :class="nodeClass(0)" :aria-pressed="selected === 0">
          <span class="font-display text-[15px] font-semibold text-text">{{ architecture.nodes[0].label }}</span>
          <span class="font-mono text-[11px] text-faint">{{ architecture.nodes[0].sub }}</span>
        </button>
        <div class="arch-conn">
          <span class="arch-conn-label font-mono text-[11px] text-amber">{{ architecture.links[0] }}</span>
          <span class="arch-conn-line"><span class="arch-conn-dot" style="animation-delay: 0s"></span></span>
        </div>

        <!-- The remaining nodes run inside the container frame (e.g. Docker Compose) -->
        <div class="arch-frame">
          <span class="arch-frame-label font-mono text-[11px] text-faint">{{ architecture.frame }}</span>
          <template v-for="(node, j) in architecture.nodes.slice(1)" :key="node.id">
            <div v-if="j > 0" class="arch-conn">
              <span class="arch-conn-label font-mono text-[11px] text-amber">{{ architecture.links[j] }}</span>
              <span class="arch-conn-line"><span class="arch-conn-dot" :style="{ animationDelay: `${j * stagger}s` }"></span></span>
            </div>
            <button @click="selected = j + 1" :class="nodeClass(j + 1)" :aria-pressed="selected === j + 1">
              <span class="font-display text-[15px] font-semibold text-text">{{ node.label }}</span>
              <span class="font-mono text-[11px] text-faint">{{ node.sub }}</span>
            </button>
          </template>
        </div>
      </div>
    </div>

    <!-- Detail of the selected node -->
    <div class="mt-6 pt-5 border-t border-line min-h-[96px]">
      <Transition name="swap" mode="out-in">
        <div :key="selected" class="flex flex-col gap-2">
          <span class="font-mono text-[11px] text-teal">// {{ current.label }}</span>
          <p class="text-[14px] sm:text-[15px] text-dim leading-relaxed">{{ current.detail }}</p>
        </div>
      </Transition>
    </div>

    <p v-if="architecture.note" class="mt-4 font-mono text-[11px] text-faint">{{ architecture.note }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  architecture: { type: Object, required: true },
})

// Delay between connectors, so a request appears to travel from left to right
const stagger = 0.7

const selected = ref(props.architecture.selected ?? 0)
const current = computed(() => props.architecture.nodes[selected.value])

function nodeClass(i) {
  return [
    'arch-node flex flex-col items-center justify-center gap-1 text-center px-4 py-3 border bg-bg cursor-pointer transition-all duration-200',
    selected.value === i ? 'border-teal node-selected' : 'border-line-strong hover:border-teal',
  ]
}
</script>

<style scoped>
.arch-wrap { container-type: inline-size; }
.arch { display: flex; flex-direction: column; align-items: stretch; }
.arch-frame {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px dashed var(--color-line-strong);
  padding: 28px 14px 14px;
}
.arch-frame-label { position: absolute; top: 8px; left: 12px; }
.arch-node { min-height: 64px; }
.node-selected { box-shadow: 0 0 0 3px rgba(79, 216, 196, 0.12), 0 0 16px rgba(79, 216, 196, 0.3); }

/* Vertical connector (default) */
.arch-conn {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 44px;
  padding-left: calc(50% - 0.5px);
  position: relative;
}
.arch-conn-line {
  position: relative;
  display: block;
  width: 1px;
  height: 100%;
  background: var(--color-line-strong);
  order: -1;
}
.arch-conn-dot {
  position: absolute;
  left: -3px;
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  background: var(--color-teal);
  box-shadow: 0 0 10px 2px rgba(79, 216, 196, 0.55);
  animation: travel-v 2.1s ease-in-out infinite;
}

/* Horizontal layout when the diagram is wide enough */
@container (min-width: 600px) {
  .arch { flex-direction: row; align-items: center; }
  .arch-frame { flex-direction: row; align-items: center; flex: 3; padding: 30px 10px 10px; }
  .arch-node { flex: 1; min-width: 0; padding-left: 8px; padding-right: 8px; }
  .arch-conn-label { font-size: 10px; }
  .arch-conn {
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    height: auto;
    width: 84px;
    flex-shrink: 0;
    padding: 0 4px;
  }
  .arch-conn-line { width: 100%; height: 1px; order: 0; }
  .arch-conn-label { white-space: nowrap; }
  .arch-conn-dot { top: -3px; left: auto; animation-name: travel-h; }
}

@keyframes travel-v {
  0% { top: 0; opacity: 0; }
  15% { opacity: 1; }
  85% { opacity: 1; }
  100% { top: calc(100% - 7px); opacity: 0; }
}
@keyframes travel-h {
  0% { left: 0; opacity: 0; }
  15% { opacity: 1; }
  85% { opacity: 1; }
  100% { left: calc(100% - 7px); opacity: 0; }
}

.swap-enter-active, .swap-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.swap-enter-from { opacity: 0; transform: translateY(4px); }
.swap-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
