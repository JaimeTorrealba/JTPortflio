<template>
  <Form
    name="contactMe"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <textTitle text="Contact Form" />
    <div class="form">
      <input type="hidden" name="form-name" value="contactMe" />
      <div class="margin-inputs">
        <label>
          Nombre:
          <Field id="name" name="name" type="text" :rules="nameRule" />
        </label>
      </div>
      <ErrorMessage name="name" />
      <div class="margin-inputs">
        <label>
          Email:
          <Field id="email" name="email" type="email" :rules="emailRule" />
        </label>
      </div>
      <ErrorMessage name="email" />
      <div class="margin-inputs">
        <label>
          Mensaje:
          <Field
            id="message"
            name="message"
            type="text"
            as="textarea"
            :rules="messageRule"
          />
        </label>
      </div>
      <ErrorMessage name="message" />
      <button type="submit" class="submit-button">Send message</button>
    </div>
  </Form>
</template>
<script>
import textTitle from "../common/Title.vue";

import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  components: {
    textTitle,
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      emailRule: yup.string().required().email(),
      nameRule: yup.string().required(),
      messageRule: yup.string().required(),
    };
  },
};
</script>
<style lang="scss" scoped>
form {
  padding: var(--extralarge) var(--large);
  border-radius: 25px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 31px 31px 62px #9f9f9f, -31px -31px 62px #ffffff;
  border-radius: 54% 6% 77% 23% / 5% 91% 9% 95%;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: var(--normal);
}
.submit-button {
  margin: var(--large) 0 0 0;
  border: none;
  border-radius: var(--radiusbutton);
  padding: var(--small);
  background: linear-gradient(145deg, #f0f0f0, var(--gray));
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
.margin-inputs {
  margin: var(--normal) 0;
}
input,
textarea {
  outline: none;
  outline-offset: none;
  padding: var(--small);
  margin: var(--small);
  border: 0.2px solid gray;
  border-radius: var(--radiusinput);
  background: var(--white);
  box-shadow: 25px 25px 51px #bcbcbc, -25px -25px 51px #ffffff;
  display: block;
}
</style>
