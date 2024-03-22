<script lang="ts" setup>
import { computed, ref, watch } from 'vue';

type IMode = "DAY" | "MONTH" | "YEAR";

type IDate = {
    day: number,
    month: number,
    year: number,
}

const months: Record<number, string> = {
    1: "janeiro",
    2: "fevereiro",
    3: "março",
    4: "abril",
    5: "maio",
    6: "junho",
    7: "julho",
    8: "agosto",
    9: "setembro",
    10: "outubro",
    11: "novembro",
    12: "dezembro",
};
const weeks = [
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sábado",
    "domingo",
];

const props = withDefaults(
    defineProps<{
        multiple?: boolean,
        mode?: IMode,
        modelValue?: string | string[]
    }>(),
    {
        multiple: false,
        mode: "DAY",
        modelValue: ''
    }
);

const emit = defineEmits<{
    "update:modelValue": [val: string | string[]];
    "update:mode": [val: IMode]
}>();

const showYears = ref<number[]>([]);
const modeScreen = ref<IMode>('DAY');
const selected = ref<IDate[]>([]);
const atualMonth = ref(0);
const atualYear = ref(0);


const day = computed(() => !props.multiple
    ? Number((props.modelValue as string).split("-")[2] || 0)
    : Number(props.modelValue?.[0]?.split("-")[2] || 0));

const month = computed(() => !props.multiple
    ? Number((props.modelValue as string).split("-")[1] || 0)
    : Number(props.modelValue?.[0]?.split("-")[1] || 0));

const year = computed(() => !props.multiple
    ? Number((props.modelValue as string).split("-")[0] || 0)
    : Number(props.modelValue?.[0]?.split("-")[0] || 0));

const day2 = computed(() => props.multiple ? Number(props.modelValue?.[1]?.split("-")[2]) : null);

const month2 = computed(() => props.multiple ? Number(props.modelValue?.[1]?.split("-")[1]) : null);

const year2 = computed(() => props.multiple ? Number(props.modelValue?.[1]?.split("-")[0]) : null);

const today = computed(() => ({
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
}));

