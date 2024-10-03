<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from "vue"
import { usePine } from "..";
import { getColor } from "../mixins/utils";

const pine = usePine();

const props = withDefaults(
    defineProps<{
        size?: number;
        modelValue?: { r: number, g: number, b: number, a: number };
        backgroundColor?: string;
    }>(),
    {
        size: 300,
        modelValue: () => ({ r: 0, g: 0, b: 0, a: 1 }),
        backgroundColor: "highlight",
    }
);

const emit = defineEmits<{
    "update:modelValue": [val: { r: number, g: number, b: number, a: number }];
}>();

const backgroundColorCmp = computed(() =>
    getColor(props.backgroundColor, pine)
);

// watch(() => props.modelValue, (value, oldValue) => {
//     if (value === oldValue) return;
//     getValueFromProps();
//     const ctx = provider1.context!;
//     const ctx2 = provider2.context!;
//     const ctx3 = provider3.context!;
//     reloadColorpickerSlider();
//     reloadAlphapickerSlider();
//     reloadColorpicker();
//     drawCircle(
//         ctx,
//         color_picker_slider_width.value / 2,
//         hue.value * color_picker_slider_height.value,
//         color_picker_slider_width.value / 2,
//         "transparent",
//         "white",
//         2
//     );
//     drawCircle(
//         ctx3,
//         color_picker_slider_width.value / 2,
//         alpha.value * color_picker_slider_height.value,
//         color_picker_slider_width.value / 2,
//         "transparent",
//         "white",
//         2
//     );
//     drawCircle(
//         ctx2,
//         light.value * color_picker_width.value,
//         sat.value * color_picker_height.value,
//         color_picker_slider_width.value / 2,
//         "transparent",
//         "white",
//         2
//     );
// });

type IProvider = { context: CanvasRenderingContext2D | null }

const provider1 = reactive<IProvider>({ context: null })
const provider2 = reactive<IProvider>({ context: null })
const provider3 = reactive<IProvider>({ context: null })

const color_picker_width = ref<number>(props.size);
const color_picker_height = ref<number>(props.size);
const color_picker_slider_width = ref<number>((props.size * 0.1618) / 3);
const color_picker_slider_height = ref<number>(props.size);


const hue = ref<number>(0);
const sat = ref<number>(0);
const light = ref<number>(0);
const alpha = ref<number>(1);

const R = ref<number>(0);
const G = ref<number>(0);
const B = ref<number>(0);

const canva_holder_style = reactive({
    width: props.size * 1.25 + "px",
    height: props.size * 1.25 + "px",
})

const corEscolhidaHSL = ref<string>('');
const corEscolhidaRGB = ref<string>('');

const pickedColor = ref<boolean>(false);
const pickedColorSlider = ref<boolean>(false);
const pickedAlphaSlider = ref<boolean>(false);

const color_picker_slider = ref<HTMLCanvasElement | null>(null)
const alpha_picker_slider = ref<HTMLCanvasElement | null>(null)
const color_picker = ref<HTMLCanvasElement | null>(null)

const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255, g /= 255, b /= 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return [h, s, l];
}

const hslToRgb = (h: number, s: number, l: number): number[] => {
    let r: number, g: number, b: number;

    if (s === 0) {
        r = g = b = l;
    } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        r = hueToRgb(p, q, h + 1 / 3);
        g = hueToRgb(p, q, h);
        b = hueToRgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

const hueToRgb = (p: number, q: number, t: number): number => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}

const drawCircle = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, fill: string, stroke: string, strokeWidth: number) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    if (fill) {
        ctx.fillStyle = fill;
        ctx.fill();
    }
    if (stroke) {
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = stroke;
        ctx.stroke();
    }
}

const listenSlider = (event: MouseEvent) => {
    const rect = color_picker_slider.value!.getBoundingClientRect();
    const hueLocal = event.clientY - rect.top;
    hue.value = hueLocal / color_picker_slider_height.value;
    const ctx = provider1.context!;
    ctx!.clearRect(
        0,
        0,
        color_picker_slider_width.value,
        color_picker_slider_height.value
    );
    reloadColorpickerSlider();
    ctx.restore();
    drawCircle(
        ctx,
        color_picker_slider_width.value / 2,
        hueLocal,
        color_picker_slider_width.value / 2,
        "transparent",
        "white",
        2
    );
    reloadColorpicker();
    const ctx2 = provider2.context!;
    drawCircle(
        ctx2,
        light.value * color_picker_width.value,
        sat.value * color_picker_height.value,
        color_picker_slider_width.value / 2,
        "transparent",
        "white",
        2
    );
    updateDisplay();
}

