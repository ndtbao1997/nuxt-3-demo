// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: false},
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        "@pinia/nuxt",
        [
            '@vee-validate/nuxt',
            {
                autoImports: true,
                componentNames: {
                    Form: 'VeeForm',
                    Field: 'VeeField',
                    FieldArray: 'VeeFieldArray',
                    ErrorMessage: 'VeeErrorMessage',
                },
            },
        ],
    ],
    app: {
        head: {
            title: 'TOMO Shop',
            meta: [
                {
                    name: 'description', content: 'Everything about Nuxt 3'
                }
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'},
                {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'}
            ]
        }
    },
})
