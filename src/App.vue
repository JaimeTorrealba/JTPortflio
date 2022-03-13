<template>
  <div>
    <header>
      <navBar />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <theFooter />
    </footer>
  </div>
</template>
<script>
import navBar from "./components/navBar.vue";
import theFooter from "./components/footer.vue";
export default {
  components: {
    navBar,
    theFooter,
  },
};
</script>
<style src="./assets/styles/global.scss"></style>
