<template>
  <!-- Breaks out of the narrow content column so the map stays readable -->
  <div ref="rootRef" class="map-bleed flex flex-col gap-6" :style="colorVars">
    <div class="flex flex-col gap-4">
      <div class="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] text-dim" aria-label="Colour legend">
        <span v-for="(name, key) in LEGEND" :key="key" class="inline-flex items-center gap-1.5">
          <i class="dot" :style="{ background: `var(--${key})` }"></i>{{ name }}
        </span>
      </div>

      <div class="flex flex-wrap items-center gap-2" role="group" aria-label="Choose a request">
        <span class="font-mono text-[11px] text-faint mr-1">// follow a request</span>
        <button
          v-for="(sc, key) in S"
          :key="key"
          @click="pickScenario(key)"
          :aria-pressed="key === scenario"
          :class="[
            'font-mono text-[12px] px-3 py-1.5 border transition-colors cursor-pointer',
            key === scenario ? 'border-teal text-teal bg-teal/10' : 'border-line text-dim hover:border-line-strong hover:text-text',
          ]"
        >{{ CHIPS[key] }}</button>
      </div>
    </div>

    <div class="map-container">
      <div class="map-main">
        <!-- Map -->
        <div class="map-scroll relative bg-surface border border-line">
          <span class="corner tl"></span>
          <span class="corner tr"></span>
          <span class="corner bl"></span>
          <span class="corner br"></span>
          <svg :viewBox="`0 0 ${VIEWBOX[0]} ${VIEWBOX[1]}`" role="img" :aria-label="ariaLabel">
            <g v-for="[x, y, w, h, label] in LANES" :key="label" class="lane">
              <rect :x="x" :y="y" :width="w" :height="h" rx="4" />
              <text :x="x + 12" :y="y + 24">{{ label }}</text>
            </g>

            <path v-for="([a, b, dashed], i) in EDGES" :key="i" :d="route(a, b)" :class="['edge', { dashed }]" />
            <text v-for="l in EDGE_LABELS" :key="l.text" :x="l.x" :y="l.y" class="edge-label">{{ l.text }}</text>

            <!-- The request travelling between two nodes -->
            <g v-if="travelD">
              <path ref="travelRef" :d="travelD" class="travel" />
              <circle :cx="packet.x" :cy="packet.y" r="6" class="packet" />
            </g>

            <g
              v-for="(n, id) in N"
              :key="id"
              :class="['node', { active: activeIds.includes(id), dim: activeIds.length && !activeIds.includes(id) && id !== fromId }]"
              :style="{ '--c': `var(--${n.layer})` }"
              tabindex="0"
              role="button"
              :aria-label="n.title"
              @click="selectNode(id)"
              @keydown.enter.prevent="selectNode(id)"
              @keydown.space.prevent="selectNode(id)"
            >
              <rect :x="n.x" :y="n.y" :width="n.w" :height="H" rx="4" />
              <circle :cx="n.x + 14" :cy="n.y + 22" r="4.5" :fill="`var(--${n.layer})`" />
              <text :x="n.x + 25" :y="n.y + 27" class="t">{{ n.label }}</text>
              <text :x="n.x + 14" :y="n.y + 47" class="s">{{ n.sub }}</text>
            </g>
          </svg>
        </div>

        <!-- Reading panel -->
        <aside class="map-panel flex flex-col gap-3">
          <div class="bg-surface border border-line p-5">
            <p class="flex justify-between gap-2 font-mono text-[11px] text-faint mb-2">
              <span class="truncate">{{ S[scenario].name }}</span>
              <span class="shrink-0">step <span class="text-teal">{{ step + 1 }}</span> / {{ steps.length }}</span>
            </p>
            <Transition name="swap" mode="out-in">
              <div :key="`${scenario}-${step}`">
                <h3 class="font-display text-[18px] font-semibold text-text leading-snug mb-2">{{ current.title }}</h3>
                <p class="text-[14px] text-dim leading-relaxed">{{ current.text }}</p>
                <pre v-if="current.code" class="code mt-3">{{ current.code }}</pre>
              </div>
            </Transition>
            <div class="flex flex-wrap items-center gap-2 mt-4">
              <button @click="prev" :disabled="step === 0" class="map-btn">&larr; back</button>
              <button @click="next" class="map-btn map-btn-primary">{{ step === steps.length - 1 ? 'start again' : 'next step →' }}</button>
              <button @click="togglePlay" class="map-btn">{{ playing ? '❚❚ pause' : '▶ play' }}</button>
              <div class="flex-1 min-w-[60px] h-[3px] bg-line overflow-hidden" aria-hidden="true">
                <i class="block h-full bg-teal transition-[width] duration-300" :style="{ width: `${((step + 1) / steps.length) * 100}%` }"></i>
              </div>
            </div>
          </div>

          <div class="bg-surface border border-line p-5">
            <p class="font-mono text-[11px] mb-2" :style="{ color: `var(--${node.layer})` }">// {{ LAYER[node.layer] }}</p>
            <h3 class="font-display text-[17px] font-semibold text-text leading-snug mb-2">{{ node.title }}</h3>
            <div class="flex flex-col gap-0.5 text-[12px] text-faint mb-2">
              <span v-if="node.file">File: <span class="font-mono text-dim">{{ node.file }}</span></span>
              <span v-if="node.talks">Talks to: <span class="text-dim">{{ node.talks }}</span></span>
            </div>
            <p class="text-[14px] text-dim leading-relaxed">{{ node.role }}</p>
            <pre v-if="node.code" class="code mt-3">{{ node.code }}</pre>
          </div>
        </aside>
      </div>
    </div>

    <!-- The two cycles -->
    <div v-if="CYCLES" class="flex flex-col gap-4 mt-6">
      <div>
        <p class="section-label mb-2.5">// The two cycles</p>
        <h3 class="font-display text-[22px] sm:text-[24px] font-semibold text-text mb-1">Every feature repeats the same stages</h3>
        <p class="text-[14px] text-dim">Only the subject changes (invoices, expenses, clients…).</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div v-for="cycle in CYCLES" :key="cycle.title" class="bg-surface border border-line p-5">
          <h4 class="flex items-center gap-2 font-display text-[17px] font-semibold text-text">
            <i class="dot" :style="{ background: `var(--${cycle.layer})` }"></i>{{ cycle.title }}
          </h4>
          <p class="text-[13px] text-faint mt-1 mb-4">{{ cycle.sub }}</p>
          <ol class="cycle">
            <li v-for="(stage, i) in cycle.stages" :key="stage.name" :style="{ '--c': `var(--${stage.layer || cycle.layer})` }">
              <span class="cycle-num">{{ i + 1 }}</span>
              <div class="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 pt-0.5">
                <span class="font-semibold text-text text-[14px]">{{ stage.name }}</span>
                <span v-if="stage.file" class="font-mono text-[11px] text-faint">{{ stage.file }}</span>
              </div>
              <p class="rich text-[13px] text-dim leading-relaxed mt-1" v-html="stage.text"></p>
              <span v-if="stage.fail" class="inline-block mt-1.5 font-mono text-[11px] px-2 py-[1px] border fail-tag">fails → {{ stage.fail }}</span>
            </li>
          </ol>
          <p class="rich mt-3 p-3 bg-raised text-[13px] text-dim leading-relaxed" v-html="cycle.note"></p>
        </div>
      </div>
    </div>

    <!-- Who decides what -->
    <div v-if="RULES" class="bg-surface border border-line p-5">
      <h4 class="font-display text-[17px] font-semibold text-text mb-1">Who decides what</h4>
      <p class="text-[13px] text-dim mb-4">{{ RULES.intro }}</p>
      <div class="overflow-x-auto">
        <table class="rules">
          <thead><tr><th>Example</th><th>Angular (helps the user)</th><th>Spring Boot (decides)</th></tr></thead>
          <tbody>
            <tr v-for="row in RULES.rows" :key="row[0]">
              <td>{{ row[0] }}</td>
              <td class="rich" v-html="row[1]"></td>
              <td class="rich" v-html="row[2]"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="font-mono text-[11px] text-faint mt-3">// {{ RULES.outro }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'

