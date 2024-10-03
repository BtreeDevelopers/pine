<script setup lang="ts">
import { reactive, ref, onMounted, onUnmounted, watchEffect, computed } from "vue";

/* ====================================================== */
/*                          PROPS                         */
/* ====================================================== */

type Props = {
    // [ ] if possible use defineExpose to count total carousel items and omit totalItems prop
    totalItems: number;
    cycle?: boolean | number;
    continuous?: boolean;
    autofocus?: boolean;
    hideArrows?: boolean;
    transitionDuration?: string;
    maxWidth?: string;
    dotButton?: string;
    dotButtonActive?: string;
    hideDots?: boolean;
    overlayDots?: boolean;
    hideCounter?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
    cycle: false,
    continuous: true,
    transitionDuration: "0.2s",
    maxWidth: "40rem",
    dotButton: "&#149;",
    dotButtonActive: "&#9673;",
    overlayDots: false,
    hideCounter: true,
});

/* ====================================================== */
/*                          STATE                         */
/* ====================================================== */

const ITEM = Object.preventExtensions(
    Object.assign(Object.create(null), {
        FirstItem: 0,
        LastItem: props.totalItems - 1,
    })
);

watchEffect(() => {
    ITEM.LastItem = props.totalItems - 1;
});

const state = reactive({
    currentItem: ITEM.FirstItem,
    cycleId: 0,
});

/* ====================================================== */
/*               FEAT: Change Carousel Item               */
/* ====================================================== */

function changeItem(direction: "next" | "prev", step = 1) {
    if (direction === "next") {
        if (state.currentItem >= ITEM.LastItem) {
            // in last slide
            if (props.continuous === true) {
                state.currentItem = ITEM.FirstItem;
            }
            return;
        }

        // not in last slide
        state.currentItem += step;

        return;
    }

    if (direction === "prev") {
        if (state.currentItem <= 0) {
            // in first slide
            if (props.continuous === true) {
                state.currentItem = ITEM.LastItem;
            }
            return;
        }

        // not in first slide
        state.currentItem -= step;

        return;
    }
}

/* ====================================================== */
/*           FEAT: Cycle Through Carousel items           */
/* ====================================================== */

onMounted(() => {
    if (props.cycle !== false) {
        const isCycleNumber = typeof props.cycle === "number";
        if (isCycleNumber && props.cycle as number < 0) {
            console.warn(
                "on BaseCarousel Component: to set the cycle period, pass a positive number without 'ms' unit"
            );
        }

        const cycleAsNumber = Number(Math.abs(props.cycle as number));

        state.cycleId = setInterval(
            () => {
                changeItem("next");
            },
            isCycleNumber ? cycleAsNumber : 1000
        ) as unknown as number;
    }
});

onUnmounted(() => {
    clearInterval(state.cycleId);
});

/* ====================================================== */
/*        FEAT: Reference Elements To Control Focus       */
/* ====================================================== */

const carouselEl = ref<HTMLElement>();
const prevArrowEl = ref<HTMLButtonElement>();
const nextArrowEl = ref<HTMLButtonElement>();
const paginationEl = ref<HTMLElement>();

/* ====================================================== */
/*          FEAT: Carousel Reactions To Keyboard          */
/* ====================================================== */

function onKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowRight") {
        nextArrowEl.value?.focus();
        changeItem("next");
        carouselEl.value?.focus();
    }

    if (event.key === "ArrowLeft") {
        prevArrowEl.value?.focus();
        changeItem("prev");
        carouselEl.value?.focus();
    }

    if (event.key === "Escape") {
        (event.target as HTMLElement).blur();
    }
}


/* ====================================================== */
/*           FEAT: Carousel Can be Auto-focused           */
/* ====================================================== */

onMounted(() => {
    if (props.autofocus === true) {
        carouselEl.value?.focus();
    }
});

/* ====================================================== */
/*    FEAT: Pagination Dots to Navigate Specific Items    */
/* ====================================================== */

function onDotClick(index: number): void {
    // if already there, do nothing
    if (index === state.currentItem) return;

    // find direction and calculate step size
    if (index > state.currentItem) {
        changeItem("next", index - state.currentItem);
        return;
    }
    if (index < state.currentItem) {
        changeItem("prev", state.currentItem - index);
        return;
    }
}


const paddingBlockEnd = computed(() => {
    return props.overlayDots === false ? "calc(2rem + 2ex + 2vh + 2px)" : "unset"
});

</script>

<template>
    <section class="pine-carousel" @keydown="onKeyDown($event)" ref="carouselEl" tabindex="-1" aria-label="carousel"
        role="region">
        <small v-if="props.hideCounter === false" class="counter">{{ state.currentItem + 1 }}/{{ props.totalItems
            }}</small>

        <slot :current="state.currentItem"></slot>

        <button v-if="hideArrows === false" @click="changeItem('prev')" ref="prevArrowEl" class="arrow prev"
            aria-label="go to prev item">
            <PineIcon name="ChevronLeft"></PineIcon>
        </button>

        <button v-if="hideArrows === false" @click="changeItem('next')" ref="nextArrowEl" class="arrow next"
            aria-label="go to next item">
            <PineIcon name="ChevronRight">
            </PineIcon>
        </button>

        <div class="pagination" ref="paginationEl" v-if="props.hideDots === false">
            <button v-for="(_, i) in props.totalItems" :key="`pagination-dot-${i}`" @click="onDotClick(i)"
                :aria-label="`go to item ${i + 1}`" v-html="state.currentItem === i ? props.dotButtonActive : props.dotButton
                    "></button>
        </div>
    </section>
</template>

