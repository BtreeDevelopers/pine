<script setup lang="ts">
import { getColor, getValueWithUnit } from "@/package/mixins/utils";
import { computed } from "vue";
import { usePine } from "@/package";
import { IIcons } from "../types/icons";

const pine = usePine();
const props = withDefaults(
  defineProps<{
    "onClick:icon-right"?: () => void;
    modelValue?: string | number;
    disabled?: boolean;
    readonly?: boolean;
    label?: string;
    width?: string | number;
    type?: string;
    color?: string;
    backgroundColor?: string;
    placeholder?: string;
    iconRight?: IIcons;
    iconLeft?: IIcons;
    "onClick:icon-left"?: () => void;
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
  "click:icon-left": [];
  "click:icon-right": [];
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
      <PineIcon
        @click="emit('click:icon-left')"
        class="internal-icon left-icon"
        :class="{ 'icon-clickble': props['onClick:icon-left'] }"
        v-if="iconLeft"
        :name="iconLeft"
      ></PineIcon>
      <input
        :placeholder="placeholder"
        :type="type"
        :disabled="disabled"
        @input="(e: any) => emit('update:modelValue', e.target!.value)"
        :value="modelValue"
        :readonly="readonly"
      />
      <PineIcon
        @click="emit('click:icon-right')"
        class="internal-icon"
        :class="{ 'icon-clickble': props['onClick:icon-right'] }"
        v-if="iconRight"
        :name="iconRight"
      ></PineIcon>
    </div>
  </div>
</template>

<style lang="scss">
#pine-app.dark .pine-textfield input {
  color: #f1f1f1;
  &::placeholder {
    color: #f1f1f1;
  }
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
  .left-icon {
    left: 0;
    margin-left: 20px;
    margin-right: auto;
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
    padding-right: 50px;
    caret-color: v-bind("computedColor");
    font-weight: 400;
    color: black;
    &::placeholder {
      color: black;
    }
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
  .left-icon + input {
    padding-left: 50px;
  }
}

.dark .p-text-field input {
  color: white;
  &::placeholder {
    color: white;
  }
}
</style>
