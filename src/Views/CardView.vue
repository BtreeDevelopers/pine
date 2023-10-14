<script setup lang="ts">
import { ref } from "vue";

const backgroundColor = ref("highlight");
</script>

<template>
  <div>
    <div>
      <PineCard :background-color="backgroundColor" style="margin-bottom: 20px">
        Teste
      </PineCard>
      <PineCard
        :background-color="backgroundColor"
        @click="
          () => {
            console.log('aaa');
          }
        "
      >
        Teste
      </PineCard>
    </div>
    <div style="display: flex">
      <fieldset style="margin: 10px; width: 100%">
        <legend>Type:</legend>
        <div>
          <select name="bg" id="bg" v-model="backgroundColor">
            <option value="highlight">highlight</option>
            <option value="pink">Pink</option>
            <option value="#808080">#808080</option>
          </select>
        </div>
      </fieldset>
    </div>
  </div>
</template>
