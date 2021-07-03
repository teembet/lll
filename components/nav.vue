<template>
  <header
    id="header"
    class="header l-header header-color header-box-shadow-on-scroll header-abs-top  header-show-hide"
  >
    <div class="header-section header-color">
      <div id="logoAndNav" class="container">
        <nav class="js-mega-menu navbar navbar-light navbar-expand-lg">
          <nuxt-link class="navbar-brand" to="/" aria-label="Front">
            <img src="../assets/images/paysure.png" class="img-fluid" />
          </nuxt-link>

          <button
            type="button"
            class="navbar-toggler btn btn-icon btn-sm rounded-circle"
            aria-label="Toggle navigation"
            aria-expanded="false"
            aria-controls="navBar"
            data-toggle="collapse"
            data-target="#navBar"
          >
            <span class="navbar-toggler-default">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z"
                  fill="#041644"
                />
              </svg>
            </span>
            <span class="navbar-toggler-toggled">
              <svg
                width="14"
                height="14"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"
                />
              </svg>
            </span>
          </button>

          <div id="navBar" class="collapse navbar-collapse">
            <div class="navbar-body header-abs-top-inner">
              <ul class="navbar-nav">
                <li class="hs-has-mega-menu navbar-nav-item">
                  <a
                    id="homeMegaMenu"
                    class="hs-mega-menu-invoker nav-link"
                    href="/#services"
                    activeclass="active"
                  >
                    Services
                  </a>
                </li>
                <li class="hs-has-mega-menu navbar-nav-item">
                  <a
                    id="homeMegaMenu"
                    class="hs-mega-menu-invoker nav-link"
                    href="/#company"
                  >
                    Company
                  </a>
                </li>

                <li class="hs-has-mega-menu navbar-nav-item">
                  <a
                    id="homeMegaMenu"
                    class="hs-mega-menu-invoker nav-link"
                    href="#becomeAgent"
                  >
                    Become an Agent
                  </a>
                </li>

                <li class="hs-has-mega-menu navbar-nav-item">
                  <a
                    id="homeMegaMenu"
                    class="hs-mega-menu-invoker nav-link"
                    href="/#contact"
                  >
                    Contact
                  </a>
                </li>
                <div></div>
                <li class="hs-has-mega-menu navbar-nav-item">
                  <nuxt-link
                    id="homeMegaMenu"
                    class="hs-mega-menu-invoker nav-link"
                    to="/login"
                  >
                    Login
                  </nuxt-link>
                </li>
                <li class="hs-has-mega-menu navbar-nav-item">
                  <nuxt-link
                    id="homeMegaMenu"
                    class="hs-mega-menu-invoker btn-signup"
                    to="/register"
                    tag="button"
                  >
                    Create Account
                  </nuxt-link>
                </li>

                <li class="hs-has-mega-menu navbar-nav-item">
                  <div class="container-d">
                    <label class="toggle">
                      <input
                        type="checkbox"
                        @change="changeTheme()"
                        id="checkbox"
                      />
                      <span class="slider round material-icons"></span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      menuColor: false,
      scrollY: 0
    };
  },
  methods: {
    showMenu() {
      const toggle = document.getElementById("nav-toggle");
      const nav = document.getElementById("nav-menu");

      // Validate that variables exist
      if (toggle && nav) {
        // We add the show-menu class to the div tag with the nav__menu class
        nav.classList.toggle("show-menu");
      }
    },
    linkAction() {
      // const a = document.querySelectorAll('.nav__link');
      const navMenu = document.getElementById("nav-menu");
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove("show-menu");
      // a.forEach(n => n.addEventListener('click',this.linkAction ));
    },
    scrollHeader() {
      // this.scrollY = window.pageYOffset;
      const nav = document.getElementById("header");
      // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
      if (this.scrollY >= 70) {
        nav.classList.add("scroll-header");
      } else nav.classList.remove("scroll-header");
    },
    changeTheme() {
      const darkTheme = "dark-theme";
      const isChecked = document.getElementById("checkbox").checked;
      const getCurrentTheme = () =>
        document.body.classList.contains(darkTheme) ? "dark" : "light";
      if (isChecked) {
        document.body.classList.add(darkTheme);
      } else if (!isChecked) {
        document.body.classList.remove(darkTheme);
      }

      localStorage.setItem("selected-theme", getCurrentTheme());
    },
    checkTheme() {
      const darkTheme = "dark-theme";
      const selectedTheme = localStorage.getItem("selected-theme");

      if (selectedTheme == "dark") {
        document.body.classList.add(darkTheme);
        document.getElementById("checkbox").checked = true;
      } else if (selectedTheme == "light") {
        document.body.classList.remove(darkTheme);
        document.getElementById("checkbox").checked = false;
      }
    }
  },
  mounted() {
    this.checkTheme();
  },
  created() {
    // window.addEventListener("scroll", this.scrollHeader);
    // // window.addEventListener('scroll', this.scrollActive);
    // this.showMenu('nav-toggle','nav-menu');
    // window.addEventListener('scroll', this.scrollTop)
  },
  destroyed() {
    // window.removeEventListener("scroll", this.scrollHeader);
    // window.removeEventListener('scroll', this.scrollActive);
    // // this.a.forEach(n => n.addEventListener('click', this.linkAction));
    // this.showMenu('nav-toggle','nav-menu');
    // window.removeEventListener('scroll', this.scrollTop)
  }
};
</script>

