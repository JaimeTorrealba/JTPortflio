<template>
  <div>
    <header>
      <navBar />
    </header>
    <main>
      <SvgAnimation />
      <router-view v-slot="{ Component }">
        <transition
          name="slide-fade"
          @before-Enter="beforeEnter"
          @enter="onEnter"
          @after-enter="onAfterEnter"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer>
      <theFooter />
    </footer>
  </div>
</template>
<script>
import { gsap } from "gsap";
import navBar from "./components/navBar.vue";
import theFooter from "./components/footer.vue";
import SvgAnimation from "./components/common/SvgTransitionPage.vue";
export default {
  components: {
    navBar,
    theFooter,
    SvgAnimation,
  },
  setup() {
    function beforeEnter(el) {
      document.querySelector(".svgTransitionPage").style.opacity = 0;
      document.querySelector(".svgTransitionPage").style.transform = "scale(0)";
      document.querySelector(".svgTransitionPage").style.zIndex = "100";
      console.log('beforeEnter');
    }
    function onEnter(el, done) {
      gsap.to('.svgTransitionPage', {opacity:1, delay:0.3})
      gsap.to(`.svgTransitionPage`, {
        scale: 2,
        duration: 1.2,
        ease: "power1.out",
        delay:0.6

      });
      gsap.to(`.path`, {
        attr: {
          d: "M300 150C300 232.843 232.843 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0C232.843 0 300 67.1573 300 150ZM15 150C15 224.558 75.4416 285 150 285C224.558 285 285 224.558 285 150C285 75.4416 224.558 15 150 15C75.4416 15 15 75.4416 15 150Z",
        },
        duration: 0.8,
        delay: 1.4,
        ease: "power1.out",
        onComplete: done,
      });
    }
    function onAfterEnter(el) {
      document.querySelector(".svgTransitionPage").style.zIndex = "0";
      console.log('afterEnter');
    }

    return { beforeEnter, onEnter, onAfterEnter };
  },
};
</script>
<style src="./assets/styles/global.scss"></style>
