<script setup lang="ts">
import { usePine, useSize } from "@/package";
import { TYPE } from "@/package/types/toast";
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import PineTag from "@/package/components/PineTag.vue";
import PineTimePicker from "@/package/components/PineTimePicker.vue";
import PineRadio from "@/package/components/PineRadio.vue";
import PinePagination from "@/package/components/PinePagination.vue";
const { t } = useI18n();

const lista = Array.from({ length: 10 }, (_, i) => `${t('home.option')} ${i + 1}`);
const valueSearch = ref('');
const doc = ref<File | null>(null);

const filterList = computed(() => {
  const reg = new RegExp(valueSearch.value);
  return lista.filter(el => {
    if (!valueSearch.value) return true;
    return reg.test(el)
  })
})

const listDrawer = [
  { "title": "Opt 1", "icon": "Bolt" },
  { "title": "Opt 2 - disabled", "icon": "AcademicCap", "disabled": true },
  { "title": "Opt 3", "icon": "Document" }]

const mockarDoc = () => {
  var filename = "Teste File.txt";

  var myBlob = new Blob(['testeteste'], {
    type: "text/plain;charset=utf-8",
  });

  var fileTeste = new File([myBlob], filename);
  doc.value = fileTeste;
}

const resetToast = ref(true);
const interval = ref<any>(null);
onMounted(() => {
  mockarDoc();
  interval.value = setInterval(() => {
    resetToast.value = false;
    nextTick(() => {
      resetToast.value = true;
    });
  }, 20000)
})
onBeforeUnmount(() => {
  clearInterval(interval.value);
})

const pag = ref(0);

const pine = usePine();
const { breakpointRange, breakpoint, width } = useSize();
</script>