<style scoped>
.pine-carousel {
    --transition-duration: v-bind(props.transitionDuration);
    --carousel-max-width: v-bind(props.maxWidth);
    --carousel-outline-alpha: 0.25;
    --arrow-font-size: calc(1.75rem + 0.5vw);
    --arrow-padding-inline: calc(1rem + 1vw);
    max-width: min(100%, var(--carousel-max-width));
    margin-inline: auto;
    position: relative;
    overflow: hidden;
    user-select: none;
    /* box-shadow: 0 0 18px rgb(0 0 0 / 0.25); */
    transition-duration: var(--transition-duration);
    transition-property: transform;
    padding-block-end: v-bind("paddingBlockEnd");
    display: block;
    width: 100%;
}



/* ====================================================== */
/*                   PREV/NEXT (ARROWS)                   */
/* ====================================================== */

.arrow {
    cursor: pointer;
    --arrow-background-alpha: 0.2;
    --arrow-color-alpha: 0.5;
    user-select: none;
    font-size: var(--arrow-font-size);
    position: absolute;
    color: rgb(255 255 255 / var(--arrow-color-alpha));
    top: 0;
    bottom: 0;
    border: none;
    padding-inline: var(--arrow-padding-inline);
    opacity: 0;
    transition-duration: calc(1.5 * var(--transition-duration));
    transition-property: opacity, background, color, font-size;
}

.prev {
    left: 0;
    background: transparent;
}

.next {
    right: 0;
    background: transparent;
}

.arrow:focus,
.arrow:focus-within {
    opacity: 1;
    font-size: calc(1.5 * var(--arrow-font-size));
    background-color: rgb(255 255 255 / min(1, calc(1.5 * var(--arrow-background-alpha))));
    color: rgb(0 0 0 / min(1, calc(1.5 * var(--arrow-color-alpha))));
}

.arrow:active {
    background: rgb(0 0 0 / min(1, calc(1.5 * var(--arrow-background-alpha))));
    color: rgb(255 255 255 / min(1, calc(1.5 * var(--arrow-color-alpha))));
}

.pine-carousel:hover:not(:fullscreen) .arrow {
    opacity: 1;
}

.pine-carousel:fullscreen .arrow:hover {
    opacity: 1;
}

@media (prefers-color-scheme: dark) {
    /* .prev {
        background: linear-gradient(to left,
                transparent,
                rgb(255 255 255 / var(--arrow-background-alpha)));
    }

    .next {
        background: linear-gradient(to right,
                transparent,
                rgb(255 255 255 / var(--arrow-background-alpha)));
    } */

    .arrow:focus,
    .arrow:focus-within {
        opacity: 1;
        font-size: calc(1.5 * var(--arrow-font-size));
        background-color: rgb(0 0 0 / min(1, calc(1.5 * var(--arrow-background-alpha))));
        color: rgb(255 255 255 / min(1, calc(1.5 * var(--arrow-color-alpha))));
    }

    .arrow:active {
        background: rgb(255 255 255 / min(1, calc(1.5 * var(--arrow-background-alpha))));
        color: rgb(0 0 0 / min(1, calc(1.5 * var(--arrow-color-alpha))));
    }
}

/* ====================================================== */
/*                   PAGINATION AND DOTS                  */
/* ====================================================== */

.pagination {
    --dot-font-size: calc(1.75rem + 0.5vw);
    --dot-color-alpha: 1;
    color: rgb(255 255 255 / var(--dot-color-alpha));
    max-width: fit-content;
    margin-inline: auto;
    padding-block: 0.5rem;
    padding-inline: 0.5rem;
    border-radius: 100vmax;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
}

@media (prefers-color-scheme: light) {
    .pagination {
        color: rgb(0 0 0 / var(--dot-color-alpha));
    }
}

.pagination>button {
    font-size: var(--dot-font-size);
    cursor: pointer;
    border: none;
    border-radius: 100vmax;
    line-height: 1;
    min-width: calc(1ex + 1.25rem);
    margin: calc(0.25rem + 0.25vw);
    padding: 0.125rem;
    background: radial-gradient(rgb(0 0 0 / calc(1.5 * var(--dot-color-alpha))),
            transparent 25%);
    color: inherit;
    transition-duration: var(--transition-duration);
    transition-property: transform, background, opacity;
    opacity: 0;
    user-select: none;
}

.pagination>button:hover {
    transform: scale(1.25);
}

.pagination>button:active {
    background: radial-gradient(rgb(255 255 255 / calc(1.5 * var(--dot-color-alpha))),
            transparent 25%);
    transform: scale(1.5);
}

.pine-carousel:hover:not(:fullscreen) .pagination>button {
    opacity: 1;
}

.pine-carousel:fullscreen .pagination {
    padding-block: 2rem;
}

.pagination:focus-within>button {
    opacity: 1;
}

.pagination:hover>button {
    opacity: 1;
}

/* ====================================================== */
/*                      ITEM COUNTER                      */
/* ====================================================== */

.counter {
    /* background-color: rgb(0 0 0 / 0.2); */
    font-size: 0.75rem;
    font-weight: bold;
    color: rgb(255 255 255 / 0.5);
    background-color: rgb(0 0 0 / 0.1);
    position: absolute;
    padding-inline: 0.5rem;
    padding-block: 0.25rem;
    user-select: none;
    pointer-events: none;
    z-index: 1;
    opacity: 0;
    transition-duration: var(--transition-duration);
    transition-property: opacity, font-size;
}

.pine-carousel:hover:not(:fullscreen) .counter {
    opacity: 1;
}

.pine-carousel:fullscreen:not(:focus-visible) .counter {
    opacity: 1;
    font-size: 1rem;
}
</style>