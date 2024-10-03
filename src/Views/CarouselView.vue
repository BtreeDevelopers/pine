<script setup lang="ts">
import PineCarousel from '@/package/components/PineCarousel.vue';
import PineCarouselItem from '@/package/components/PineCarouselItem.vue';
</script>

<template>
    <PineCarousel :totalItems="3" v-slot="{ current }">
        <PineCarouselItem v-for="i in 3" v-show="current === i - 1">
            <div style=" height: 300px;">
                <h2>Titulo {{ i }}</h2>
                <p>Paragrafo</p>
                <button>Botão {{ i }}</button>

            </div>
        </PineCarouselItem>
    </PineCarousel>
</template>
