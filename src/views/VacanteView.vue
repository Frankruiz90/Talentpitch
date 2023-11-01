<template>
  <div>
    <h4 class="text-primary1 font-semibold text-2xl text-left mb-3">
      Publicadas recientemente
    </h4>
    <MyCarousel v-if="info" />
    <h4 class="text-primary1 font-semibold text-2xl text-left mb-3">
      Publicadas recientemente
    </h4>
    <MyCarousel v-if="info" />
  </div>
</template>

<script>
// @ is an alias to /src
import MyCarousel from "@/components/MyCarousel.vue";
import axiosClient from "../utils/axios";
// import { ref } from 'vue'
export default {
  name: "VacanteView",
  components: {
    MyCarousel,
  },
  data: () => ({
    images: [
      "https://picsum.photos/id/237/1024/800",
      "https://picsum.photos/id/238/1024/800",
      "https://picsum.photos/id/239/1024/800",
    ],
    info: [],
  }),
  methods: {
    getData: function () {
      try {
        axiosClient.get().then((response) => {
          this.info = response;
          const parsed = JSON.stringify(this.info.data.data);
          localStorage.setItem("info", parsed);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  beforeMount() {
    this.getData();
  },
};
</script>
