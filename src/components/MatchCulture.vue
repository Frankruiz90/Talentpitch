<template>
  <div class="p-4 pl-[400px] items-center flex">
    <p class="text-left text-xs text-textpurple">Match con la cultura</p>
    <div class="flex items-center w-[50%]">
      <span class="text-sm font-medium text-linegreen ml-4">70%</span>
      <div class="w-2/4 h-3 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-3 bg-linegreen rounded" style="width: 80%"></div>
      </div>
    </div>
    <button
      type="button"
      class="px-2 py-2 h-[40px] text-white bg-primary2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Enviar pitch
    </button>
    <button
      type="button"
      class="px-2 py-2 h-[40px] text-xs flex items-center text-primary2 hover:text-primary2 border border-primary2 hover:primary2 px-3 py-2.5 focus:ring-4 focus:outline-none focus:primary2 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
    >
      <svg
        class="w-[10px] h-[10px] text-gray-800 text-primary2 mr-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 18"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 8h6m-3 3V5m-6-.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
        /></svg>Segruir
    </button>
  </div>
</template>

<script>
export default {
  name: "matchCulture",
};
</script>