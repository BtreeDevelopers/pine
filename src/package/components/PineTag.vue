<script setup lang="ts">
import { computed } from 'vue';
import { getColor, percentToHex } from '../mixins/utils';
import { usePine } from '..';
const pine = usePine();
type Props = {
    text: string;
    color?: string;
};

const props = withDefaults(defineProps<Props>(), {
    color: 'primary'
});
const colorCmp = computed(() => getColor(props.color, pine));
const colorCmpbg = computed(() => getColor(props.color, pine) + percentToHex(50));
const colorCmpHover = computed(() => getColor(props.color, pine) + percentToHex(60));
</script>
<template>
    <div class="pine-tag">
        {{ text }}
    </div>
</template>



<style scoped>
.pine-tag {
    background-color: v-bind(colorCmpbg);
    color: v-bind(colorCmp);
    border-radius: 6px;
    padding: 4px 18px;
    font-size: 12px;
    transition: background-color 0.3s ease;
}

.pine-button:hover {
    background-color: v-bind(colorCmpHover);
}
</style>