(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{673:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(12),r(96),r(64),r(37),r(497)),c=r(503),l=r(498),m={name:"utility",components:{Loader:o.default,Status:l.default},props:{msg:String,img:String},data:function(){return{show:Boolean,loader:!1,status:!1,state:null,message:null,user:"",network:"",networks:[{id:1,name:"Airtel"},{id:2,name:"Glo"},{id:3,name:"Mtn"},{id:4,name:"9mobile"}],form:{amount:"",beneficiaryNumber:"",pin:""}}},methods:{resetState:function(){this.status=!1},close:function(){this.$modal.hideAll(),console.log("calling")},runAirtel:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(c.a)().post("http://52.149.222.131:5009/api/v1/paysure/transaction/airtimevtu/airtel",e,{headers:{Authorization:"Bearer ".concat(t)}});case 3:0===(o=n.sent).data.responseCode?(r.loader=!1,r.status=!0,r.state="success",r.message="Operation Sucessful"):(r.loader=!1,r.status=!0,r.state="failed",r.message="Operation Failed",r.$toast.open({message:'<p style="color:white;">'.concat(o.data.responseMessage,"</p>"),type:"error",duration:5e3,dismissible:!0,position:"top-right"})),n.next=14;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0),r.loader=!1,r.status=!0,r.state="failed",r.message="Operation Failed";case 14:case"end":return n.stop()}}),n,null,[[0,7]])})))()},runGlo:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(c.a)().post("http://52.149.222.131:5009/api/v1/paysure/transaction/airtimevtu/glo",e,{headers:{Authorization:"Bearer ".concat(t)}});case 3:0===n.sent.data.responseCode?(r.loader=!1,r.status=!0,r.state="success",r.message="Operation Sucessful"):(r.loader=!1,r.status=!0,r.state="failed",r.message="Operation Failed"),n.next=14;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0),r.loader=!1,r.status=!0,r.state="failed",r.message="Operation Failed";case 14:case"end":return n.stop()}}),n,null,[[0,7]])})))()},run9mobile:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(c.a)().post("http://52.149.222.131:5009/api/v1/paysure/transaction/airtimevtu/9mobile",e,{headers:{Authorization:"Bearer ".concat(t)}});case 3:0===n.sent.data.responseCode?(r.loader=!1,r.status=!0,r.state="success",r.message="Operation Sucessful"):(r.loader=!1,r.status=!0,r.state="failed",r.message="Operation Failed"),n.next=14;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0),r.loader=!1,r.status=!0,r.state="failed",r.message="Operation Failed";case 14:case"end":return n.stop()}}),n,null,[[0,7]])})))()},runMtn:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(c.a)().post("http://52.149.222.131:5009/api/v1/paysure/transaction/airtimevtu/mtn",e,{headers:{Authorization:"Bearer ".concat(t)}});case 3:0===n.sent.data.responseCode?(r.loader=!1,r.status=!0,r.state="success",r.message="Operation Sucessful"):(r.loader=!1,r.status=!0,r.state="failed",r.message="Operation Failed"),n.next=14;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0),r.loader=!1,r.status=!0,r.state="failed",r.message="Operation Failed";case 14:case"end":return n.stop()}}),n,null,[[0,7]])})))()},onchange:function(e){this.network=e.target.value},encryptData:function(data,e){return btoa(this.$CryptoJS.HmacSHA256(JSON.stringify(data),e).toString())},sendRequest:function(){this.loader=!0;var e=localStorage.getItem("token");this.user=JSON.parse(localStorage.getItem("user"));var t={amount:this.form.amount,walletId:this.user.walletId,beneficiaryNumber:this.form.beneficiaryNumber,channel:"Web",encryptedData:this.encryptData("amount=".concat(this.form.amount,"&beneficiaryNumber=").concat(this.form.beneficiaryNumber,"&merchantCode=").concat(this.user.merchantCode,"&channel=Web"),e),extraFields:{imei:"",plainText:"amount=".concat(this.form.amount,"&beneficiaryNumber=").concat(this.form.beneficiaryNumber,"&merchantCode=").concat(this.user.merchantCode,"&channel=Web")},merchantCode:this.user.merchantCode,pin:this.form.pin,transactionTime:(new Date).toISOString().substr(0,10)};switch(this.network){case"1":this.runAirtel(t,e);break;case"2":this.runGlo(t,e);break;case"3":this.runMtn(t,e);break;case"4":this.run9mobile(t,e)}}}},d=r(63),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container center col-lg-12 mt-3"},[n("Loader",{directives:[{name:"show",rawName:"v-show",value:e.loader,expression:"loader"}]}),e._v(" "),e.status?n("Status",{attrs:{state:e.state,message:e.message,resetState:e.resetState}}):e._e(),e._v(" "),n("div",{staticClass:"col-lg-5 card"},[n("div",{staticStyle:{margin:"20px"}},[n("button",{staticClass:"back-btn",on:{click:e.close}},[n("i",{staticClass:"fa fa-chevron-left"}),e._v(" Go Back\n      ")])]),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.sendRequest(t)}}},[n("h5",{staticClass:"center card-head bold-text"},[e._v("\n        "+e._s(e.msg?e.msg:"cable")+"\n        "),n("img",{staticClass:"img-fluid ml-4 icon",attrs:{src:r(518)("./"+e.img)}})]),e._v(" "),n("div",{staticClass:" "},[n("div",{staticClass:"col"},[n("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[e._v("Amount")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.amount,expression:"form.amount"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"",autocomplete:"off",required:""},domProps:{value:e.form.amount},on:{input:function(t){t.target.composing||e.$set(e.form,"amount",t.target.value)}}})])]),e._v(" "),n("div",{staticClass:" "},[n("div",{staticClass:"col"},[n("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[e._v("Select Network")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.network,expression:"network"}],staticClass:"form-control",on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.network=t.target.multiple?r:r[0]},function(t){return e.onchange(t)}]}},[n("option",{attrs:{selected:"",disabled:""}},[e._v("Select a network")]),e._v(" "),e._l(e.networks,(function(t,r){return n("option",{key:r,domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)]),e._v(" "),n("div",{staticClass:"col"},[n("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[e._v("Phone Number")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.beneficiaryNumber,expression:"form.beneficiaryNumber"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"",required:""},domProps:{value:e.form.beneficiaryNumber},on:{input:function(t){t.target.composing||e.$set(e.form,"beneficiaryNumber",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"col"},[n("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[e._v("Transaction PIN")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.pin,expression:"form.pin"}],staticClass:"form-control",attrs:{type:"password",id:"formGroupExampleInput",placeholder:"",required:""},domProps:{value:e.form.pin},on:{input:function(t){t.target.composing||e.$set(e.form,"pin",t.target.value)}}})])]),e._v(" "),e._m(0)])])],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"center mt-5",staticStyle:{padding:"20px"}},[r("button",{staticClass:"action-btn",attrs:{type:"submit"}},[e._v("\n          Procced\n        ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Loader:r(497).default,Status:r(498).default})}}]);