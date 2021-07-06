<template>
  <div style="z-index : 999999" class="app-modal-overlay">
    <div class="app-modal-div success" style="text-align:center">
      <div v-if="state == 'success'">
        <div class="alert-icon"></div>
        <div class="alert-message">{{ message }}</div>
        <div
          @click="resetState"
          style="margin-top:30px;cursor:pointer"
          class="app-modal-button"
        >
          Close
        </div>
      </div>

      <div v-else>
        <div class="alert-icon failed"></div>
        <div class="alert-message">{{ message }}</div>
        <div
          @click="resetState"
          style="margin-top:30px;cursor:pointer"
          class="app-modal-button"
        >
          Try Again
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["state", "message", "resetState"],
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

.app-modal-div {
  position: relative;
  width: 35%;
  height: auto;
  padding: 35px 46px 30px;
  border-radius: 20px;
  background-color: #fff;
}

.app-modal-div.success {
  padding: 100px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 30%;
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

.app-modal-header {
  color: #292929;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(216, 216, 216);
}
</style>
