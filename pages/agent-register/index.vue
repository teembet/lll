<template>
  <div>
        <Loader v-show="loader"/>
    <div class="login-block">
      <div class="row">
        <div class="col-lg-4 picture">
          <div class="img-abs">
            <router-link to="/">
              <img
                class=""
                src="../../assets/images/paysure_White.png"
                style="width:20%"
              />
            </router-link>
          </div>

          <div class="" style="position:relative;height:100%">
            <img
              src="../../assets/images/caro1.png"
              style="height:100% !important;top:0;left:0;position:absolute"
            />
          </div>
        </div>

        <div class="col-lg-8 mt-5">
          <div class="first-page page" v-if="firstPage">
            <div class="stepper-image">
              <img
                src="../../assets/images/reg1.svg"
                class="img-fluid"
                style="width:60% !important"
              />
            </div>
            <div class="container resize">
              <form @submit.prevent>
                <h1 class="title">Get Started!</h1>
                <h4 class="mt-3 title-2">
                  Let's get you started creating a new account
                </h4>
                <div class="form-row mt-5">
                  <div class="col-lg-6">
                    <label class="formlabel" for="formGroupExampleInput"
                      >First Name</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                    />
                  </div>
                  <div class="col-lg-6">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Last Name</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="form-row mt-5">
                  <div class="col-lg-6">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Phone No</label
                    >
                    <input type="text" class="form-control" placeholder="" />
                  </div>
                  <div class="col-lg-6">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Email</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      :value="email"
                    />
                  </div>
                </div>
                <div class="form-row mt-5">
                  <div class="col-lg-6">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                    />
                  </div>
                  <div class="col-lg-6 mt-1">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Confirm Password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                    />
                  </div>
                </div>

                <div class="center" style="margin-top:5.5rem">
                  <button class="btn-login col-lg-6" @click="next()">
                    Proceed
                  </button>
                </div>
                <div class="center">
                  <p class="title-2 mt-3">
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

          <div class="second-page page mt-5" v-if="secondPage">
            <div class="stepper-image">
              <img
                src="../../assets/images/reg2.svg"
                class="img-fluid"
                style="width:60% !important"
              />
            </div>
            <div class="container resize">
              <form @submit.prevent>
                <h1 class="title">Provide Your Business Details</h1>
                <h4 class="mt-5 title-2">
                  This is required to fully assign a POS device to you
                </h4>
                <div class="form-row mt-3 mb-3">
                  <div class="col-lg-6 mt-5">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Do You have a business outlet/shop?</label
                    >
                    <div class="mt-3">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label class="form-check-label" for="inlineRadio1"
                          >Yes</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label class="form-check-label" for="inlineRadio2"
                          >No</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 mt-5">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Do You have a smartphone/computer?</label
                    >
                    <div class="mt-3">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label class="form-check-label" for="inlineRadio1"
                          >Yes</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label class="form-check-label" for="inlineRadio2"
                          >No</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-row mt-3 mb-3">
                  <div class="col-lg-6 mt-5">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Are you able to pay a minimum of n10,000.00 as
                      registration fee?</label
                    >
                    <div class="mt-3">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label class="form-check-label" for="inlineRadio1"
                          >Yes</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label class="form-check-label" for="inlineRadio2"
                          >No</label
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-12 row"
                  style="display:flex;justify-content:center;margin-top:7rem !important"
                >
                  <div class="col-lg-6 mt-5">
                    <button class="btn-prev col-lg-6" @click="prev()">
                      <i class="fa fa-arrow-left"></i> Go Back
                    </button>
                  </div>

                  <div class="col-lg-6 mt-5">
                    <button
                      @click="next()"
                      class="btn-login col-lg-6 "
                      type="button"
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="last-page page" v-if="lastPage">
            <div class="stepper-image">
              <img
                src="../../assets/images/reg3.svg"
                class="img-fluid"
                style="width:60% !important"
              />
            </div>
            <div class="container resize">
              <form @submit.prevent>
                <h1 class="title">Upload KYC/ Business Documents</h1>
                <h4 class="mt-3 title-2">
                  This is required to fully assign a POS device to you
                </h4>
                <div class="form-row mt-3">
                  <div class="col-lg-8">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Upload your valid government issued id</label
                    >
                    <div class="input-group mb-3">
                      <span class="btn attach" id="button-addon2">
                        <i class="fas fa-paperclip" style="color:#23A6D7"></i>
                      </span>
                      <input
                        type="file"
                        class="form-control"
                        placeholder="Browse files "
                        aria-label="Browse files"
                        aria-describedby="button-addon2"
                        style="border-left:none !important;border-color:#F2F3F3;"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row mt-3">
                  <div class="col-lg-8 form-row">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Upload your proof of address</label
                    >
                    <div class="input-group mb-3">
                      <span class="btn attach" id="button-addon2">
                        <i class="fas fa-paperclip" style="color:#23A6D7"></i>
                      </span>
                      <input
                        type="file"
                        class="form-control"
                        placeholder="Browse files or drag and drop here"
                        aria-label="Browse files or drag and drop here"
                        aria-describedby="button-addon2"
                        style="border-left:none !important;border-color:#F2F3F3;"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row mt-2">
                  <div class="col-lg-8">
                    <label class="formlabel" for="formGroupExampleInput"
                      >Enter your bank verification number</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Enter Bvn"
                    />
                  </div>
                </div>

                <div class="form-info col-lg-8">
                  <p class="primary-text mt-1">Why we need your Bvn</p>
                  <p class="mt-1" style="color:#B9B9B9">
                    We only need access to
                  </p>
                  <ul class="mt-3" style="display:flex;flex-direction:column">
                    <li><i class="fa fa-check"></i> &nbsp;Full Name</li>
                    <li><i class="fa fa-check"></i>&nbsp;Phone Number</li>
                    <li><i class="fa fa-check"></i>&nbsp;Date of Birth</li>
                  </ul>
                </div>

                <div
                  class=" mt-5 col-lg-12 row"
                  style="display:flex;justify-content:center"
                >
                  <div class="col-lg-6 mt-3">
                    <button class="btn-prev col-lg-6" @click="prev()">
                      <i class="fa fa-arrow-left"></i> Go Back
                    </button>
                  </div>

                  <div class="col-lg-6 mt-3">
                    <button @click="submitForm()" class="btn-login col-lg-6 ">
                      Proceed
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/loader.vue"
import axios from '@/plugins/axios'
export default {
  name: "agentonboarding",
   components: {
    Loader
  },
  data(){
    return{
      loader:false,
      firstPage: Boolean,
      secondPage: Boolean,
      lastPage: Boolean,
      form:{
    "username": "testuser",
    "password": "Password@123",
    "transactionPin": "1234",
    "agentName": "dannYoung",
    "contactPersonName": "danny day",
    "phoneNumber": "09034234222",
    "emailAddress": "testuser@gmail.com",
    "logoUrl": "nulla a",
    "accountNumber": "0176577622",
    "accountName": "dan y",
    "bankName": "gtb",
    "bvn": "22160880139",
    "accountType": "Current",
    "addressLine1": "sed id nostrud commodo",
    "addressLine2": "dolore aliqua veniam velit",
    "state": "sed aliquip",
    "lga": "ea consectetur non id",
    "city": "nisi dolor aliquip"
}
    };
  },
  props: {
    email: String,
  },
  methods: {
        async sendRequest(){
         try {
        const response = await axios().post(process.env.BASE_URL  + 'users/register/user',form)
        if(response.data.responseCode === 0){
          this.loader = false;
            this.$toast.open({
        message: "Registration Successful",
        type: "success",
        duration: 5000,
        dismissible: true,
        position:'top-right',
    });
        }
        else{
          this.loader = false;
                 this.$toast.open({
        message: response.data.responseMessage,
        type: "error",
        duration: 5000,
        dismissible: true,
        position:'top-right',
    });
        }

      } catch (error) {
        console.log(error)
        this.loader = false;
          this.$toast.open({
        message: response.data.responseMessage,
        type: "error",
        duration: 5000,
        dismissible: true,
        position:'top-right',
    });
      }
    },
    next() {
      if (this.firstPage) {
        this.secondPage = true;
        this.lastPage = false;
        this.firstPage = false;
      } else if (this.secondPage) {
        this.secondPage = false;
        this.lastPage = true;
        this.firstPage = false;
      } else if (this.lastPage) {
        this.firstPage = false;
        this.secondPage = false;
      }
    },
    prev() {
      if (this.secondPage) {
        this.secondPage = false;
        this.firstPage = true;
        this.lastPage = false;
      } else if (this.lastPage) {
        this.lastPage = false;
        this.secondPage = true;
        this.firstPage = false;
      }
    },
  },
  mounted() {
    this.firstPage = true;
    this.secondPage = false;
    this.lastPage = false;
    if (!this.email) {
      this.email = "";
    }
  },
};
</script>

