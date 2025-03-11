<template>
    <div class="coder">
        <codemirror :model-value="code" disabled :style="{ height: 'auto' }" :extensions="extensions" />
        <PineIcon name="ClipboardDocument" color="initial" class="icon-coder" @click="emit('copy', code)"></PineIcon>
    </div>
</template>

<script lang="ts" setup>
import { pineUi, pineUiLight } from '@/assets/pineUi';
import { Codemirror } from 'vue-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vue } from '@codemirror/lang-vue';
import { computed } from 'vue';
import { StreamLanguage } from '@codemirror/language'
import { shell } from '@codemirror/legacy-modes/mode/shell'
import { usePine } from "@/package";

const pine = usePine();
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
    const exts = [pine.theme == 'dark' ? pineUi : pineUiLight];
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
    padding: 15px 10px;
    border-radius: 10px;
}

:deep(.v-codemirror .cm-gutters) {
    display: none;
}

.icon-coder {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    opacity: 0;
}

.coder {
    position: relative;

    &:hover .icon-coder {
        opacity: 1;
    }
}
</style>