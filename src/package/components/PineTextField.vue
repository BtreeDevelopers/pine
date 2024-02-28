<script setup lang="ts">
import { getColor, getValueWithUnit } from "@/package/mixins/utils";
import { computed } from "vue";
import { usePine } from "@/package";
import { IIcons } from "../types/icons";

const pine = usePine();
const props = withDefaults(
  defineProps<{
    modelValue?: string | number;
    disabled?: boolean;
    readonly?: boolean;
    label?: string;
    width?: string | number;
    type?: string;
    color?: string;
    backgroundColor?: string;
    iconRight?: IIcons;
    "onClick:icon"?: () => void;
  }>(),
  {
    width: "100%",
    type: "text",
    color: "primary",
    backgroundColor: "highlight",
  }
);
const emit = defineEmits<{
  "update:modelValue": [value: string | number];
  "click:icon": [];
}>();
const computedBackgroundColor = computed(() =>
  getColor(props.backgroundColor, pine)
);
const computedColor = computed(() => getColor(props.color, pine));
const computedValueWithUnit = computed(() => getValueWithUnit(props.width));
</script>
<template>
  <div class="pine-textfield">
    <p v-if="label">{{ label }}</p>
    <div class="container">
      <input :type="type" :disabled="disabled" @input="(e: any) => emit('update:modelValue', e.target!.value)"
        :value="modelValue" :readonly="readonly" />
      <PineIcon @click="emit('click:icon')" class="internal-icon" :class="{ 'icon-clickble': props['onClick:icon'] }"
        v-if="iconRight" :name="iconRight"></PineIcon>
    </div>
  </div>
</template>

<style lang="scss">
#pine-app.dark .pine-textfield input {
  color: #f1f1f1;
}

#pine-app .pine-textfield {
  margin: 2px;

  .container {
    position: relative;
  }

  p {
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 14px;
  }

  .internal-icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    margin-right: 20px;
  }

  .icon-clickble {
    cursor: pointer;
  }

  input {
    box-sizing: border-box;
    border: none;
    background: v-bind("computedBackgroundColor");
    border-radius: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    caret-color: v-bind("computedColor");
    font-weight: 400;
    color: black;

    &:focus-visible:not([disabled]),
    &:hover:not([disabled]) {
      outline: 2px solid v-bind("computedColor");
    }

    &[disabled] {
      outline: 2px solid v-bind("getColor('neutral60', pine)");
    }

    font-size: 14px;
    min-width: 300px;
    width: v-bind("computedValueWithUnit");
  }
}

.dark .p-text-field input {
  color: white;
}
</style>
