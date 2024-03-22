<script setup lang="ts">
import { ref } from 'vue';

const value = ref({ r: 80, g: 147, b: 254, a: 1 })
</script>

<template>
    <div>
        <PinePickColor :size="300" v-model="value"></PinePickColor>
        <p>Valor: {{ value }}</p>
    </div>
    <div style="display: flex">
        <fieldset style="margin: 10px; width: 100%">
            <legend>Cor:</legend>
            <div>
                <select name="bg" id="bg" v-model="value">
                    <option :value="{ r: 80, g: 147, b: 254, a: 1 }">primary</option>
                    <option :value="{ r: 128, g: 0, b: 128, a: 0.5 }">Pink</option>
                    <option :value="{ r: 128, g: 128, b: 128, a: 0.3 }">#808080</option>
                </select>
            </div>
        </fieldset>

    </div>
</template>
