<script setup lang="ts">
import { computed } from 'vue';
import { getColor, getValueWithUnit } from '../mixins/utils';
import { usePine } from "@/package";
const pine = usePine();
const props = withDefaults(
    defineProps<{
        size?: number | string;
        color?: string;
        shape?: string | 'circle' | 'square';
    }>(),
    {
        size: '50px',
        color: "highlight",
        shape: 'circle'
    }
);
const sizeCmp = computed(() => getValueWithUnit(props.size));
const colorBG = computed(() => getColor(props.color, pine));
</script>
<template>
    <div class="pine-avatar" :class="{ square: props.shape === 'square' }">

        <slot></slot>

    </div>
</template>

<style scoped lang="scss">
.pine-avatar {
    overflow: hidden;
    background-color: v-bind("colorBG");
    width: v-bind("sizeCmp");
    height: v-bind("sizeCmp");
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;

    :deep(img) {
        min-width: v-bind("sizeCmp");
        min-height: v-bind("sizeCmp");
        max-width: v-bind("sizeCmp");
        max-height: v-bind("sizeCmp");
    }

    &.square {

        border-radius: 0;
    }


}
</style>
