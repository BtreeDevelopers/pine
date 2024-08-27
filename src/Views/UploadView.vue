<script setup lang="ts">
import { ref } from "vue";

var content = ref("");
var selects = ref([]);
const list = [".pdf", ".png", ".jpg"];
const mockarDoc = () => {
  var filename = "hello.txt";

  var myBlob = new Blob([content.value], {
    type: "text/plain;charset=utf-8",
  });

  var fileTeste = new File([myBlob], filename);
  doc.value = fileTeste;
};

const doc = ref<File | null>(null);
const maxSize = ref(25);
</script>

<template>
  <div>
    <div>
      <PineUpload
        v-model="doc"
        :max-size="maxSize"
        :types="selects"
      ></PineUpload>
      {{
        doc
          ? doc.name + " - " + (doc.size / 1024 / 1024).toFixed(3) + "MB"
          : "-"
      }}
    </div>
    <div style="display: flex">
      <fieldset style="margin: 10px; width: 100%">
        <legend>Documento:</legend>
        <div>
          <input v-model="content" />
          <button @click="mockarDoc">Mockar doc</button>
        </div>
      </fieldset>

      <fieldset style="margin: 10px; width: 100%">
        <legend>Tamanho de documento:</legend>
        <div>
          {{ maxSize }}
          <input type="range" v-model.number="maxSize" :max="50" :min="1" />
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Tipos: (se nenhum selecionado, é permitido todos)</legend>
        <div v-for="item in list" :key="item">
          <input
            type="checkbox"
            :id="item"
            :name="item"
            :value="item"
            v-model="selects"
          />
          <label :for="item">{{ item }}</label>
        </div>
      </fieldset>
    </div>
  </div>
</template>
