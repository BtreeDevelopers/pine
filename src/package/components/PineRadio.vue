<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { getColor } from '../mixins/utils';
import { usePine } from '..';

const pine = usePine();

const props = withDefaults(defineProps<{
    value: string | number,
    modelValue: string | number,
    disabled?: boolean,
    color?: string;
    backgroundColor?: string;

}>(), {
    color: "primary",
    backgroundColor: "highlight",
});
const emit = defineEmits<{ "update:modelValue": [value: string | number] }>();
const internalValue = ref<string | number>('');
watch(() => props.modelValue, () => {
    if (props.modelValue !== internalValue.value) {
        internalValue.value = props.modelValue;
    }
}, {
    immediate: true
})
watch(() => internalValue.value, () => {
    if (props.modelValue !== internalValue.value) {
        emit('update:modelValue', internalValue.value)
    }
})

const backgroundColorCmp = computed(() => getColor(props.backgroundColor, pine));
const colorCmp = computed(() => getColor(props.color, pine));

</script>

<template>
    <div class="pine-radio" :class="{ disabled }" @click="internalValue = value">
        <div class="pine-sub-radio" :class="{ selected: internalValue === value }">
            <div class="pine-radio-selected" v-if="internalValue === value"></div>
        </div>
        <input class="pine-radio-input" :disabled="disabled" type="radio" :value="value" v-model="internalValue">
    </div>

</template>
<style lang="scss" scoped>
.pine-radio {
    cursor: pointer;



    .pine-sub-radio {
        background-color: v-bind(backgroundColorCmp);
        width: 27px;
        height: 27px;
        border-radius: 50%;
        position: relative;

        .pine-radio-selected {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 15px;
            height: 15px;

            border-radius: 50%;
            background-color: v-bind(colorCmp);
        }


        &:hover,
        &.selected {
            border: 2px solid v-bind(colorCmp);
        }


    }

    &.disabled .pine-sub-radio {
        border: 2px solid #E5E6E8;

        .pine-radio-selected {
            background-color: #E5E6E8;
        }
    }
}

.pine-radio-input {
    position: absolute;
    opacity: 0;
    height: 24px;
    width: 24px;
    cursor: pointer;
    margin: 0;
}
</style>