// `map` is a data module such as src/data/saldoArchitecture.js. It is read once,
// so give the component a :key when the map can change while mounted.
const props = defineProps({
  map: { type: Object, required: true },
  ariaLabel: { type: String, default: 'Interactive architecture map' },
})
const { LAYER, N, H, EDGES, S, LANES, EDGE_LABELS, CYCLES, RULES, LEGEND, CHIPS, VIEWBOX, COLORS } = props.map

// Layer colours become CSS variables (--ng, --sp, …) used by nodes, legend and rails
const colorVars = Object.fromEntries(Object.entries(COLORS).map(([k, v]) => [`--${k}`, v]))

const rootRef = ref(null)
const travelRef = ref(null)
const scenario = ref(Object.keys(S)[0])
const step = ref(0)
const playing = ref(false)
const manualNode = ref(null)
const travelD = ref('')
const packet = reactive({ x: 0, y: 0 })

const steps = computed(() => S[scenario.value].steps)
const current = computed(() => steps.value[step.value])
const fromId = computed(() => (manualNode.value ? null : current.value.from || null))
const activeIds = computed(() => [manualNode.value || current.value.at])
const node = computed(() => N[manualNode.value || current.value.at])

const reducedMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Geometry, same routing as the original map: straight down within a column, elbow between columns
function box(id) {
  const n = N[id]
  return { l: n.x, r: n.x + n.w, t: n.y, b: n.y + H, cx: n.x + n.w / 2, cy: n.y + H / 2 }
}
function route(a, b) {
  const A = box(a), B = box(b)
  if (A.r > B.l && B.r > A.l) {
    return A.cy < B.cy ? `M${A.cx},${A.b} V${B.t}` : `M${A.cx},${A.t} V${B.b}`
  }
  const [x1, x2] = A.cx < B.cx ? [A.r, B.l] : [A.l, B.r]
  const mid = (x1 + x2) / 2
  return `M${x1},${A.cy} H${mid} V${B.cy} H${x2}`
}

