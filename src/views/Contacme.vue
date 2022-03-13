<template>
  <div class="container form-view">
    <section class="section1">
    </section>
    <section class="section2">
      <ContactForm />
    </section>
    <JaguarAnimation />
  </div>
</template>
<script>
import ContactForm from "../components/contacme/ContacForm.vue";
// import TechCircle from "../components/contacme/CircleTecnology.vue";
import JaguarAnimation from "../components/contacme/JaguarAnimation.vue";

export default {
  components: {
    ContactForm,
    JaguarAnimation,
  },
};
</script>
<style lang="scss" scoped>
.form-view {
  min-height: 90vh;
  display: grid;
  grid-template-columns: minmax(300px, 1.5fr) 1fr;
  place-items: center;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.75fr;
  }
}
.section1 {
  @media screen and (max-width: 600px) {
    order: 2;
  }
}
.section2 {
  @media screen and (max-width: 600px) {
    order: 1;
  }
}
</style>
