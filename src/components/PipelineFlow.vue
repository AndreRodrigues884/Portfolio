<template>
  <div ref="rootRef" class="relative bg-surface border border-line p-5 sm:p-7">
    <span class="corner tl"></span>
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>

    <!-- Controls -->
    <div class="flex items-center justify-between mb-6">
      <span class="font-mono text-[12px] text-faint">
        step <span class="text-teal">{{ String(active + 1).padStart(2, '0') }}</span> / {{ String(steps.length).padStart(2, '0') }}
      </span>
      <button
        @click="toggle"
        class="font-mono text-[12px] text-dim hover:text-teal border border-line hover:border-teal px-2.5 py-1 transition-colors cursor-pointer"
        :aria-label="playing ? 'Pause animation' : 'Play animation'"
      >
        {{ playing ? '❚❚ pause' : '▶ play' }}
      </button>
    </div>

    <div ref="listRef" class="relative">
      <!-- Rail: from the first node to the last one -->
      <div class="absolute left-[15px] w-px bg-line" :style="{ top: `${rail.top}px`, height: `${rail.height}px` }"></div>
      <!-- Progress: from the first node to the active one -->
      <div
        class="absolute left-[15px] w-px bg-teal transition-[height] duration-500 ease-out"
        :style="{ top: `${rail.top}px`, height: `${rail.fill}px` }"
      >
        <span class="packet"></span>
      </div>

      <ol class="relative flex flex-col gap-2">
        <li v-for="(step, i) in steps" :key="step.title">
          <button
            @click="select(i)"
            class="w-full flex items-start gap-4 text-left cursor-pointer group"
            :aria-expanded="i === active"
          >
            <span
              :ref="el => (nodeRefs[i] = el)"
              :class="[
                'relative z-10 flex-shrink-0 w-8 h-8 flex items-center justify-center font-mono text-[11px] border transition-all duration-300',
                i === active
                  ? 'border-teal text-teal bg-bg node-active'
                  : i < active
                    ? 'border-teal/50 text-teal/80 bg-raised'
                    : 'border-line text-faint bg-bg group-hover:border-line-strong',
              ]"
            >{{ String(i + 1).padStart(2, '0') }}</span>

            <span class="flex flex-col pt-1 min-w-0">
              <span
                :class="['font-display text-[16px] sm:text-[17px] font-semibold transition-colors duration-300', i === active ? 'text-text' : 'text-dim group-hover:text-text']"
              >{{ step.title }}</span>
              <span class="font-mono text-[11px] text-faint">{{ step.tech }}</span>
            </span>
          </button>

          <!-- Expanding detail -->
          <div
            :class="['grid transition-[grid-template-rows] duration-300 ease-out pl-12', i === active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]']"
          >
            <div class="overflow-hidden">
              <div class="pt-2 pb-3 flex flex-col items-start gap-3">
                <p class="text-[14px] sm:text-[15px] text-dim leading-relaxed">{{ step.detail }}</p>
                <span
                  v-if="step.artifact"
                  :key="`${i}-${active}`"
                  class="artifact font-mono text-[11px] text-amber border border-amber/35 px-2 py-[3px]"
                >&rarr; {{ step.artifact }}</span>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, nextTick, watch } from 'vue'

const props = defineProps({
  steps: { type: Array, required: true },
  interval: { type: Number, default: 3200 },
})

const rootRef = ref(null)
const listRef = ref(null)
const nodeRefs = []
const active = ref(0)
const playing = ref(false)
const rail = reactive({ top: 0, height: 0, fill: 0 })

const reducedMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches

let timer = null
let resizeObserver = null
let visibilityObserver = null

function center(el) {
  const list = listRef.value.getBoundingClientRect()
  const r = el.getBoundingClientRect()
  return r.top - list.top + r.height / 2
}

// Rail and progress positions depend on rendered node positions,
// which shift while a step expands, so they are re-measured on resize.
function measure() {
  const first = nodeRefs[0]
  const last = nodeRefs[props.steps.length - 1]
  const current = nodeRefs[active.value]
  if (!listRef.value || !first || !last || !current) return
  rail.top = center(first)
  rail.height = center(last) - rail.top
  rail.fill = center(current) - rail.top
}

function start() {
  if (reducedMotion) return
  stop()
  playing.value = true
  timer = setInterval(() => {
    active.value = (active.value + 1) % props.steps.length
  }, props.interval)
}

function stop() {
  playing.value = false
  clearInterval(timer)
  timer = null
}

function toggle() {
  playing.value ? stop() : start()
}

function select(i) {
  stop()
  active.value = i
}

// While one step collapses and the next expands, node positions keep moving
// but the list height barely changes, so ResizeObserver doesn't fire.
// Re-measure on every frame until the expand transition has finished.
let frame = null
function trackTransition(duration = 400) {
  cancelAnimationFrame(frame)
  const end = performance.now() + duration
  const tick = () => {
    measure()
    if (performance.now() < end) frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)
}

watch(active, () => nextTick(() => trackTransition()))

onMounted(() => {
  nextTick(measure)
  resizeObserver = new ResizeObserver(measure)
  resizeObserver.observe(listRef.value)

  // Start playing the first time the pipeline scrolls into view
  visibilityObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      start()
      visibilityObserver.disconnect()
    }
  }, { threshold: 0.35 })
  visibilityObserver.observe(rootRef.value)
})

onUnmounted(() => {
  stop()
  cancelAnimationFrame(frame)
  resizeObserver?.disconnect()
  visibilityObserver?.disconnect()
})
</script>

<style scoped>
/* Glowing dot travelling at the end of the progress line */
.packet {
  position: absolute;
  bottom: -4px;
  left: -4px;
  width: 9px;
  height: 9px;
  border-radius: 9999px;
  background: var(--color-teal);
  box-shadow: 0 0 12px 2px rgba(79, 216, 196, 0.6);
  animation: packet-pulse 1.6s ease-in-out infinite;
}

.node-active {
  box-shadow: 0 0 0 4px rgba(79, 216, 196, 0.12), 0 0 18px rgba(79, 216, 196, 0.35);
}

/* The data "arriving" at each step */
.artifact {
  animation: artifact-in 0.45s ease-out 0.15s both;
}

@keyframes packet-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.35); opacity: 0.75; }
}

@keyframes artifact-in {
  from { opacity: 0; transform: translateX(-8px); }
  to { opacity: 1; transform: translateX(0); }
}
</style>