<style scoped>
.header-color {
  background-color: var(--body-color) !important;
}

.navbar {
  padding: 0;
}
.l-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
}
.nav-link {
  color: var(--text-color) !important;

  margin-left: 20px;
  transition: 0.3s;
  font-size: var(--smaller-font-size);
  font-weight: var(--font-semi-bold);
  cursor: pointer;
}

.nav-link:hover {
  color: darkblue !important;
}

.active {
  color: darkblue !important;
}

.navbar-toggler {
  background-color: var(--body-color);
}

.btn-icon {
  font-size: 1.5em !important;
  margin: 5px;
  color: var(--text-color);
}

hr {
  border-top: 0.0625rem solid #000;
}

.blink_me {
  animation: blinker 2s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
path {
  fill: var(--text-color);
}
.btn:focus {
  outline: none !important;
  box-shadow: none !important;
}
.btn-signup {
  padding: 10px 10px !important;
  background-color: var(--primary-color);
  color: var(--white-color) !important;
  border-radius: 4px;
  width: 200px;
  font-size: var(--smaller-font-size);
  cursor: pointer;
  -moz-transition: box-shadow 1s;
  -o-transition: box-shadow 1s;
  -webkit-transition: box-shadow 1s;
  transition: box-shadow 1s;
}
.btn-signup:hover {
  color: #fff;
  box-shadow: 0 8px 7px #999;
}
.nav__item {
  margin-bottom: var(--mb-2);
}
.nav__link,
.nav__logo,
.nav__toggle {
  color: var(--text-color);
}
.nav__logo:hover {
  color: var(--secondary-color);
}
.nav__link {
  transition: 0.3s;
  font-size: var(--smaller-font-size);
  font-weight: var(--font-medium);
}
.nav__link:hover {
  color: var(--secondary-color);
}
.nav__toggle {
  font-size: 1.3rem;
  cursor: pointer;
}
/* Show menu */
.show-menu {
  top: var(--header-height);
}
.container-d {
  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.2s;
}
.toggle {
  margin-top: 0.5rem;
  position: relative;
  width: 2.6rem;
  height: 0.6rem;
  border-radius: 1.5rem;
}
.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}
.toggle .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.38);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.navbar-brand,
.navbar-brand > img {
  width: 7.5rem !important;
}
.toggle .slider:before {
  position: absolute;
  content: "wb_sunny";
  font-size: 1rem;
  text-align: center;
  color: var(--color-orange-regular);
  padding: 0.3rem;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
  background: white;
  -webkit-transition: 0.4s;
  transition: all 0.4s;
  z-index: 2;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}
.toggle input:checked + .slider {
  background-color: var(--secondary-color);
}
.toggle input:checked + .slider:before {
  transform: translate(1.6rem, -50%);
  background-color: var(--primary-color);
  content: "brightness_2";
}
.toggle .slider.round {
  border-radius: 1.5rem;
}
.toggle .slider.round:before {
  border-radius: 50%;
}
.change-theme {
  position: absolute;
  right: 1rem;
  top: 1.8rem;
  color: var(--text-color);
  font-size: 1rem;
  cursor: pointer;
}
.navbar-nav-item {
  margin-left: 15px;
}
.navbar-light .navbar-toggler {
  border-color: var(--text-color);
}
.btn svg {
  color: var(--text-color);
}
/* .navbar-toggler .navbar-toggler-default {
   background-color:var(--text-color) ;
} */
@media screen and (max-width: 992px) {
  .navbar-nav-item {
    margin-left: 0px;
    margin-bottom: 20px !important;
    display: flex !important;
    justify-content: center !important;
  }
  .container-d {
    margin-top: 10px;
  }
}
</style>
