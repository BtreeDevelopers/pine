<script setup lang="ts">
import { usePine } from "./package";
const pine = usePine();
console.log(pine);
</script>

<template>
  <PineApp>
    <div class="m-5">

      <RouterLink class="primary" to="/textfield">Textfield</RouterLink> |
      <!-- <RouterLink to="/button">Button</RouterLink> |
      <RouterLink to="/input">Input</RouterLink> |
      <RouterLink to="/loading">Loading</RouterLink> |
      <RouterLink to="/modal">Modal</RouterLink> |
      <RouterLink to="/icon">Icon</RouterLink> |
      <RouterLink to="/menu">Menu</RouterLink> |
      <RouterLink to="/slider">Slider</RouterLink> | -->
      <RouterView></RouterView>
    </div>
  </PineApp>
</template>
