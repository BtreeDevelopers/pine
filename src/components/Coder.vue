<template>
    <div>
        <codemirror :model-value="code" disabled :style="{ height: 'auto' }" :extensions="extensions"
            @click="emit('copy', code)" />
    </div>
</template>

<script lang="ts" setup>
import { pineUi } from '@/assets/pineUi';
import { Codemirror } from 'vue-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vue } from '@codemirror/lang-vue';
import { computed } from 'vue';
import { StreamLanguage } from '@codemirror/language'
import { shell } from '@codemirror/legacy-modes/mode/shell'

interface Props {
    code: string;
    language?: "js" | "vue" | "shell";
}

// Props do componente
const props = defineProps<Props>();
const emit = defineEmits<{
    (event: "copy", value: string): void;
}>();
const extensions = computed(() => {
    const exts = [pineUi];
    if (props.language == 'js') {
        exts.push(javascript());
    } else if (props.language == 'vue') {
        exts.push(vue());
    } else {
        exts.push(StreamLanguage.define(shell))
    }
    return exts;
});

</script>

<style scoped lang="scss">
:deep(.v-codemirror .cm-editor) {
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
}

:deep(.v-codemirror .cm-gutters) {
    display: none;
}
</style>