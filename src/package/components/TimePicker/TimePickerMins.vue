<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const emit = defineEmits<{ input: [value: number], change: [value: number] }>();
const props = withDefaults(defineProps<{ value: number }>(), {
    value: 0
});


const inputValue = ref<number>(0);
const isDragging = ref(false);
const valueOnMouseDown = ref(null as number | null);
const valueOnMouseUp = ref(null as number | null);
const clockRef = ref<null | HTMLElement>(null);
const innerClockRef = ref<null | HTMLElement>(null);
const min = 0;
const max = 59;
const rotate = 0;
const genChildren = computed(() => {
    const children = []
    for (let value = min; value <= max; value = value + 5) {
        children.push(value)
    }
    return children
})
const scale = computed(() => 1.05);
const count = computed(() => Math.floor(max) - min + 1)
const roundCount = computed(() => count.value)
const degreesPerUnit = computed(() => 360 / roundCount.value)
const degrees = computed(() => degreesPerUnit.value * Math.PI / 180)

watch(() => props.value, () => {
    if (props.value !== inputValue.value) {
        setMouseDownValue(props.value)
    }
}, {
    immediate: true
})

function getPosition(value: number) {
    const rotateRadians = rotate * Math.PI / 180
    return {
        x: Math.sin((value - min) * degrees.value + rotateRadians) * scale.value,
        y: -Math.cos((value - min) * degrees.value + rotateRadians) * scale.value,
    }
}
function getTransform(i: number) {
    const { x, y } = getPosition(i)
    return {
        left: `${50 + x * 50}%`,
        top: `${50 + y * 50}%`,
    }
}

interface Point {
    x: number
    y: number
}

function angle(center: Point, p1: Point) {
    const value = 2 * Math.atan2(p1.y - center.y - euclidean(center, p1), p1.x - center.x)
    return Math.abs(value * 180 / Math.PI)
}

function euclidean(p0: Point, p1: Point) {
    const dx = p1.x - p0.x
    const dy = p1.y - p0.y

    return Math.sqrt(dx * dx + dy * dy)
}

function angleToValue(angle: number, insideClick: boolean): number {
    const value = (
        Math.round(angle / degreesPerUnit.value) +
        (insideClick ? roundCount.value * 2 : 0)
    ) % count.value + min
    // Necessary to fix edge case when selecting left part of the value(s) at 12 o'clock
    if (angle < (360 - degreesPerUnit.value / 2)) return value + (insideClick ? 12 : 0)

    return insideClick ? max - roundCount.value * 2 + 1 : min
}

function update(value: number) {
    if (inputValue.value !== value) {
        inputValue.value = value
    }
    emit('input', value)
}


function setMouseDownValue(value: number) {
    if (valueOnMouseDown.value === null) {
        valueOnMouseDown.value = value
    }

    valueOnMouseUp.value = value
    update(value)
}


function onDragMove(e: MouseEvent | TouchEvent) {
    e.preventDefault();
    if ((!isDragging.value && e.type !== 'click') || !clockRef.value) return
    const { width, top, left } = clockRef.value?.getBoundingClientRect()!
    const { width: innerWidth }: DOMRect = innerClockRef.value?.getBoundingClientRect() ?? { width: 0 } as DOMRect
    const { clientX, clientY } = 'touches' in e ? e.touches[0] : e
    const center = { x: width / 2, y: -width / 2 }
    const coords = { x: clientX - left, y: top - clientY }
    const handAngle = Math.round(angle(center, coords) - rotate + 360) % 360
    const insideClick = euclidean(center, coords) < (innerWidth as number) / 4
    const checksCount = Math.ceil(15 / degreesPerUnit.value)
    let value

    for (let i = 0; i < checksCount; i++) {
        value = angleToValue(handAngle + i * degreesPerUnit.value, insideClick)
        setMouseDownValue(value)

        value = angleToValue(handAngle - i * degreesPerUnit.value, insideClick)
        setMouseDownValue(value)
    }
}
function onMouseDown(e: MouseEvent | TouchEvent) {

    window.addEventListener('mousemove', onDragMove)
    window.addEventListener('touchmove', onDragMove)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('touchend', onMouseUp)
    valueOnMouseDown.value = null
    valueOnMouseUp.value = null
    isDragging.value = true
    onDragMove(e)
}
function onMouseUp(e: MouseEvent | TouchEvent) {
    e.stopPropagation()
    window.removeEventListener('mousemove', onDragMove)
    window.removeEventListener('touchmove', onDragMove)
    window.removeEventListener('mouseup', onMouseUp)
    window.removeEventListener('touchend', onMouseUp)

    isDragging.value = false
    if (valueOnMouseUp.value !== null) {
        emit('change', valueOnMouseUp.value)
    }
}
</script>

<template>
    <div class="pine-timer-mins" @mousedown="onMouseDown" @onTouchstart="onMouseDown" ref="clockRef">
        <div class="pine-timer-inner" ref="innerClockRef">
            <div class="pine-timer-center">

                <div class="selected-pin-center"></div>
            </div>
            <div class="selected-pin" :style="[getTransform(inputValue)]"></div>
            <div v-for="n in genChildren" :key="n" :class="[`clock clock-${n}`]" :style="[getTransform(n)]">
                {{ n }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.pine-timer-mins {
    margin: 0 auto;
    background: #252831;
    border-radius: 50%;
    position: relative;
    transition: none;
    height: 200px;
    width: 200px;
    cursor: pointer;

    .pine-timer-center {
        position: absolute;
        border-radius: 50%;
        height: 70px;
        width: 70px;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        background-color: #161922;
        display: flex;
        align-items: center;
        justify-content: center;

        .selected-pin-center {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background-color: #5093FE;
        }

    }

    .selected-pin {
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #5093FE;
        transform: translate(-50%, -50%);

    }

    .pine-timer-inner {
        position: absolute;
        bottom: 27px;
        left: 27px;
        right: 27px;
        top: 27px;

        .clock {
            align-items: center;
            border-radius: 100%;
            display: flex;
            font-size: 16px;
            justify-content: center;
            height: 40px;
            position: absolute;
            text-align: center;
            width: 40px;
            transform: translate(-50%, -50%);


        }
    }
}
</style>
