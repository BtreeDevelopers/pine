<script setup lang="ts">
import Coder from "@/components/Coder.vue";
function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Texto copiado para a área de transferência!');
    })
    .catch((err) => {
      console.error('Erro ao copiar o texto: ', err);
    });
}
</script>
<template>
  <PineContainer class="overflow-hidden d-flex">
    <div class="mr-8">
      <ul>
        <li>Using Vue 3</li>
        <ul>
          <li>Simple installation</li>
          <li>Installation with options</li>
          <li>Usage</li>
        </ul>
        <li>Using React</li>
        <li>Figma</li>
      </ul>
    </div>
    <div class="overflow-auto w-100">
      <Coder code="npm i pine-btree" language="shell" @copy="copyToClipboard" />
    </div>
  </PineContainer>

</template>