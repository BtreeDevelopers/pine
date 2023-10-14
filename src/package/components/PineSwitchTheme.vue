<script setup lang="ts">
import { usePine } from "@/package";
import { ref, watch, onMounted } from "vue";
const pine = usePine();

const emit = defineEmits<{ change: [value: "light" | "dark"] }>();

const valueSwitch = ref(false);
onMounted(() => {
  valueSwitch.value = pine.theme == "light";
  emit("change", pine.theme);
});
watch(
  () => valueSwitch.value,
  (value) => {
    if (value) {
      pine.theme = "light";
    } else {
      pine.theme = "dark";
    }
    emit("change", pine.theme);
  }
);
</script>

<template>
  <PineSwitch
    v-model="valueSwitch"
    icon-left="Sun"
    icon-right="Moon"
  ></PineSwitch>
</template>
