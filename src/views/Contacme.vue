<template>
  <div class="container form-view">
    <section class="section1">
      <CloudTag />
    </section>
    <section class="section2">
      <ContactForm />
    </section>
  </div>
</template>
<script>
import ContactForm from "../components/contacme/ContacForm.vue";
import CloudTag from "../components/contacme/CloudTag.vue";

export default {
  components: {
    ContactForm,
    CloudTag,
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit(event) {
      event.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "contact",
          ...this.form,
        }),
      })
        .then(() => {
          this.isAlert = true;
          this.typeAlert = "success";
          this.alertText =
            "Se ha enviado su consulta, nos pondremos en contacto con usted lo antes posible";
        })
        .catch((error) => {
          this.typeAlert = "error";
          this.isAlert = true;
          this.alertText = "Ha ocurrido un error, intente mas tarde";
          console.error(error);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.form-view {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
<style>
body{
  background-color: var(--black);
}
</style>
