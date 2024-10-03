<script setup lang="ts">
import { getColor } from "@/package/mixins/utils";
import { computed, ref, watch, onMounted } from "vue";
import { usePine } from "@/package";
const pine = usePine();
type IItem =
  | string
  | {
    text: string;
    value: string;
  };
const props = withDefaults(
  defineProps<{
    items: IItem[];
    label?: string;
    placeholder?: string;
    color?: string;
    modelValue?: string;
    backgroundColor?: string;
  }>(),
  {
    color: "primary",
    backgroundColor: "highlight",
  }
);
onMounted(() => {
  if (props.modelValue) selectItem(props.modelValue);
});
watch(
  () => props.modelValue,
  (value) => {
    if (value) selectItem(value);
  }
);
const emit = defineEmits<{ "update:modelValue": [value: string] }>();
const computedColor = computed(() => getColor(props.color, pine));
const computedColorDestaque = computed(() => getColor("background", pine));
const isOpen = ref(false);
const getValue = (item: IItem, key = "value") => {
  if (typeof item === "string") return item;
  else if (!item) return undefined;
  else if ((item as any)[key]) return (item as any)[key] as string;
  return item;
};
const getTextValue = (key = "value", keyShow = "text") => {
  const item = props.items.find(
    (el) => getValue(el, key) === selectedItem.value
  );
  if (item) {
    return getValue(item, keyShow) as string;
  }
  return "";
};
const selectItem = (item: IItem) => {
  selectedItem.value = getValue(item) as string;
  emit("update:modelValue", selectedItem.value);
};
const computedBackgroundColor = computed(
  () => getColor(props.backgroundColor, pine) || "highlight"
);

const selectedItem = ref("");
</script>

<template>
  <div class="pine-select" :class="{ 'is-open': isOpen }">
    <p v-if="label">{{ label }}</p>
    <PineMenu v-model="isOpen">
      <PineTextField :model-value="getTextValue()" :color="color" readonly class="input" icon-right="ArrowDown"
        :background-color="computedBackgroundColor" :placeholder="placeholder"></PineTextField>
      <template v-slot:menu>
        <ul class="list-items">
          <li v-for="item in items" :key="(getValue(item) as string)" @click="selectItem(item)"
            :class="{ 'item-selected': selectedItem === getValue(item) }">
            {{ getValue(item, "text") }}
          </li>
        </ul>
      </template>
    </PineMenu>
  </div>
</template>

<style scoped lang="scss">
#pine-app {
  .pine-select {
    p {
      text-align: start;
      margin-bottom: 5px;
      font-weight: 600;
      font-size: 14px;
    }

    &.is-open :deep(.p-menu .component) {
      z-index: 4;
    }

    &.is-open :deep(.p-menu .menu) {
      z-index: 3;
    }

    &.is-open :deep(input) {
      outline: 2px solid v-bind("computedColor");
    }

    :deep(.internal-icon) {
      transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &.is-open :deep(.internal-icon) {
      transform: rotate(180deg) translate(0, 50%);
    }

    .input :deep(input) {
      cursor: pointer;
    }

    :deep(.p-menu) {
      width: auto;
    }

    :deep(.p-menu .component) {
      width: 100%;
      z-index: 2;
      position: relative;
    }

    :deep(.p-menu .menu) {
      width: calc(100% - 3px);
      border-radius: 0px 0px 10px 10px;
      margin-top: -4px;
      margin-left: 1px;
    }

    .list-items {
      list-style: none;
      padding-left: 0;
      font-size: 16px;
      font-weight: 400;
      width: 100%;
      max-height: 240px;
      overflow-y: auto;
      margin: 0;

      li {
        padding-top: 14px;
        padding-bottom: 14px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 6px;
        text-align: start;
        cursor: pointer;
      }

      .item-selected {
        background-color: v-bind(computedColorDestaque);
      }
    }
  }
}
</style>
