// var aesjs = require("aes-js");
import Vue from "vue";
import aesjs from "aes-js";

Vue.use(aesjs);
Vue.prototype.$aejs = aesjs;
