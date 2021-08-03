<template>
  <div class="main-content">
    <!-- <button type="button" class="btn" @click="showModal">
      Open Modal!
    </button> -->
    <payment-card v-show="isModalVisible" @close="closeModal" />

    <div class="row">
      <div class="col-lg-5">
        <div class="card-top" style="margin-bottom:20px;">
          <span class="wallet-head">My Wallet</span>
          <nuxt-link tag="button" to="/dashboard/send-money" class="fund"
            >Fund Wallet</nuxt-link
          >
        </div>
        <div class="img-container" style="display:flex;align-items:center;">
          <img
            src="../../../assets/images/card3.png"
            class="img-fluid trans-img"
          />
          <div class="center-text">Total Balance</div>
          <div class="center-text2">N{{ balance }}</div>
          <div class="center-text3">Wallet Id</div>
          <div class="center-text4">{{ JSON.parse(getUser).walletId }}</div>
          <div class="center-text5">{{ JSON.parse(getUser).username }}</div>
        </div>
        <div class="app-divider"></div>
        <div class="wallet-head">
          <p>Frequent Payment</p>
          <!-- <div>
            <span class="small-text primary-text mt-5">Send Money</span>
            <div class="d-flex">
              <div class="mt-3">
                <div class="icon">
                  <img
                    src="../../../assets/images/profile.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text" style="font-weight:400;"
                    >Taylor Clark</span
                  >
                </div>
              </div>
              <div class="ml-5 mt-3">
                <div class="icon">
                  <img
                    src="../../../assets/images/profile.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text" style="font-weight:400;"
                    >Taylor Clark</span
                  >
                </div>
              </div>
              <div class="ml-5 mt-3">
                <div class="icon">
                  <img
                    src="../../../assets/images/profile.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text" style="font-weight:400;"
                    >Taylor Clark</span
                  >
                </div>
              </div>
              <div class="ml-5 mt-3">
                <div class="icon">
                  <img
                    src="../../../assets/images/profile.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text" style="font-weight:400;"
                    >Taylor Clark</span
                  >
                </div>
              </div>
            </div>
          </div> -->
          <div class="mt-3">
            <span class="small-text primary-text mt-5">Pay Bills</span>
            <div class="d-flex">
              <div
                class="mt-3"
                @click="
                  callModal('cable', {
                    msg: 'Dstv',
                    img: 'dstv.png'
                  })
                "
              >
                <div class="icon">
                  <img
                    src="../../../assets/images/dstv.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text" style="font-weight:400;">Dstv</span>
                </div>
              </div>
              <div
                class="ml-5 mt-3"
                @click="
                  callModal('cable', {
                    msg: 'Gotv',
                    img: 'gotv.png'
                  })
                "
              >
                <div class="icon">
                  <img
                    src="../../../assets/images/gotv.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text" style="font-weight:400;">GoTV</span>
                </div>
              </div>
              <div
                class="ml-5 mt-3"
                @click="
                  callModal('cable', {
                    msg: 'Spectranet',
                    img: 'spectranet.png'
                  })
                "
              >
                <div class="icon">
                  <img
                    src="../../../assets/images/spectranet.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text" style="font-weight:400;"
                    >Spectranet</span
                  >
                </div>
              </div>
              <div
                class="ml-5 mt-3"
                @click="
                  callModal('cable', {
                    msg: 'Smile',
                    img: 'smile.png'
                  })
                "
              >
                <div class="icon">
                  <img
                    src="../../../assets/images/smile.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text" style="font-weight:400;">Smile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="container">
          <div class="header-flex">
            <div class="wallet-head">Recent Transactions</div>
            <div class="primary-text" style="font-size:13px;font-weight:600">
              View All
            </div>
          </div>

          <div class="row mt-3">
            <div style="display:flex;" class="mt-3 trans-body">
              <div class="col-lg-10" style="display: flex;">
                <div class="icon">
                  <img
                    src="../../../assets/images/credit.svg"
                    class="img-fluid trans-img"
                  />
                </div>
                <div class="trans-name">
                  <div class="row ml-3">
                    <span class="bold-text small-text">Credit</span>
                    <span class="small-text">15 mar 2021</span>
                  </div>
                </div>
              </div>

              <div class="amount">
                <span class="bold-text">+$3000</span>
              </div>
            </div>
            <div style="display:flex;" class="mt-3 trans-body">
              <div class="col-lg-10" style="display: flex;">
                <div class="icon">
                  <img
                    src="../../../assets/images/credit.svg"
                    class="img-fluid trans-img"
                  />
                </div>
                <div class="trans-name">
                  <div class="row ml-3">
                    <span class="bold-text small-text">Credit</span>
                    <span class="small-text">15 mar 2021</span>
                  </div>
                </div>
              </div>

              <div class="amount">
                <span class="bold-text">+$3000</span>
              </div>
            </div>
            <div style="display:flex;" class="mt-3 trans-body">
              <div class="col-lg-10" style="display: flex;">
                <div class="icon">
                  <img
                    src="../../../assets/images/credit.svg"
                    class="img-fluid trans-img"
                  />
                </div>
                <div class="trans-name">
                  <div class="row ml-3">
                    <span class="bold-text small-text">Credit</span>
                    <span class="small-text">15 mar 2021</span>
                  </div>
                </div>
              </div>

              <div class="amount">
                <span class="bold-text">+$3000</span>
              </div>
            </div>
            <div style="display:flex;" class="mt-3 trans-body">
              <div class="col-lg-10" style="display: flex;">
                <div class="icon">
                  <img
                    src="../../../assets/images/debit.svg"
                    class="img-fluid trans-img"
                  />
                </div>
                <div class="trans-name">
                  <div class="row ml-3">
                    <span class="bold-text small-text">Debit</span>
                    <span class="small-text">15 mar 2021</span>
                  </div>
                </div>
              </div>

              <div class="amount">
                <span class="bold-text">+$3000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from "@/components/modal";
