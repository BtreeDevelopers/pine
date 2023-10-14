<script setup lang="ts">
import { ref } from "vue";

const color = ref("primary");
const disabled = ref(false);
const icon = ref(undefined);
const icon2 = ref(undefined);

const switchForm = ref(true);
</script>

<template>
  <div>
    <div>
      <PineSwitch
        v-model="switchForm"
        :color="color"
        :disabled="disabled"
        :icon-left="icon"
        :icon-right="icon2"
      ></PineSwitch>
      {{ switchForm }}
    </div>
    <div style="display: flex">
      <fieldset style="margin: 10px; width: 100%">
        <legend>Color:</legend>
        <div>
          <select name="bg" id="bg" v-model="color">
            <option value="primary">primary</option>
            <option value="pink">Pink</option>
            <option value="#808080">#808080</option>
          </select>
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Disabled:</legend>
        <div>
          <input
            type="radio"
            id="sim"
            name="sim"
            :value="true"
            v-model="disabled"
          />
          <label for="sim">Sim</label>
        </div>

        <div>
          <input
            type="radio"
            id="nao"
            name="nao"
            :value="false"
            v-model="disabled"
          />
          <label for="nao">Não</label>
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Icone Esquerdo:</legend>
        <div>
          <input
            type="radio"
            id="vazio"
            name="vazio"
            :value="undefined"
            v-model="icon"
          />
          <label for="vazio">-</label>
        </div>

        <div>
          <input
            type="radio"
            id="User"
            name="User"
            value="User"
            v-model="icon"
          />
          <label for="User">User</label>
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Icone Direito:</legend>
        <div>
          <input
            type="radio"
            id="vazio2"
            name="vazio2"
            :value="undefined"
            v-model="icon2"
          />
          <label for="vazio2">-</label>
        </div>

        <div>
          <input
            type="radio"
            id="User2"
            name="User2"
            value="Cake"
            v-model="icon2"
          />
          <label for="User2">Cake</label>
        </div>
      </fieldset>
    </div>
  </div>
</template>
