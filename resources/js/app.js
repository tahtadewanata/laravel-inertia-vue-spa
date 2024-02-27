import "../css/app.css";
import "./bootstrap";

import "@fortawesome/fontawesome-free/css/all.css";
import { Link, createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, h } from "vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import ImageFallback from "./components/ImageFallback.vue"; // Import komponen ImageFallback

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
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
