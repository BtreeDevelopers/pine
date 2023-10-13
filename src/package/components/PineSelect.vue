<script setup lang="ts"></script>

<template>
  <div class="pine-select">
    <PineMenu>
      <PineTextField
        readonly
        class="input"
        icon-right="ArrowDown"
      ></PineTextField>
      <template v-slot:menu> teste </template>
    </PineMenu>
  </div>
</template>

<style scoped lang="scss">
#pine-app {
  .pine-select {
    .input :deep(input) {
      cursor: pointer;
    }
    :deep(.p-menu) {
      width: auto;
    }
    :deep(.p-menu .component) {
      width: 100%;
    }
    :deep(.p-menu .menu) {
      width: 100%;
    }
  }
}
</style>