const listenSlider2 = (event: MouseEvent) => {
    const rect = alpha_picker_slider.value!.getBoundingClientRect();
    const hueLocal = event.clientY - rect.top;
    alpha.value = hueLocal / color_picker_slider_height.value;
    const ctx = provider3.context!;
    ctx.clearRect(
        0,
        0,
        color_picker_slider_width.value,
        color_picker_slider_height.value
    );
    reloadAlphapickerSlider();
    drawCircle(
        ctx,
        color_picker_slider_width.value / 2,
        hueLocal,
        color_picker_slider_width.value / 2,
        "transparent",
        "white",

        2
    );
    updateDisplay();
}

const listenpicker = (event: MouseEvent) => {
    const rect = color_picker.value!.getBoundingClientRect();
    const lightLocal = (event.clientX - rect.left) / color_picker_width.value;
    const saturation = (event.clientY - rect.top) / color_picker_height.value;
    const ctx = provider2.context!;
    reloadColorpicker();
    drawCircle(
        ctx,
        event.clientX - rect.left,
        event.clientY - rect.top,
        color_picker_slider_width.value / 2,
        "transparent",
        "white",
        2
    );
    sat.value = saturation;
    light.value = lightLocal;
    updateDisplay();
}

const updateDisplay = () => {
    let corfinal = hslToRgb(hue.value, sat.value, light.value);

    R.value = corfinal[0];
    G.value = corfinal[1];
    B.value = corfinal[2];

    corEscolhidaHSL.value =
        hue.value.toFixed(2) +
        ";" +
        sat.value.toFixed(2) +
        ";" +
        light.value.toFixed(2);
    emit('update:modelValue', { r: R.value, g: G.value, b: B.value, a: Number(alpha.value.toFixed(2)) })
    corEscolhidaRGB.value =
        R.value + "," + G.value + "," + B.value + "," + alpha.value.toFixed(2);

    // canva_holder_style.backgroundColor =
    //     "rgba(" + R.value + "," + G.value + "," + B.value + "," + alpha.value + ")";
}

const reloadColorpicker = () => {
    const ctx2 = provider2.context!;
    let sub_divisao = 100;
    let tamn_max_w = color_picker_width.value;
    let tamn_max_h = color_picker_width.value;
    let corfinal: number[];

    for (
        let tam_w = 0;
        tam_w < tamn_max_w;
        tam_w += tamn_max_w / sub_divisao
    ) {
        for (
            let tam_h = 0;
            tam_h < tamn_max_h;
            tam_h += tamn_max_h / sub_divisao
        ) {
            corfinal = hslToRgb(
                hue.value,
                tam_h / tamn_max_h,
                tam_w / tamn_max_w
            );
            ctx2.fillStyle =
                "rgb(" + corfinal[0] + "," + corfinal[1] + "," + corfinal[2] + ")";
            ctx2.fillRect(
                tam_w,
                tam_h,
                tamn_max_w / sub_divisao,
                tamn_max_h / sub_divisao
            );
        }
    }
}
const reloadColorpickerSlider = () => {
    let sub_divisao = 100;
    let tamn_max = color_picker_slider_height.value;
    let corfinal: number[];
    const ctx = provider1.context!;

    for (
        let tamn_d = 0;
        tamn_d < tamn_max;
        tamn_d += tamn_max / sub_divisao
    ) {
        corfinal = hslToRgb(tamn_d / tamn_max, 1, 0.5);
        ctx.fillStyle =
            "rgb(" + corfinal[0] + "," + corfinal[1] + "," + corfinal[2] + ")";
        ctx.fillRect(
            0,
            tamn_d,
            color_picker_slider_width.value,
            tamn_max / sub_divisao
        );
    }
}

