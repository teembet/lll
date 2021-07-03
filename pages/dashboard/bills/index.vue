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
              <div
                @click="
                  callModal('cable', {
                    msg: 'Dstv',
                    img: 'dstv.png'
                  })
                "
                class="mt-3"
                style="text-align:center"
              >
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
              <div
                class="ml-5 mt-3"
                style="text-align:center"
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
                  <span class="small-text grey-text" style="font-weight:400;"
                    >GOTV</span
                  >
                </div>
              </div>

              <div
                class="ml-5 mt-3"
                style="text-align:center"
                @click="
                  callModal('cable', {
                    msg: 'Tstv',
                    img: 'tstv.png'
                  })
                "
              >
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

              <div
                class="ml-5 mt-3"
                style="text-align:center"
                @click="
                  callModal('cable', {
                    msg: 'Startimes',
                    img: 'startimes.jpg'
                  })
                "
              >
                <div class="icon">
                  <img
                    src="../../../assets/images/startimes.jpg"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >StarTimes</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <div class="space-between">
            <p>Electricity Bill</p>
            <span class="small-text primary-text view-more">view more</span>
          </div>

          <div>
            <div class="d-flex" style="flex-wrap:wrap">
              <div
                class="mt-3"
                style="text-align:center"
                @click="
                  callModal('electricity', {
                    msg: 'Eko Electric',
                    img: 'eko.jpg'
                  })
                "
              >
                <div class="icon">
                  <img src="../../../assets/images/eko.jpg" class="img-fluid" />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Eko Electric</span
                  >
                </div>
              </div>
              <div
                class="ml-5 mt-3"
                style="text-align:center"
                @click="
                  callModal('electricity', {
                    msg: 'Ikeja Electric',
                    img: 'ie.png'
                  })
                "
              >
                <div class="icon">
                  <img src="../../../assets/images/ie.png" class="img-fluid" />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Ikeja Electric</span
                  >
                </div>
              </div>
              <div
                class="ml-5 mt-3"
                style="text-align:center"
                @click="
                  callModal('electricity', {
                    msg: 'Kano Electric',
                    img: 'Kedco.png'
                  })
                "
              >
                <div class="icon">
                  <img
                    src="../../../assets/images/Kedco.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Kano Electric</span
                  >
                </div>
              </div>
              <div
                class="ml-5 mt-3 mr-3"
                style="text-align:center"
                @click="
                  callModal('electricity', {
                    msg: 'Kaduna Electric',
                    img: 'kaduna.png'
                  })
                "
              >
                <div class="icon">
                  <img
                    src="../../../assets/images/kaduna.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Kaduna Electric</span
                  >
                </div>
              </div>
              <div
                class=" mt-3"
                style="text-align:center"
                @click="
                  callModal('electricity', {
                    msg: 'Jos Electric',
                    img: 'jed.png'
                  })
                "
              >
                <div class="icon">
                  <img src="../../../assets/images/jed.png" class="img-fluid" />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Jos Electric</span
                  >
                </div>
              </div>
              <div
                class=" mt-3"
                style="text-align:center"
                @click="
                  callModal('electricity', {
                    msg: 'Abuja Electric',
                    img: 'abuja.png'
                  })
                "
              >
                <div class="icon">
                  <img
                    src="../../../assets/images/abuja.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Abuja Electric</span
                  >
                </div>
              </div>
              <div
                class="ml-5 mt-3"
                style="text-align:center"
                @click="
                  callModal('electricity', {
                    msg: 'Ibadan Electric',
                    img: 'ibedc.png'
                  })
                "
              >
                <div class="icon">
                  <img
                    src="../../../assets/images/ibedc.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Ibadan Electric</span
                  >
                </div>
              </div>
              <div
                class="ml-5 mt-3"
                style="text-align:center"
                @click="
                  callModal('electricity', {
                    msg: 'Enugu Electric',
                    img: 'eedc.jpg'
                  })
                "
              >
                <div class="icon">
                  <img
                    src="../../../assets/images/eedc.jpg"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Enugu Electric</span
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
              <div
                class="mt-3"
                style="text-align:center"
                @click="
                  callModal('databundle', {
                    msg: 'Swift',
                    img: 'swift.png'
                  })
                "
              >
                <div class="icon">
                  <img
                    src="../../../assets/images/swift.png"
                    class="img-fluid"
                  />
                </div>
                <div class=" mt-2">
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Swift</span
                  >
                </div>
              </div>
              <div
                class="ml-5 mt-3"
                style="text-align:center"
                @click="
                  callModal('databundle', {
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
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Smile</span
                  >
                </div>
              </div>
              <div
                class="ml-5 mt-3"
                style="text-align:center"
                @click="
                  callModal('databundle', {
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
                  <span class="small-text grey-text" style="font-weight:400;"
                    >Spectranet</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <div class="space-between">
            <p>Utility</p>
            <span class="small-text primary-text view-more">view more</span>
          </div>

          <div>
            <div class="d-flex">
              <div
                class="mt-3"
                style="text-align:center"
                @click="
                  callModal('utility', {
                    msg: 'LCC',
                    img: 'lcc.jpg'
                  })
                "
              >
                <div class="icon">
                  <img src="../../../assets/images/lcc.jpg" class="img-fluid" />
                </div>
                <div class=" mt-2">
                  <span class="small-text" style="font-weight:400;">LCC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
