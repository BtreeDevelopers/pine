<script setup lang="ts">
import { ref } from "vue";
const type = ref('p');
const dir = ref('');
const val = ref('0');

const espacos = [
  { "nome": "0", "valor": "0" },
  { "nome": "1", "valor": "4" },
  { "nome": "2", "valor": "8" },
  { "nome": "3", "valor": "12" },
  { "nome": "4", "valor": "16" },
  { "nome": "5", "valor": "20" },
  { "nome": "6", "valor": "24" },
  { "nome": "7", "valor": "28" },
  { "nome": "8", "valor": "32" },
  { "nome": "9", "valor": "36" },
  { "nome": "10", "valor": "40" }
]


const tamanho = ref('50');
const lado = ref('w');

const cursor = ref('pointer');

const elevation = ref('high');

const rounded = ref('');

</script>

<template>


  <div style="display: flex;flex-direction: column; width: 90%;">
    <fieldset style="margin: 10px; width: 100%">
      <legend>Tamanhos:</legend>
      <select name="dir" id="dir" v-model="lado">
        <option value="h">height</option>
        <option value="w">width</option>
      </select>
      <select name="dir" id="dir" v-model="tamanho">
        <option value="auto">auto</option>
        <option value="0">0</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
        <option value="100vw">100vw</option>
      </select>

      <div :class="type + dir + '-' + val" style="background-color: red; height: 200px">
        <PineCard :class="lado + '-' + tamanho">

          {{ lado + '-' + tamanho }}
        </PineCard>
      </div>

    </fieldset>
    <fieldset style="margin: 10px; width: 100%">
      <legend>Espaços:</legend>
      <select name="dir" id="dir" v-model="type">
        <option value="p">Padding</option>
        <option value="m">Margin</option>
      </select>
      <select name="dir" id="dir" v-model="dir">
        <option value="">ALL</option>
        <option value="t">TOP</option>
        <option value="b">BOTTOM</option>
        <option value="l">LEFT</option>
        <option value="x">HORIZONTAL</option>
        <option value="y">VERTICAL</option>
      </select>
      <select name="val" id="val" v-model="val">
        <option v-for="espaco in espacos" :value="espaco.nome">{{ espaco.nome }}</option>
      </select>

      <div :class="type + dir + '-' + val" style="background-color: red;">
        {{ type + dir + '-' + val }}
      </div>

    </fieldset>
    <fieldset style="margin: 10px; width: 100%">
      <legend>Cursor:</legend>
      <select name="cursor" id="cursor" v-model="cursor">
        <option value="pointer">pointer</option>
        <option value="unset">unset</option>
        <option value="none">none</option>
      </select>

      <div :class="'cursor-' + cursor" style="background-color: red;">
        {{ 'cursor-' + cursor }}
      </div>

    </fieldset>
    <fieldset style="margin: 10px; width: 100%">
      <legend>Elevation:</legend>
      <select name="elevation" id="elevation" v-model="elevation">
        <option value="no">no</option>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      <div class="py-5 px-3" style="background-color: white;">

        <div :class="'elevation-' + elevation" style="background-color: red; width: 50%; height: 70px;">
          {{ 'elevation-' + elevation }}
        </div>
      </div>

    </fieldset>
    <fieldset style="margin: 10px; width: 100%">
      <legend>Rounded:</legend>
      <select name="rounded" id="rounded" v-model="rounded">
        <option value="">base</option>
        <option value="-small">small</option>
        <option value="-large">large</option>
      </select>


      <div :class="'rounded' + rounded" style="background-color: red; width: 50%; height: 70px;">
        {{ 'rounded' + rounded }}
      </div>

    </fieldset>
    <fieldset style="margin: 10px; width: 100%">
      <legend>Position:</legend>

      <table>
        <tr>
          <th>CSS</th>
          <th>Classe</th>
        </tr>
        <tr>
          <td>Position: absolute</td>
          <td>.absolute</td>
        </tr>
        <tr>
          <td>Position: relative</td>
          <td>.relative</td>
        </tr>
        <tr>
          <td>Position: fixed</td>
          <td>.fixed</td>
        </tr>
        <tr>
          <td>top: 0;</td>
          <td>.top-0</td>
        </tr>
        <tr>
          <td> left: 0;</td>
          <td> .left-0</td>
        </tr>
        <tr>
          <td> right: 0;</td>
          <td> .right-0</td>
        </tr>
        <tr>
          <td> bottom: 0;</td>
          <td> .bottom-0 </td>
        </tr>
      </table>

    </fieldset>
    <fieldset style="margin: 10px; width: 100%">
      <legend>Display:</legend>
      <table>
        <tr>
          <th>CSS</th>
          <th>Classe</th>
        </tr>
        <tr>
          <td>display: flex;</td>
          <td>.d-flex</td>
        </tr>
        <tr>
          <td>display: block;</td>
          <td>.d-block</td>
        </tr>
        <tr>
          <td>display: grid;</td>
          <td>.d-grid</td>
        </tr>
      </table>
      <table>
        <tr>
          <th>CSS</th>
          <th>Classe</th>
        </tr>
        <tr>
          <td>flex-direction: column;</td>
          <td>.flex-column</td>
        </tr>
        <tr>
          <td>flex-direction: row;</td>
          <td>.flex-row</td>
        </tr>
        <tr>
          <td>align-items: center;</td>
          <td>.align-center</td>
        </tr>
        <tr>
          <td>align-items: flex-end;</td>
          <td>.align-end</td>
        </tr>
        <tr>
          <td>align-items: flex-start;</td>
          <td>.align-start</td>
        </tr>
        <tr>
          <td>justify-content: center;</td>
          <td>.justify-center</td>
        </tr>
        <tr>
          <td>justify-content: flex-start;</td>
          <td>.justify-start</td>
        </tr>
        <tr>
          <td>justify-content: flex-end;</td>
          <td>.justify-end</td>
        </tr>
      </table>


    </fieldset>
    <fieldset style="margin: 10px; width: 100%">
      <legend>Tipografia:</legend>
      <table>
        <tr>
          <th>Classe</th>
          <th>Valor</th>
        </tr>
        <tr>
          <td class="font-size-small">font-size-small</td>
          <td>font-size: small;</td>
        </tr>
        <tr>
          <td class="font-size-medium">font-size-medium</td>
          <td>font-size: medium;</td>
        </tr>
        <tr>
          <td class="font-size-large">font-size-large</td>
          <td>font-size: large;</td>
        </tr>
        <tr>
          <td class="font-weight-light">font-weight-light</td>
          <td>font-weight: 300;</td>
        </tr>
        <tr>
          <td class="font-weight-regular">font-weight-regular</td>
          <td>font-weight: 400;</td>
        </tr>
        <tr>
          <td class="font-weight-medium">font-weight-medium</td>
          <td>font-weight: 500;</td>
        </tr>
        <tr>
          <td class="font-weight-semibold">font-weight-semibold</td>
          <td>font-weight: 600;</td>
        </tr>
        <tr>
          <td class="font-weight-bold">font-weight-bold</td>
          <td>font-weight: 700;</td>
        </tr>
      </table>
    </fieldset>
    <fieldset style="margin: 10px; width: 100%">
      <legend>Cores de texto:</legend>
      <ul>
        <li class="primary">.primary</li>
        <li class="secondary">.secondary</li>
        <li class="error">.error</li>
        <li class="warning">.warning</li>
      </ul>
    </fieldset>
    <fieldset style="margin: 10px; width: 100%">
      <legend>Cores de background:</legend>
      <ul>
        <li class="primary-bg">.primary-bg</li>
        <li class="secondary-bg">.secondary-bg</li>
        <li class="error-bg">.error-bg</li>
        <li class="warning-bg">.warning-bg</li>
        <li class="highlight-bg">.highlight-bg</li>
      </ul>
    </fieldset>
    <fieldset style="margin: 10px; width: 100%">
      <legend>Cores de borda:</legend>
      <ul>
        <li class="primary-border">.primary-border</li>
        <li class="secondary-border">.secondary-border</li>
        <li class="error-border">.error-border</li>
        <li class="warning-border">.warning-border</li>
        <li class="highlight-border">.highlight-border</li>
      </ul>
    </fieldset>
  </div>

</template>
<style>
table,
th,
td {
  border: 1px solid white;
}
</style>