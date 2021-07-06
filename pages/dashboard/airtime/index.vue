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
      <form @submit.prevent="sendRequest">
        <h5 class="center card-head bold-text">Airtime Recharge</h5>
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
            Buy Airtime
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
  name: "airtime",
  components: {
    Loader,
    Status
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
<style scoped>
input,
select::placeholder {
  font-size: 11px;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;

  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.card {
  box-shadow: 0px 3px 15px #00000024;
  background: var(--body-color);
}
.action-btn {
  background-color: var(--primary-color);
  color: var(--white-color);
  border-radius: 9px;
  height: 52px;
  width: 247px;
}
.card-head {
  color: var(--primary-color);
  padding: 20px;
}
</style>
