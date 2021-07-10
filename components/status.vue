<template>
  <div style="z-index : 999999" class="app-modal-overlay">
    <div class="app-modal-div status" style="text-align:center">
      <div v-if="state == 'success'" class="center-receipt">
        <div class="alert-icon mb-3">
          <i class="fas fa-check-circle icon-status"></i>
        </div>
        <div class="amount" v-if="amount">
          <p class="small-grey">Amount</p>
          <p class="black-text">
            {{ amount }}
          </p>
        </div>

        <div class="name" v-if="name">
          <p class="small-grey">
            Beneficiary Name
          </p>
          <p class="black-text">
            {{ name }}
          </p>
        </div>

        <div class="ref mt-2" v-if="ref">
          <p class="small-grey">Reference</p>
          <p class="black-text">
            {{ ref }}
          </p>
        </div>

        <div class="service mt-2" v-if="service">
          <p class="small-grey">Service</p>
          <p class="black-text">
            {{ service }}
          </p>
        </div>

        <div class="alert-message mt-2" v-if="message">
          <p class="small-grey">Message</p>
          <p class="black-text">
            {{ message }}
          </p>
        </div>
        <div class="status mt-2">
          <p class="small-grey">Status</p>
          <p class="success-status">
            Successful
          </p>
        </div>

        <div
          @click="resetState"
          style="margin-top:30px;cursor:pointer"
          class="app-modal-button"
        >
          Done
        </div>
        <div @click="resetState" class=" receipt mt-3">
          <a>
            Download full transaction receipt
          </a>
        </div>
      </div>

      <div v-else class="center-receipt">
        <h4 class="primary-text mb-5">Transaction Receipt</h4>
        <div class="alert-icon failed mb-3">
          <i class="fas fa-times icon-status"></i>
        </div>
        <div class="amount" v-if="amount">
          <p class="small-grey">Amount</p>
          <p class="black-text">
            {{ amount }}
          </p>
        </div>

        <div class="name" v-if="name">
          <p class="small-grey">
            Beneficiary Name
          </p>
          <p class="black-text">
            {{ name }}
          </p>
        </div>

        <div class="ref mt-2" v-if="ref">
          <p class="small-grey">Reference</p>
          <p class="black-text">
            {{ ref }}
          </p>
        </div>

        <div class="service mt-2" v-if="service">
          <p class="small-grey">Service</p>
          <p class="black-text">
            {{ service }}
          </p>
        </div>

        <div class="alert-message mt-2" v-if="message">
          <p class="small-grey">Message</p>
          <p class="black-text">
            {{ message }}
          </p>
        </div>
        <div class="status mt-2">
          <p class="small-grey">Status</p>
          <p class="failed-status">
            Failed
          </p>
        </div>

        <div
          @click="resetState"
          style="margin-top:30px;cursor:pointer"
          class="app-modal-button"
        >
          Done
        </div>
        <div @click="resetState" class=" receipt mt-3">
          <a>
            Retry Transaction
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["state", "message", "amount", "ref", "service", "name", "resetState"],
  methods: {}
};
</script>

<style>
.app-modal-overlay {
  position: fixed;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  z-index: 100;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: visible;
  width: 100%;
  height: 100vh;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
}
.center-receipt {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.app-modal-div {
  position: relative;
  width: 35%;
  height: auto;
  padding: 35px 46px 30px;
  border-radius: 20px;
  background-color: #fff;
}

.app-modal-div.status {
  padding: 10px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 20%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.alert-icon {
  font-size: 15px;
  font-weight: 100;
}
.app-modal-header {
  color: #292929;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(216, 216, 216);
}
.success {
  color: #23d74d;
}
.failed {
  color: #d7233c;
}
.failed-status {
  color: #d7233c;
  font-weight: 600;
}
.success-status {
  color: #23d74d;
  font-weight: 600;
}
.app-modal-button {
  width: 150px;
  color: var(--white-color);
  padding: 10px;
  background-color: #23d74d;
  border-radius: 10px;
}
.receipt a {
  color: #2341d7 !important;
  font-size: var(--smaller-font-size);
  cursor: pointer;
  text-decoration: underline !important;
  font-weight: 600;
}
.small-grey {
  font-size: var(--smaller-font-size);
  color: var(--text-color);
  opacity: 0.5;
}
.icon-status {
  font-size: 100px;
}
.black-text {
  color: var(--text-color);
  font-weight: 600;
}
</style>
