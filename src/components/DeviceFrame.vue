<template>
  <div class="stage relative border border-line bg-surface overflow-hidden">
    <span class="corner tl"></span>
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>
    <div class="stage-grid" aria-hidden="true"></div>

    <!-- Browser window -->
    <div v-if="device.type === 'browser'" class="relative px-3 py-6 sm:px-8 sm:py-10">
      <div class="browser">
        <div class="browser-bar">
          <span class="flex gap-2 shrink-0" aria-hidden="true">
            <i class="light" style="background:#ff5f57"></i>
            <i class="light" style="background:#febc2e"></i>
            <i class="light" style="background:#28c840"></i>
          </span>
          <span class="browser-url">{{ device.url }}</span>
          <span v-if="device.status" class="browser-status">
            <i class="status-dot" :style="{ background: statusColor, color: statusColor }"></i>
            <span class="hidden sm:inline">{{ device.status }}</span>
          </span>
        </div>
        <div class="screen" :style="{ aspectRatio }">
          <video v-if="isVideo" :src="src" :style="mediaStyle" autoplay muted loop playsinline :aria-label="alt"></video>
          <img v-else :src="src" :alt="alt" :style="mediaStyle" />
        </div>
      </div>
    </div>

    <!-- Phone -->
    <div v-else class="relative flex flex-col items-center gap-4 py-8 sm:py-10">
      <div class="phone">
        <i class="phone-btn left top" aria-hidden="true"></i>
        <i class="phone-btn left mid" aria-hidden="true"></i>
        <i class="phone-btn right" aria-hidden="true"></i>
        <div class="phone-screen" :style="{ aspectRatio }">
          <video v-if="isVideo" :src="src" autoplay muted loop playsinline :aria-label="alt"></video>
          <img v-else :src="src" :alt="alt" />
          <i class="island" aria-hidden="true"></i>
        </div>
      </div>
      <span v-if="device.status" class="inline-flex items-center gap-2 font-mono text-[12px] text-dim">
        <i class="status-dot" :style="{ background: statusColor, color: statusColor }"></i>{{ device.status }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // { type: 'browser' | 'phone', url?, status?, size: [width, height], cropTop? (px of the source) }
  device: { type: Object, required: true },
  src: { type: String, required: true },
  alt: { type: String, default: '' },
})

const isVideo = computed(() => props.src.toLowerCase().endsWith('.mp4'))

// Visible area of the recording; cropTop hides browser UI that was captured in the recording itself
const aspectRatio = computed(() => {
  const [w, h] = props.device.size
  return `${w} / ${h - (props.device.cropTop || 0)}`
})
const mediaStyle = computed(() => {
  const [w] = props.device.size
  // Percentage margins are relative to the container's width, so this shifts by exactly cropTop source pixels
  return props.device.cropTop ? { marginTop: `-${(props.device.cropTop / w) * 100}%` } : {}
})

const STATUS_COLORS = { live: 'var(--color-teal)', beta: 'var(--color-teal)' }
const statusColor = computed(() => STATUS_COLORS[props.device.status] || 'var(--color-amber)')
</script>

<style scoped>
.stage-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--color-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-line) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 80%);
  opacity: 0.45;
  pointer-events: none;
}

/* Browser */
.browser {
  position: relative;
  border: 1px solid var(--color-line-strong);
  border-radius: 10px;
  overflow: hidden;
  background: #0d1117;
  box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.02);
}
.browser-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 44px;
  padding: 0 14px;
  background: #0d1117;
  border-bottom: 1px solid var(--color-line);
}
.light { width: 11px; height: 11px; border-radius: 9999px; display: block; }
.browser-url {
  flex: 1;
  min-width: 0;
  margin: 0 auto;
  max-width: 320px;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-dim);
  padding: 4px 12px;
  border: 1px solid var(--color-line);
  border-radius: 6px;
  background: var(--color-bg);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.browser-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text);
}
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  display: inline-block;
  box-shadow: 0 0 8px currentColor;
}
.screen { position: relative; overflow: hidden; background: var(--color-bg); }
.screen video, .screen img { display: block; width: 100%; height: auto; }

/* Phone */
.phone {
  position: relative;
  padding: 11px;
  border-radius: 46px;
  background: #0b0e13;
  border: 1px solid var(--color-line-strong);
  box-shadow:
    0 30px 70px -25px rgba(0, 0, 0, 0.9),
    0 0 0 6px #10151f,
    0 0 0 7px var(--color-line);
}
.phone-screen {
  position: relative;
  height: min(560px, 68vh);
  border-radius: 36px;
  overflow: hidden;
  background: #000;
}
.phone-screen video, .phone-screen img { display: block; width: 100%; height: 100%; object-fit: cover; }
.island {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  height: 22px;
  border-radius: 9999px;
  background: #000;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.04);
}
.phone-btn {
  position: absolute;
  width: 3px;
  border-radius: 2px;
  background: var(--color-line-strong);
}
.phone-btn.left { left: -9px; }
.phone-btn.right { right: -9px; top: 140px; height: 70px; }
.phone-btn.top { top: 110px; height: 34px; }
.phone-btn.mid { top: 160px; height: 56px; }
</style>
