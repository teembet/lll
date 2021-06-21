<template>
  <div style="padding:20px">
    <dashboard-nav></dashboard-nav>
    <div id="wrapper">
      <sidenav></sidenav>

      <!-- /#page-content-wrapper -->

      <div id="page-content-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
               <Nuxt />
            </div>
          </div>
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
  name: "dashboard",
  components: {
    dashboardNav,
    sidenav,
    // modal,
  },
  methods: {
    openNav() {
      var aside = document.getElementById("wrapper");
      if (aside) {
        aside.classList.toggle("toggled");
      }
    },
  },
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
  background: var(--body-color);
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
  }

  #wrapper.toggled #page-content-wrapper {
    position: relative;
    margin-right: 0;
  }
}
</style>
