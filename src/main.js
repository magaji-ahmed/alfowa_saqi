import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'

import HomeView from './views/HomeView.vue'
import FabricsView from './views/FabricsView.vue'
import FabricDetailView from './views/FabricDetailView.vue'
import OrderProcessView from './views/OrderProcessView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import FaqView from '.views/FaqView.vue'

const router = createRouter({
  history: createWebHistory('/alfowa_saqi/'),
  routes: [
    { path: '/', component: HomeView },
    { path: '/fabrics', component: FabricsView },
    { path: '/fabrics/:slug', component: FabricDetailView },
    { path: '/order-process', component: OrderProcessView },
    { path: '/about', component: AboutView },
    { path: '/contact', component: ContactView },
    { path: '/faq', component: FaqView },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

createApp(App).use(router).mount('#app')
