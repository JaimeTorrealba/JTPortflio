<script>
import { gsap } from 'gsap'
import { useMediaQuery } from '@vueuse/core'

export default {
    setup() {
        const isLargeScreen = useMediaQuery('(min-width: 780px)')
        if (isLargeScreen) {
            setTimeout(() => {
                const jaguar = document.querySelector('.jaguarSprites')
                let dragon = gsap.timeline({ repeat: -1 })
                dragon.to('.position-jaguar', {
                    duration: 4,
                    x: '110vw',
                    y: 0,
                    ease: 'sine.in',
                    delay: 8,
                })
                jaguar.addEventListener('mouseenter', function () {
                    dragon.pause()
                })
                jaguar.addEventListener('mouseleave', function () {
                    dragon.resume()
                    jaguar.style.webkitAnimationPlayState = 'running'
                })
                jaguar.addEventListener('click', function () {
                    if (jaguar.style.webkitAnimationPlayState === 'paused') {
                        jaguar.style.webkitAnimationPlayState = 'running'
                    } else {
                        jaguar.style.webkitAnimationPlayState = 'paused'
                    }
                })
            }, 500)
        }

        return { isLargeScreen }
    },
}
</script>
<template>
    <div v-if="isLargeScreen" class="position-jaguar">
        <div class="jaguarSprites"></div>
    </div>
</template>

<style lang="scss" scoped>
.jaguarSprites {
    width: 165px;
    height: 200px;
    position: relative;
    left: -170px;
    background-image: url('https://assets.codepen.io/4698468/jaguar.png');
    background-repeat: no-repeat;
    background-position: center center;
    animation: move 0.8s steps(12) infinite;
    cursor: pointer;
}
@keyframes move {
    from {
        background-position: 4% center;
    }
    to {
        background-position-x: -2230px;
    }
}
.position-jaguar {
    position: fixed;
    bottom: -80px;
    left: 0;
}
</style>
