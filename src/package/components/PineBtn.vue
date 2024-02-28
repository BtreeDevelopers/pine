<script setup lang="ts">
import { computed } from "vue";
import { getValueWithUnit, getColor, percentToHex } from "../mixins/utils";
import { usePine } from "@/package";
const pine = usePine();
const props = withDefaults(
  defineProps<{
    height?: number | string;
    width?: number | string;
    color?: string;
    type?: "solid" | "outline" | "text";
    loading?: boolean;
  }>(),
  {
    height: "auto",
    width: "auto",
    color: "primary",
    type: "solid",
  }
);
const widthCmp = computed(() => getValueWithUnit(props.width));
const heightCmp = computed(() => getValueWithUnit(props.height));
const backgroundColorCmp = computed(() => getColor(props.color, pine));
const backgroundColorClickCmp = computed(
  () => getColor(props.color, pine) + percentToHex(70)
);
const backgroundColorHoverCmp = computed(
  () => getColor(props.color, pine) + percentToHex(90)
);
const emit = defineEmits<{ click: [] }>();
</script>

<template>
  <button class="pine-button" :class="[type + '-button', { 'loading-button': loading }]" :disabled="loading"
    @click="emit('click')">
    <div class="loading" v-if="loading">
      <PineLoading color="white" background-color="highlight" weight="6"></PineLoading>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<style scoped lang="scss">
.pine-button {
  width: v-bind("widthCmp");
  height: v-bind("heightCmp");

  border-radius: 5px;
  padding: 10px 30px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  position: relative;

  &.loading-button {
    cursor: auto;
  }

  .loading {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    box-sizing: border-box;

    :deep(.pine-loader) {
      height: 100% !important;
      width: auto !important;
      min-width: 100%;
    }

    :deep(.circular-loader) {
      height: 100% !important;
      width: auto !important;
    }
  }

  &.loading-button .content {
    opacity: 0;
  }

  &.solid-button {
    background-color: v-bind("backgroundColorCmp");
    color: white;
    transition: background-color 0.1 linear;

    &:hover:not(.loading-button) {
      background-color: v-bind("backgroundColorHoverCmp");
    }

    &:active:not(.loading-button) {
      background-color: v-bind("backgroundColorClickCmp");
    }
  }

  &.outline-button {
    background-color: transparent;
    color: v-bind("backgroundColorCmp");
    border: solid 1px v-bind("backgroundColorCmp");

    &:hover:not(.loading-button) {
      background-color: v-bind("backgroundColorCmp + percentToHex(10)");
    }

    &:active:not(.loading-button) {
      background-color: v-bind("backgroundColorCmp + percentToHex(20)");
    }
  }

  &.text-button {
    background-color: transparent;
    color: v-bind("backgroundColorCmp");

    &:hover:not(.loading-button) {
      background-color: v-bind("backgroundColorCmp + percentToHex(10)");
    }

    &:active:not(.loading-button) {
      background-color: v-bind("backgroundColorCmp+ percentToHex(20)");
    }
  }
}</style>
