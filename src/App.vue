<template>
  <NavBar />
  <div class="portada"></div>
  <MatchCulture />
  <div class="pl-[400px]">
    <ul
      class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 mb-[24px] sm:mt-0 border-b"
    >
      <router-link
        class="block mr-2 font-medium py-2 pl-3 pr-4 text-1xl text-textpurple rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        to="/"
        >Home</router-link
      >
      <router-link
        class="block font-medium py-2 pl-3 pr-4 text-1xl text-textpurple rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        to="/vacantes"
        >Vacantes</router-link
      >
    </ul>
    <router-view />
  </div>
  <div class="card-data">
    <CardData />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
.portada {
  background-image: url("../src/assets/imagen/Portada.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 230px;
}
.card-data {
  position: absolute;
  top: 108px;
  left: 20px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CardData from "@/components/CardData.vue";
import MatchCulture from "@/components/MatchCulture.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    CardData,
    MatchCulture,
  },
};
</script>