import axios from "axios";
import { mapGetters } from "vuex";
import { preventOverflow } from "@popperjs/core";
import global from "../global.js";
import paymentcard from "@/components/payment-card";
import cable from "../bills/cable";
import electricity from "../bills/electricity";
import databundle from "../bills/databundle";
import utility from "../bills/databundle";
export default {
  name: "home",
  components: {
    modal,
    paymentcard
  },
  mixins: [global],
  data() {
    return {
      isModalVisible: false,
      message: "Hii",
      user: ""
    };
  },

  computed: {
    ...mapGetters(["getUser"])
  },
  mounted() {
    if (process.client) {
      return this.$store.dispatch("getUser");
    }
  },
  methods: {
    fundwallet() {
      this.isModalVisible = true;
      console.log("great");
    },
    closeModal() {
      this.isModalVisible = false;
    },
    callModal(name, { msg, img }) {
      switch (name) {
        case "cable":
          name = cable;
          break;
        case "electricity":
          name = electricity;
          break;
        case "databundle":
          name = databundle;
          break;
        case "utility":
          name = utility;
          break;
      }
      this.$modal.show(
        name,
        { msg: msg, img: img },
        { adaptive: true, draggable: false, width: "70%", clickToClose: false }
      );
    }
  }
};
</script>

<style>
.main-content {
  padding: 10px;
}
.fund {
  display: inline-block;
  width: 120px;
  height: 30px;

  background-color: #23d723;
  color: var(--body-color);
  border: none;
  border-radius: 5px;
  font-size: var(--smaller-font-size);
}
.wallet-head {
  color: var(--text-color);
  font-weight: var(--font-semi-bold);
}
.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.img-container {
  position: relative;
  text-align: center;
  color: white;
}
.center-text {
  position: absolute;
  top: 30%;
  left: 5%;
  /* transform: translate(-30%, -13%); */
  font-size: var(--smaller-font-size);
  opacity: 0.9;
  font-weight: 400;
}
.center-text2 {
  position: absolute;
  top: 34%;
  left: 4%;
  /* transform: translate(-40%, -23%); */
  font-size: var(--h1-font-size);
  opacity: 0.9;
  font-weight: bold;
}

.center-text3 {
  position: absolute;
  top: 65%;
  left: 5%;
  /* transform: translate(-80%, -29%); */
  opacity: 0.9;
  font-size: var(--smaller-font-size);
  font-weight: 400;
}
.center-text4 {
  position: absolute;
  top: 71%;
  left: 5%;
  /* transform: translate(-80%, -29%); */
  opacity: 0.9;
  font-size: var(--small-font-size);
  font-weight: 600;
}
.center-text5 {
  position: absolute;
  top: 83%;
  left: 5%;
  /* transform: translate(-80%, -29%); */
  opacity: 0.9;
  font-size: var(--small-font-size);
  font-weight: 400;
}
.trans-body {
  background-color: #b6b6b61a;
  border-radius: 5px;
}
.amount {
  align-self: center;
}
/* .trans-img {
  width: 20%;
} */
.space-between {
  display: flex;
  justify-content: space-between;
}
.view-more {
  margin-right: 4rem;
}
.vm--modal {
  position: relative !important;
  overflow: hidden !important;
  box-sizing: border-box;
  background-color: transparent !important;
  border-radius: 3px !important;
  box-shadow: none !important;
  top: 10% !important;
  left: 20% !important;
  width: 1075.2px;
  height: 100% !important;
  z-index: 1000 !important;
}
.vm--container {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 1001 !important;
}

/* //.vm--overlay {
    position: fixed;
    box-sizing: border-box;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    opacity: 1;
} */
</style>
