<template>
  <div>
    <Loader v-show="loader" />
    <div class="login-block">
      <div class="row">
        <nuxt-link to="/">
          <img class="img-abs" src="../../assets/images/paysure_White.png" />
        </nuxt-link>

        <div
          id="carouselExampleIndicators"
          class="carousel slide col-lg-7"
          data-ride="carousel"
        >
          <no-ssr>
            <!-- important to add no-ssr-->

            <carousel :autoplay="true" :nav="true" :items="1">
              <img src="../../assets/images/caro1.png" />

              <img src="../../assets/images/caro1.png" />
            </carousel>
          </no-ssr>
        </div>
        <div class="col-lg-5" style="overflow:auto">
          <div class="container resize">
            <form @submit.prevent="Login">
              <h1 class="title">Welcome Back!</h1>
              <h4 class="mt-3 title-2">
                Let's get you signed back in and transacting
              </h4>
              <div class="form-group mt-5">
                <label class="formlabel" for="formGroupExampleInput"
                  >Email</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  v-model="email"
                  placeholder=""
                  required
                />
              </div>
              <div class="form-group mt-5">
                <label class="formlabel" for="formGroupExampleInput"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="formGroupExampleInput"
                  v-model="password"
                  placeholder=""
                  required
                />
              </div>
              <div class="pull-right">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label title-2" for="gridCheck">
                    Remember Me
                  </label>
                </div>
                <div class="pull-right">
                  <p class="title-2">Forgot Password?</p>
                </div>
              </div>
              <div class="center">
                <button type="submit" class="center mt-5 btn-login">
                  Login
                </button>
              </div>

              <div class="center">
                <p class="title-2 mt-3">
                  Dont Have An Account?
                  <router-link
                    to="/register"
                    class="title-2"
                    style="color:var(--primary-color)"
                    >Sign Up</router-link
                  >
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/loader.vue";
import axios from "@/plugins/axios";

export default {
  // middleware: "guest",
  name: "signIn",
  components: {
    Loader
  },
  data() {
    return {
      loader: false,
      email: "",
      password: ""
    };
  },
  mounted() {
    console.log(process.env.BASE_URL);
  },
  methods: {
    async Login() {
      this.loader = true;
      const local_token = localStorage.getItem("token");
      if (local_token) {
        this.$router.push("/dashboard/overview");
        return;
      }
      try {
        const user = await axios().post(
          process.env.BASE_URL + "paysure/gettoken",
          {
            // "uniqueParameter" : this.email,
            // "password": this.password
            uniqueParameter: "TESTSANUSI",
            password: "PASSWORd@123"
          }
        );
        if (user.data.responseCode === 0) {
          // const currentUser = JSON.parse(user.data.data)
          this.loader = false;
          localStorage.setItem("user", JSON.stringify(user.data.data));
          localStorage.setItem("token", user.data.data.token);
          this.$router.push("/dashboard/overview");
        } else {
          this.loader = false;
          this.$toast.open({
            message: `<p style="color:white;">${user.data.responseMessage}</p>`,
            type: "error",
            duration: 5000,
            dismissible: true,
            position: "top-right"
          });
        }
      } catch (e) {
        this.loader = false;
        this.$toast.open({
          message: `<p style="color:white;">${e}</p>`,
          type: "error",
          duration: 5000,
          dismissible: true,
          position: "top-right"
        });
        console.log(e);
      }
    }
  }
};
</script>

<style scoped>
.login-block {
  height: auto;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  max-width: 100%;

  background: var(--body-color);
}
.title {
  color: var(--primary-color);
}
.title-2 {
  font-size: var(--normal-font);
  color: var(--text-color);
  font-size: var(--smaller-font-size);
}

/* padding: 50px 0;
}

.carousel-height{
  height: auto;
}


.carousel-inner {
	border-radius: 0 10px 10px 0;
}

.carousel-caption {
	text-align: left;
	left: 5%;
}*/

.resize {
  margin-top: 1rem;
  padding: 4rem;
}
.carousel-indicators {
  position: absolute;
  right: 0;

  left: 0;
  bottom: 158px;
  z-index: 15;

  margin-right: auto;
  margin-left: auto;
  list-style: none;
}
.pull-right {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 992px) {
  .login-block {
    overflow: auto;
  }
  .carousel-indicators {
    bottom: 0;
  }
  .carousel {
    display: none;
  }
}

.btn-login {
  padding: 10px 10px;
  background-color: var(--primary-color);
  color: var(--white-color);
  border-radius: 4px;
  width: 400px;
  height: 52px;

  cursor: pointer;
  -moz-transition: box-shadow 1s;
  -o-transition: box-shadow 1s;
  -webkit-transition: box-shadow 1s;
  transition: box-shadow 1s;
}

.banner-sec {
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.img-abs {
  position: absolute;
  max-width: 100% !important;
  z-index: 2;
  height: 30px !important;
  margin: 20px;
  top: 0px;
}
.carousel-indicators li {
  width: 30px !important;
  height: 10px !important;
  border-radius: 50% !important;
}
.carousel-indicators {
  width: 40px !important;
  height: 15px;
  border-radius: 50% !important;
}
.carousel-inner {
  background-image: url(../../assets/images/Overlay.svg);
}
</style>
