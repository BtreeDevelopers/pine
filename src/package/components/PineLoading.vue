<script setup lang="ts">
import { computed } from "vue";
import { getValueWithUnit, getColor } from "@/package/mixins/utils";
import { usePine } from "@/package";
const pine = usePine();

const props = withDefaults(
  defineProps<{
    size: number | string;
    weight: number | string;
    color: string;
    backgroundColor: string;
  }>(),
  {
    size: 60,
    weight: 4,
    color: "primary",
    backgroundColor: "highlight",
  }
);

const sizeCmp = computed(() => getValueWithUnit(props.size));
const weightCmp = computed(() => getValueWithUnit(props.weight));
const colorCmp = computed(() => getColor(props.color, pine));
const backgroundColorCmp = computed(() =>
  getColor(props.backgroundColor, pine)
);
</script>

<template>
  <div class="pine-loader">
    <svg class="circular-loader" viewBox="25 25 50 50">
      <circle class="loader-bg" cx="50" cy="50" r="20"></circle>
      <circle class="loader-path" cx="50" cy="50" r="20"></circle>
    </svg>
  </div>
</template>

<style lang="scss">
:root {
  --rotation-animation-speed: 2s;
  --rotation-animation-easing: linear;
  --stroke-animation-speed: 1.5s;
  --stroke-animation-easing: ease-in-out;
  --stroke-start-dasharray: 1, 200;
  --stroke-end-dasharray: 89, 200;
}

#pine-app {
  .pine-loader {
    width: v-bind(sizeCmp);
    height: v-bind(sizeCmp);
  }

  .circular-loader {
    animation: rotate var(--rotation-animation-speed)
      var(--rotation-animation-easing) infinite;
  }

  .loader-bg {
    fill: none;
    stroke-width: v-bind(weightCmp);
    stroke-linecap: round;
    stroke: v-bind(backgroundColorCmp);
  }

  .loader-path {
    fill: none;
    stroke-width: v-bind(weightCmp);
    animation: animate-stroke var(--stroke-animation-speed)
      var(--stroke-animation-easing) infinite;
    stroke-linecap: round;
    stroke: v-bind(colorCmp);
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-stroke {
  0% {
    stroke-dasharray: var(--stroke-start-dasharray);
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: var(--stroke-end-dasharray);
    stroke-dashoffset: -35;
  }

  100% {
    stroke-dasharray: var(--stroke-end-dasharray);
    stroke-dashoffset: -124;
  }
}
</style>
