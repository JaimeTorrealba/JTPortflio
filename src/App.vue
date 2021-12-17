<template>
  <div>
    <header>
      <navBar />
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import navBar from "./components/navBar.vue";
export default {
  components: {
    navBar,
  },
};
</script>
<style src="./assets/styles/global.scss"></style>
