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
                    <input
                        id="name"
                        v-model="contactForm.name"
                        name="name"
                        type="text"
                    />
                </label>
                <ValidationErrorFields
                    :validation-error="v$.name.$silentErrors"
                />
            </div>
            <div class="margin-inputs">
                <label>
                    Email:
                    <input
                        id="email"
                        v-model="contactForm.email"
                        name="email"
                        type="email"
                    />
                </label>
                <ValidationErrorFields
                    :validation-error="v$.email.$silentErrors"
                />
            </div>
            <div class="margin-inputs">
                <label>
                    Phone <span class="optional">(optional)</span>:
                    <input
                        id="tlf"
                        v-model="contactForm.tlf"
                        name="tlf"
                        type="text"
                    />
                </label>
            </div>
        </div>
        <div class="form rightSidePosition">
            <div class="margin-inputs">
                <label>
                    Message:
                    <textarea
                        id="message"
                        v-model="contactForm.message"
                        name="message"
                        cols="10"
                        rows="10"
                        class="textArea"
                    ></textarea>
                </label>
                <ValidationErrorFields
                    :validation-error="v$.message.$silentErrors"
                />
            </div>
        </div>
        <baseButton
            type="submit"
            :disabled="v$.$invalid"
            :is-disabled="v$.$invalid"
            text="Send message"
            variant="success"
            class="submitButtonPosition"
        />
    </form>
</template>
<script>
import { reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

import Title from '../common/Title.vue'
import ValidationErrorFields from '../common/ValidationErrorFields.vue'
import baseButton from '../common/BaseButton.vue'
export default {
    components: {
        Title,
        ValidationErrorFields,
        baseButton,
    },
    setup() {
        const contactForm = reactive({
            name: '',
            email: '',
            message: '',
            tlf: '',
        })
        const rules = {
            name: { required },
            email: { required, email },
            message: { required },
        }

        const v$ = useVuelidate(rules, contactForm)

        return { contactForm, v$ }
    },
}
</script>
<style lang="scss" scoped>
form {
    padding: var(--extralarge) var(--large);
    background: linear-gradient(158deg, var(--gray) 0%,var(--black) 90%);
    border-radius: var(--radiuslayout);
    display: grid;
    grid-template-areas:
        'title title'
        'leftSide rightSide'
        'submitButton submitButton';
    @media screen and (max-width: 1200px) {
        --large:0;
        grid-template-areas:
            'title title'
            'leftSide leftSide'
            'rightSide rightSide'
            'submitButton submitButton';
    }
}
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--normal);
    @media screen and (max-width: 700px) {
        align-items: flex-start;
    }
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
