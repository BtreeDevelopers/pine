<script setup lang="ts">
import { ref } from "vue";

const value = ref("teste");
const color = ref("primary");
const backgroundColor = ref("highlight");
const disabled = ref(false);
const label = ref("label");
const icon = ref(undefined);
</script>

<template>
  <div class="about">
    <PineTextField
      v-model="value"
      :disabled="disabled"
      :color="color"
      :background-color="backgroundColor"
      :icon-right="icon"
      :label="label"
      @click:icon="
        () => {
          console.log('click icon');
        }
      "
    />
    <p>
      {{ value }}
    </p>
    <div style="display: flex">
      <fieldset style="margin: 10px; width: 100%">
        <legend>Label:</legend>
        <div>
          <input type="text" v-model="label" />
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Background:</legend>
        <div>
          <select name="bg" id="bg" v-model="backgroundColor">
            <option value="highlight">highlight</option>
            <option value="pink">Pink</option>
            <option value="#808080">#808080</option>
          </select>
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Color:</legend>
        <div>
          <select name="cores" id="cores" v-model="color">
            <option value="primary">Primary</option>
            <option value="red">Red</option>
            <option value="#228b22">#228b22</option>
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
        <legend>Icone direita:</legend>
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
    </div>
  </div>
</template>
