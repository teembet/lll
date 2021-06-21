<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
.app-divider{
  widows: 100%;
  height: 1px;
  background: #ececec;
  margin: 20px 0;
}
.header-flex{
  display: flex;
  justify-content: space-between;
}
*,
::before,
::after {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

h1,
h2,
h3,
p,
ul {
  margin: 0 !important;
  color: var(--text-color);
  font-family: var(--body-font) !important;
}
ul {
  padding: 0 !important;
  list-style: none !important;
}
a {
  text-decoration: none !important;
  font-family: var(--body-font) !important;
}
img {
  max-width: 100% !important;
  height: auto !important;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.white-bkg {
  background-color: #fff;
}
.formlabel {
  font-size: var(--smaller-font-size);
}
.bold-text {
  font-weight: 600;
}
.small-text {
  font-size: var(--smaller-font-size);
}
.primary-text {
  color: var(--primary-color);
}
button {
  border: none;
}
textarea:focus,
input:focus {
  outline: none !important;
}
*:focus {
  outline: none;
}
.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.grey-text {
  color: #6e6e6e;
}
/* main {
  flex: 1 0 auto;
}
:host {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
} */
/* .container-fluid {
  padding-right: 2rem !important;
  padding-left: 2rem !important;
  margin-right: 0 !important;
  margin-left: 0 !important;
} */
/* main[_ngcontent-c0] {
  flex: 1 0 auto;
}

@media screen and (min-width: 1200px) {
  .fixed-sn,
  main {
    margin-left: 6%;
    margin-right: 6%;
  }
}
@media screen and (min-width: 992px) {
  .fixed-sn,
  .container-fluid,
  .fixed-sn,
  main {
    margin-left: 5%;
    margin-right: 5%;
  }
}

@media screen and (min-width: 600px) {
  .fixed-sn,
  .container-fluid,
  .fixed-sn,
  main {
    margin-left: 2%;
    margin-right: 2%;
  }
}
.fixed-sn,
main {
  padding-top: 5.5rem;
}
.fixed-sn,
main {
  padding-left: 15rem;
} */
body {
  font-family: var(--body-font) !important;
  font-size: var(--normal-font-size);
  background-color: var(--body-color) !important;
  color: var(--text-color) !important;
  line-height: 1.6;
  background-image: url("../assets/images/app-bck.svg");
  background-repeat: repeat;
  background-size: cover;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 20px;
}
body.dark-theme {
  --title-color: #f1f3f2 !important;
  --text-color: #fff !important;
  --body-color: #1d2521 !important;
  --container-color: #27302c !important;
}
:root {
  --header-height: 5rem;
  /*========== Colors ==========*/
  --primary-color: #6500e0;
  --secondary-color: #181830;
  --black-color: #000;
  --text-color: #000;
  --white-color: #ffff;
  --body-color: #ffff;
  /*========== Font and typography ==========*/
  --body-font: "Graphik", sans-serif;
  --biggest-font-size: 2.25rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1rem;
  --normal-font-size: 0.938rem;
    --small-font-size: 0.8rem;
  --smaller-font-size: 0.55rem;
  /*========== Font weight ==========*/
  --font-medium: 500;
  --font-semi-bold: 600;
  /*========== Margenes ==========*/
  --mb-1: 0.5rem;
  --mb-2: 1rem;
  --mb-3: 1.5rem;
  --mb-4: 2rem;
  --mb-5: 2.5rem;
  --mb-6: 6rem;
  /*========== z index ==========*/
  --z-tooltip: 10;
  --z-fixed: 100;
}
@media screen and (min-width: 768px) {
  :root {
    --biggest-font-size: 4rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.8rem;
    --smaller-font-size: 0.69rem;
  }
}
</style>
