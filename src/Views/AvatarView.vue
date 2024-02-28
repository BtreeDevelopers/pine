<script setup lang="ts">
import { ref } from 'vue';

const color = ref("highlight");
const size = ref(50);
const shape = ref('circle');
</script>

<template>
    <div>
        <div>
            <PineAvatar :size="size" :color="color" :shape="shape">Teste</PineAvatar>
            <PineAvatar :size="size" :color="color" :shape="shape">T</PineAvatar>
            <PineAvatar :size="size" :color="color" :shape="shape"><img src="https://cdn.vuetifyjs.com/images/john.jpg">
            </PineAvatar>
        </div>
        <div style="display: flex">
            <fieldset style="margin: 10px; width: 100%">
                <legend>Forma:</legend>
                <div>
                    <select name="shape" id="shape" v-model="shape">
                        <option value="circle">circle</option>
                        <option value="square">square</option>
                    </select>
                </div>
            </fieldset>
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
            <fieldset style="margin: 10px; width: 100%">
                <legend>Size:</legend>
                <div>
                    {{ size }}
                    <input type="range" v-model.number="size" :max="100" :min="20" />
                </div>
            </fieldset>
        </div>
    </div>
</template>
