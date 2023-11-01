<template>
  <CardCompani class="mb-4" />
  <div class="flex flex-wrap">
    <CardCompaniSmall class="w-[450px] mr-4 mb-4" :data="card1" />
    <CardCompaniSmall class="w-[450px] mr-4 mb-4" :data="card2" />
    <h4
      class="text-primary1 w-full my-[24px] font-semibold text-2xl text-left mb-3"
    >
      Lo que buscamos en el talento
    </h4>
    <CardCompaniSmall class="w-[450px] mr-4 mb-4" :data="card3" />
    <CardCompaniSmall class="w-[450px] mr-4 mb-4" :data="card4" />
    <CardCompaniSmall class="w-[450px] mr-4 mb-4" :data="card5" />
    <CardCompaniSmall class="w-[450px] mr-4 mb-4" :data="card6" />
    <CardCompaniSmall class="w-full mr-4 mb-4" :data="card7" />
    <h4
      class="text-primary1 w-full my-[34px] font-semibold text-2xl text-left mb-3"
    >
      Lo que ofrecemos en la empresa
    </h4>
    <CardCompaniSmall class="w-[450px] mr-4 mb-4" :data="card8" />
    <CardCompaniSmall class="w-[450px] mr-4 mb-4" :data="card9" />
    <CardCompaniSmall class="w-[450px] mr-4 mb-4" :data="card10" />
    <CardCompaniSmall class="w-[450px] mr-4 mb-4" :data="card11" />
  </div>
</template>

<script>
// @ is an alias to /src
import CardCompani from "@/components/CardCompani.vue";
import CardCompaniSmall from "@/components/CardCompaniSmall.vue";
// import { ref } from 'vue'
export default {
  name: "HomeView",
  components: {
    CardCompani,
    CardCompaniSmall,
  },
  data: () => ({
    card1: {
      img: "../assets/imagen/bullseye-pointer.png",
      title: "Áreas de interés",
      info: ["Copy", "Copy", "Copy"],
    },
    card2: {
      img: "../assets/imagen/bullseye-pointer.png",
      title: "Vacantes sugeridas por AI",
      info: ["Copy", "Copy", "Copy"],
    },
    card3: {
      img: "../assets/imagen/bullseye-pointer.png",
      title: "Conocimientos",
      info: ["Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy"],
    },
    card4: {
      img: "../assets/imagen/bullseye-pointer.png",
      title: "Habilidades",
      info: ["Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy"],
    },
    card5: {
      img: "../assets/imagen/bullseye-pointer.png",
      title: "Herramientas            ",
      info: ["Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy"],
    },
    card6: {
      img: "../assets/imagen/bullseye-pointer.png",
      title: "Idiomas",
      idioms: [
        { title: "Ingles", level: "Avanzado" },
        { title: "Frances", level: "Avanzado" },
        { title: "Frances", level: "Avanzado" },
      ],
    },
    card7: {
      img: "../assets/imagen/bullseye-pointer.png",
      title: "Metodologías",
      info: ["Copy", "Copy", "Copy", "Copy"],
    },
    card8: {
      img: "../assets/imagen/bullseye-pointer.png",
      title: "Beneficios que ofrecemos",
      info: ["Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy"],
    },
    card9: {
      img: "../assets/imagen/bullseye-pointer.png",
      title: "Formas de trabajo que ofrecemos",
      info: ["Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy"],
    },
    card10: {
      img: "../assets/imagen/bullseye-pointer.png",
      title: "Cultura que ofrecemos",
      info: ["Copy", "Copy", "Copy", "Copy"],
    },
    card11: {
      img: "../assets/imagen/bullseye-pointer.png",
      title: "Comunidades",
      info: ["Copy", "Copy", "Copy", "Copy"],
    },
  }),
};
</script>
