<script setup lang="ts">
import { getAllChildren, getColor } from "@/package/mixins/utils";
import { computed, ref, watch } from "vue";
import { usePine } from "@/package";
const pine = usePine();
const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    closeOnClick?: boolean;
  }>(),
  {
    closeOnClick: true,
  }
);
const emit = defineEmits<{ "update:modelValue": [value: boolean] }>();
const showMenu = ref(false);
watch(
  () => props.modelValue,
  (value) => (showMenu.value = value),
  { immediate: true }
);
watch(
  () => showMenu.value,
  (value) => emit("update:modelValue", value),
  { immediate: true }
);

const allChildren = () => getAllChildren(menuBase.value!.childNodes as any);
const closeMenu = () => (showMenu.value = false);
const colorBG = computed(() => getColor("card", pine));
const menuBase = ref<HTMLElement>();
</script>
<template>
  <div
    class="p-menu"
    ref="menuBase"
    v-click-outside="{
      handler: closeMenu,
      include: () => [...allChildren()],
    }"
  >
    <div class="component" ref="comp" @click="showMenu = !showMenu">
      <slot></slot>
    </div>

    <div
      class="menu"
      :class="{ 'show-modal': showMenu }"
      ref="timerPicker"
      @click="
        () => {
          closeOnClick && closeMenu();
        }
      "
    >
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<style lang="scss">
#pine-app {
  .p-menu {
    // position: relative;
    height: 100%;
    width: min-content;
    .component {
      width: min-content;
    }

    .menu {
      display: none;
      box-sizing: border-box;
      position: absolute;
      // width: 100%;

      &.show-modal {
        display: flex;
      }
      margin-top: 2px;
      background: v-bind(colorBG);
      border-radius: 10px;
      box-shadow: 0px 7.60456px 19.0114px rgba(0, 0, 0, 0.25);
      padding: 16px;
    }
  }
}
</style>
