<script setup lang="ts">
import { ref } from 'vue';

const color = ref("primary");
</script>

<template>
    <div>
        <div>
            <PineHeader :color="color">teste</PineHeader>

        </div>
        <div style="display: flex">
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
        </div>
    </div>
</template>
