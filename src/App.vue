<script setup lang="ts">
import { usePine } from "./package";
const pine = usePine();
console.log(pine);
</script>

<template>
  <PineApp>
    <div class="m-5">
      <RouterLink class="primary" to="/">APP</RouterLink> |
      <RouterLink class="primary" to="/textfield">Textfield</RouterLink> |
      <RouterLink class="primary" to="/icon">Icon</RouterLink> |
      <RouterLink class="primary" to="/loading">Loading</RouterLink> |
      <RouterLink class="primary" to="/drawer">Drawer</RouterLink> |
      <RouterLink class="primary" to="/drawermodel">Drawer - Model</RouterLink>
      | <RouterLink class="primary" to="/tooltip">Tooltip</RouterLink> |
      <RouterLink class="primary" to="/menu">Menu</RouterLink> |
      <RouterLink class="primary" to="/select">Select</RouterLink> |
      <RouterLink class="primary" to="/card">Card</RouterLink> |
      <RouterLink class="primary" to="/switch">Switch</RouterLink> |
      <RouterLink class="primary" to="/switchtheme">Switch - Theme</RouterLink>
      |
      <!-- <RouterLink to="/button">Button</RouterLink> |
      <RouterLink to="/input">Input</RouterLink> |
      <RouterLink to="/modal">Modal</RouterLink> |
      <RouterLink to="/slider">Slider</RouterLink> | -->
      <RouterView></RouterView>
    </div>
  </PineApp>
</template>
