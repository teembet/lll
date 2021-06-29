<template>
  <div class="container center col-lg-12">
    <Loader v-show="loader" />
    <Status
      :state="state"
      :message="message"
      :resetState="resetState"
      v-if="status"
    />
    <div class="col-lg-5 card">
      <form @submit.prevent="sendRequest">
        <h5 class="center card-head bold-text">Send Money</h5>
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
              >Select Bank</label
            >
            <select v-model="form.beneficiaryBankCode" class="form-control">
              <option selected disabled>Select a Bank</option>
              <option
                v-for="(item, index) in banks"
                :key="index"
                :value="item.bankCode"
                >{{ item.bankName }}</option
              >
            </select>
          </div>
          <div class="col">
            <label class="formlabel" for="formGroupExampleInput"
              >Account No</label
            >
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder=""
              autocomplete="off"
              @blur="bankLookup"
              v-model="form.beneficiaryAccountNumber"
              required
            />
          </div>
        </div>
        <div class=" mt-3">
          <div class="col">
            <label class="formlabel" for="formGroupExampleInput"
              >Beneficiary Name</label
            >
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder=""
              autocomplete="off"
              v-model="form.beneficiaryName"
              disabled
              required
            />
          </div>
          <!-- <div class="col">
            <label class="formlabel" for="formGroupExampleInput">Channel</label>
            <select v-model="form.channel" class="form-control">
              <option selected disabled>Select a Channel</option>
              <option
                v-for="(item, index) in channels"
                :key="index"
                :value="item"
                >{{ item }}</option
              >
            </select>
          </div> -->
          <div class="col">
            <label class="formlabel" for="formGroupExampleInput">Pin</label>
            <input
              type="password"
              class="form-control"
              id="formGroupExampleInput"
              placeholder=""
              autocomplete="off"
              v-model="form.pin"
              required
            />
          </div>
          <div class="col">
            <label class="formlabel" for="formGroupExampleInput"
              >Narration</label
            >
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder=""
              autocomplete="off"
              v-model="form.narration"
            />
          </div>
        </div>

        <div class="center mt-5" style="padding:20px">
          <button type="submit" class="action-btn">
            Proceed
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
import global from "../global.js";
export default {
  name: "sendmoney",
  props: ["billname"],
  components: {
    Loader,
    Status
  },
  mixins: [global],
 
  data() {
    return {
      show: Boolean,
      loader: false,
      status: false,
      state: null,
      message: null,

      form: {
        amount: "",
        beneficiaryBankCode: "",
        beneficiaryAccountNumber: "",
        beneficiaryName: "",
        pin: "",
        senderName: "",
        senderAccountNumber: "",
        channel: "",
        narration: ""
      }
    };
  },
  methods: {
    resetState() {
      this.status = false;
    },
    async bankLookup() {
  
      const formData = {
        bankCode: this.form.beneficiaryBankCode,
        accountNumber: this.form.beneficiaryAccountNumber,
        amount: this.form.amount
      };
      try {
        this.loader = true;
        const response = await axios().post(
          process.env.BASE_URL + "paysure/lookup/transfers/accountlookup",
          formData,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(this.getUser).token}`
            }
          }
        );
        if (response.data.responseCode === 0) {
          this.loader = false;
          this.form.beneficiaryName = response.data.data.accountName;
        } else {
          this.loader = false;
          this.$toast.open({
            message: `<p style="color:white;">Invalid Account Number</p>`,
            type: "error",
            duration: 5000,
            dismissible: true,
            position: "top-right"
          });
        }
      } catch (error) {
        console.log(error);
        this.loader = false;
        this.$toast.open({
          message: `<p style="color:white;">${error}</p>`,
          type: "error",
          duration: 5000,
          dismissible: true,
          position: "top-right"
        });
      }
    },
    async sendRequest() {
      const formData = {
        amount: this.form.amount,
        beneficiaryBankCode: this.form.beneficiaryBankCode,
        beneficiaryAccountNumber: this.form.beneficiaryAccountNumber,
        beneficiaryName: this.form.beneficiaryName,
        pin: this.form.pin,
        walletId: JSON.parse(this.getUser).walletid,
        senderName: JSON.parse(this.getUser).merchantAccountName,
        senderAccountNumber: JSON.parse(this.getUser).merchantAccountNumber,
        merchantCode: JSON.parse(this.getUser).merchantCode,
        channel: "Web",
        narration: this.form.narration,
        encryptedData: "",
        extraFields: ""
      };
      try {
        this.loader = true;
        const response = await axios().post(
          process.env.BASE_URL + "paysure/transaction/transfers/fundtransfer",
          formData,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(this.getUser).token}`
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
    }
  }
};
</script>

<style>
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