let frame = null
function travel() {
  cancelAnimationFrame(frame)
  const { from, at } = current.value
  travelD.value = from && !manualNode.value ? route(from, at) : ''
  if (!travelD.value) return
  nextTick(() => {
    const path = travelRef.value
    if (!path) return
    const len = path.getTotalLength()
    const place = k => { const pt = path.getPointAtLength(len * k); packet.x = pt.x; packet.y = pt.y }
    if (reducedMotion) { path.style.strokeDasharray = 'none'; place(1); return }
    path.style.strokeDasharray = len
    const t0 = performance.now(), dur = 700
    const tick = t => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3)
      path.style.strokeDashoffset = len * (1 - e)
      place(e)
      if (k < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
  })
}

watch([scenario, step], () => { manualNode.value = null; travel() })

let timer = null
function stop() { playing.value = false; clearInterval(timer); timer = null }
function play() {
  if (step.value === steps.value.length - 1) step.value = 0
  playing.value = true
  timer = setInterval(() => {
    if (step.value < steps.value.length - 1) step.value++
    else stop()
  }, 3200)
}
function togglePlay() { playing.value ? stop() : play() }
function next() { stop(); step.value = step.value < steps.value.length - 1 ? step.value + 1 : 0 }
function prev() { stop(); if (step.value > 0) step.value-- }
function pickScenario(key) { stop(); scenario.value = key; step.value = 0 }
function selectNode(id) { stop(); manualNode.value = id; travelD.value = '' }

let observer = null
onMounted(() => {
  travel()
  if (reducedMotion) return
  // Play the walkthrough once, the first time the map scrolls into view
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) { play(); observer.disconnect() }
  }, { threshold: 0.3 })
  observer.observe(rootRef.value)
})
onUnmounted(() => { stop(); cancelAnimationFrame(frame); observer?.disconnect() })
</script>

<style scoped>
.map-bleed {
  /* Wider than the text column, centred on the page */
  width: min(1240px, calc(100vw - 32px));
  margin-left: calc(50% - min(620px, 50vw - 16px));
}

.dot { width: 9px; height: 9px; border-radius: 9999px; display: inline-block; flex-shrink: 0; }

