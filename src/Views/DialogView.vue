<script setup lang="ts">
import { ref } from "vue";

const modal = ref(false);
</script>

<template>
  <div>
    <button @click="modal = !modal">Abrir modal</button>
    <PineDialog v-model="modal"> <PineCard>teste</PineCard> </PineDialog>
  </div>
</template>
