<script setup lang="ts">
import { ref } from 'vue';

const color = ref("highlight");
</script>

<template>
    <div>
        <div>
            <PineFooter :color="color">teste</PineFooter>
        </div>
        <div style="display: flex">
            <fieldset style="margin: 10px; width: 100%">
                <legend>Cor:</legend>
                <div>
                    <select name="bg" id="bg" v-model="color">
                        <option value="highlight">highlight</option>
                        <option value="pink">Pink</option>
                        <option value="#808080">#808080</option>
                    </select>
                </div>
            </fieldset>
        </div>
    </div>
</template>
