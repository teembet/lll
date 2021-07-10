module.exports = {
  apps: [
    {
      name: "paysure-web-nuxt",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
      watch: true,
      env_production: {
        NODE_ENV: "http://52.149.222.131:5009/api/v1/"
      },
      env: {
        NODE_ENV: "http://52.149.222.131:5009/api/v1/"
      }
    }
  ]
};
