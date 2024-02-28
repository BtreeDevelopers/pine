<script setup lang="ts">
</script>
<template>
    <Teleport to="#pine-app">
        <footer class="pine-footer">
            <slot></slot>
        </footer>
    </Teleport>
</template>

<style scoped lang="scss">
.pine-footer {
    height: 45px;
    background-color: #252831;
    align-items: center;
    display: flex;
    flex: 0 1 auto !important;
    flex-wrap: wrap;
    padding: 6px 16px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
