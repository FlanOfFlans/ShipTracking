import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@v/HomeView.vue"
import AboutView from "@v/AboutView.vue"

const routes = [
    { path: "/", component: HomeView },
    { path: "/about", component: AboutView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});