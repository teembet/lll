<template>
  <div>
    <!-- Navbar-->
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid justify-content-between">
        <!-- Left elements -->
        <div class="d-flex">
          <!-- Brand -->
          <nuxt-link class="navbar-brand" to="/dashboard/overview">
            <img
              src="../assets/images/paysure.png"
              class="img-fluid"
              alt=""
              style="margin-top: 2px;"
            />
          </nuxt-link>

          <!-- Search form -->
        </div>
        <!-- Left elements -->

        <!-- Center elements -->
        <ul class="navbar-nav flex-row d-none d-md-flex col-lg-8 middle">
          <form class="input-group w-auto my-auto d-none d-sm-flex col-lg-12">
            <input
              autocomplete="off"
              type="search"
              class="form-control rounded"
              placeholder="search biller"
              style="min-width: 125px;"
            />
            <span class="input-group-text border-0 d-none d-lg-flex"
              ><i class="fas fa-search"></i
            ></span>
          </form>
        </ul>
        <!-- Center elements -->

        <!-- Right elements -->
        <ul class="navbar-nav flex-row">
          <!-- <li class="nav-item me-3 me-lg-1">
        <a class="nav-link d-sm-flex align-items-sm-center" href="#">
          <img
            src="https://mdbootstrap.com/img/new/avatars/1.jpg"
            class="rounded-circle"
            height="22"
            alt=""
            loading="lazy"
          />
          <strong class="d-none d-sm-block ms-1">John</strong>
        </a>
      </li> -->

          <li class="nav-item  me-3 me-lg-1">
            <a class="nav-link" href="#">
              <img src="../assets/images/bell.svg" class="img-fluid" />
            </a>
          </li>

          <li class="nav-item dropdown me-3 me-lg-1">
            <a
              class="nav-link dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="../assets/images/option.svg" class="img-fluid" />
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">Some news</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Another news</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
          <li
            style="align-self: center;
"
          >
            <i
              class="fa fa-bars close-aside hidden-sm hidden-md hidden-lg"
              @click="openNav()"
              data-close="show-side-navigation1"
            ></i>
          </li>
        </ul>
        <!-- Right elements -->
      </div>
    </nav>
    <!-- Navbar -->

    <!-- Sidebar -->
  </div>
</template>

<script>
export default {
  name: "dashboardNav",

  methods: {
    openNav() {
      var aside = document.getElementById("wrapper");
      if (aside) {
        aside.classList.toggle("toggled");
      }
    }
  }
};
</script>

<style scoped>
.navbar {
  z-index: 1;
  background: var(--body-color);
  margin-top: -20px;
}
body {
  padding-top: 0px !important;
}
.navbar-expand-lg .navbar-nav .nav-link {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.navbar-brand > img {
  width: 7.5rem;
}

.middle {
  display: none !important;
}
@media screen and (min-width: 1200px) {
  .middle {
    display: block !important;
  }
  .close-aside {
    display: none;
  }
}
.active {
  width: 250px;
  height: 60px;
  background-color: #eee8ff;
  color: #fff;
  border-radius: 17px;
}
</style>
