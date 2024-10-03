<script setup lang="ts"></script>

<template>
  <div class="pine-container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.pine-container {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1920px;
  padding-left: 40px;
  padding-right: 40px;
}

@media (max-width: 600px) {
  .pine-container {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media (min-width: 1920px) {
  .pine-container {
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>
