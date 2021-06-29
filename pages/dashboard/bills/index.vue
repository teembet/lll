<template>
  <div class="container">
    <h5>Pay Bills</h5>
    <p>Select the bill you want to make payment for</p>
    <div class="row mt-3 space-between">
      <div class="wallet-head col-lg-5">
        <div class="mt-3">
          <div class="space-between">
            <p>TV subscription</p>
            <span class="small-text primary-text view-more">view more</span>
          </div>

          <div>
            <div class="d-flex">
              <div @click="callModal('cable', 'Dstv')" class="mt-3 select">
                <div class="icon">
                  <img
                    src="../../../assets/images/dstv.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >DSTV</span
                  >
                </div>
              </div>
              <div class="ml-5 mt-3 select">
                <div class="icon">
                  <img
                    src="../../../assets/images/gotv.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >GOTV</span
                  >
                </div>
              </div>

              <div class="ml-5 mt-3">
                <div class="icon">
                  <img
                    src="../../../assets/images/tstv.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Tstv</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <div class="space-between">
            <p>Electricity Bill</p>
            <span class="small-text primary-text view-more">view more</span>
          </div>

          <div>
            <div class="d-flex">
              <div class="mt-3" @click="callModal('electricity', 'dstv')">
                <div class="icon">
                  <img
                    src="../../../assets/images/profile.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
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
                  <span class="small-text grey-text" style="font-weight:400;"
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
                  <span class="small-text grey-text" style="font-weight:400;"
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
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Taylor Clark</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="mt-3">
          <div class="space-between">
            <p>Flight Ticket</p>
            <span class="small-text primary-text view-more">view more</span>
          </div>

          <div>
            <div class="d-flex">
              <div class="mt-3" @click="callModal('flight', 'dstv')">
                <div class="icon">
                  <img
                    src="../../../assets/images/Arik.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Arik</span
                  >
                </div>
              </div>
              <div class="ml-5 mt-3">
                <div class="icon">
                  <img
                    src="../../../assets/images/Aero.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Aero</span
                  >
                </div>
              </div>
              <div class="ml-5 mt-3">
                <div class="icon">
                  <img
                    src="../../../assets/images/ibom.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Ibom Air</span
                  >
                </div>
              </div>
              <div class="ml-5 mt-3">
                <div class="icon">
                  <img
                    src="../../../assets/images/airpeace.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Air Peace</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <div class="wallet-head col-lg-5">
        <div class="mt-3">
          <div class="space-between">
            <p>Internet Services</p>
            <span class="small-text primary-text view-more">view more</span>
          </div>

          <div>
            <div class="d-flex">
              <div class="mt-3" @click="callModal('databundle', 'dstv')">
                <div class="icon">
                  <img src="../../../assets/images/mtn.png" class="img-fluid" />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >MTN</span
                  >
                </div>
              </div>
              <div class="ml-5 mt-3">
                <div class="icon">
                  <img
                    src="../../../assets/images/airtel.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Airtel</span
                  >
                </div>
              </div>
              <div class="ml-5 mt-3">
                <div class="icon">
                  <img
                    src="../../../assets/images/smile.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Smile</span
                  >
                </div>
              </div>
              <div class="ml-5 mt-3">
                <div class="icon">
                  <img
                    src="../../../assets/images/spectranet.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Spectranet</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="mt-3">
          <div class="space-between">
            <p>Transportation</p>
            <span class="small-text primary-text view-more">view more</span>
          </div>

          <div>
            <div class="d-flex">
              <div class="mt-3">
                <div class="icon">
                  <img
                    src="../../../assets/images/profile.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
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
          </div>
        </div> -->
        <!-- <div class="mt-3">
          <div class="space-between">
            <p>Betting</p>
            <span class="small-text primary-text view-more">view more</span>
          </div>

          <div>
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
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import cable from "../bills/cable";
import electricity from "../bills/electricity";
import databundle from "../bills/databundle";
import utility from "../bills/databundle";
export default {
  name: "bills",
  components: {
    cable,
    electricity,
    databundle,
    utility
  },
  data() {
    return {
      message: "hiii",
      dstv: "dstv"
    };
  },
  methods: {
    callModal(name, msg) {
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
        { msg: msg },
        { adaptive: true, draggable: false, width: "70%", clickToClose: false }
      );
    }
  }
};
</script>

<style>
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
</style>
