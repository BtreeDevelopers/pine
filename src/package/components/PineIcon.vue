<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue';
import { IIcons, IconNames } from "@/package/types/icons"
import { getColor, getValueWithUnit } from '../mixins/utils';
import { usePine } from "@/package"
const pine = usePine();

const props = withDefaults(defineProps<{
    name: IIcons,
    type?: 'solid' | 'outline',
    color?: string,
    size?: number
}>(), {
    type: 'solid',
    color: 'primary',
    size: 20
});

const icon = computed(() => {
    const iconName = props.name + 'Icon' as IconNames;
    return defineAsyncComponent(async () => {
        if (props.type == 'solid') {
            const icons = await import(`@heroicons/vue/24/solid/index.js`);
            return icons[iconName]
        } else {
            const icons = await import(`@heroicons/vue/24/outline/index.js`);
            return icons[iconName]
        }
    })
})
const computedColor = computed(() => getColor(props.color, pine))
const computedValueWithUnit = computed(() => getValueWithUnit(props.size))
</script>
<template>
    <component :is="icon" class="pine-icon"></component>
</template>
<style lang="scss">
#pine-app .pine-icon {
    color: v-bind(computedColor);
    width: v-bind(computedValueWithUnit);
    height: v-bind(computedValueWithUnit);

}
</style>