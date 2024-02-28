<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { usePine } from "@/package";
import { getColor } from '../mixins/utils';
const pine = usePine();

const props = withDefaults(
    defineProps<{
        modelValue?: boolean;
        color?: string;
        backgroundColor?: string;
        disabled?: boolean;
    }>(),
    {
        color: "primary",
        backgroundColor: "highlight",
    }
);

const emit = defineEmits<{
    "update:modelValue": [val: boolean];
}>();

const internalValue = ref(false);

const backgroundColorCmp = computed(() => getColor(props.backgroundColor, pine));
const colorCmp = computed(() => getColor(props.color, pine));

watch(() => internalValue.value, (value) => {
    emit('update:modelValue', value)
}, { immediate: true })

</script>
<template>
    <div class="pine-checkbox" :class="{ disabled }">
        <div class="pine-sub-check">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 46 34" fill="none"
                v-if="internalValue">
                <path d="M41.4286 5L16.3839 29.2857L5 18.2468" :stroke="colorCmp || 'current-color'" stroke-width="7"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        <input v-model="internalValue" :disabled="disabled" type="checkbox" class="pine-check-input">
    </div>
</template>

<style scoped lang="scss">
.pine-checkbox {
    position: relative;
    box-sizing: border-box;
    height: 24px;
    width: 24px;
    border-radius: 5px;


    .pine-sub-check {
        position: absolute;
        height: 24px;
        width: 24px;
        border-radius: 5px;
        background: v-bind("backgroundColorCmp");
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1.25px solid transparent
    }

    &.disabled .pine-sub-check {
        background: #B5B5B5;
    }

    &.disabled svg path {
        stroke: #E5E6E8;
    }

    .pine-check-input {
        position: absolute;
        opacity: 0;
        height: 24px;
        width: 24px;
        cursor: pointer;
        margin: 0;
    }

    &.disabled .pine-check-input {
        cursor: auto;
    }

}

.pine-checkbox:hover:not(.disabled) .pine-sub-check {
    border-color: v-bind("colorCmp");

}
</style>
