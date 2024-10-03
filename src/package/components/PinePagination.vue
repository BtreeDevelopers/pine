<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { getColor } from '../mixins/utils';

import { usePine } from '..';

const pine = usePine();

const props = withDefaults(
    defineProps<{
        modelValue?: number;
        color?: string;
        backgroundColor?: string;
        totalPages: number
    }>(),
    {
        color: "primary",
        backgroundColor: "highlight",
    }
);
const emit = defineEmits<{ "update:modelValue": [value: number | undefined] }>();
const pageAtual = ref<number | undefined>(undefined);
const LIMITESHOW = 4;
const generatePages = computed(() => {
    if (props.totalPages <= LIMITESHOW) return [1, 2, 3, 4];
    else if (!pageAtual.value) return [1, 2, 3];
    else if (pageAtual.value) {

        if (pageAtual.value <= LIMITESHOW - 2) return [1, 2, 3];
        else if (pageAtual.value <= props.totalPages - 1) {
            return [pageAtual.value - 1, pageAtual.value, pageAtual.value + 1]
        } else if (pageAtual.value === props.totalPages) {
            return [props.totalPages - 2, props.totalPages - 1, props.totalPages]
        }
    }
})
watch(() => props.modelValue, () => {
    if (props.modelValue !== pageAtual.value && props.modelValue && props.modelValue >= 1 && props.modelValue <= props.totalPages) {
        pageAtual.value = props.modelValue;
    }
}, {
    immediate: true
})
watch(() => pageAtual.value, () => {
    if (props.modelValue !== pageAtual.value) {
        emit('update:modelValue', pageAtual.value)
    }
})
const backgroundColorCmp = computed(() => getColor('background', pine));
const colorCmp = computed(() => getColor('primary', pine));


</script>
<template>
    <nav class="pine-paginator">

        <ul class="pine-paginator-list">
            <template v-if="pageAtual && pageAtual >= LIMITESHOW - 1">
                <li @click="pageAtual = 1" :class="{ selected: pageAtual === 1 }">
                    <button>1</button>
                </li>
                <li class="separator">
                    <button>...</button>
                </li>

            </template>
            <li v-for="n in generatePages" @click="pageAtual = n" :class="{ selected: pageAtual === n }">
                <button>{{ n }}</button>
            </li>
            <template v-if="totalPages > LIMITESHOW && (pageAtual && pageAtual < totalPages - 1 || !pageAtual)">
                <li class="separator">
                    <button>...</button>
                </li>
                <li @click="pageAtual = totalPages" :class="{ selected: pageAtual === totalPages }">
                    <button>{{ totalPages }}</button>
                </li>
            </template>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
.pine-paginator {
    .pine-paginator-list {
        display: flex;
        list-style-type: none;
        gap: 4px;
        padding-left: 0;

        li {
            background-color: v-bind(backgroundColorCmp);
            border-radius: 4px;
            width: 38px;
            height: 38px;

            button {
                color: white;
                cursor: pointer;
                border: none;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: transparent;
                width: 38px;
                height: 38px;
                font-weight: 500;
                font-size: 15px;


            }

            &.selected {
                background-color: v-bind(colorCmp);
            }
        }

        .separator {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            width: 26px !important;

            button {
                pointer-events: none;
                height: min-content;
                padding-bottom: 10.5px;

            }
        }
    }
}
</style>