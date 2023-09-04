<script setup lang="ts">
import { getColor, getValueWithUnit } from "@/package/mixins/utils";
import { computed } from "vue";
import { usePine } from "@/package"
const pine = usePine();
const props = withDefaults(defineProps<{
    modelValue?: string | number
    disabled?: boolean
    label?: string
    width?: string | number
    type?: string
    color?: string
    backgroundColor?: string
}>(), {
    width: '300px',
    type: 'text',
    color: 'primary',
    backgroundColor: 'card',
});
const emit = defineEmits<{ 'update:modelValue': [value: string | number] }>()
const computedBackgroundColor = computed(() => getColor(props.backgroundColor, pine))
const computedColor = computed(() => getColor(props.color, pine))
const computedValueWithUnit = computed(() => getValueWithUnit(props.width))
</script>
<template>
    <div class="p-text-field">
        <p v-if="label">{{ label }}</p>
        <input :type="type" :disabled="disabled"
            @update:modelValue="(value: string | number) => emit('update:modelValue', value)" :modelValue="modelValue" />
    </div>
</template>

<style lang="scss">
.p-text-field {
    margin: 2px;

    p {
        margin-bottom: 5px;
        font-weight: bold;
        font-size: 20px;
    }

    input {
        border: none;
        background: v-bind('computedBackgroundColor');
        border-radius: 8px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 15px;
        caret-color: v-bind('computedColor');
        font-weight: 400;
        color: black;

        &:focus-visible,
        &:hover {
            outline: 2px solid v-bind('computedColor');
        }

        font-size: 24px;
        min-width: 300px;
        width: v-bind('computedValueWithUnit');
    }
}

.dark .p-text-field input {
    color: white;
}
</style>