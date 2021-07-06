<template>
  <div class="container setting-container col-lg-12 mt-3">
    <!-- <Loader v-show="loader" />
    <Status
      :state="state"
      :message="message"
      :resetState="resetState"
      v-if="status"
    /> -->
    <div class="row col-lg-12">
      <div class="col-lg-4 setting-card card">
        <h3>Settings</h3>
        <div class="d-flex setting-group">
          <button class="btn setting-btn" @click="displayPage('profile')">
            <span>Profile</span> <i class="fas fa-arrow-right"></i>
          </button>
          <button class="btn setting-btn" @click="displayPage('pin')">
            Change Wallet Pin <i class="fas fa-arrow-right"></i>
          </button>
          <button class="btn setting-btn">
            Privacy Policy <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div class="col-lg-5 ml-5 setting-card1 card" v-if="changePin">
        <h3>Change Wallet Pin</h3>
        <form class="card-padding">
          <div class="col">
            <label class="formlabel" for="formGroupExampleInput">Old Pin</label>
            <input
              type="password"
              class="form-control"
              id="formGroupExampleInput"
              placeholder=""
              autocomplete="off"
              required
            />
          </div>

          <div class="col mt-3">
            <label class="formlabel" for="formGroupExampleInput">New Pin</label>
            <input
              type="password"
              class="form-control"
              id="formGroupExampleInput"
              placeholder=""
              required
            />
          </div>

          <div class="col mt-3">
            <label class="formlabel" for="formGroupExampleInput"
              >Confirm Pin</label
            >
            <input
              type="password"
              class="form-control"
              id="formGroupExampleInput"
              placeholder=""
              required
            />
          </div>

          <div class="center mt-5" style="padding:20px">
            <button type="submit" class="action-btn">
              Save
            </button>
          </div>
        </form>
      </div>
      <div class="col-lg-5 ml-5 setting-card1 card" v-if="profile">
        <h3>Your Profile</h3>
        <form class="card-padding">
          <div class="col">
            <label class="formlabel" for="formGroupExampleInput"
              >Full Name</label
            >
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder=""
              autocomplete="off"
              required
            />
          </div>

          <div class="col mt-3">
            <label class="formlabel" for="formGroupExampleInput"
              >Phone Number</label
            >
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder=""
              required
            />
          </div>
          <div class="col mt-3">
            <label class="formlabel" for="formGroupExampleInput">Email</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder=""
              required
            />
          </div>
          <div class="col mt-3">
            <label class="formlabel" for="formGroupExampleInput">Address</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder=""
              required
            />
          </div>

          <div class="center mt-5" style="padding:20px">
            <button type="submit" class="action-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "settings",
  data() {
    return {
      changePin: Boolean,
      profile: Boolean
    };
  },
  methods: {
    displayPage(name) {
      if (name == "profile") {
        this.profile = true;
        this.changePin = false;
      } else if (name == "pin") {
        this.changePin = true;
        this.profile = false;
      }
    }
  },
  mounted() {
    this.profile = true;
    this.changePin = false;
  }
};
</script>
<style scoped>
.setting-card {
  padding: 25px;
  height: 100%;
}
.setting-card1 {
  padding: 25px;
}
.setting-group {
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
}
.setting-btn {
  background-color: var(--body-color);
  color: var(--primary-color);
  margin-top: 20px;
  height: 75px;
  width: 247px;
  box-shadow: 0px 0px 9px #a1a1a129;
  border-radius: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.setting-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.card-padding {
  padding: 15px;
}
.action-btn {
  background-color: var(--primary-color);
  color: var(--white-color);
  border-radius: 9px;
  height: 52px;
  width: 247px;
}
</style>