const reloadAlphapickerSlider = () => {
    let sub_divisao = 100;
    let tamn_max = color_picker_slider_height.value;
    const ctx = provider3.context!;

    for (
        let tamn_d = 0;
        tamn_d < tamn_max;
        tamn_d += tamn_max / sub_divisao
    ) {
        ctx.fillStyle = "rgba(0,0,0," + tamn_d / tamn_max + ")";
        ctx.fillRect(
            0,
            tamn_d,
            color_picker_slider_width.value,
            tamn_max / sub_divisao
        );
    }
}
const grabItPicker = (event: MouseEvent) => {
    const rect = color_picker.value!.getBoundingClientRect();

    const lightLocal = (event.clientX - rect.left) / color_picker_width.value;
    const saturation = (event.clientY - rect.top) / color_picker_height.value;
    const ctx2 = provider2.context!;

    if (pickedColor.value) {
        reloadColorpicker();
        drawCircle(
            ctx2,
            lightLocal * color_picker_width.value,
            sat.value * color_picker_height.value,
            color_picker_slider_width.value / 2,
            "transparent",
            "white",
            2
        );

        sat.value = saturation;
        light.value = lightLocal;
        updateDisplay();
    }
}
const clickedPicker = (event: MouseEvent) => {
    const rect = color_picker.value!.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const minimo = 10;

    if (
        y > sat.value * color_picker_width.value - minimo &&
        y < sat.value * color_picker_width.value + minimo &&
        x > light.value * color_picker_height.value - minimo &&
        x < light.value * color_picker_height.value + minimo
    ) {
        pickedColor.value = true;
    }
}
const unclickedPicker = (event: MouseEvent) => {
    const rect = color_picker.value!.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const minimo = 10;

    if (
        y > sat.value * color_picker_width.value - minimo &&
        y < sat.value * color_picker_width.value + minimo &&
        x > light.value * color_picker_height.value - minimo &&
        x < light.value * color_picker_height.value + minimo
    ) {
        pickedColor.value = false;
    }
}
const grabItColorPicker = (event: MouseEvent) => {
    const rect = color_picker_slider.value!.getBoundingClientRect();

    const hueLocal = event.clientY - rect.top;

    const ctx = provider1.context!;

    if (pickedColorSlider.value) {
        hue.value = hueLocal / color_picker_slider_height.value;

        ctx.clearRect(
            0,
            0,
            color_picker_slider_width.value,
            color_picker_slider_height.value
        );
        reloadColorpickerSlider();
        drawCircle(
            ctx,
            color_picker_slider_width.value / 2,
            hueLocal,
            color_picker_slider_width.value / 2,
            "transparent",
            "white",

            2
        );
        reloadColorpicker();
        const ctx2 = provider2.context!;
        drawCircle(
            ctx2,
            light.value * color_picker_width.value,
            sat.value * color_picker_height.value,
            color_picker_slider_width.value / 2,
            "transparent",
            "white",
            2
        );

        updateDisplay();
    }
}
const clickedColorPicker = (event: MouseEvent) => {
    const rect = color_picker_slider.value!.getBoundingClientRect();
    const x = event.clientY - rect.top;
    const minimo = 10;

    if (
        x > hue.value * color_picker_slider_height.value - minimo &&
        x < hue.value * color_picker_slider_height.value + minimo
    ) {
        pickedColorSlider.value = true;
    }
}

const unclickedColorPicker = (event: MouseEvent) => {
    const rect = color_picker_slider.value!.getBoundingClientRect();
    const x = event.clientY - rect.top;
    const minimo = 10;
    if (
        x > hue.value * color_picker_slider_height.value - minimo &&
        x < hue.value * color_picker_slider_height.value + minimo
    ) {
        pickedColorSlider.value = false;
    }
}

const grabItAlphaPicker = (event: MouseEvent) => {
    const rect = alpha_picker_slider.value!.getBoundingClientRect();
    const hue = event.clientY - rect.top;
    const ctx = provider3.context!;

    if (pickedAlphaSlider.value) {
        alpha.value = hue / color_picker_slider_height.value;

        ctx.clearRect(
            0,
            0,
            color_picker_slider_width.value,
            color_picker_slider_height.value
        );
        reloadAlphapickerSlider();
        drawCircle(
            ctx,
            color_picker_slider_width.value / 2,
            hue,
            color_picker_slider_width.value / 2,
            "transparent",
            "white",
            2
        );

        updateDisplay();
    }
}
const clickedAlphaPicker = (event: MouseEvent) => {
    const rect = alpha_picker_slider.value!.getBoundingClientRect();
    const x = event.clientY - rect.top;
    const minimo = 10;

    if (
        x > alpha.value * color_picker_slider_height.value - minimo &&
        x < alpha.value * color_picker_slider_height.value + minimo
    ) {
        pickedAlphaSlider.value = true;
    }
}

