<script>
import ContactForm from '../components/contacme/ContacForm.vue'
import ContactInformation from '../components/contacme/ContactInformation.vue'
import JaguarAnimation from '../components/contacme/JaguarAnimation.vue'
import HeroLayoutVue from '../components/common/HeroLayout.vue'
import Title from '../components/common/Title.vue'

export default {
    components: {
        ContactForm,
        JaguarAnimation,
        ContactInformation,
        HeroLayoutVue,
        Title,
    },
}
</script>
<template>
    <div class="contact-section">
        <section class="contactWrapper">
            <HeroLayoutVue class="top">
                <template #Title> <Title text="Get in touch" /> </template>
                <template #Text>
                    <p>
                        Hi I'm Jaime, I'm not the best front-end developer, but I love
                        what I do and I am improving every day.
                    </p>
                    <p>
                        Please feel free if you want to contact me, I will
                        response as soon as possible.
                    </p>
                    <p>
                        I am proficient with VueJs (ecosystem),
                        ThreeJs, CSS, GSAP, NuxtJs Figma, front-end stuff and
                        design.
                    </p>
                </template>
            </HeroLayoutVue>
            <ContactInformation class="left" />
            <ContactForm class="center" />
        </section>
    </div>
    <JaguarAnimation />
</template>
<style lang="scss" scoped>
.contact-section {
    display: flex;
    justify-content: center;
    align-items: center;
}
.contactWrapper {
    display: grid;
    padding: var(--small);
    margin: var(--large) 0;
    border-radius: calc(var(--radiuslayout) / 2);
    background-color: var(--backgroundwhite);
    justify-content: center;
    grid-template-areas:
        'top top top'
        'left center center';
    grid-template-columns: 0.8fr 1fr;
    @media screen and (max-width: 900px) {
        width: 80%;     
        grid-template-areas:
            'top top'
            'center center'
            'left left';
            
    }
}
.top {
    grid-area: top;
}
.left {
    grid-area: left;
}
.center {
    grid-area: center;
}
</style>
