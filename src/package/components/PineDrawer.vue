<script lang="ts" setup>
import { usePine } from "@/package"
import { getColor } from "../mixins/utils";
import { computed, ref, watch, getCurrentInstance } from "vue";
const pine = usePine();
const instace = getCurrentInstance();


const props = withDefaults(defineProps<{
    backgroundColor?: string,
    modelValue: boolean,
    closeOnClickOutside?: boolean
    app?: boolean
}>(), {
    backgroundColor: 'card',
    modelValue: false,
    closeOnClickOutside: true,
    app: true,
});
const emit = defineEmits<{
    'update:modelValue': [value: boolean]
}>();
const internalModel = ref(false);
watch(() => [props.app, props.modelValue], () => {
    if (props.modelValue) {
        const contains = instace?.parent?.vnode.el?.classList.contains("pine-menu-drawer-parent");
        if (!props.app && !contains) {
            instace!.parent!.vnode.el!.classList.add("pine-menu-drawer-parent")
        } else if (props.app && contains) {
            instace!.parent!.vnode.el!.classList.remove("pine-menu-drawer-parent")
        }
    }
}, { immediate: true })
watch(() => props.modelValue, (value) => {
    if (internalModel.value !== value) {
        internalModel.value = value;
    }
}, { immediate: true })

function closeDrawer() {
    internalModel.value = false;
    emit('update:modelValue', false)
}

const computedColor = computed(() => getColor(props.backgroundColor, pine))

</script>
<template>
    <div class="pine-menu-drawer">
        <Transition name="slide-position">
            <nav class="pine-drawer" v-if="internalModel">
                <slot></slot>
            </nav>
        </Transition>
        <Transition name="slide-fade">
            <div class="pine-overlay" v-if="internalModel" @click="closeOnClickOutside ? closeDrawer() : null">
            </div>
        </Transition>
    </div>
</template>
<style lang="scss">
#pine-app {
    .pine-menu-drawer-parent {
        position: relative;
    }

    .pine-menu-drawer {
        .pine-overlay {
            background: #00000044;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            width: 100%;
            height: 100%;
        }

        .pine-drawer {
            background: v-bind(computedColor);
            width: 25vw;
            max-width: 470px;
            min-width: 320px;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            z-index: 11;
            box-shadow: 10px 0px 15px 0px rgba(0, 0, 0, 0.25);
        }

        .slide-position-enter-active,
        .slide-position-leave-active {
            transition: all 0.4s ease-in-out;
        }

        .slide-position-enter-from,
        .slide-position-leave-to {
            transform: translateX(-500px);
        }

        .slide-fade-enter-active,
        .slide-fade-leave-active {
            transition: all 0.2s ease-in-out;
        }

        .slide-fade-enter-from,
        .slide-fade-leave-to {
            opacity: 0;
        }
    }

}
</style>