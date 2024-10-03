<script setup lang="ts">
import { onMounted } from "vue";
import { usePine, useSize } from "./package";
const pine = usePine();
console.log(pine);
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const changeLocale = (local: string) => {
  locale.value = local
  localStorage.setItem('lang', locale.value);
}
onMounted(() => {
  changeLocale(localStorage.getItem('lang') || 'pt')
})
const { breakpoint } = useSize();
</script>

<template>
  <PineApp>
    <PineHeader color="background" class="highlight-border">
      <div class="d-flex justify-between align-center container-menu">
        <div class="d-flex justify-between align-center">
          <img src="@/assets/img/logo.svg" alt="logo" class="mr-2">
          <h5>
            Pine UI
          </h5>
        </div>
        <div class="d-flex align-center" style="gap: 30px" v-if="breakpoint !== 'small'">
          <img v-if="locale === 'en'" @click="changeLocale('pt')" src="@/assets/img/br.svg" alt="">
          <img v-else @click="changeLocale('en')" src="@/assets/img/us.svg" alt="">
          <a>{{ t('header.docs') }}</a>
          <a>{{ t('header.components') }}</a>
          <PineIcon name="MagnifyingGlass"></PineIcon>
          <PineSwitchTheme></PineSwitchTheme>
        </div>
        <div v-else>
          <PineMenu dir="right">
            <PineIcon name="Bars3"></PineIcon>
            <template v-slot:menu>
              <div class="d-flex flex-column align-start" style="gap: 15px">
                <div class="d-flex justify-around w-100">
                  <img @click="changeLocale('pt')" src="@/assets/img/br.svg" alt="" height="17">
                  <img @click="changeLocale('en')" src="@/assets/img/us.svg" alt="" height="17">
                </div>
                <a>{{ t('header.docs') }}</a>
                <a>{{ t('header.components') }}</a>
                <PineSwitchTheme></PineSwitchTheme>
              </div>
            </template>
          </PineMenu>
        </div>
      </div>
    </PineHeader>
    <!-- <div class="m-5">
      <RouterLink class="primary" to="/">APP</RouterLink> |
      <RouterLink class="primary" to="/textfield">Textfield</RouterLink> |
      <RouterLink class="primary" to="/icon">Icon</RouterLink> |
      <RouterLink class="primary" to="/loading">Loading</RouterLink> |
      <RouterLink class="primary" to="/drawer">Drawer</RouterLink> |
      <RouterLink class="primary" to="/drawermodel">Drawer - Model</RouterLink>
      | <RouterLink class="primary" to="/tooltip">Tooltip</RouterLink> |
      <RouterLink class="primary" to="/menu">Menu</RouterLink> |
      <RouterLink class="primary" to="/select">Select</RouterLink> |
      <RouterLink class="primary" to="/card">Card</RouterLink> |
      <RouterLink class="primary" to="/switch">Switch</RouterLink> |
      <RouterLink class="primary" to="/switchtheme">Switch - Theme</RouterLink>
      |<RouterLink class="primary" to="/btn">Button</RouterLink> |
      <RouterLink class="primary" to="/container">Container</RouterLink> |
      <RouterLink class="primary" to="/dialog">Dialog</RouterLink> |
      <RouterLink class="primary" to="/toast">Toast</RouterLink> |
      <RouterLink class="primary" to="/checkbox">Checkbox</RouterLink> |
      <RouterLink class="primary" to="/footer">Footer</RouterLink> |
      <RouterLink class="primary" to="/header">Header</RouterLink> |
      <RouterLink class="primary" to="/avatar">Avatar</RouterLink> |
      <RouterLink class="primary" to="/pickcolor">PickColor</RouterLink> |
      <RouterLink class="primary" to="/calendar">Calendar</RouterLink> |
      <RouterLink class="primary" to="/upload">Upload</RouterLink> |
      <RouterLink class="primary" to="/style">Pagina de estilos</RouterLink> |
    </div> -->
    <RouterView></RouterView>
  </PineApp>
</template>
<style>
.container-menu {
  max-width: 1460px;
  margin: auto;
}
</style>