.map-container { container-type: inline-size; }
.map-main { display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; align-items: start; }
@container (min-width: 960px) {
  .map-main { grid-template-columns: minmax(0, 1.75fr) minmax(0, 1fr); }
  .map-panel { position: sticky; top: 84px; }
}
.map-scroll { overflow-x: auto; padding: 8px; }
.map-scroll svg { display: block; width: 100%; min-width: 760px; height: auto; }

.lane rect { fill: var(--color-raised); }
.lane text { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em; fill: var(--color-faint); }
.edge { fill: none; stroke: var(--color-line-strong); stroke-width: 1.5; }
.edge.dashed { stroke-dasharray: 4 4; stroke: var(--err, var(--color-line-strong)); opacity: 0.6; }
.edge-label { font-family: var(--font-mono); font-size: 10.5px; fill: var(--color-faint); }

.node { cursor: pointer; transition: opacity 0.25s; outline: none; }
.node rect { fill: var(--color-bg); stroke: var(--color-line-strong); stroke-width: 1.3; transition: fill 0.25s, stroke 0.25s; }
.node .t { font-family: var(--font-body); font-size: 13.5px; font-weight: 600; fill: var(--color-text); }
.node .s { font-family: var(--font-mono); font-size: 10.5px; fill: var(--color-faint); }
.node:hover rect, .node:focus-visible rect { stroke: var(--c); }
.node.active rect { fill: color-mix(in srgb, var(--c) 16%, var(--color-bg)); stroke: var(--c); stroke-width: 2.4; }
.node.dim { opacity: 0.4; }

.travel { fill: none; stroke: var(--color-teal); stroke-width: 2.5; stroke-linecap: round; }
.packet { fill: var(--color-teal); filter: drop-shadow(0 0 6px rgba(79, 216, 196, 0.8)); }

.code {
  margin: 0;
  background: var(--color-bg);
  border: 1px solid var(--color-line);
  padding: 10px 12px;
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: 11.5px;
  line-height: 1.55;
  color: var(--color-text);
  white-space: pre;
}

.map-btn {
  font-family: var(--font-mono);
  font-size: 12px;
  padding: 6px 10px;
  border: 1px solid var(--color-line);
  color: var(--color-dim);
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
}
.map-btn:hover:not(:disabled) { color: var(--color-text); border-color: var(--color-line-strong); }
.map-btn:disabled { opacity: 0.35; cursor: default; }
.map-btn-primary { border-color: var(--color-teal); color: var(--color-teal); }
.map-btn-primary:hover:not(:disabled) { color: var(--color-teal-hover); border-color: var(--color-teal-hover); }

/* Numbered lifecycle rail */
.cycle { list-style: none; margin: 0; padding: 0; }
.cycle > li { position: relative; padding: 0 0 16px 38px; min-width: 0; }
.cycle > li::after {
  content: '';
  position: absolute;
  left: 12px;
  top: 28px;
  bottom: 2px;
  width: 1px;
  background: color-mix(in srgb, var(--c) 40%, transparent);
}
.cycle > li:last-child { padding-bottom: 0; }
.cycle > li:last-child::after { display: none; }
.cycle-num {
  position: absolute;
  left: 0;
  top: 0;
  width: 25px;
  height: 25px;
  display: grid;
  place-items: center;
  border: 1px solid var(--c);
  color: var(--c);
  font-family: var(--font-mono);
  font-size: 12px;
}
.fail-tag { color: var(--err); border-color: color-mix(in srgb, var(--err) 45%, transparent); }

.rich :deep(code) { font-family: var(--font-mono); font-size: 0.92em; color: var(--color-teal); }
.rich :deep(b) { color: var(--color-text); font-weight: 600; }

.rules { width: 100%; border-collapse: collapse; font-size: 13px; min-width: 560px; }
.rules th, .rules td { text-align: left; padding: 9px 10px; border-bottom: 1px solid var(--color-line); vertical-align: top; color: var(--color-dim); }
.rules th { font-family: var(--font-mono); font-size: 11px; font-weight: 400; letter-spacing: 0.06em; color: var(--color-faint); }
.rules td:first-child { color: var(--color-text); font-weight: 600; white-space: nowrap; }

.swap-enter-active, .swap-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.swap-enter-from { opacity: 0; transform: translateY(4px); }
.swap-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
