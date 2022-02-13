<template>
  <div class="container cloud-container">
    <canvas class="tech-circle debug"></canvas>
  </div>
</template>
<script>
import { onMounted, onUnmounted } from "vue";
import Experience from "../../utils/threeJs/contactMe/Experience";
export default {
  setup() {
    onMounted(() => {
      console.clear();
      experience = new Experience(document.querySelector("canvas.tech-circle"));
    });
    onUnmounted(() => {
      experience.destroy();
    });
  },
};
</script>
<style lang="scss" scoped>
.cloud-container {
  min-width: 50vw;
  padding: var(--large) var(--normal);
  background: transparent;
  background-color: var(--gray);
  box-shadow: rgb(190, 203, 216) 12px 12px 24px 0px,
    rgb(243, 249, 255) -12px -12px 24px 0px;
  -webkit-box-shadow: rgb(190, 203, 216) 12px 12px 24px 0px,
    rgb(243, 249, 255) -12px -12px 24px 0px;
  border-radius: 40px;
  -webkit-border-radius: 40px;
}
.tech-circle{
  width: 100%;
  height:100%;
}
</style>
