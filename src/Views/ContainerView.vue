<script setup lang="ts">
import { useToast } from "@/package";

const toast = useToast();
</script>

<template>
  <PineContainer>
    <button @click="toast.show('teste')">Teste</button>
  </PineContainer>
</template>
