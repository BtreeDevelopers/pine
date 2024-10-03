<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue';
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
const mounted = ref(false);
onMounted(async () => {
    await nextTick();
    mounted.value = true;
});
</script>
<template>
    <div v-if="mounted">
        <Teleport to="#pine-app header">
            <div class="pine-footer">
                <slot></slot>
            </div>
        </Teleport>

    </div>
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
