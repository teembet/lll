<template>
  <div class="container  col-lg-12 mt-3">
    <!-- <Loader v-show="loader" />
    <Status
      :state="state"
      :message="message"
      :resetState="resetState"
      v-if="status"
    /> -->
    <div class="col-lg-8 card trans-card">
      <div class="row">
        <div class="col-lg-6">
          <h3>Your Transactions</h3>
        </div>

        <div class="col-lg-6">
          <!-- <div
            class="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" class="btn btn-secondary" aria-pressed="true">
              Day
            </button>
            <button type="button" class="btn btn-secondary" aria-pressed="true">
              Week
            </button>
            <button type="button" class="btn btn-secondary" aria-pressed="true">
              Month
            </button>
          </div> -->
          <input type="date" v-model="date" />
        </div>
      </div>
      <ul class="nav mt-5 " id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            >All Transactions</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            >Income</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
            >Expense</a
          >
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
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
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
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
        </div>
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
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
</template>
<script>
export default {
  name: "transactions",
  data() {
    return {
      date: new Date().toISOString().slice(0, 10)
    };
  }
};
</script>
<style scoped>
.nav-link.active {
  color: #237dd7 !important;
  text-decoration: underline !important;
  text-decoration-style: solid !important;
  text-decoration-thickness: 4px !important;
  text-underline-offset: 5px;
}
.trans-body {
  background-color: #b6b6b61a;
  border-radius: 5px;
}
.amount {
  align-self: center;
}
.pad {
  padding: 0 20px;
}
</style>