<template>
  <PineContainer class="mt-10 pb-10 home">
    <div class="pine-row">

      <div class="pr-8 pine-col-12" :class="{ 'pine-col-6': breakpointRange.mdAndUp }">
        <b class="primary font-size-small">
          {{ t('home.powered') }}
        </b>
        <h1 style="font-size: 40px; font-weight: 900;" class="mb-8">
          {{ t('home.wellcome1') }} <br v-if="width >= 1290">
          {{ t('home.wellcome2') }}
        </h1>
        <p class="neutral30 mb-8">
          {{ t('home.description') }}
        </p>
        <PineBtn> {{ t('home.browseButton') }}</PineBtn>
      </div>
      <template v-if="breakpoint !== 'small'">
        <div class="d-flex  justify-between pine-col-6" style="gap:15px">
          <div>
            <PineCalendar></PineCalendar>
            <div class="d-flex mt-2 ml-8 imgs">
              <PineAvatar> <img src="@/assets/img/cat.png" alt=""> </PineAvatar>
              <PineAvatar style="margin-left: -14px;"> <img src="@/assets/img/dog.png" alt=""> </PineAvatar>
              <PineAvatar style="margin-left: -14px;"> <img src="@/assets/img/pig.png" alt=""> </PineAvatar>
              <PineAvatar style="margin-left: -14px;"> <img src="@/assets/img/roc.png" alt=""> </PineAvatar>
              <PineAvatar color="primary" style="margin-left: -14px;"> <b>+3</b> </PineAvatar>
            </div>
          </div>
          <div class="mt-9">
            <PineCard v-if="width < 1290" width="250" height="340" class="d-flex align-center justify-center">
              {{ t('home.text') }}
            </PineCard>
            <PinePickColor v-else></PinePickColor>
          </div>
        </div>
      </template>

    </div>
    <template v-if="breakpoint !== 'small'">
      <div class="pine-row">
        <div class="pine-col-6"></div>
        <div class="pt-5 pl-5 pine-col-3">
          <PineUpload v-model="doc" style="height: 100px;"></PineUpload>
        </div>
        <div class="d-flex justify-center align-center pine-col-1">
          <PineSwitch disabled class="pt-10 mt-6"></PineSwitch>
        </div>
        <div class="d-flex justify-center align-center pine-col-1">
          <PineCheckbox :modelValue="true" class="pt-6"></PineCheckbox>
        </div>
        <div class="d-flex justify-center align-center pine-col-1">
          <PineSwitch :modelValue="true" class="pt-6"></PineSwitch>
        </div>
      </div>
      <div class="pine-row">

        <div class="pine-col-2"></div>
        <div class="pine-col-4">
          <div class="mx-8" style="margin-top: -70px;">
            <PineTextField :label="t('home.label.autocomplete')" v-model="valueSearch"></PineTextField>
            <PineCard class="fakelist">
              <ul class="list-items" v-if="filterList.length">
                <li v-for="n in filterList">{{ n }}</li>
              </ul>
              <div v-else class="pt-3">
                Não foi encontrado!
              </div>
            </PineCard>
          </div>
        </div>
        <div class="pine-col pt-5">
          <div class="pine-row">
            <div class="mb-8 pine-col-8">
              <PineToast v-if="resetToast" class="mb-0" style="margin-left: -15px;" :toast="{
                id: 99999999,
                duration: 20000,
                type: TYPE.SUCCESS,
                content: t('home.toast.content'),
                title: t(`home.toast.title`),
              }"></PineToast>
            </div>
            <div class="d-flex justify-center align-center pine-col-4 mb-8">
              <PineBtn type="outline">{{ t('home.button') }}</PineBtn>
            </div>
            <div class="pine-col-5 d-flex align-center justify-center pt-8" v-if="!breakpointRange.mdAndDown">
              <PineTextField :label="t('home.label.textfield')"></PineTextField>
            </div>
            <div class="d-flex align-center justify-center pine-col-5" style="gap:15px" v-else>
              <PineIcon name="User" color="primary" :size="50"></PineIcon>
              <PineIcon name="Sun" color="primary" :size="50"></PineIcon>
            </div>
            <div class="pine-col-7 pl-5">
              <PineCard class="d-flex">
                <div class="mr-2 d-flex align-center justify-center rounded"
                  style="width: 50px; height: 50px; background-color: #4d91fe80">
                  <img src="@/assets/img/planeja.svg" width="28" alt="">
                </div>
                <div class="d-flex flex-column w-100">
                  <div class="d-flex justify-between">
                    <p class="font-weight-bold">{{ t('home.planeja.name') }}</p>
                    <p class="font-weight-bold error">{{ t('home.planeja.value') }}</p>
                  </div>
                  <div class="d-flex justify-between mt-3">
                    <p class="font-weight-light font-size-small neutral30">{{ t('home.planeja.type') }}</p>
                    <p class="font-weight-light font-size-small neutral30">{{ t('home.planeja.date') }}</p>
                  </div>
                </div>

              </PineCard>
            </div>
          </div>

        </div>
      </div>
    </template>

    <PineCarousel v-else :total-items="5" class="mt-10" v-slot="{ current }" :cycle="3000">
      <PineCarouselItem style="height: 300px;" class="d-flex justify-center align-center" v-show="current === 0">
        <PineCalendar></PineCalendar>
      </PineCarouselItem>
      <PineCarouselItem style="height: 300px; " class="d-flex justify-center align-center" v-show="current === 1">
        <div class="pine-row">
          <div class="d-flex imgs justify-center pine-col-12 mb-5">
            <PineAvatar> <img src="@/assets/img/cat.png" alt=""> </PineAvatar>
            <PineAvatar style="margin-left: -14px;"> <img src="@/assets/img/dog.png" alt=""> </PineAvatar>
            <PineAvatar style="margin-left: -14px;"> <img src="@/assets/img/pig.png" alt=""> </PineAvatar>
            <PineAvatar style="margin-left: -14px;"> <img src="@/assets/img/roc.png" alt=""> </PineAvatar>
            <PineAvatar color="primary" style="margin-left: -14px;"> <b>+3</b> </PineAvatar>
          </div>
          <div class="d-flex justify-center align-center pine-col-4 pl-5">
            <PineSwitch disabled class=""></PineSwitch>
          </div>
          <div class="d-flex justify-center align-center pine-col-4">
            <PineCheckbox :modelValue="true" class=""></PineCheckbox>
          </div>
          <div class="d-flex justify-center align-center pine-col-4 pr-5">
            <PineSwitch :modelValue="true" class=""></PineSwitch>
          </div>
          <div class="d-flex justify-center align-center pine-col-12 mt-8">
            <PineBtn type="outline">{{ t('home.button') }}</PineBtn>
          </div>

        </div>
      </PineCarouselItem>
      <PineCarouselItem style="height: 300px;" class="d-flex justify-center align-center" v-show="current === 2">
        <PinePickColor :size="260"></PinePickColor>
      </PineCarouselItem>
      <PineCarouselItem style="height: 300px;" class="d-flex flex-column justify-center align-center"
        v-show="current === 3">

        <PineToast v-if="resetToast" class="mb-5" :toast="{
          id: 99999999,
          duration: 20000,
          type: TYPE.SUCCESS,
          content: t('home.toast.content'),
          title: t(`home.toast.titleShort`),
        }"></PineToast>
        <PineCard class="d-flex">
          <div class="mr-2 d-flex align-center justify-center rounded"
            style="width: 50px; height: 50px; background-color: #4d91fe80">
            <img src="@/assets/img/planeja.svg" width="28" alt="">
          </div>
          <div class="d-flex flex-column w-100">
            <div class="d-flex justify-between">
              <p class="font-weight-bold">{{ t('home.planeja.name') }}</p>
              <p class="font-weight-bold error">{{ t('home.planeja.value') }}</p>
            </div>
            <div class="d-flex justify-between mt-3">
              <p class="font-weight-light font-size-small neutral30">{{ t('home.planeja.type') }}</p>
              <p class="font-weight-light font-size-small neutral30">{{ t('home.planeja.date') }}</p>
            </div>
          </div>

        </PineCard>
      </PineCarouselItem>
      <PineCarouselItem style="height: 300px;" class="d-flex justify-center align-center" v-show="current === 4">
        <div class="pt-2">
          <PineTextField :label="t('home.label.autocomplete')" v-model="valueSearch"></PineTextField>
          <PineCard class="fakelist">
            <ul class="list-items" v-if="filterList.length">
              <li v-for="n in filterList">{{ n }}</li>
            </ul>
            <div v-else class="pt-3">
              Não foi encontrado!
            </div>
          </PineCard>
        </div>
      </PineCarouselItem>
    </PineCarousel>

    <PineCard class="my-10 d-flex justify-around py-10" :height="breakpointRange.smAndDown ? 'auto' : '190px'"
      :class="{ 'flex-column': breakpointRange.smAndDown }"
      :style="{ gap: breakpointRange.smAndDown ? '30px' : undefined }">
      <div class="d-flex flex-column align-center">
        <img src="@/assets/img/git.svg" alt="" class="mb-6">
        <h3 class="mb-2">{{ t('home.details.free.title') }}</h3>
        <p>{{ t('home.details.free.text') }} <span class="primary">{{ t('home.details.free.text2') }}</span></p>
      </div>
      <div class="d-flex flex-column align-center">
        <img src="@/assets/img/responsive.svg" alt="" class="mb-8">
        <h3 class="mb-2">{{ t('home.details.responsive.title') }}</h3>
        <p><b>{{ t('home.details.responsive.text') }}</b> {{ t('home.details.responsive.text2') }}</p>
      </div>
      <div class="d-flex flex-column align-center">
        <img src="@/assets/img/modern.svg" alt="" class="mb-7">
        <h3 class="mb-2">{{ t('home.details.modern.title') }}</h3>
        <div class="d-flex align-center">
          <p class="mr-2">{{ t('home.details.modern.text') }} <span class="primary">{{ t('home.details.modern.text2')
              }}</span> {{ t('home.details.modern.text3') }} <span class="primary">{{ t('home.details.modern.text4') }}
            </span></p>
          <PineTag :text="t('home.details.modern.tag')"></PineTag>
        </div>
      </div>
      <div class="d-flex flex-column align-center">
        <img src="@/assets/img/lightweight.svg" alt="" class="mb-8">
        <h3 class="mb-2">{{ t('home.details.lightweight.title') }}</h3>
        <p>{{ t('home.details.lightweight.text') }}</p>
      </div>
    </PineCard>
    <div class="mt-10">
      <h1 class="mb-10">UI Kit Features</h1>
      <div class="d-flex overflow-auto pb-5" style="gap:20px">
        <PineCard style="min-width: 320px;" height="370">
          <PineTimePicker></PineTimePicker>
        </PineCard>
        <PineCard style="min-width: 320px;" height="370">
          <PineDrawerModel style="background-color: #161922" :itens="(listDrawer as any)" selectedColor="#252831"
            :last-option="{ 'title': 'opt 3', 'icon': 'Trash', color: 'error' }">
            <template #title>
              <b>
                Pine Ui
              </b>
            </template>
          </PineDrawerModel>
        </PineCard>
        <PineCard style="min-width: 320px;" class="d-flex flex-column align-center justify-around" height="370">
          <PineSwitch></PineSwitch>
          <PineCheckbox backgroundColor="background"></PineCheckbox>
          <PineRadio value="teste" modelValue="" backgroundColor="background"></PineRadio>
          <PinePagination :model-value="2" :total-pages="15"></PinePagination>
        </PineCard>
        <PineCard style="min-width: 320px;" height="370">
          <PineUpload style="height: 100%;"></PineUpload>
        </PineCard>
      </div>
    </div>
  </PineContainer>
</template>

<style scoped lang="scss">
.fakelist {
  margin-top: -15px;
  margin-left: 2px;
  margin-right: 2px;
}

.list-items {
  list-style: none;
  padding-left: 0;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  max-height: 240px;
  overflow-y: auto;
  margin: 0;

  li {
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 6px;
    text-align: start;
    cursor: pointer;
  }
}

.home {
  max-width: 1540px;
  overflow: auto;
}
</style>
