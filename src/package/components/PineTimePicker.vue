<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import TimePickerHours from './TimePicker/TimePickerHours.vue';
import TimePickerMins from './TimePicker/TimePickerMins.vue';
import PineCard from './PineCard.vue';
import PineIcon from './PineIcon.vue';
const timer = reactive({
    hours: 0,
    minutes: 0
})
const emit = defineEmits<{
    "update:modelValue": [val: string];
}>();
const props = withDefaults(
    defineProps<{
        modelValue?: string,
    }>(),
    {
        modelValue: '00:00'
    }
);
const formattedTimer = computed(() => {
    const formattedHours = String(timer.hours).padStart(2, '0');
    const formattedMinutes = String(timer.minutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
});
watch(() => props.modelValue, () => {
    if (formattedTimer.value !== props.modelValue) {
        convertStringToTimer(props.modelValue);
    }
}, {
    immediate: true
})


type IMode = 'hours' | 'minutes'

const convertStringToTimer = (timeString: string) => {
    const [hours, minutes] = timeString.split(':').map(Number); // Divide a string e converte para número
    timer.hours = hours; // Atribui horas
    timer.minutes = minutes; // Atribui minutos
};



const formattedHours = computed(() => {
    const formattedHours = String(timer.hours).padStart(2, '0');
    return `${formattedHours}`;
});
const formattedMinutes = computed(() => {
    const formattedMinutes = String(timer.minutes).padStart(2, '0');
    return `${formattedMinutes}`;
});


const mode = ref<IMode>('hours');
function getHours(n: number) {
    if (timer.hours !== n)
        mode.value = 'minutes';
    timer.hours = n;
    emit('update:modelValue', formattedTimer.value);

}
function getMins(n: number) {
    timer.minutes = n;
    emit('update:modelValue', formattedTimer.value);
}

function changeMode(md: IMode) {
    mode.value = md
}


</script>

<template>
    <div class="pine-timer">
        <PineCard class="timer-input d-flex align-center justify-between">
            <p class="timer-text">
                <span @click="changeMode('hours')">
                    {{ formattedHours }}
                </span>
                <span class="primary"> : </span>
                <span @click="changeMode('minutes')">
                    {{ formattedMinutes }}
                </span>
            </p>
            <PineIcon name="Clock" :size="30"></PineIcon>
        </PineCard>
        <TimePickerHours v-if="mode === 'hours'" :value="timer.hours" @change="getHours"></TimePickerHours>
        <TimePickerMins v-else :value="timer.minutes" @change="getMins"></TimePickerMins>
    </div>
</template>

<style lang="scss" scoped>
.pine-timer {
    background-color: #161922;
    border-radius: 15px;
    padding: 15px;

    .timer-input {
        margin-bottom: 15px;
    }

    .timer-text {
        cursor: pointer;
        font-size: 20px;
    }
}
</style>
