<script setup lang="ts">
import { computed, onMounted } from "vue";
import { usePine, useSize } from "./package";
import { useRouter } from "vue-router";
const pine = usePine();
const router = useRouter();
console.log(pine);
import { useI18n } from "vue-i18n";
import { getColor } from "./package/mixins/utils";

const { t, locale } = useI18n();

const changeLocale = (local: string) => {
  locale.value = local
  localStorage.setItem('lang', locale.value);
}
const backgroundColorCmp = computed(() => getColor('background', pine));
onMounted(() => {
  changeLocale(localStorage.getItem('lang') || 'pt')
})
const { breakpoint } = useSize();
const currentYear = computed(() => new Date().getFullYear()); 
</script>

<template>
  <PineApp>
    <PineHeader color="background" class="highlight-border">
      <div class="d-flex justify-between align-center container-menu">
        <div class="d-flex justify-between align-center cursor-pointer" @click="router.push('/')">
          <img src="@/assets/img/logo.svg" alt="logo" class="mr-2">
          <h5 class="font-weight-bold">
            Pine UI
          </h5>
        </div>
        <div class="d-flex align-center" style="gap: 30px" v-if="breakpoint !== 'small'">
          <img v-if="locale === 'en'" @click="changeLocale('pt')" src="@/assets/img/br.svg" alt=""
            class="cursor-pointer">
          <img v-else @click="changeLocale('en')" src="@/assets/img/us.svg" alt="" class="cursor-pointer">
          <RouterLink class="routerlink" to="/docs">{{ t('header.docs') }}</RouterLink>
          <RouterLink class="routerlink" to="/components">{{ t('header.components') }}</RouterLink>
          <PineIcon name="MagnifyingGlass"></PineIcon>
          <PineSwitchTheme></PineSwitchTheme>
        </div>
        <div v-else>
          <PineMenu dir="right">
            <PineIcon name="Bars3"></PineIcon>
            <template v-slot:menu>
              <div class="d-flex flex-column align-start" style="gap: 15px">
                <div class="d-flex justify-around align-center w-100 cursor-pointer">
                  <img @click="changeLocale('pt')" src="@/assets/img/br.svg" alt="" height="17">
                  <img @click="changeLocale('en')" src="@/assets/img/us.svg" alt="" height="17">
                  <div class="divider"></div>
                  <PineSwitchTheme></PineSwitchTheme>
                </div>
                <RouterLink class="routerlink" to="/docs">{{ t('header.docs') }}</RouterLink>
                <RouterLink class="routerlink" to="/components">{{ t('header.components') }}</RouterLink>
              </div>
            </template>
          </PineMenu>
        </div>
      </div>
    </PineHeader>
    <RouterView></RouterView>
    <PineFooter color="primary" height="70px">
      <div style="width: 100%;" class="d-flex justify-between container-menu">

        <h3>{{ currentYear }} - Btree</h3>
        <div class="d-flex justify-column align-center">
          <RouterLink class="neutral0 mr-1" style="text-decoration: none;" to="/docs">{{ t('header.docs') }}
          </RouterLink>
          <RouterLink class="neutral0 ml-1" style="text-decoration: none;" to="/components">{{ t('header.components') }}
          </RouterLink>
        </div>
      </div>
    </PineFooter>
  </PineApp>
</template>
<style>
.container-menu {
  max-width: 1460px;
  margin: auto;
}

.routerlink {
  color: inherit;
  text-decoration: none;
}

.divider {
  height: 100%;

  border: 1px solid v-bind(backgroundColorCmp);
}
</style>