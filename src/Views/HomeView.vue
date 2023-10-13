<script setup lang="ts">
import { usePine } from "@/package";
const pine = usePine();
const mudarTema = () => {
  pine.theme = pine.theme === "dark" ? "light" : "dark";
};
</script>

<template>
  <div>
    <button @click="mudarTema">Mudar Tema</button>
  </div>
</template>

<style scoped lang="scss"></style>
