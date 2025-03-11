<script setup lang="ts">
import Coder from "@/components/Coder.vue";
import PineTabs from "@/package/components/PineTabs.vue";
import PineTag from "@/package/components/PineTag.vue";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useSize } from "@/package";
import codeVue from "@/assets/code4.vue?raw"

const size = useSize();
const { t } = useI18n();
function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Texto copiado para a área de transferência!');
    })
    .catch((err) => {
      console.error('Erro ao copiar o texto: ', err);
    });
}
const selectedTab = ref<string>('Npm');

const lang: Record<string, string> = {
  Npm: 'npm i pine-btree',
  Yarn: 'yarn add pine-btree'
};

const code1 = "import pine from \"pine-btree\";"
const code2 = "app.use(pine);\napp.mount(\"#app\");"
const code3 = `import { createApp } from 'vue'\nimport App from './App.vue'\n\n// Pine\nimport pine from \"pine-btree\";\nconst pineOptions : PinePlugin = {\n...\ntheme:  “dark”,\n...\n};\n\ncreateApp(App).use(pine, pineOptions).mount('#app')`;


const code4 = computed(() => codeVue
  .replace('$1', t('docs.example.com1'))
  .replace('$2', t('docs.example.com2'))
  .replace('$3', t('docs.example.com3'))
  .replace('$4', t('docs.example.com4'))
)

</script>
<template>
  <PineContainer class="overflow-hidden d-flex">
    <div class="mr-6" v-if="size.breakpointRange.mdAndUp">
      <ul>
        <li class="menu title"><router-link class="routerlink" to="/docs">{{ t('docs.header.vue') }}</router-link></li>
        <ul class="submenu">
          <li class="menu subtitle"><router-link class="routerlink" :to="{ hash: '#simple-installation' }">{{
            t('docs.header.simple') }}</router-link></li>
          <li class="menu subtitle"><router-link class="routerlink" :to="{ hash: '#simple-options' }">{{
            t('docs.header.options') }}</router-link></li>
          <li class="menu subtitle"><router-link class="routerlink" :to="{ hash: '#usage' }">{{ t('docs.header.usage')
              }}</router-link></li>
        </ul>
        <li class="menu title cursor-unset">
          <div class="d-flex">{{ t('docs.header.react') }} <PineTag class="ml-2" :text="t('home.details.modern.tag')">
            </PineTag>
          </div>
        </li>
        <li class="menu title cursor-unset">
          <div class="d-flex">{{ t('docs.header.figma') }} <PineTag class="ml-2" :text="t('home.details.modern.tag')">
            </PineTag>
          </div>
        </li>
      </ul>
    </div>
    <div class="overflow-auto w-100 pb-5 pr-5">
      <h5 class="font-heading-5 font-weight-semibold mb-2" id="simple-installation">{{ t('docs.header.simple') }}</h5>
      <p class="text-body-3 mb-4">
        {{ t('docs.simple.text1') }} <span class="primary">{{ t('docs.simple.pine') }}</span> {{ t('docs.simple.text2')
        }}
      </p>
      <PineTabs :tabs="['Npm', 'Yarn']" v-model="selectedTab"></PineTabs>
      <Coder class="mt-5" :code="lang[selectedTab]" language="shell" @copy="copyToClipboard" />
      <p class="text-body-3 my-4">
        {{ t('docs.simple.text3') }} <span class="primary">{{ t('docs.simple.pine') }}</span> {{ t('docs.simple.text4')
        }}
      </p>
      <Coder :code="code1" language="js" @copy="copyToClipboard" />
      <p class="text-body-3 mt-5">
        {{ t('docs.simple.text5') }}
      </p>
      <Coder class="mt-3" :code="code2" language="js" @copy="copyToClipboard" />
      <div class="mt-5 alert">
        <p>{{ t('docs.simple.alert') }}</p>
      </div>
      <h5 class="font-heading-5 font-weight-semibold my-3" id="simple-options">{{ t('docs.header.options') }}</h5>
      <p class="text-body-3 mt-3">
        {{ t('docs.options.text1') }}
      </p>
      <PineTabs :tabs="['Npm', 'Yarn']" v-model="selectedTab"></PineTabs>
      <Coder class="mt-5" :code="lang[selectedTab]" language="shell" @copy="copyToClipboard" />
      <p class="text-body-3 mt-3">
        {{ t('docs.options.text2') }} <span class="primary">{{ t('docs.options.pine') }}</span> {{
          t('docs.options.text3') }}
      </p>
      <Coder class="mt-3" :code="code3" language="js" @copy="copyToClipboard" />
      <h5 class="font-heading-5 font-weight-semibold mt-3" id="usage"> {{ t('docs.header.usage') }}</h5>
      <Coder class="mt-3" :code="code4" language="vue" @copy="copyToClipboard" />
    </div>
  </PineContainer>

</template>

<style scoped lang="scss">
.routerlink {
  color: inherit;
  text-decoration: none;
}

ul {
  padding: 0;
}

.alert {
  background-color: #ff88004d;
  border-left: 6px solid #FF8A00;
  padding: 15px 10px;
  border-radius: 5px;
}

li {
  list-style-type: none;
}

.submenu {
  padding-left: 20px;
}

.menu {
  font-size: 15px;
  white-space: nowrap;
  margin-bottom: 20px;
  cursor: pointer;

  &.title {
    font-weight: 700;
  }

  &.subtitle {
    font-weight: 400;
  }
}
</style>