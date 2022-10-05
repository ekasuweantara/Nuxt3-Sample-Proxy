// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  imports: {
    dirs: ['composables', 'composables/**/index.ts'],
  },
  modules: ["@vueuse/nuxt", "nuxt-proxy"],
  proxy: {
    options: [
      {
        target: "https://jsonplaceholder.typicode.com",
        changeOrigin: true,
        pathRewrite: {
          "^/evm/": "/",
        },
        pathFilter: ["/evm/"],
      },
      {
        target: "https://jsonplaceholder.typicode.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api/": "/",
        },
        pathFilter: ["/api/"],
      },
    ],
  },
  runtimeConfig: {
    public: {
      baseURL: 'https://nuxt3-sample-proxy.vercel.app/',
      apiHostPayment: '',
    },
    paymentSecretKey: '',
  },
});
