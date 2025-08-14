<script setup lang="ts">
import { RouterView } from 'vue-router';



</script>
<template>
    <PineContainer>
        <h2>Components</h2>
        <div class="m-5">
            <RouterLink class="primary" to="/components/textfield">Textfield</RouterLink> |
            <RouterLink class="primary" to="/components/icon">Icon</RouterLink> |
            <RouterLink class="primary" to="/components/loading">Loading</RouterLink> |
            <RouterLink class="primary" to="/components/drawer">Drawer</RouterLink> |
            <RouterLink class="primary" to="/components/drawermodel">Drawer - Model</RouterLink>
            | <RouterLink class="primary" to="/components/tooltip">Tooltip</RouterLink> |
            <RouterLink class="primary" to="/components/menu">Menu</RouterLink> |
            <RouterLink class="primary" to="/components/select">Select</RouterLink> |
            <RouterLink class="primary" to="/components/card">Card</RouterLink> |
            <RouterLink class="primary" to="/components/switch">Switch</RouterLink> |
            <RouterLink class="primary" to="/components/switchtheme">Switch - Theme</RouterLink>
            |<RouterLink class="primary" to="/components/btn">Button</RouterLink> |
            <RouterLink class="primary" to="/components/container">Container</RouterLink> |
            <RouterLink class="primary" to="/components/dialog">Dialog</RouterLink> |
            <RouterLink class="primary" to="/components/toast">Toast</RouterLink> |
            <RouterLink class="primary" to="/components/checkbox">Checkbox</RouterLink> |
            <RouterLink class="primary" to="/components/footer">Footer</RouterLink> |
            <RouterLink class="primary" to="/components/header">Header</RouterLink> |
            <RouterLink class="primary" to="/components/avatar">Avatar</RouterLink> |
            <RouterLink class="primary" to="/components/pickcolor">PickColor</RouterLink> |
            <RouterLink class="primary" to="/components/calendar">Calendar</RouterLink> |
            <RouterLink class="primary" to="/components/upload">Upload</RouterLink> |
            <RouterLink class="primary" to="/components/style">Pagina de estilos</RouterLink> |
        </div>
        <RouterView></RouterView>
    </PineContainer>

</template>