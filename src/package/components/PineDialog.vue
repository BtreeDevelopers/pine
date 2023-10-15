<script lang="ts" setup>
import { ref, watch } from "vue";
const props = defineProps<{
  modelValue: boolean;
}>();
const emit = defineEmits<{
  "update:modelValue": [val: boolean];
}>();
const visibilidade = ref(false);
watch(
  () => props.modelValue,
  (val) => {
    visibilidade.value = props.modelValue;
    val
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "inherit");
  },
  { immediate: true }
);
function fechar() {
  emit("update:modelValue", false);
  visibilidade.value = false;
}
</script>

<template>
  <div
    class="pine-dialog"
    :class="visibilidade ? 'aberta' : 'fechada'"
    @click="fechar"
  >
    <div class="pine-dialog-base" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pine-dialog {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: -50;
  &.aberta {
    opacity: 1;
    backdrop-filter: brightness(0.2);
    z-index: 50;
    & .pine-dialog-base {
      transform: translate(0px, 0vh);
      opacity: 1;
    }
  }
  & .pine-dialog-base {
    transition: all 0.3s ease;
    transform: translate(0px, 150vh);
    opacity: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
}
</style>
