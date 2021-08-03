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
          class="carousel slide col-lg-6"
          data-ride="carousel"
        >
          <no-ssr>
            <!-- important to add no-ssr-->

            <carousel :autoplay="true" :nav="true" :items="1">
              <img src="../../assets/images/caro1.png" />

              <img src="../../assets/images/1stpic.png" />
              <img src="../../assets/images/2ndpic.png" />
            </carousel>
          </no-ssr>
          <!-- <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol> -->
          <!-- <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="../../assets/images/first-picture.png"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="../../assets/images/cart.png"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="../../assets/images/wallet.png"
                alt="Third slide"
              />
            </div>
          </div> -->
        </div>
        <div class="col-lg-6" style="overflow:scroll">
          <div class="container resize">
            <form @submit.prevent="sendRequest">
              <h1 class="title" style="font-size:35px">Get Started!</h1>
              <h4 class="title-2">
                Let's get you started creating a new account
              </h4>
              <div class="form-row ">
                <div class="col mt-1">
                  <label class="formlabel" for="formGroupExampleInput"
                    >Username</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder=""
                    v-model="username"
                    required
                  />
                </div>
                <div class="col mt-1">
                  <label class="formlabel" for="formGroupExampleInput"
                    >BVN</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder=""
                    required
                    v-model="bvn"
                  />
                </div>
              </div>
              <div class="form-row ">
                <div class="col-lg-6 mt-1">
                  <label class="formlabel" for="formGroupExampleInput"
                    >Phone No</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder=""
                    v-model="phoneNumber"
                  />
                </div>
                <div class="col-lg-6 mt-1">
                  <label class="formlabel" for="formGroupExampleInput"
                    >Email</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder=""
                    required
                    v-model="emailAddress"
                  />
                </div>
              </div>
              <div class="form-row ">
                <div class="col-lg-6 mt-1">
                  <label class="formlabel" for="formGroupExampleInput"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder=""
                    required
                    v-model="password"
                  />
                </div>
                <div class="col-lg-6 mt-1">
                  <label class="formlabel" for="formGroupExampleInput"
                    >Transaction Pin</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder=""
                    v-model="transactionPin"
                    required
                  />
                </div>
              </div>
              <div class="form-row ">
                <div class="col-lg-6 mt-1">
                  <label class="formlabel" for="formGroupExampleInput"
                    >State</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder=""
                    required
                    v-model="state"
                  />
                </div>
                <div class="col-lg-6 mt-1">
                  <label class="formlabel" for="formGroupExampleInput"
                    >LGA</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder=""
                    v-model="lga"
                    required
                  />
                </div>
              </div>
              <div class="form-row ">
                <div class="col-lg-6">
                  <label class="formlabel" for="formGroupExampleInput"
                    >City</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder=""
                    v-model="city"
                    required
                  />
                </div>
                <div class="col-lg-6 mt-1">
                  <label class="formlabel" for="formGroupExampleInput"
                    >Address</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder=""
                    v-model="addressLine1"
                    required
                  />
                </div>
              </div>

              <div class="">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label title-2" for="gridCheck">
                    Yes, I want to receive paysure's newsletter
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label title-2" for="gridCheck">
                    I agree to all Paysure's
                    <span style="color:var(--primary-color)"
                      >Terms & Conditions</span
                    >
                  </label>
                </div>
              </div>

              <div class="center mt-3">
                <button tag="button" type="submit" class="btn-login">
                  Create Account
                </button>
              </div>
              <div class="center">
                <p class="title-2 ">
                  Dont Have An Account?
                  <router-link
                    to="/login"
                    class="title-2"
                    style="color:var(--primary-color)"
                    >Sign In</router-link
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
  name: "signUp",
  components: {
    Loader
  },
  data() {
    return {
      loader: false,
      username: "",
      password: "",
      transactionPin: "",
      phoneNumber: "",
      emailAddress: "",
      bvn: "",
      state: "",
      addressLine1: "",
      lga: "",
      city: ""
    };
  },
  methods: {
    async sendRequest() {
      var form = {
        username: this.username,
        password: this.password,
        transactionPin: this.transactionPin,
        phoneNumber: this.phoneNumber,
        emailAddress: this.emailAddress,
        bvn: this.bvn,
        state: this.state,
        addressLine1: this.addressLine1,
        lga: this.lga,
        city: this.city
      };
      console.log(this.username);
      this.loader = true;
      try {
        const user = await axios().post(
          process.env.BASE_URL + "users/register/user",
          form
        );
        if (user.data.responseCode === 0) {
          this.loader = false;
          this.$toast.open({
            message: "Registration Successful",
            type: "success",
            duration: 7000,
            dismissible: true,
            position: "top-right"
          });
        } else {
          this.loader = false;

          this.$toast.open({
            message: user.data.data.responseMessage,
            type: "error",
            duration: 7000,
            dismissible: true,
            position: "top-right"
          });
        }
      } catch (error) {
        this.loader = false;
        this.$toast.open({
          message: user.data.data.responseMessage,
          type: "error",
          duration: 7000,
          dismissible: true,
          position: "top-right"
        });
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
  font-size: var(--smaller-font-size);
  color: var(--text-color);
}

.carousel-item,
.carousel-inner,
.carousel-inner img {
  height: 100%;
  width: auto;
}
.carousel-item {
  text-align: center;
}
.carousel {
  height: 720px;
}

.carousel-inner img {
  width: 100%;
  height: auto;
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
  padding: 3rem;
}
.carousel-indicators {
  position: absolute;
  right: 0;

  left: 0;
  bottom: 50px;
  z-index: 15;

  margin-right: auto;
  margin-left: auto;
  list-style: none;
}
.pull-right {
  display: flex;
  justify-content: space-between;
}
.formlabel {
  font-weight: var(--font-semi-bold);
  font-size: var(--smaller-font-size);
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
