<script setup lang="ts">
import { ref } from 'vue';


const dir = ref('top')
const text = ref('Eu sou um tooltip')
</script>
  

<template>
    <div>
        <div style="text-align: center;">
            <button v-tooltip="{ text: text, position: (dir as any) }">Teste</button>
        </div>

        <div style="display: flex">
            <fieldset style="margin: 10px; width: 100%">
                <legend>Texto:</legend>
                <div>
                    <input type="text" v-model="text" />
                </div>
            </fieldset>
            <fieldset style="margin: 10px; width: 100%">
                <legend>Direção:</legend>
                <div>
                    <input type="radio" id="top" name="top" :value="'top'" v-model="dir" />
                    <label for="top">Top</label>
                </div>

                <div>
                    <input type="radio" id="bottom" name="bottom" :value="'bottom'" v-model="dir" />
                    <label for="bottom">Bottom</label>
                </div>
                <div>
                    <input type="radio" id="left" name="left" :value="'left'" v-model="dir" />
                    <label for="left">Left</label>
                </div>
                <div>
                    <input type="radio" id="right" name="right" :value="'right'" v-model="dir" />
                    <label for="right">Right</label>
                </div>
            </fieldset>
        </div>
    </div>
</template>