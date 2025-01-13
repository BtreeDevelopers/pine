<script setup lang="ts">
import { IIcons } from "../types/icons";
withDefaults(
    defineProps<{
        size?: number | string;
        sizeIcon?: number;
        color?: string;
        type?: "solid" | "outline" | "text";
        loading?: boolean;
        icon: IIcons
    }>(),
    {
        size: "40px",
        sizeIcon: 20,
        color: "primary",
        type: "solid",
    }
);


</script>

<template>
    <PineBtn :type="type" :color="color" :loading="loading" class="button-icon" :width="size" :height="size">
        <PineIcon :name="icon" color="initial" :size="sizeIcon"></PineIcon>
    </PineBtn>
</template>

<style scoped lang="scss">
.button-icon {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}
</style>