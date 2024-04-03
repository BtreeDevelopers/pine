<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const fileSelected = ref<File | null>(null);

const props = withDefaults(
  defineProps<{
    types?: string[];
    modelValue?: File | null;
    maxSize?: number;
  }>(),
  {
    maxSize: 25,
    modelValue: null,
  }
);
onMounted(() => {
  fileSelected.value = props.modelValue;
});
const emit = defineEmits<{
  "update:modelValue": [val: File | null];
}>();

watch(
  () => fileSelected.value,
  (val) => {
    emit("update:modelValue", val);
  }
);
watch(
  () => props.modelValue,
  (val) => {
    fileSelected.value = val;
  }
);

const error = ref(false);

const fileInput = ref<HTMLInputElement | null>(null);
const MAXALLOWEDSIZEMULTIPLY = 1024 * 1024;
const calculeSize = (size: number) => {
  return (size / 1024 / 1024).toFixed(1);
};

const removerDocumento = () => {
  fileSelected.value = null;
};

const adicionarDocumento = (file: File) => {
  if (file.size > MAXALLOWEDSIZEMULTIPLY * props.maxSize) {
    //Limite máximo ultrapassado, tente outro documento
    error.value = true;
    return;
  }
  if (props.types?.length) {
    var regex = new RegExp(
      "([a-zA-Z0-9\s_\\.\-:])+(" + props.types.join("|") + ")$"
    );
    if (!regex.test(file.name)) {
      //Tipo do documento inválido, use somente arquivos .torrent
      error.value = true;
      return;
    }
  }
  error.value = false;
  fileSelected.value = file;
};
const changeDocument = (e: Event) => {
  if ((e.target as HTMLInputElement)?.files?.[0]) {
    adicionarDocumento((e.target as HTMLInputElement)!.files![0]);
  }
};
const onDrop = (e: DragEvent) => {
  if (e.dataTransfer?.files?.[0]) {
    adicionarDocumento(e.dataTransfer!.files[0]);
  }
};
</script>

<template>
  <div class="pine-upload" :class="{ 'not-selected': !fileSelected }">
    <template v-if="!fileSelected">
      <div class="data">
        <p class="title error" v-if="error">Erro! Tente novamente</p>
        <p class="title" v-else>Arraste o arquivo aqui ou clique</p>
        <p class="info">
          Arquivos aceito:
          {{
            props.types && props.types.length
              ? props.types.join(", ")
              : "todos"
          }}. Max {{ props.maxSize }} mb
        </p>
      </div>
      <input
        ref="fileInput"
        type="file"
        :accept="props.types && props.types.length ? props.types.join(',') : ''"
        @change="changeDocument"
        @drop.prevent="onDrop"
      />
    </template>
    <div v-else class="selected-doc">
      <div class="base">
        <div class="document">
          <PineIcon name="Document" color="white" :size="40"></PineIcon>
        </div>
        <div>
          <p class="name">
            {{ fileSelected.name }}
          </p>
          <p class="size">{{ calculeSize(fileSelected.size) }} MB</p>
        </div>
      </div>
      <PineIcon
        name="XMark"
        color="#757575"
        :size="40"
        class="cursor-pointer"
        @click="removerDocumento"
      ></PineIcon>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pine-upload {
  width: 100%;
  height: 130px;
  box-sizing: border-box;
  position: relative;
  &.not-selected {
    cursor: pointer;
  }
  .base {
    display: flex;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .selected-doc {
    width: 100%;
    height: 100%;
    background: #161924;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    color: #757575;
    box-sizing: border-box;

    .document {
      background: #5093fe;
      padding: 10px;
      border-radius: 10px;
      margin-right: 20px;
    }
    .name {
      font-size: 18px;
      font-weight: bold;
    }
    .size {
      font-size: 15px;
    }
  }
  input {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    cursor: pointer;
  }
  .data {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px dashed white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      font-size: 18px;
      color: #5093fe;
      &.error {
        color: #fe5050;
      }
    }
    .info {
      font-size: 15px;
      color: #757575;
    }
  }
}
</style>