<style scoped>
.carousel-item .img-fluid {
  width: 100%;
  height: 100%;
}
.login-block {
  margin-top: -20px;
  overflow: hidden;

  background: var(--body-color);
}
.title {
  color: var(--primary-color);
}
.attach {
  border-left: 1px solid #f2f3f3;
  border-bottom: 1px solid #f2f3f3;
  border-top: 1px solid #f2f3f3;
}
.page {
  position: relative;
}
.title-2 {
  font-size: var(--smaller-font-size);
  color: var(--text-color);
}
.btn-prev {
  background: var(--body-color);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  /* padding: 10px 10px; */
  border-radius: 4px;
  width: 100%;
  height: 52px;
  cursor: pointer;
  -moz-transition: box-shadow 1s;
  -o-transition: box-shadow 1s;
  -webkit-transition: box-shadow 1s;
  transition: box-shadow 1s;
}
.stepper-image {
  position: absolute;
  top: 36px;
  right: 0;
}
.form-info {
  padding: 20px;
  border: 1px solid grey;
  margin-top: 1rem;
  background-color: var(--body-color);
}
.carousel-item {
  height: 100%;
  width: auto;
}

.carousel {
  height: 100%;
}

/*



.carousel-inner {
  border-radius: 0 10px 10px 0;
}

.carousel-caption {
  text-align: left;
  left: 5%;
} */

