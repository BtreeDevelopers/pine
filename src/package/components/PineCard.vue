<script setup lang="ts">
import { computed } from "vue";
import { getValueWithUnit, getColor } from "../mixins/utils";
import { usePine } from "@/package";
const pine = usePine();
const props = withDefaults(
  defineProps<{
    height?: number | string;
    width?: number | string;
    backgroundColor?: string;
    onClick?: () => void;
  }>(),
  {
    height: "auto",
    width: "auto",
    backgroundColor: "highlight",
  }
);
const widthCmp = computed(() => getValueWithUnit(props.width));
const heightCmp = computed(() => getValueWithUnit(props.height));
const backgroundColorCmp = computed(() =>
  getColor(props.backgroundColor, pine)
);
const emit = defineEmits<{ click: [] }>();
</script>

<template>
  <div
    class="pine-card"
    @click="emit('click')"
    :class="{ clickable: props.onClick }"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.pine-card {
  width: v-bind("widthCmp");
  height: v-bind("heightCmp");
  background-color: v-bind("backgroundColorCmp");
  border-radius: 10px;
  padding: 15px;
  &.clickable {
    cursor: pointer;
  }
}
</style>
