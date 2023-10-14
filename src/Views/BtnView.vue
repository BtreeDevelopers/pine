<script setup lang="ts">
import { ref } from "vue";

const type = ref<"solid" | "outline" | "text">("solid");
const color = ref("primary");
const load = ref(false);
const clickButton = () => {
  console.log("a");
};
</script>

<template>
  <div>
    <div>
      <PineBtn :type="type" @click="clickButton" :color="color" :loading="load"
        >teste</PineBtn
      >
      <br />
      <br />
      <p>BUTTON ICON EM BREVE</p>
      <br />
    </div>
    <div style="display: flex">
      <fieldset style="margin: 10px; width: 100%">
        <legend>Tipo:</legend>
        <div>
          <input
            type="radio"
            id="solid"
            name="solid"
            value="solid"
            v-model="type"
          />
          <label for="solid">solid</label>
        </div>

        <div>
          <input
            type="radio"
            id="outline"
            name="outline"
            value="outline"
            v-model="type"
          />
          <label for="outline">outline</label>
        </div>
        <div>
          <input
            type="radio"
            id="text"
            name="text"
            value="text"
            v-model="type"
          />
          <label for="text">text</label>
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Cor:</legend>
        <div>
          <select name="bg" id="bg" v-model="color">
            <option value="primary">primary</option>
            <option value="pink">Pink</option>
            <option value="#808080">#808080</option>
          </select>
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Loading:</legend>
        <div>
          <input
            type="radio"
            id="Sim"
            name="Sim"
            :value="true"
            v-model="load"
          />
          <label for="Sim">Sim</label>
        </div>

        <div>
          <input
            type="radio"
            id="Não"
            name="Não"
            :value="false"
            v-model="load"
          />
          <label for="Não">Não</label>
        </div>
      </fieldset>
    </div>
  </div>
</template>
