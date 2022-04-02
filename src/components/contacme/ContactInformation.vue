<template>
    <div class="contact-info">
        <Title text="You can also contact me for" :level="3" />
        <div class="flex buttons">
            <ImgButton v-for="item in links" :key="item.name" :address="item.href">
                <template #Title>
                    <Title :text="item.name" :level="3" />
                </template>
                <template #Img>
                    <img
                        class="img"
                        :src="item.img"
                        :alt="`${item.name} logo`"
                    />
                </template>
            </ImgButton>
        </div>
    </div>
</template>
<script>
import ImgButton from '../common/ImgButton.vue'
import Title from '../common/Title.vue'

import linkedinImg from '../../assets/img/linkedin.svg'
import githubImg from '../../assets/img/github.svg'
import twitterImg from '../../assets/img/twitter.svg'
import mediumImg from '../../assets/img/medium.svg'
import whatsappImg from '../../assets/img/whatsapp.svg'
import codepenImg from '../../assets/img/codepen.svg'
export default {
    components: {
        ImgButton,
        Title,
    },
    setup() {
        const links = [
            {
                name: 'Linkedin',
                href: 'https://www.linkedin.com/in/jaime-torrealba-cordova/',
                img: linkedinImg,
            },
            {
                name: 'Github',
                href: 'https://github.com/JaimeTorrealba/',
                img: githubImg,
            },
            {
                name: 'Twitter',
                href: 'https://twitter.com/JaimeTorrealbaC/',
                img: twitterImg,
            },
            {
                name: 'Codepen',
                href: 'https://codepen.io/jaime_torrealba"/',
                img: codepenImg,
            },
            {
                name: 'Whatsap',
                href: 'https://wa.me/+56990594384/',
                img: whatsappImg,
            },
            {
                name: 'Medium',
                href: 'https://medium.com/@Jaime_Torrealba/',
                img: mediumImg,
            },
        ]
        return { links }
    },
}
</script>
<style lang="scss" scoped>
.buttons {
    flex-direction: column;
    padding: var(--normal);
}

.img {
    width: 15%;
    padding: 0 0 var(--small);
}
</style>
