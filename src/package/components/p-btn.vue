<script setup lang="ts">
const props = defineProps<{
  nova: Number;
}>();
</script>

<template>
  <button>teste {{ props.nova }}</button>
</template>

<style scoped lang="scss"></style>
