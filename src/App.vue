<script setup lang="ts">
import { usePine } from "./package";
const pine = usePine();
console.log(pine);
</script>

<template>
  <p-btn :nova="3"></p-btn>
</template>