const diffInDays = computed(() => {
    if (selected.value.length !== 2) return 0;
    const listOrder = orderListDate(selected.value);
    const diffTime = Math.abs(listOrder[1].getTime() - listOrder[0].getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
});

const listYears = computed(() => separarArray(showYears.value, 3));

const monthsYear = computed<number[][]>(() => {
    const all = Object.keys(new Array(12).fill(null)).map(
        (el) => Number(el) + 1
    );
    return separarArray(all, 3);
});

const monthDays = computed(() => {
    const atualMonthLocal = atualMonth.value - 1;
    const atualYearLocal = atualYear.value;
    const fistDayMonth = new Date(atualYearLocal, atualMonthLocal, 1).getDay();
    const daysInMonth = new Date(atualYearLocal, atualMonthLocal + 1, 0).getDate();
    const allDays = Object.keys(new Array(daysInMonth).fill(null)).map(
        (el) => ({
            day: Number(el) + 1,
            month: atualMonth.value,
            year: atualYearLocal,
        })
    );
    if (fistDayMonth > 0) {
        let daysInMonth = new Date(atualYearLocal, atualMonthLocal, 0).getDate();
        const completeDays = Object.values(
            new Array(fistDayMonth).fill("0")
        ).map(() => ({
            day: daysInMonth--,
            month: atualMonth.value === 1 ? 12 : atualMonth.value - 1,
            year: atualMonth.value === 1 ? atualYearLocal - 1 : atualYearLocal,
        }));
        completeDays.reverse();
        allDays.unshift(...completeDays);
    }
    if (allDays.length < 42) {
        const complete = 42 - allDays.length;
        const completeDays = Object.keys(new Array(complete).fill(null)).map(
            (el) => ({
                day: Number(el) + 1,
                month: atualMonth.value === 12 ? 1 : atualMonth.value + 1,
                year: atualMonth.value === 12 ? atualYearLocal + 1 : atualYearLocal,
            })
        );
        allDays.push(...completeDays);
    }
    return separarArray(allDays, allDays.length / 6);
});

watch(() => modeScreen.value, (val) => emit('update:mode', val));

watch(() => props.mode, (val) => modeScreen.value = val);

watch(() => props.modelValue, () => {
    if (props.multiple) {
        if (selected.value.length === 1) {
            selected.value[0] = {
                day: day.value,
                month: month.value,
                year: year.value,
            };
        } else if (selected.value.length === 0) {
            selected.value = [];
        } else {
            selected.value = [
                {
                    day: day.value,
                    month: month.value,
                    year: year.value,
                },
                {
                    day: day2.value!,
                    month: month2.value!,
                    year: year2.value!,
                },
            ];
        }
    } else {
        selected.value = [
            {
                day: day.value,
                month: month.value,
                year: year.value,
            }
        ];
    }
    atualMonth.value = month.value || today.value.month;
    atualYear.value = year.value || today.value.year;
    showYears.value = Object.keys(new Array(12).fill(null)).map(
        (el) => Number(el) + atualYear.value
    );
}, {
    immediate: true
})

const changeMode = () => {
    if (modeScreen.value === "DAY") {
        modeScreen.value = "MONTH";
    } else {
        modeScreen.value = "YEAR";
    }
}

const orderListDate = (dateList: IDate[]) => {
    const newList = [...dateList].map(
        (dt) => new Date(formateToSend(dt) + "T00:00")
    );
    if (newList[0] > newList[1]) {
        return newList.reverse();
    }
    return newList;
}

const interdates = (date: IDate) => {
    if (props.multiple && selected.value.length === 2) {
        const selects = orderListDate(selected.value);
        const dateParse = new Date(formateToSend(date) + "T00:00");
        if (selects[0].getTime() - dateParse.getTime() <= 0 && selects[1].getTime() - dateParse.getTime() > 0) {
            return true;
        }
    }
    return false;
}

const matchDate = (date1: IDate, date2: any, multiple = false) => {
    if (multiple) {
        return (
            (date1.day === date2?.[0]?.day &&
                date1.month === date2?.[0]?.month &&
                date1.year === date2?.[0]?.year) ||
            (date1.day === date2?.[1]?.day &&
                date1.month === date2?.[1]?.month &&
                date1.year === date2?.[1]?.year)
        );
    }
    return (
        date1.day === date2.day &&
        date1.month === date2.month &&
        date1.year === date2.year
    );
}

const nextYear = () => {
    const last = showYears.value[11];
    showYears.value = Object.keys(new Array(12).fill(null)).map(
        (el) => Number(el) + last + 1
    );
}

const backYear = () => {
    const last = showYears.value[0];
    const list = Object.keys(new Array(12).fill(null)).map(
        (el) => -Number(el) + last - 1
    );
    list.reverse();
    showYears.value = list;
}

const nextMonth = () => {
    atualYear.value =
        atualMonth.value == 12 ? atualYear.value + 1 : atualYear.value;
    atualMonth.value = atualMonth.value == 12 ? 1 : atualMonth.value + 1;
}
const backMonth = () => {
    atualYear.value =
        atualMonth.value == 1 ? atualYear.value - 1 : atualYear.value;
    atualMonth.value = atualMonth.value == 1 ? 12 : atualMonth.value - 1;
}

const selectDay = (data: IDate) => {
    if (props.multiple) {
        if (selected.value.length === 0) {
            selected.value[0] = data;
        } else if (selected.value.length === 1) {
            selected.value[1] = data;
        } else if (selected.value.length === 2) {
            selected.value = [data];
        }
    } else {
        selected.value[0] = data;
    }

    emit(
        "update:modelValue",
        props.multiple
            ? [...selected.value.map((e) => formateToSend(e))]
            : formateToSend(data)
    );
}

const formateToSend = (data: IDate) => {
    const mou = Number(data.month) < 10 ? `0${data.month}` : `${data.month}`;
    const day = Number(data.day) < 10 ? `0${data.day}` : `${data.day}`;
    return data.year + "-" + mou + "-" + day;
}

const separarArray = (arr: any[], tamanho: number) => {
    var novoArray = [];
    var i = 0;
    while (i < arr.length) {
        novoArray.push(arr.slice(i, i + tamanho));
        i += tamanho;
    }
    return novoArray;
}

</script>

<template>
    <div class="date">
        <template v-if="modeScreen === 'DAY'">
            <div class="card day">
                <div class="header">
                    <p class="title" @click="changeMode">
                        {{ months[atualMonth] }} {{ atualYear }}
                        <PineIcon name="ChevronDown"></PineIcon>
                    </p>
                    <div class="icons">
                        <PineIcon @click="backMonth" name="ChevronLeft"></PineIcon>
                        <PineIcon @click="nextMonth" name="ChevronRight"></PineIcon>
                    </div>
                </div>
                <div class="body">
                    <div class="weeks">
                        <p v-for="week in weeks" :key="week">
                            {{ week[0] }}
                        </p>
                    </div>
                    <div>
                        <div v-for="(weekDays, ind) in monthDays" :key="ind" class="days">
                            <p @click="selectDay(day)" v-for="(day, ind2) in weekDays" :key="ind2 + '' + day" :class="{
            otherMonth: day.month != atualMonth || day.year != atualYear,
            today:
                matchDate(day, today) && !matchDate(day, selected, true),
            selected: matchDate(day, selected, true),
            interdates: interdates(day) && ind2 !== 6,
            'left-interdates':
                ind2 === 5 && !matchDate(weekDays[6], selected, true),
            'small-interdates': diffInDays === 1 && ind2 !== 6,
        }">
                                <span>
                                    {{ day.day }}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-else-if="modeScreen === 'MONTH'">
            <div class="card month">
                <div class="header">
                    <p class="title" @click="changeMode">
                        {{ atualYear }}
                        <PineIcon name="ChevronDown"></PineIcon>
                    </p>
                    <div class="icons">
                        <PineIcon @click="atualYear--" name="ChevronLeft"></PineIcon>
                        <PineIcon @click="atualYear++" name="ChevronRight"></PineIcon>
                    </div>
                </div>
                <div class="body">
                    <div v-for="(line, ind) in monthsYear" :key="ind" class="months">
                        <p v-for="mt in line" :key="mt" @click="(atualMonth = mt), (modeScreen = 'DAY')" :class="{
            selected: matchDate(
                { month: mt, year: atualYear, day: 1 },
                { ...selected[0], day: 1 }
            ),
        }">
                            {{ months[mt].substr(0, 3) }}
                        </p>
                    </div>
                </div>
            </div>
        </template>
        <template v-else-if="modeScreen === 'YEAR'">
            <div class="card year">
                <div class="header">
                    <p class="title" @click="changeMode">
                        {{ showYears[0] }} - {{ showYears[11] }}
                        <PineIcon name="ChevronDown"></PineIcon>
                    </p>
                    <div class="icons">
                        <PineIcon @click="backYear" name="ChevronLeft"></PineIcon>
                        <PineIcon @click="nextYear" name="ChevronRight"></PineIcon>
                    </div>
                </div>
                <div class="body">
                    <div v-for="(line, ind) in listYears" :key="ind" class="year">
                        <p v-for="yr in line" :key="yr" @click="(atualYear = yr), (modeScreen = 'MONTH')" :class="{
            selected: selected[0].year === yr,
        }">
                            {{ yr }}
                        </p>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<style lang="scss">
