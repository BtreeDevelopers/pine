<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { IIcons } from "../types/icons";
import { usePine } from "@/package";
import { getColor } from "../mixins/utils";
const pine = usePine();
const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    color?: string;
    disabled?: boolean;
    iconRight?: IIcons;
    iconLeft?: IIcons;
  }>(),
  {
    color: "primary",
  }
);
watch(
  () => props.modelValue,
  (value) => {
    if (typeof value === "boolean") internalValue.value = value;
  }
);
onMounted(() => {
  if (props.modelValue) internalValue.value = props.modelValue;
});
const computedColor = computed(() => getColor(props.color, pine));
const computedColorDisabled = computed(() => getColor("neutral30", pine));
const emit = defineEmits<{ "update:modelValue": [value: boolean] }>();
const internalValue = ref(false);
const changeValue = () => {
  if (props.disabled) return;
  internalValue.value = !internalValue.value;
  emit("update:modelValue", internalValue.value);
};
</script>

<template>
  <a
    @click="changeValue"
    class="switch-pine"
    :class="{ 'switch-disabled': disabled }"
  >
    <input type="checkbox" :value="internalValue" :disabled="disabled" />
    <div class="toggle-base">
      <PineIcon
        :name="iconLeft"
        :size="15"
        :class="{ oculte: !internalValue }"
        color="white"
        class="absolute"
        v-if="iconLeft"
      ></PineIcon>
      <div
        :class="{ oculte: internalValue }"
        class="absolute icon-right d-flex align-center"
        v-if="iconRight"
      >
        <PineIcon :name="iconRight" :size="15" color="white"></PineIcon>
      </div>
      <Transition name="move">
        <div
          class="toggle-circle absolute"
          :class="{ 'light-select': internalValue }"
        ></div>
      </Transition>
    </div>
  </a>
</template>

<style scoped lang="scss">
.switch-pine {
  input {
    display: none;
  }
  .absolute {
    position: absolute;
  }
  .none {
    display: none;
  }
  .light-select {
    margin-left: 22px;
  }
  .icon-right {
    right: 0;
    display: flex;
    align-items: center;
    margin-right: 4px;
  }
  .oculte {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  .toggle-base {
    justify-content: space-between;
    background-color: v-bind(computedColor);
    width: 41px;
    height: 26px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    padding: 0 4px;
    position: relative;
  }
  &.switch-disabled .toggle-base {
    background-color: v-bind("computedColorDisabled");
  }
  .toggle-circle {
    transition: all 0.5s ease;
    background: #fff;
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }
}
</style>
