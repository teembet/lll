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
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
    },
    { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },
    {
      src:
        "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
    },
    {
      src:
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js",
      integrity:
        "sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf",
      crossorigin: "anonymous"
    }
  ],
  // script: [
  //   // {
  //   //   src: "https://unpkg.com/bs-stepper/dist/js/bs-stepper.min.js",
  //   //   type: "text/javascript"
  //   // },
  //   // {
  //   //   src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
  //   //   integrity:
  //   //     "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
  //   //   crossorigin: "anonymous",
  //   //   type: "text/javascript"
  //   // },
  //   {
  //     src:
  //       "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
  //     type: "text/javascript"
  //   }
  //   // {
  //   //   src:
  //   //     "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js",
  //   //   integrity:
  //   //     "sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx",
  //   //   crossorigin: "anonymous",
  //   //   type: "text/javascript"
  //   // }
  // ],

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
    { src: "plugins/vue-js-modal.js", mode: "client" },
    { src: "plugins/jquery.js", mode: "client" },
    { src: "plugins/bootstrap.js", mode: "client" }
  ],
  // js: ["@assets/js/bootstrap.bundle.min.js"],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/dotenv", "@nuxtjs/pwa"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  env: {
    baseUrl:
      process.env.NODE_ENV === "dev"
        ? "http://localhost:3000"
        : "http://52.149.222.131:5009/api/v1/"
  },
  // auth: {
  //   // Options
  // },

  // router: {
  //   middleware: ["auth"]
  // },

  pwa: {
    icon: false // disables the icon module
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
