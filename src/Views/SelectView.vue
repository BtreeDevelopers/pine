<script setup lang="ts">
import { ref } from "vue";

const clickClose = ref(true);
</script>

<template>
  <div>
    <div style="text-align: center">
      <PineSelect> </PineSelect>
    </div>

    <div style="display: flex">
      <fieldset style="margin: 10px; width: 100%">
        <legend>Fechar ao clicar em conteúdo:</legend>
        <div>
          <input
            type="radio"
            id="sim"
            name="sim"
            :value="true"
            v-model="clickClose"
          />
          <label for="sim">Sim</label>
        </div>

        <div>
          <input
            type="radio"
            id="nao"
            name="nao"
            :value="false"
            v-model="clickClose"
          />
          <label for="nao">Não</label>
        </div>
      </fieldset>
    </div>
  </div>
</template>