.resize {
  margin-top: 2rem;
  padding: 1rem;
}
.carousel-height {
  height: auto;
}
/* .carousel-indicators {
  position: absolute;
  right: 0;

  left: 0;
  bottom: 50px;
  z-index: 15;

  margin-right: auto;
  margin-left: auto;
  list-style: none;
} */
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
}

.btn-login {
  /* padding: 10px 10px; */
  background-color: var(--primary-color);
  color: var(--white-color);
  border-radius: 4px;
  width: 100%;
  height: 52px;

  cursor: pointer;
  -moz-transition: box-shadow 1s;
  -o-transition: box-shadow 1s;
  -webkit-transition: box-shadow 1s;
  transition: box-shadow 1s;
}

/* .banner-sec {
  display: flex;
  align-items: center;
  justify-content: center;
} */
.img-abs {
  position: absolute;
  max-width: 100% !important;
  z-index: 1;

  margin: 20px;
  top: 0px;
}
/*
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
 */
.carousel-inner {
  background-color: grey;
  height: auto;
}

@media screen and (max-width: 992px) {
  .login-block {
    overflow: auto;
  }
  .carousel-indicators {
    bottom: 0;
  }
  .picture {
    display: none;
  }
  .stepper-image {
    display: none;
  }

  .resize {
    margin-top: 1rem;
    padding: 1rem;
  }
}
</style>
