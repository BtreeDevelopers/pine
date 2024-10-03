<script lang="ts" setup>
import { IIcons } from "../types/icons";

import { usePine } from "@/package";
import { getColor } from "../mixins/utils";
import { ref, computed, watch } from "vue";
const pine = usePine();

interface IItemDrawer {
  icon?: IIcons;
  disabled?: boolean;
  title: string;
  color?: string;
}
interface IItemLastDrawer {
  icon?: IIcons;
  title: string;
  color?: string;
}
const props = withDefaults(
  defineProps<{
    itens?: IItemDrawer[];
    modelValue?: number | null;
    selectedColor?: string;
    showIcons?: boolean;
    iconDirection?: "left" | "right";
    lastOption?: IItemLastDrawer;
  }>(),
  {
    selectedColor: "highlight",
    modelValue: null,
    showIcons: true,
    iconDirection: "left",
  }
);

const emit = defineEmits<{
  clickOnClose: [];
  clickOnItem: [value: number];
  clickOnLastItem: [];
}>();
const computedColor = computed(() => getColor(props.selectedColor, pine));
const internalModel = ref<number | null>(0);

watch(
  () => props.modelValue,
  (value) => {
    if (internalModel.value !== value) {
      internalModel.value = value;
    }
  },
  { immediate: true }
);
function selectOption(value: number) {
  internalModel.value = value;
  emit("clickOnItem", value);
}
</script>
<template>
  <div class="pine-drawer-model">
    <div>
      <div class="header">
        <PineIcon name="XMark" color="text" :size="20" class="icon" @click="emit('clickOnClose')"></PineIcon>
        <slot name="title"></slot>
        <div style="width: 30px"></div>
      </div>
      <div class="base">
        <div @click="item.disabled ? null : selectOption(ind)" v-for="(item, ind) in props.itens" :key="ind"
          class="item-list" :class="{
            selected: internalModel === ind,
            'right-icon': iconDirection == 'right',
            disabled: item.disabled,
          }">
          <PineIcon v-if="item.icon && props.showIcons && iconDirection == 'left'" :size="17" :name="item.icon"
            :color="item.color || 'text'" class="icon">
          </PineIcon>
          <p class="text-item">
            {{ item.title }}
          </p>
          <PineIcon v-if="item.icon && props.showIcons && iconDirection == 'right'" :size="17" :name="item.icon"
            :color="item.color || 'text'" class="icon">
          </PineIcon>
        </div>
      </div>
    </div>
    <div class="end">
      <div class="item-list" :class="{
        'center-end': !props.showIcons,
        'right-icon': iconDirection == 'right',
      }" @click="emit('clickOnLastItem')" v-if="lastOption">
        <PineIcon v-if="props.showIcons && lastOption?.icon && iconDirection == 'left'" :size="17"
          :name="lastOption.icon" :color="lastOption.color" class="icon">
        </PineIcon>
        <p class="text-item">
          {{ lastOption?.title }}
        </p>
        <PineIcon v-if="props.showIcons && lastOption?.icon && iconDirection == 'right'" :size="17"
          :name="lastOption.icon" :color="lastOption.color" class="icon">
        </PineIcon>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#pine-app .pine-drawer-model {
  padding: 22px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .header {
    padding-left: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;

    .icon {
      cursor: pointer;
    }
  }

  .base,
  .end {
    .item-list {
      padding: 13px 28px;
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 4.5px;

      margin-bottom: 10px;

      .icon {
        margin-right: 24px;
      }

      .text-item {
        font-size: 12px;
        text-transform: capitalize;
      }

      &.selected {
        background-color: v-bind(computedColor);
      }

      &.right-icon {
        justify-content: space-between;
      }

      &.disabled {
        cursor: default !important;
        background-color: #c6c6c6 !important;
        color: #000;
      }
    }
  }

  .end {

    width: 100%;

    .center-end {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
