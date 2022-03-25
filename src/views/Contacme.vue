<template>
  <div >
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

</style>
