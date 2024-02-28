<script setup lang="ts">
import { ref } from "vue";

const color = ref("primary");
const disabled = ref(false);
const value = ref(false);

</script>

<template>
    <div>
        <div>
            <PineCheckbox v-model="value" :color="color" :disabled="disabled"></PineCheckbox>
            {{ value }}
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
            <fieldset style="margin: 10px; width: 100%">
                <legend>disabled:</legend>
                <div>
                    <input type="radio" id="Sim" name="Sim" :value="true" v-model="disabled" />
                    <label for="Sim">Sim</label>
                </div>

                <div>
                    <input type="radio" id="Não" name="Não" :value="false" v-model="disabled" />
                    <label for="Não">Não</label>
                </div>
            </fieldset>
        </div>
    </div>
</template>
