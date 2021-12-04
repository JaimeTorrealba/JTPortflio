<template>
      <form
        method="POST"
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Nombre
          <input />
        </label>
        <label>
          Email
          <input />
        </label>
        <label>
          Mensaje
          <input class="myInput" />
        </label>
        <button class="submit-button">Click aquí</button>
      </form>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>

form {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: var(--extralarge) var(--large);
  border-radius: 25px;
  background: #f7f7f7;
  box-shadow: inset 17px 17px 34px #d2d2d2, inset -17px -17px 34px #ffffff;
}
.submit-button {
  margin: var(--large) 0 0 0;
  border: none;
  border-radius: var(--radiusbutton);
  padding: var(--small);
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: 5px 5px 10px #6e6e6e, -5px -5px 10px #ffffff;
  cursor: pointer;
}
.submit-button:active {
  box-shadow: 2.5px 2.5px 5px #6e6e6e, -2.5px -2.5px 5px #ffffff;
}
.submit-button:focus {
  outline: none;
}
.button:focus-visible {
  outline: max(1px, 0.1em) dashed currentColor;
  outline-offset: -0.25em;
}
input {
  outline: none;
  outline-offset: none;
  padding: var(--small);
  margin: var(--small);
  border: 0.2px solid gray;
  border-radius: var(--radiusinput);
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 25px 25px 51px #bcbcbc, -25px -25px 51px #ffffff;
}
</style>