<template>
    <div>
        <header>
            <navBar />
        </header>
        <main class="container">
            <router-view v-slot="{ Component }">
                <transition name="">
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>
        <footer>
            <theFooter />
        </footer>
    </div>
</template>
<script>
import navBar from './components/navBar.vue'
import theFooter from './components/footer.vue'
export default {
    components: {
        navBar,
        theFooter,
    },
}
</script>
<style src="./assets/styles/global.scss"></style>
<style src="./assets/styles/customProperties.scss"></style>
<style src="./assets/styles/base.scss"></style>
