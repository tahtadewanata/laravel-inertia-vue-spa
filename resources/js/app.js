import "../css/app.css";
import "./bootstrap";

import "@fortawesome/fontawesome-free/css/all.css";
import { Link, createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, h } from "vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import ImageFallback from "./components/ImageFallback.vue"; // Import komponen ImageFallback

import Swiper from "swiper/bundle";
import "animate.css";
import WOW from "wow.js";
import "wow.js/css/libs/animate.css"; // Impor animasi CSS jika diperlukan
import "swiper/css/bundle";

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        // Inisialisasi Swiper jika diperlukan
        const swiper = new Swiper();
        new WOW().init();

        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("inertia-link", Link)
            .component("image-fallback", ImageFallback) // Menambahkan komponen ImageFallback
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        showSpinner: true,
        delay: 1,
        color: "#6875F5",
    },
});
