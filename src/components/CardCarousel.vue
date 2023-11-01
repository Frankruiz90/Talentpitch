<template>
  <div
    class="max-w-sm mx-[auto] bg-white border border-gray-200 rounded-[10px] shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="#">
      <img
        class="rounded-t-[10px] w-full h-[73px]"
        v-bind:src="infoCard.image"
        alt=""
      />
    </a>
    <div class="flex px-5 items-center space-card mt-4">
      <div class="flex items-center">
        <span class="mr-3 text-base"> Experiencia </span>
        <div v-for="i in 5" :key="i" :class="{ 'mr-1': i < 5 }">
          <svg
            class="block h-4 w-4"
            :class="[
              infoCard.level_experience >= i
                ? 'text-textpurple'
                : 'text-gray-300',
            ]"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="p-5">
      <a href="#">
        <h5
          class="mb-2 text-xl text-left font-semi-bold tracking-tight text-primary1 dark:text-white"
        >
          {{ infoCard.name }}
        </h5>
      </a>
      <div>
        <p
          class="text-left bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
        >
          Creado por: {{ infoCard.company_name }}
        </p>
      </div>
      <div class="h-[120px]">
        <p
          class="mb-3 text-oferflow text-left tracking-tighter font-normal text-gray-700 dark:text-gray-400"
        >
          {{ infoCard.description }}
        </p>
      </div>
      <div class="flex space-card items-center mb-4">
        <di class="center-text">
          <p
            class="h-[18px] w-[24px] text-center bg-bgpurple text-white text-xs font-medium mr-2 rounded-full dark:bg-blue-900 dark:text-blue-300"
          >
            {{ infoCard.views_count }}
          </p>
          <p
            class="text-center text-gray-500 text-xs font-medium mr-2 rounded-full dark:bg-blue-900 dark:text-blue-300"
          >
            Vistas
          </p>
        </di>
        <div class="center-text">
          <p
            class="h-[18px] w-[24px] text-center bg-bgpurple text-white text-xs font-medium mr-2 rounded-full dark:bg-blue-900 dark:text-blue-300"
          >
            {{ infoCard.comments_count }}
          </p>
          <p
            class="text-center text-gray-500 text-xs font-medium mr-2 rounded-full dark:bg-blue-900 dark:text-blue-300"
          >
            Comentarios
          </p>
        </div>
        <div class="center-text">
          <p
            class="h-[18px] w-[24px] text-center bg-bgpurple text-white text-xs font-medium mr-2 rounded-full dark:bg-blue-900 dark:text-blue-300"
          >
            {{ infoCard.pitches_count }}
          </p>
          <p
            class="text-center text-gray-500 text-xs font-medium mr-2 rounded-full dark:bg-blue-900 dark:text-blue-300"
          >
            pitches
          </p>
        </div>
      </div>
      <hr />
      <div class="flex">
        <a
          href="#"
          class="mt-4 inline-flex items-center px-[12px] py-[5px] text-sm font-medium text-center text-white bg-primary2 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Aplicar a vacante
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.space-card {
  justify-content: space-between;
}
.center-text {
  text-align: -webkit-center;
}
</style>

<script>
export default {
  name: "CardCarousel",
  data: () => ({}),
  props: {
    infoCard: {},
  },
};
</script>
<style>
.text-oferflow {
  height: 100%;
  overflow: hidden;
}
</style>

