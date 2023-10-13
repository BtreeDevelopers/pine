<script setup lang="ts">
import { ref } from "vue";

const modal = ref(false);
const app = ref(true);
const closeOnClickOutside = ref(true);
const backgroundColor = ref("highlight");
</script>
<template>
  <div>
    <button @click="modal = true">Abrir Drawer</button>
    <div style="display: flex">
      <PineDrawer
        v-model="modal"
        :app="app"
        :close-on-click-outside="closeOnClickOutside"
        :background-color="backgroundColor"
      >
        teste
      </PineDrawer>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Global:</legend>
        <div>
          <input type="radio" id="sim" name="sim" :value="true" v-model="app" />
          <label for="sim">Sim</label>
        </div>

        <div>
          <input
            type="radio"
            id="nao"
            name="nao"
            :value="false"
            v-model="app"
          />
          <label for="nao">Não</label>
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Fechar ao clicar fora:</legend>
        <div>
          <input
            type="radio"
            id="sim2"
            name="sim2"
            :value="true"
            v-model="closeOnClickOutside"
          />
          <label for="sim2">Sim</label>
        </div>

        <div>
          <input
            type="radio"
            id="nao2"
            name="nao2"
            :value="false"
            v-model="closeOnClickOutside"
          />
          <label for="nao2">Não</label>
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Background:</legend>
        <div>
          <select name="bg" id="bg" v-model="backgroundColor">
            <option value="highlight">Highlight</option>
            <option value="pink">Pink</option>
            <option value="#808080">#808080</option>
          </select>
        </div>
      </fieldset>
    </div>
  </div>
</template>