const unclickedAlphaPicker = (event: MouseEvent) => {
    const rect = alpha_picker_slider.value!.getBoundingClientRect();
    const x = event.clientY - rect.top;
    const minimo = 10;
    if (
        x > alpha.value * color_picker_slider_height.value - minimo &&
        x < alpha.value * color_picker_slider_height.value + minimo
    ) {
        pickedAlphaSlider.value = false;
    }
}
const getValueFromProps = () => {
    const [h, s, l] = rgbToHsl(props.modelValue.r, props.modelValue.g, props.modelValue.b)

    hue.value = h;
    sat.value = s;
    light.value = l;
    alpha.value = props.modelValue.a

    updateDisplay();
}
onMounted(() => {
    provider1.context = color_picker_slider.value!.getContext("2d");
    provider2.context = color_picker.value!.getContext("2d");
    provider3.context = alpha_picker_slider.value!.getContext("2d");

    color_picker_slider.value!.width = color_picker_slider_width.value;
    color_picker_slider.value!.height = color_picker_slider_height.value;

    color_picker.value!.width = color_picker_width.value;
    color_picker.value!.height = color_picker_height.value;

    alpha_picker_slider.value!.width = color_picker_slider_width.value;
    alpha_picker_slider.value!.height = color_picker_slider_height.value;

    const ctx = provider1.context!;
    const ctx2 = provider2.context!;
    const ctx3 = provider3.context!;

    reloadColorpickerSlider();
    reloadAlphapickerSlider();
    reloadColorpicker();

    drawCircle(
        ctx,
        color_picker_slider_width.value / 2,
        hue.value * color_picker_slider_height.value,
        color_picker_slider_width.value / 2,
        "transparent",
        "white",
        2
    );
    drawCircle(
        ctx3,
        color_picker_slider_width.value / 2,
        alpha.value * color_picker_slider_height.value,
        color_picker_slider_width.value / 2,
        "transparent",
        "white",
        2
    );
    drawCircle(
        ctx2,
        light.value * color_picker_width.value,
        sat.value * color_picker_height.value,
        color_picker_slider_width.value / 2,
        "transparent",
        "white",
        2
    );

    // ////////////////////////////////

    color_picker.value!.addEventListener("click", listenpicker);
    color_picker.value!.addEventListener(
        "mousedown",
        clickedPicker
    );
    color_picker.value!.addEventListener(
        "mouseup",
        unclickedPicker
    );
    color_picker.value!.addEventListener("mousemove", grabItPicker);

    // ////////////////////////////////

    color_picker_slider.value!.addEventListener(
        "click",
        listenSlider
    );
    color_picker_slider.value!.addEventListener(
        "mousedown",
        clickedColorPicker
    );
    color_picker_slider.value!.addEventListener(
        "mouseup",
        unclickedColorPicker
    );
    color_picker_slider.value!.addEventListener(
        "mousemove",
        grabItColorPicker
    );

    // ////////////////////////////////

    alpha_picker_slider.value!.addEventListener(
        "click",
        listenSlider2
    );
    alpha_picker_slider.value!.addEventListener(
        "mousedown",
        clickedAlphaPicker
    );
    alpha_picker_slider.value!.addEventListener(
        "mouseup",
        unclickedAlphaPicker
    );
    alpha_picker_slider.value!.addEventListener(
        "mousemove",
        grabItAlphaPicker
    );

    getValueFromProps();


    ctx.save();
    ctx2.save();
    ctx3.save();
})
</script>

<template>
    <div class="container" :style="canva_holder_style">
        <div class="canva_holder">
            <canvas ref="color_picker" class="color_picker"></canvas>
            <canvas ref="color_picker_slider" class="color_picker_slider"></canvas>
            <canvas ref="alpha_picker_slider" class="color_picker_slider"></canvas>
        </div>
        <div>
            <span>RGBA</span>
            {{ corEscolhidaRGB }}
        </div>
    </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.canva_holder {
    display: flex;
    flex-direction: row;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid #3e435700;
    border-radius: 10px;
    background-color: v-bind("backgroundColorCmp");
    height: auto !important;
    padding: 10px 0px;
}

.color_picker {
    margin-right: 10px;
}

.color_picker_slider {
    border: 3px solid #3e435700;
    border-radius: 10px;
    overflow: hidden;
}
</style>