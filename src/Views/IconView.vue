<script setup lang="ts">
import { IIcons } from "@/package/types/icons";
import * as HeroIcons from "@heroicons/vue/24/solid";
import { computed, ref } from "vue"
const icons = computed(() => {
    return Object.keys(HeroIcons).map(e => e.replace('Icon', ''));
})
const icon = ref<IIcons>('User');
const color = ref('primary');
const size = ref(25);

</script>
<template>
    <div class="about">
        <PineIcon :name="icon" :color="color" :size="size"></PineIcon>
        <div style="display: flex">
            <fieldset style="margin: 10px; width: 100%">
                <legend>Name:</legend>
                <div>
                    <select name="cores" id="cores" v-model="icon">
                        <option v-for="i in icons" :key="i" :value="i">{{ i }}</option>
                    </select>
                </div>
            </fieldset>
            <fieldset style="margin: 10px; width: 100%">
                <legend>Color:</legend>
                <div>
                    <select name="bg" id="bg" v-model="color">
                        <option value="primary">Primary</option>
                        <option value="red">red</option>
                        <option value="#228b22">#228b22</option>
                    </select>
                </div>
            </fieldset>
            <fieldset style="margin: 10px; width: 100%">
                <legend>Size:</legend>
                <div>
                    {{ size }}
                    <input type="range" v-model.number="size" :max="60" :min="10">
                </div>
            </fieldset>
        </div>
    </div>
</template>