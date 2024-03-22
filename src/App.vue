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
      |<RouterLink class="primary" to="/btn">Button</RouterLink> |
      <RouterLink class="primary" to="/container">Container</RouterLink> |
      <RouterLink class="primary" to="/dialog">Dialog</RouterLink> |
      <RouterLink class="primary" to="/toast">Toast</RouterLink> |
      <RouterLink class="primary" to="/checkbox">Checkbox</RouterLink> |
      <RouterLink class="primary" to="/footer">Footer</RouterLink> |
      <RouterLink class="primary" to="/header">Header</RouterLink> |
      <RouterLink class="primary" to="/avatar">Avatar</RouterLink> |
      <RouterLink class="primary" to="/pickcolor">PickColor</RouterLink> |
      <RouterLink class="primary" to="/calendar">Calendar</RouterLink> |
    </div>
    <RouterView></RouterView>
  </PineApp>
</template>
