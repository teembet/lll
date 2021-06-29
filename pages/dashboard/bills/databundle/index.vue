<template>
  <div class="container center col-lg-12 mt-3">
    <Loader v-show="loader" />
    <Status
      :state="state"
      :message="message"
      :resetState="resetState"
      v-if="status"
    />
    <div class="col-lg-5 card">
      <div class="" style="margin:20px">
        <button class="back-btn" @click="close">
          <i class="fa fa-chevron-left"></i> Go Back
        </button>
      </div>
      <form @submit.prevent="sendRequest">
        <h5 class="center card-head bold-text">{{ msg ? msg : "cable" }}</h5>
        <div class=" ">
          <div class="col">
            <label class="formlabel" for="formGroupExampleInput">Amount</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder=""
              autocomplete="off"
              v-model="form.amount"
              required
            />
          </div>
        </div>
        <div class=" ">
          <div class="col">
            <label class="formlabel" for="formGroupExampleInput"
              >Select Network</label
            >
            <select
              v-model="network"
              class="form-control"
              @change="onchange($event)"
            >
              <option selected disabled>Select a network</option>
              <option
                v-for="(item, index) in networks"
                :key="index"
                :value="item.id"
                >{{ item.name }}</option
              >
            </select>
          </div>
          <div class="col">
            <label class="formlabel" for="formGroupExampleInput"
              >Phone Number</label
            >
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder=""
              v-model="form.beneficiaryNumber"
              required
            />
          </div>

          <div class="col">
            <label class="formlabel" for="formGroupExampleInput"
              >Transaction PIN</label
            >
            <input
              type="password"
              class="form-control"
              id="formGroupExampleInput"
              placeholder=""
              v-model="form.pin"
              required
            />
          </div>
        </div>

        <div class="center mt-5" style="padding:20px">
          <button type="submit" class="action-btn">
            Procced
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Loader from "@/components/loader.vue";
import axios from "@/plugins/axios";
import Status from "@/components/status";
export default {
  name: "databundle",
  components: {
    Loader,
    Status
  },
   props: {
    msg: String
  },
  
  data() {
    return {
      show: Boolean,
      loader: false,
      status: false,
      state: null,
      message: null,
      user: "",
      network: "",
      networks: [
        {
          id: 1,
          name: "Airtel"
        },
        {
          id: 2,
          name: "Glo"
        },
        {
          id: 3,
          name: "Mtn"
        },
        {
          id: 4,
          name: "9mobile"
        }
      ],
      form: {
        amount: "",
        beneficiaryNumber: "",
        pin: ""
      }
    };
  },
  methods: {
    resetState() {
      this.status = false;
    },
    close() {
      this.$modal.hideAll();
      console.log("calling");
    },
    async runAirtel(formData, local_token) {
      try {
        const response = await axios().post(
          process.env.BASE_URL + "paysure/transaction/airtimevtu/airtel",
          formData,
          {
            headers: {
              Authorization: `Bearer ${local_token}`
            }
          }
        );
        if (response.data.responseCode === 0) {
          this.loader = false;
          this.status = true;
          this.state = "success";
          this.message = "Operation Sucessful";
        } else {
          this.loader = false;
          this.status = true;
          this.state = "failed";
          this.message = "Operation Failed";
          this.$toast.open({
            message: `<p style="color:white;">${response.data.responseMessage}</p>`,
            type: "error",
            duration: 5000,
            dismissible: true,
            position: "top-right"
          });
        }
      } catch (error) {
        console.log(error);
        this.loader = false;
        this.status = true;
        this.state = "failed";
        this.message = "Operation Failed";
      }
    },
    async runGlo(formData, local_token) {
      try {
        const response = await axios().post(
          process.env.BASE_URL + "paysure/transaction/airtimevtu/glo",
          formData,
          {
            headers: {
              Authorization: `Bearer ${local_token}`
            }
          }
        );
        if (response.data.responseCode === 0) {
          this.loader = false;
          this.status = true;
          this.state = "success";
          this.message = "Operation Sucessful";
        } else {
          this.loader = false;
          this.status = true;
          this.state = "failed";
          this.message = "Operation Failed";
        }
      } catch (error) {
        console.log(error);
        this.loader = false;
        this.status = true;
        this.state = "failed";
        this.message = "Operation Failed";
      }
    },
    async run9mobile(formData, local_token) {
      try {
        const response = await axios().post(
          process.env.BASE_URL + "paysure/transaction/airtimevtu/9mobile",
          formData,
          {
            headers: {
              Authorization: `Bearer ${local_token}`
            }
          }
        );
        if (response.data.responseCode === 0) {
          this.loader = false;
          this.status = true;
          this.state = "success";
          this.message = "Operation Sucessful";
        } else {
          this.loader = false;
          this.status = true;
          this.state = "failed";
          this.message = "Operation Failed";
        }
      } catch (error) {
        console.log(error);
        this.loader = false;
        this.status = true;
        this.state = "failed";
        this.message = "Operation Failed";
      }
    },
    async runMtn(formData, local_token) {
      try {
        const response = await axios().post(
          process.env.BASE_URL + "paysure/transaction/airtimevtu/mtn",
          formData,
          {
            headers: {
              Authorization: `Bearer ${local_token}`
            }
          }
        );
        if (response.data.responseCode === 0) {
          this.loader = false;
          this.status = true;
          this.state = "success";
          this.message = "Operation Sucessful";
        } else {
          this.loader = false;
          this.status = true;
          this.state = "failed";
          this.message = "Operation Failed";
        }
      } catch (error) {
        console.log(error);
        this.loader = false;
        this.status = true;
        this.state = "failed";
        this.message = "Operation Failed";
      }
    },
    onchange(event) {
      this.network = event.target.value;
    },
    encryptData(data, token) {
      return btoa(
        this.$CryptoJS.HmacSHA256(JSON.stringify(data), token).toString()
      );
    },
    sendRequest() {
      this.loader = true;
      const local_token = localStorage.getItem("token");
      this.user = JSON.parse(localStorage.getItem("user"));

      const formData = {
        amount: this.form.amount,
        walletId: this.user.walletId,
        beneficiaryNumber: this.form.beneficiaryNumber,
        channel: "Web",
        encryptedData: this.encryptData(
          `amount=${this.form.amount}&beneficiaryNumber=${this.form.beneficiaryNumber}&merchantCode=${this.user.merchantCode}&channel=Web`,
          local_token
        ),
        extraFields: {
          imei: "",
          plainText: `amount=${this.form.amount}&beneficiaryNumber=${this.form.beneficiaryNumber}&merchantCode=${this.user.merchantCode}&channel=Web`
        },
        merchantCode: this.user.merchantCode,
        pin: this.form.pin,
        transactionTime: new Date().toISOString().substr(0, 10)
      };

      switch (this.network) {
        case "1":
          this.runAirtel(formData, local_token);
          break;
        case "2":
          this.runGlo(formData, local_token);
          break;
        case "3":
          this.runMtn(formData, local_token);
          break;
        case "4":
          this.run9mobile(formData, local_token);
          break;
      }
    }
  }
};
</script>

