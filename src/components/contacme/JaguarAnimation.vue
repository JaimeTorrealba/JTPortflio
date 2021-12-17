<template>
  <div class="position-jaguar" v-if="isLargeScreen">
    <div class="jaguarSprites"></div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { useMediaQuery } from "@vueuse/core";
import { onMounted } from "vue";

export default {
  setup() {
    const isLargeScreen = useMediaQuery("(min-width: 780px)");
    if (isLargeScreen) {
      setTimeout(() => {
           let dragon = gsap.timeline({ repeat: -1 });
          dragon.to(".position-jaguar", {
            duration: 4,
            x: "110vw",
            y: 0,
            ease: "sine.in",
            delay: 2,
          });
      }, 500);
    }
    return { isLargeScreen };
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.jaguarSprites {
  width: 165px;
  height: 200px;
  position: relative;
  left: -170px;
  background-image: url("https://assets.codepen.io/4698468/jaguar.png");
  background-repeat: no-repeat;
  background-position: center center;
  animation: move 0.8s steps(12) infinite;
}
@keyframes move {
  from {
    background-position: 4% center;
  }
  to {
    background-position-x: -2230px;
  }
}
.position-jaguar {
  position: fixed;
  bottom: -80px;
  left: 0;
}
</style>
