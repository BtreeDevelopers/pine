<script setup lang="ts">
import { computed } from 'vue';
import { getColor } from '../mixins/utils';
import { usePine } from "@/package";
const pine = usePine();
const props = withDefaults(
    defineProps<{
        color?: string;
    }>(),
    {
        color: "primary",
    }
);
const colorBG = computed(() => getColor(props.color, pine));
</script>
<template>
    <Teleport to="#pine-app header">
        <div class="pine-footer">
            <slot></slot>
        </div>
    </Teleport>
</template>

<style scoped lang="scss">
.pine-footer {
    height: 45px;
    background-color: v-bind("colorBG");
    flex: 0 1 auto !important;
    flex-wrap: wrap;
    padding: 6px 16px;
    position: relative;
}
</style>
