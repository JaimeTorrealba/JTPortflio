<template>
  <form
    name="contactMe"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <Title text="Contact Form" class="titlePosition" :level="2" />
    <div class="form leftSidePosition">
      <input type="hidden" name="form-name" value="contactMe" />
      <div class="margin-inputs">
        <label>
          Name:
          <input name="name" id="name" type="text" v-model="contactForm.name" />
        </label>
        <ValidationErrorFields :validationError="v$.name.$silentErrors" />
      </div>
      <div class="margin-inputs">
        <label>
          Email:
          <input
            name="email"
            id="email"
            type="email"
            v-model="contactForm.email"
          />
        </label>
        <ValidationErrorFields :validationError="v$.email.$silentErrors" />
      </div>
      <div class="margin-inputs">
        <label>
          Phone <span class="optional">(optional)</span>:
          <input name="tlf" id="tlf" type="text" v-model="contactForm.tlf" />
        </label>
      </div>
    </div>
    <div class="form rightSidePosition">
      <div class="margin-inputs">
        <label>
          Message:
          <textarea
            name="message"
            id="message"
            cols="20"
            rows="10"
            v-model="contactForm.message"
            class="textArea"
          ></textarea>
        </label>
        <ValidationErrorFields :validationError="v$.message.$silentErrors" />
      </div>
    </div>
    <baseButton
      type="submit"
      :disabled="v$.$invalid"
      :isDisabled="v$.$invalid"
      text="Send message"
      variant="success"
      class="submitButtonPosition"
    />
  </form>
</template>
<script>
import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

import Title from "../common/Title.vue";
import ValidationErrorFields from "../common/ValidationErrorFields.vue";
import baseButton from "../common/BaseButton.vue";
export default {
  components: {
    Title,
    ValidationErrorFields,
    baseButton,
  },
  setup() {
    const contactForm = reactive({
      name: "",
      email: "",
      message: "",
      tlf: "",
    });
    const rules = {
      name: { required },
      email: { required, email },
      message: { required },
    };

    const v$ = useVuelidate(rules, contactForm);

    return { contactForm, v$ };
  },
};
</script>
<style lang="scss" scoped>
form {
  padding: var(--extralarge) var(--large);
  background-color: var(--gray);
  border-radius: var(--radiuslayout);
  display: grid;
  grid-template-areas:
    "title title"
    "leftSide rightSide"
    "submitButton submitButton";
  @media screen and (max-width: 1200px) {
    grid-template-areas:
      "title title"
      "leftSide leftSide"
      "rightSide rightSide"
      "submitButton submitButton";
  }
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--normal);
}

.margin-inputs {
  margin: var(--normal) 0;
}
input,
textarea {
  outline: none;
  outline-offset: none;
  padding: var(--normal);
  margin: var(--small);
  border: 0.2px solid gray;
  border-radius: var(--radiusinput);
  background: var(--white);
  display: block;
}
.textArea {
  height: 100%;
  width: 100%;
}
.optional {
  font-size: calc(var(--small) * 1.75);
}
.titlePosition {
  grid-area: title;
}
.leftSidePosition {
  grid-area: leftSide;
}
.rightSidePosition {
  grid-area: rightSide;
}
.submitButtonPosition {
  grid-area: submitButton;
  margin: 0 auto;
}
</style>
