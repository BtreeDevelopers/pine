<template>
    <div class="tabs">
        <div class="tab-list" ref="tabList">
            <button v-for="(tab, index) in tabs" :key="tab" :class="['tab', { active: tab === modelValue }]"
                @click="selectTab(tab, index)" ref="tabButtons">
                {{ tab }}
            </button>
            <!-- Indicador animado -->
            <div class="active-indicator" :style="indicatorStyle"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue';
import { getColor } from '../mixins/utils';
import { usePine } from "@/package";
const pine = usePine();
const computedColor = computed(() => getColor('highlight', pine));
// Props e eventos
const props = defineProps<{
    tabs: string[];
    modelValue: string;
}>();

const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void;
}>();

// Refs para calcular posição do indicador
const tabList = ref<HTMLElement | null>(null);
const tabButtons = ref<(HTMLElement | null)[]>([]);
const indicatorStyle = ref({
    width: '0px',
    left: '0px',
});

// Atualiza o indicador com base na aba ativa
const updateIndicator = (index: number) => {
    const button = tabButtons.value[index];
    if (button) {
        const buttonRect = button.getBoundingClientRect();
        const listRect = tabList.value!.getBoundingClientRect();
        indicatorStyle.value = {
            width: `${buttonRect.width}px`,
            left: `${buttonRect.left - listRect.left}px`,
        };
    }
};

// Seleciona uma aba e atualiza o indicador
const selectTab = (tab: string, index: number) => {
    emit('update:modelValue', tab);
    updateIndicator(index);
};

// Observa mudanças na aba ativa
watch(
    () => props.modelValue,
    (newValue) => {
        const index = props.tabs.indexOf(newValue);
        if (index !== -1) updateIndicator(index);
    }
);

// Atualiza o indicador ao montar o componente
onMounted(() => {
    const index = props.tabs.indexOf(props.modelValue);
    if (index !== -1) updateIndicator(index);
});
</script>

<style scoped lang="scss">
.tabs {
    width: 100%;
    text-align: center;
}

.tab-list {
    display: flex;
    gap: 20px;
    position: relative;
    border-bottom: 1px solid v-bind(computedColor);
}

.tab {
    background: none;
    border: none;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    color: inherit;
    position: relative;
}

.tab.active,
.tab:hover {
    font-weight: 700;
}

.active-indicator {
    position: absolute;
    bottom: 0;
    height: 3px;
    background: currentColor;
    transition: all 0.3s ease;
}
</style>