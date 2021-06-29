export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "paysure-web-nuxt",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
        integrity:
          "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css",
        integrity:
          "sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      }
    ]
  },
  script: [
    {
      src: "https://unpkg.com/bs-stepper/dist/js/bs-stepper.min.js",
      type: "text/javascript"
    },
    {
      src:
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js",
      type: "text/javascript",
      integrity:
        "sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf",
      crossorigin: "anonymous"
    }
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/vendor.min.css",
    "~assets/css/theme.min.css",
    "boxicons/css/boxicons.min.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/toast.js", mode: "client" },
    { src: "plugins/owl.js", ssr: false },
    { src: "plugins/crypto.js", mode: "client" },
    { src: "plugins/vue-js-modal.js", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/dotenv", "@nuxtjs/pwa"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
