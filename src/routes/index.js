import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacme from '../views/Contacme.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/contacme', name: 'contacme', component: Contacme },
        { path: '/about', name: 'About', component: About },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ],
})
export default router
