<script setup lang="ts">
import { usePine } from "./package";
const pine = usePine();
console.log(pine);
</script>

<template>
  <PineBtn :nova="1"></PineBtn>
</template>
