<template>
  <div
    class="max-w-[922px] min-w-[453px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex mb-4">
      <div
        class="bg-gray-100 mr-3 rounded-full h-[32px] w-[32px] flex items-center justify-center"
      >
        <img class="" v-bind:src="data.img" alt="" />
        <img class="" src="../assets/imagen/bullseye-pointer.png" alt="" />
      </div>
      <h4 class="mb-2 text-2xl font-bold text-primary1">
        {{ data.title }}
      </h4>
    </div>
    <div class="flex flex-wrap pr-[59px]">
      <div class="mb-4" v-for="(copy, i) in data.info" :key="i">
        <p
          class="text-center w-[68px] bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
        >
          {{ copy }}
        </p>
      </div>
    </div>
    <div v-if="data.idioms" class="flex flex-wrap">
      <div class="w-[30%]" v-for="(idiom, i) in data.idioms" :key="i">
        <p class="mb-1 font-semibold text-darkgray text-left">
          {{ idiom.title }}
        </p>
        <p class="mb-3 font-normal text-ligthgray text-left">
          {{ idiom.level }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCompaniSmall",

  props: {
    data: Object,
  },
};
</script>