@mixin header {
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 8px;
        margin-right: 8px;
        margin-top: 8px;

        .icons svg {
            cursor: pointer;
        }

        .title {
            font-weight: bold;
            text-transform: capitalize;
            cursor: pointer;
            display: flex;
            align-items: center;

            svg {
                margin-left: 5px;
            }
        }
    }
}

.date {
    .card {
        height: 280px;
        width: 320px;
        background: #252831;
        padding: 12px;
        border-radius: 8px;

        &.month,
        &.year {
            display: flex;
            flex-direction: column;
        }

        &.day {
            @include header;

            .body {
                margin-top: 20px;

                .weeks {
                    display: flex;
                    justify-content: space-between;

                    p {
                        text-transform: uppercase;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #6c6c6c;
                        height: 32px;
                        width: 32px;
                    }
                }

                .days p.selected.interdates::before {
                    margin-left: 20px;
                }

                .days {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    p {
                        text-transform: uppercase;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        border-radius: 50%;
                        font-weight: 500;
                        font-size: 14px;
                        height: 32px;
                        width: 32px;

                        span {
                            padding-top: 1px;
                            text-transform: uppercase;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            position: absolute;
                            z-index: 2;
                            height: 32px;
                            width: 32px;
                        }

                        &.otherMonth span {
                            color: #6c6c6c;
                        }

                        &.today span {
                            color: #5093fe;
                            background: #ffffff;
                        }

                        &.selected span {
                            background: #5093fe;
                        }

                        &.interdates {
                            position: relative;

                            &::before {
                                content: "";
                                background: #161922;
                                border-radius: 0px;
                                height: 70%;
                                width: 200%;
                                position: absolute;
                                z-index: 1;
                                left: 0;
                            }
                        }

                        &.small-interdates::before {
                            width: 150%;
                        }

                        &.left-interdates::before {
                            margin-left: 15px;
                        }
                    }
                }
            }
        }

        &.month {
            @include header;

            .body {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;

                .months {
                    display: flex;
                    justify-content: space-between;

                    p {
                        text-transform: capitalize;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        border-radius: 30px;
                        font-weight: 500;
                        font-size: 20px;
                        height: 40px;
                        width: 90px;

                        &.selected {
                            background: #5093fe;
                        }
                    }
                }
            }
        }

        &.year {
            @include header;

            .body {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;

                .year {
                    display: flex;
                    justify-content: space-between;

                    p {
                        text-transform: capitalize;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        border-radius: 30px;
                        font-weight: 500;
                        font-size: 20px;
                        height: 40px;
                        width: 90px;

                        &.selected {
                            background: #5093fe;
                        }
                    }
                }
            }
        }
    }
}
</style>