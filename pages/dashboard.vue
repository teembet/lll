<template>
  <div style="padding:20px" v-if="$nuxt.isOnline">
    <dashboard-nav></dashboard-nav>

    <div id="wrapper">
      <sidenav></sidenav>

      <!-- /#page-content-wrapper -->

      <div id="page-content-wrapper">
        <div class="container-fluid mt-4">
          <div class="row">
            <div class="col-lg-12">
              <Nuxt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="wrapper-body">
      <div class="wrapper">
        <h1>OFFLINE</h1>
        <h4>Please check your internet connection</h4>
        <div class="center">
          <button @click="refresh" class="button btn">RETRY</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dashboardNav from "@/components/dashboardNav";
import sidenav from "@/components/sidenav";
// import modal from "@/components/modal";
export default {
  // middleware: "auth",
  name: "dashboard",
  components: {
    dashboardNav,
    sidenav
    // modal,
  },
  methods: {
    openNav() {
      var aside = document.getElementById("wrapper");
      if (aside) {
        aside.classList.toggle("toggled");
      }
    },
    refresh() {
      console.log("refreshed");
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 5000);
      // this.$nuxt.refresh();
    }
  }
};
</script>

<style scoped>
/*!
 * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

body {
  overflow-x: hidden;
}

/* Toggle Styles */

#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-left: 250px;
}

#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background-color: var(--body-color);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
  width: 250px;
}

#page-content-wrapper {
  width: 100%;
  position: absolute;
  /* background-image: url("../assets/images/dashbkg.svg");
  background-size: cover;
  background-repeat: no-repeat; */
  height: 100%;
  background-color: var(--body-color);

  /* padding: 15px; */
}

#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
}

@media (min-width: 768px) {
  #wrapper {
    padding-left: 250px;
  }

  #wrapper.toggled {
    padding-left: 0;
  }

  #sidebar-wrapper {
    width: 250px;
  }

  #wrapper.toggled #sidebar-wrapper {
    width: 0;
  }

  #page-content-wrapper {
    padding: 20px;
    position: relative;
    /* left: 50px;
    transform: translate(-50px, 50px);
    top: 50px; */
  }

  #wrapper.toggled #page-content-wrapper {
    position: relative;
    margin-right: 0;
  }
}
.wrapper-body {
  width: 100%;
  min-height: 100vh;
  display: relative;
  margin: 0;
  padding: 0;
  background: -webkit-linear-gradient(
    -45deg,
    #183850 0,
    #183850 25%,
    #192c46 50%,
    #22254c 75%,
    #22254c 100%
  );
}
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  align-items: center;
  justify-content: center;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.button {
  display: block;

  padding: 15px 30px;
  background: #22254c;
  color: white;

  letter-spacing: 5px;

  text-decoration: none;
  box-shadow: 0 0 15px #22254c;
}
</style>
