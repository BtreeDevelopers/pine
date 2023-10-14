<script setup lang="ts">
import { ref } from "vue";
const valor = ref("teste");
const valor2 = ref("a");
const items = ["teste", "teste1", "teste2", "teste3", "teste4", "teste5"];
const items2 = [
  { text: "novo", value: "a" },
  { text: "novo2", value: "b" },
  { text: "novo3", value: "c" },
];
</script>

<template>
  <div>
    <div style="text-align: center">
      <PineSelect :items="items" v-model="valor"> </PineSelect>
      {{ valor }}
      <PineSelect :items="items2" v-model="valor2"> </PineSelect>
      {{ valor2 }}
    </div>
  </div>
</template>
