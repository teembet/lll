<template>
  <div class="static">
    <div class="card col-lg-8 payment-card">
      <div class="d-flex">
        <div class="col-lg-5 bluee">
          <div class="">
            <button class="back-btn" @click="close">
              <i class="fa fa-chevron-left"></i> Go Back
            </button>
          </div>
          <p class="mt-3 mb-3 grey-text">Confirm Payment Details</p>
          <div class="row">
            <form class="pa-15">
              <div class="">
                <label class="formlabel grey-text">Amount</label>
                <p class="heavy">N 5000.00</p>
              </div>
              <div class="mt-2">
                <label class="formlabel grey-text">Beneficiary name</label>
                <p class="heavy">Ali muhamed</p>
              </div>
              <div class="mt-2">
                <label class="formlabel grey-text">Account Number</label>
                <p class="heavy">234567890</p>
              </div>
              <div class="mt-2">
                <label class="formlabel grey-text">Bank Name</label>
                <p class="heavy">Ecobank</p>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-7 whitee">
          <div class="row">
            <p class="mb-3 grey-text">Select Payment Method</p>
            <div class="row">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link pay-slt active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    <img
                      class="icon-svg"
                      src="../assets/images/debitcard.svg"
                    />
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link pay-slt"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                    disabled
                  >
                    <img
                      class="icon-svg"
                      src="../assets/images/banktransfer.svg"
                    />
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link pay-slt"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    disabled
                  >
                    <img class="icon-svg" src="../assets/images/ussd.svg" />
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <form>
                    <div class=" ">
                      <div class="">
                        <label class="formlabel" for="formGroupExampleInput"
                          >Card Number</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder=""
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div class="form-row mt-2">
                      <div class="col-lg-6">
                        <label class="formlabel" for="formGroupExampleInput"
                          >EXP. Date</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder=""
                          autocomplete="off"
                        />
                      </div>
                      <div class="col-lg-6">
                        <label class="formlabel" for="formGroupExampleInput"
                          >Cvv</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="center mt-5">
                      <button class="action-btn">
                        Pay NGN 5000
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "paymentcard",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style scoped>
/* .home {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
} */

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
.static {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: #6e6e6e00;
  z-index: 999;
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
.home {
  max-width: 100%;
}
.text-color {
  color: var(--text-color);
}
.payment-card {
  border-radius: 31px;
  height: 398px;
  padding: 0 !important;
  background: #d6caf6 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  z-index: 999;
}
.bluee {
  background-color: #d6caf6;
  border-top-left-radius: 31px;
  border-bottom-left-radius: 31px;
  padding: 30px;
}
.whitee {
  background-color: var(--body-color);
  padding: 30px;
  border-radius: 31px;
}
.nav-link.active,
.icon-svg:active {
  filter: invert(14%) sepia(67%) saturate(6526%) hue-rotate(258deg)
    brightness(85%) contrast(99%);
}
.icon-svg {
  background: none;
  width: 70%;
}
.icon-svg:active {
  filter: invert(14%) sepia(67%) saturate(6526%) hue-rotate(258deg)
    brightness(85%) contrast(99%);
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: transparent !important;
}
.pay-slt {
  padding: 0 !important;
}
.action-btn {
  background-color: var(--primary-color);
  color: var(--white-color);
  border-radius: 9px;
  height: 52px;
  width: 247px;
}
.back-btn {
  color: var(--primary-color);
  background-color: rgba(15, 15, 15, 0.14);
  font-family: var(--body-font);
  border-radius: 25px;
  width: 100px;
}
.heavy {
  font-weight: var(--font-medium);
}
.grey-text {
  color: #6e6e6e;
}
</style>
