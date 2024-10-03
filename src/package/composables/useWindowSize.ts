import { ref, onMounted, onBeforeUnmount, reactive } from "vue";

const breakpoints = {
  sm: 600,
  md: 960,
  lg: 1290,
  xl: 1920,
};

export function useSize() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);
  const breakpoint = ref<"small" | "medium" | "large" | "xlarge">("small");

  const breakpointRange = reactive({
    smAndDown: false,
    smAndUp: false,
    mdAndDown: false,
    mdAndUp: false,
    lgAndDown: false,
    lgAndUp: false,
  });

  const updateWindowSize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;

    breakpointRange.smAndDown = false;
    breakpointRange.smAndUp = false;
    breakpointRange.mdAndDown = false;
    breakpointRange.mdAndUp = false;
    breakpointRange.lgAndDown = false;
    breakpointRange.lgAndUp = false;

    if (width.value <= breakpoints.sm) {
      breakpoint.value = "small";
      breakpointRange.smAndDown = true;
      breakpointRange.mdAndDown = true;
      breakpointRange.lgAndDown = true;
    } else if (width.value <= breakpoints.md) {
      breakpoint.value = "medium";
      breakpointRange.smAndDown = true;
      breakpointRange.mdAndDown = true;
      breakpointRange.lgAndDown = true;
    } else if (width.value <= breakpoints.lg) {
      breakpoint.value = "large";
      breakpointRange.lgAndDown = true;
    } else {
      breakpoint.value = "xlarge";
      breakpointRange.lgAndDown = true;
    }

    // Definindo os valores de up
    if (width.value >= breakpoints.sm) {
      breakpointRange.smAndUp = true;
      breakpointRange.mdAndUp = true;
      breakpointRange.lgAndUp = true;
    } else if (width.value >= breakpoints.md) {
      breakpointRange.mdAndUp = true;
      breakpointRange.lgAndUp = true;
    } else if (width.value >= breakpoints.lg) {
      breakpointRange.lgAndUp = true;
    }
  };

  onMounted(() => {
    updateWindowSize(); // Inicializa os valores corretamente no início
    window.addEventListener("resize", updateWindowSize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateWindowSize);
  });

  return { width, height, breakpoint, breakpointRange };
}
