<script setup lang="ts">
import { computed } from 'vue';
import { getColor, getValueWithUnit } from '../mixins/utils';
import { usePine } from "@/package";
const pine = usePine();
const props = withDefaults(
    defineProps<{
        color?: string;
        height?: number | string;
        class?: string
    }>(),
    {
        color: "highlight",
        height: "45px",
    }
);
const colorBG = computed(() => getColor(props.color, pine));
const heightCmp = computed(() => getValueWithUnit(props.height));

</script>
<template>
    <footer class="pine-footer" :class="props.class">
        <slot></slot>
    </footer>
</template>

<style scoped lang="scss">
.pine-footer {
    height: v-bind("heightCmp");
    background-color: v-bind("colorBG");
    align-items: center;
    display: flex;
    flex: 0 1 auto !important;
    flex-wrap: wrap;
    padding: 6px 16px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
