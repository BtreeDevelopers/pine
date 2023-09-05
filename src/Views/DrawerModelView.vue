<script setup lang="ts">
import { ref } from 'vue';

const modal = ref(false);

const list = [
    {
        title: 'teste',
        icon: 'Bolt'
    },
    {
        title: 'teste 2',
        icon: 'AcademicCap',
        disabled: true
    },
    {
        title: 'novo teste',
        icon: 'Document'
    },
    {
        title: 'novo teste 3',
    },
]
const dir = ref<'left' | 'right'>('left')
const backgroundColor = ref('background');
const showIcon = ref(true)
const selects = ref([{ "title": "teste", "icon": "Bolt" }, { "title": "teste 2", "icon": "AcademicCap", "disabled": true }, { "title": "novo teste", "icon": "Document" }])
const last = ref({ "title": "teste", "icon": "Bolt" })
</script>
<template>
    <div>

        <button @click="modal = true">Abrir Drawer</button>
        <div style="display: flex">
            <PineDrawer v-model="modal">
                <PineDrawerModel :itens="(selects as any)" :last-option="(last as any)" @clickOnClose="modal = false"
                    :icon-direction="dir" :show-icons="showIcon" :selected-color="backgroundColor">
                    <template #title>
                        <b>
                            Pine Ui
                        </b>
                    </template>
                </PineDrawerModel>
            </PineDrawer>

            <fieldset style="margin: 10px; width: 100%">
                <legend>Mostrar Icones:</legend>
                <div>
                    <input type="radio" id="sim" name="sim" :value="true" v-model="showIcon" />
                    <label for="sim">Sim</label>
                </div>

                <div>
                    <input type="radio" id="nao" name="nao" :value="false" v-model="showIcon" />
                    <label for="nao">Não</label>
                </div>
            </fieldset>
            <fieldset style="margin: 10px; width: 100%">
                <legend>Direção Icones:</legend>
                <div>
                    <input type="radio" id="esq" name="esq" :value="'left'" v-model="dir" />
                    <label for="esq">Esquerda</label>
                </div>

                <div>
                    <input type="radio" id="dir" name="dir" :value="'right'" v-model="dir" />
                    <label for="dir">Direita</label>
                </div>
            </fieldset>
            <fieldset style="margin: 10px; width: 100%">
                <legend>Cor selecionado:</legend>
                <div>
                    <select name="bg" id="bg" v-model="backgroundColor">
                        <option value="background">Background</option>
                        <option value="pink">Pink</option>
                        <option value="#808080">#808080</option>
                    </select>
                </div>
            </fieldset>
        </div>
        <div style="display: flex">

            <fieldset style="margin: 10px; width: 100%">
                <legend>Items na tela:</legend>
                <div v-for="item in list" :key="item.title">
                    <input type="checkbox" :id="item.title" :name="item.title" :value="item" v-model="selects" />
                    <label :for="item.title">{{ item.title }} - {{ item.icon }} {{ item.disabled ? '- disabled' : ''
                    }}</label>
                </div>

            </fieldset>
            <fieldset style="margin: 10px; width: 100%">
                <legend>Ultimo Item:</legend>
                <div v-for="item in list" :key="item.title">
                    <input type="radio" :id="item.title + '1'" :name="item.title + '1'" :value="item" v-model="last" />
                    <label :for="item.title + '1'">{{ item.title }} - {{ item.icon }} {{ item.disabled ? '- disabled' : ''
                    }}</label>
                </div>

            </fieldset>
        </div>


    </div>
</template>