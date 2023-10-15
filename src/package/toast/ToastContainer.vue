<script setup lang="ts">
import { usePine } from "@/package";
import ProgressBar from "./components/Progress.vue";
import Timer from "./components/Timer.vue";
import XIcon from "./components/X.vue";
import { ref, onMounted } from "vue";
const props = defineProps<{
  toasts: any[];
  dismiss: any;
}>();
const pine = usePine();
const el = ref<HTMLElement>();
const removeElement = (el: Element) => {
  if (el.remove !== undefined) {
    el.remove();
  } else if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
};
onMounted(() => {
  removeElement(el.value!);
  document.querySelector("#pine-app")!.appendChild(el.value!);
});

const getTheme = (toast: any) => {
  if (toast && typeof toast.isDark === "boolean") return toast.isDark;

  return pine.theme === "dark";
};
const deleteToast = (id: number) => {
  props.dismiss(id);
};
</script>

<template>
  <div ref="el" class="b-toast__container">
    <TransitionGroup name="b-toast__bounce" tag="div">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="b-toast__alert"
        :class="`theme-${toast.type} ${getTheme(toast) ? 'dark' : ''}`"
      >
        <Timer
          style="display: none"
          :timer="toast.duration"
          :id="toast.id"
          @close-toast="deleteToast"
        />
        <div class="b-toast__text">
          <h4
            class="b-toast__title"
            v-if="toast.title"
            :class="`color-${toast.type}`"
          >
            {{ toast.title }}
          </h4>
          <h4 class="b-toast__content">{{ toast.content }}</h4>
        </div>
        <a @click="deleteToast(toast.id)" class="b-toast__close">
          <XIcon :dark="getTheme(toast)" />
        </a>
        <ProgressBar :class="`bg-${toast.type}`" :duration="toast.duration" />
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
$trans-cubic-bezier: cubic-bezier(0.215, 0.61, 0.355, 1);
@mixin timing-function {
  animation-timing-function: $trans-cubic-bezier;
}

@keyframes bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    @include timing-function;
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes bounceOutRight {
  40% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(1000px, 0, 0);
  }
}

.b-toast__bounce-enter-active {
  animation-name: bounceInRight;
  animation-duration: 750ms;
}

.b-toast__bounce-leave-active {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
  transform: translate3d(1000px, 0, 0);
}

.b-toast {
  &__container {
    width: 430px;
    right: 0;
    top: 0;
    padding-top: 20px;
    padding-right: 30px;
    position: fixed;
    z-index: 9999;
    font-family: "Poppins", sans-serif !important;
  }
  &__alert {
    position: relative;
    transition: all 750ms ease-in-out;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 18px 28px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e5e6e8;
    color: black;
    &.dark {
      background-color: #252831;
      color: white;
    }
  }
  &__close {
    cursor: pointer;
    height: 24px;
    margin-left: 8px;
  }
  &__text {
    display: flex;
  }
  &__title {
    margin-right: 8px;
  }
  &__content {
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 400;
  }
}
@mixin alert($name, $bgColor) {
  .theme-#{$name} {
    border: 2px solid $bgColor;
  }
  .color-#{$name} {
    color: #{$bgColor};
  }
  .bg-#{$name} {
    background: #{$bgColor};
  }
}
@include alert(success, #00f391);
@include alert(error, #fe5050);
@include alert(warning, #ff8a00);
@include alert(info, #5093fe);
.b-toast__progress {
  position: absolute;
  width: 100%;
  height: 6px;
  left: 0;
  bottom: 0;
  border-radius: 0px 0px 0px 6px;
}
@media (max-width: 800px) {
  .b-toast {
    &__container {
      width: 100%;
      padding-right: 0px;
      padding-top: 0px;
      > div {
        margin: 10px;
      }
    }
    &__alert {
      margin-bottom: 10px;
    }
  }
}
</style>
