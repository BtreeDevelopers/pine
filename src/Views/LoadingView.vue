<script setup lang="ts">
import { ref } from "vue";
const color = ref("primary");
const backgroundColor = ref("highlight");
const weight = ref(4);
const size = ref(60);
</script>

<template>
  <div class="about">
    <PineLoading
      :weight="weight"
      :color="color"
      :background-color="backgroundColor"
      :size="size"
    />
    <div style="display: flex">
      <fieldset style="margin: 10px; width: 100%">
        <legend>Size:</legend>
        <div>
          {{ size }}
          <input type="range" v-model.number="size" :max="100" :min="20" />
        </div>
      </fieldset>
      <fieldset style="margin: 10px; width: 100%">
        <legend>Weight:</legend>
        <div>
          {{ weight }}
          <input type="range" v-model.number="weight" :max="10" :min="1" />
        </div>
      </fieldset>
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
    </div>
  </div>
</template>
