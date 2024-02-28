<script setup lang="ts">
import { computed } from 'vue';
import { getColor } from '../mixins/utils';
import { usePine } from "@/package";
const pine = usePine();

const colorBG = computed(() => getColor("highlight", pine));
</script>
<template>
    <Teleport to="#pine-app">
        <footer class="pine-footer">
            <slot></slot>
        </footer>
    </Teleport>
</template>

<style scoped lang="scss">
.pine-footer {
    height: 45px;
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
