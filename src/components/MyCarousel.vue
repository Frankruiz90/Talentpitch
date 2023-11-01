

<template>
  <div class="relative slide h-[425px]">
    <div class="carousel-inner relative overflow-hidden rounded w-full">
      <div
        v-for="(info, i) in infoCard"
        :id="`slide-${i}`"
        :key="i"
        :class="`${active === i ? 'active' : 'left-full'}`"
        class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out"
      >
        <!-- <img class="block w-full" :src="img" alt="First slide" /> -->
        <CardCarousel :infoCard="info"/>
        <button
          id="data-carousel-prev"
          type="button"
          class="absolute bg-blue-100 top-0 left-0 z-30 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none"
          v-on:click="previus(i)"
        >
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="hidden">Previous</span>
          </span>
        </button>
        <button
          id="data-carousel-next"
          type="button"
          class="bg-blue-100 absolute top-0 right-0 z-30 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none"
          v-on:click="next(i)"
        >
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script >
import CardCarousel from './CardCarousel.vue';
export default {
  name: "MyCarousel",

  data: () => ({

    active: 0,
    infoCard:[]
  }),
  components: {
    CardCarousel
  },
  props: {
   
  },
  
  mounted() {
    this.getDataCard();
  },
  methods: {
    getDataCard: function( ) {
        if(localStorage.getItem('info')) {
            this.infoCard = JSON.parse(localStorage.getItem('info'))
        }
    },
    previus(i) {
      if (i == 0) {
        i = this.infoCard.length;
      }
      this.active = i - 1;
    },
    next(i) {
      if (i === this.infoCard.length - 1) {
        this.active = 0;
      } else {
        this.active = i + 1;
      }
    },
  },
};
</script>

<style>
.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
</style>