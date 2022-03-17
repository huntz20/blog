import {defineNuxtConfig} from 'nuxt3'
import { resolve } from "pathe"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        meta: [
            {name: "google-site-verification", content: "wd6m3gyfHR5kKImVpDO8XRe5gdE6X_tQIc7oM0t_MZM"}
        ],
        link: [
            {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
            {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
            {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Poppins:wght@300;500;600;800&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap'},
        ]
    },
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    },
    css: [
        '@/assets/main.css',
    ],
})
