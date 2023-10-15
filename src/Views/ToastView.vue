<script setup lang="ts">
import { useToast, TYPE_TOAST } from "@/package";

const toast = useToast();
const showToast = () => {
  toast.show("teste", {
    type: TYPE_TOAST.ERROR,
  });
};
const toastShow = {
  content: "teste",
  duration: 5000,
  id: 1,
  type: TYPE_TOAST.SUCCESS,
};
</script>

<template>
  <PineContainer>
    <button @click="showToast">Mostrar toast</button>
    <PineToast :toast="toastShow"></PineToast>
  </PineContainer>
</template>
