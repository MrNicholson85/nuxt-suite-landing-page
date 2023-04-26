import { dev } from "process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Suite langing page',
            meta: [
                {
                    name: 'description', content: 'Suite landing Page'
                }
            ],
            link: [
                {
                    rel: 'custom-font', href: 'https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700&display=swap',
                },
                {
                    rel: 'init-font', href: '"https://fonts.googleapis.com',
                }
            ]
        }
    }
})
