(window.webpackJsonp=window.webpackJsonp||[]).push([[26,4,6,8,13,23],{497:function(e,t,r){"use strict";r.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loader-class"},[t("img",{staticClass:"loader-img",attrs:{src:r(508),alt:""}})])}],n=(r(512),r(63)),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),o,!1,null,"b80311a8",null);t.default=component.exports},498:function(e,t,r){"use strict";r.r(t);var o={props:["state","message","amount","ref","service","name","resetState","retryState"],methods:{}},n=(r(522),r(63)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-modal-overlay",staticStyle:{"z-index":"999999"}},[r("div",{staticClass:"app-modal-div status",staticStyle:{"text-align":"center"}},["success"==e.state?r("div",{staticClass:"center-receipt"},[e._m(0),e._v(" "),e.amount?r("div",{staticClass:"amount"},[r("p",{staticClass:"small-grey"},[e._v("Amount")]),e._v(" "),r("p",{staticClass:"black-text"},[e._v("\n          "+e._s(e.amount)+"\n        ")])]):e._e(),e._v(" "),e.name?r("div",{staticClass:"name"},[r("p",{staticClass:"small-grey"},[e._v("\n          Beneficiary Name\n        ")]),e._v(" "),r("p",{staticClass:"black-text"},[e._v("\n          "+e._s(e.name)+"\n        ")])]):e._e(),e._v(" "),e.ref?r("div",{staticClass:"ref mt-2"},[r("p",{staticClass:"small-grey"},[e._v("Reference")]),e._v(" "),r("p",{staticClass:"black-text"},[e._v("\n          "+e._s(e.ref)+"\n        ")])]):e._e(),e._v(" "),e.service?r("div",{staticClass:"service mt-2"},[r("p",{staticClass:"small-grey"},[e._v("Service")]),e._v(" "),r("p",{staticClass:"black-text"},[e._v("\n          "+e._s(e.service)+"\n        ")])]):e._e(),e._v(" "),e.message?r("div",{staticClass:"alert-message mt-2"},[r("p",{staticClass:"small-grey"},[e._v("Message")]),e._v(" "),r("p",{staticClass:"black-text"},[e._v("\n          "+e._s(e.message)+"\n        ")])]):e._e(),e._v(" "),e._m(1),e._v(" "),r("div",{staticClass:"app-modal-button",staticStyle:{"margin-top":"30px",cursor:"pointer"},on:{click:e.resetState}},[e._v("\n        Done\n      ")]),e._v(" "),r("div",{staticClass:" receipt mt-3",on:{click:e.resetState}},[r("a",[e._v("\n          Download full transaction receipt\n        ")])])]):r("div",{staticClass:"center-receipt"},[r("h4",{staticClass:"primary-text mb-5"},[e._v("Transaction Receipt")]),e._v(" "),e._m(2),e._v(" "),e.amount?r("div",{staticClass:"amount"},[r("p",{staticClass:"small-grey"},[e._v("Amount")]),e._v(" "),r("p",{staticClass:"black-text"},[e._v("\n          "+e._s(e.amount)+"\n        ")])]):e._e(),e._v(" "),e.name?r("div",{staticClass:"name"},[r("p",{staticClass:"small-grey"},[e._v("\n          Beneficiary Name\n        ")]),e._v(" "),r("p",{staticClass:"black-text"},[e._v("\n          "+e._s(e.name)+"\n        ")])]):e._e(),e._v(" "),e.ref?r("div",{staticClass:"ref mt-2"},[r("p",{staticClass:"small-grey"},[e._v("Reference")]),e._v(" "),r("p",{staticClass:"black-text"},[e._v("\n          "+e._s(e.ref)+"\n        ")])]):e._e(),e._v(" "),e.service?r("div",{staticClass:"service mt-2"},[r("p",{staticClass:"small-grey"},[e._v("Service")]),e._v(" "),r("p",{staticClass:"black-text"},[e._v("\n          "+e._s(e.service)+"\n        ")])]):e._e(),e._v(" "),e.message?r("div",{staticClass:"alert-message mt-2"},[r("p",{staticClass:"small-grey"},[e._v("Message")]),e._v(" "),r("p",{staticClass:"black-text"},[e._v("\n          "+e._s(e.message)+"\n        ")])]):e._e(),e._v(" "),e._m(3),e._v(" "),r("div",{staticClass:"app-modal-button",staticStyle:{"margin-top":"30px",cursor:"pointer"},on:{click:e.resetState}},[e._v("\n        Done\n      ")]),e._v(" "),r("div",{staticClass:" receipt mt-3",on:{click:e.retryState}},[r("a",[e._v("\n          Retry Transaction\n        ")])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"alert-icon mb-3"},[t("i",{staticClass:"fas fa-check-circle icon-status"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"status mt-2"},[r("p",{staticClass:"small-grey"},[e._v("Status")]),e._v(" "),r("p",{staticClass:"success-status"},[e._v("\n          Successful\n        ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"alert-icon failed mb-3"},[t("i",{staticClass:"fas fa-times icon-status"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"status mt-2"},[r("p",{staticClass:"small-grey"},[e._v("Status")]),e._v(" "),r("p",{staticClass:"failed-status"},[e._v("\n          Failed\n        ")])])}],!1,null,null,null);t.default=component.exports},499:function(e,t,r){"use strict";r.r(t);var o=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",{staticClass:"footer"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6 footer-container"},[o("img",{staticClass:"img-fluid",staticStyle:{"max-width":"100%",height:"30px !important"},attrs:{src:r(500)}})]),e._v(" "),o("div",{staticClass:"col-lg-6",staticStyle:{display:"flex","justify-content":"center","align-items":"center","margin-top":"10px"}},[o("ul",{staticClass:"footer_link"},[o("li",{staticClass:"ml-3 footer_link "},[e._v("Services")]),e._v(" "),o("li",{staticClass:"ml-3 footer_link "},[e._v("Company")]),e._v(" "),o("li",{staticClass:"ml-3 footer_link "},[e._v("Become An Agent")]),e._v(" "),o("li",{staticClass:"ml-3 footer_link "},[e._v("Contact Us")])])])])])])}],n={name:"Footer"},l=(r(510),r(63)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),o,!1,null,null,null);t.default=component.exports;installComponents(component,{Footer:r(499).default})},500:function(e,t,r){e.exports=r.p+"img/paysure_White.3284e91.png"},501:function(e,t,r){var content=r(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("5eaf2020",content,!0,{sourceMap:!1})},502:function(e,t,r){var content=r(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("245de3fe",content,!0,{sourceMap:!1})},503:function(e,t,r){"use strict";r(12);var o=r(77),n=r.n(o);t.a=function(){var e="http://52.149.222.131:5009/api/v1/",t={};localStorage.token&&(t.Authorization="Bearer ".concat(localStorage.token));var r=n.a.create({baseURL:e,headers:t});return r.interceptors.response.use((function(e){return new Promise((function(t,r){t(e)}))}),(function(e){if(!e.response)return new Promise((function(t,r){r(e)}));e.response.status,localStorage.removeItem("token"),localStorage.removeItem("user"),window.location="/login",console.log(e)})),r}},508:function(e,t,r){e.exports=r.p+"img/loaderr.23e6408.gif"},510:function(e,t,r){"use strict";r(501)},511:function(e,t,r){var o=r(55)(!1);o.push([e.i,".footer{padding:30px 10px;background-color:var(--primary-color)}.footer-container{display:flex;justify-content:flex-start;align-items:center}.footer_link{color:var(--white-color);grid-template-columns:auto auto auto auto;display:grid;margin:0}@media screen and (max-width:768px){.footer-container{flex-direction:column}.footer_link{grid-template-columns:auto auto;display:grid;margin-left:0;margin-top:5px}}",""]),e.exports=o},512:function(e,t,r){"use strict";r(502)},513:function(e,t,r){var o=r(55)(!1);o.push([e.i,".loader-class[data-v-b80311a8]{display:flex;background:hsla(0,0%,100%,.925);position:absolute;align-items:center;justify-content:center;width:100%;height:100%;left:0;top:0;z-index:999999}.loader-img[data-v-b80311a8]{width:150px}",""]),e.exports=o},516:function(e,t,r){var content=r(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("9b92c100",content,!0,{sourceMap:!1})},517:function(e,t,r){var content=r(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("d5f8a068",content,!0,{sourceMap:!1})},522:function(e,t,r){"use strict";r(516)},523:function(e,t,r){var o=r(55)(!1);o.push([e.i,".app-modal-overlay{position:fixed;left:0;top:0;right:auto;bottom:auto;z-index:100;overflow:visible;width:100%;height:100vh;background-color:rgba(0,0,0,.6)}.app-modal-overlay,.center-receipt{display:flex;justify-content:center;align-items:center}.center-receipt{flex-direction:column}.app-modal-div{position:relative;width:35%;height:auto;padding:35px 46px 30px;border-radius:20px;background-color:#fff}.app-modal-div.status{padding:10px;display:flex;width:20%;flex-direction:column;justify-content:center;align-items:center}.alert-icon{font-size:15px;font-weight:100}.app-modal-header{color:#292929;font-size:20px;font-weight:700;padding-bottom:20px;border-bottom:1px solid #d8d8d8}.success{color:#23d74d}.failed{color:#d7233c}.failed-status{color:#d7233c;font-weight:600}.success-status{color:#23d74d;font-weight:600}.app-modal-button{width:150px;color:var(--white-color);padding:10px;background-color:#23d74d;border-radius:10px}.receipt a{color:#2341d7!important;cursor:pointer;text-decoration:underline!important;font-weight:600}.receipt a,.small-grey{font-size:var(--smaller-font-size)}.small-grey{color:var(--text-color);opacity:.5}.icon-status{font-size:100px}.black-text{color:var(--text-color);font-weight:600}",""]),e.exports=o},524:function(e,t,r){"use strict";r(517)},525:function(e,t,r){var o=r(55)(!1);o.push([e.i,".modal-backdrop{position:fixed;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);display:flex;justify-content:center;align-items:center}.modal{background:#fff;box-shadow:2px 2px 20px 1px;display:flex;flex-direction:column}.modal-footer,.modal-header{padding:15px;display:flex}.modal-header{position:relative;border-bottom:1px solid #eee;color:#4aae9b;justify-content:space-between}.modal-footer{border-top:1px solid #eee;flex-direction:column}.modal-body{position:relative;padding:20px 10px}.btn-close{position:absolute;top:0;right:0;border:none;font-size:20px;padding:10px;cursor:pointer;font-weight:700;color:#4aae9b;background:transparent}.btn-green{color:#fff;background:#4aae9b;border:1px solid #4aae9b;border-radius:2px}.modal-fade-enter,.modal-fade-leave-to{opacity:0}.modal-fade-enter-active,.modal-fade-leave-active{transition:opacity .5s ease}",""]),e.exports=o},526:function(e,t,r){"use strict";r.r(t);var o={name:"modal",methods:{close:function(){this.$emit("close")}}},n=(r(524),r(63)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"modal-fade"}},[r("div",{staticClass:"modal-backdrop"},[r("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[r("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[e._t("header",[e._v("\n          This is the default tile!\n        ")]),e._v(" "),r("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close modal"},on:{click:e.close}},[e._v("\n          x\n        ")])],2),e._v(" "),r("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[e._t("body",[e._v("\n          This is the default body!\n        ")])],2),e._v(" "),r("footer",{staticClass:"modal-footer"},[e._t("footer",[e._v("\n          This is the default footer!\n        ")]),e._v(" "),r("button",{staticClass:"btn-green",attrs:{type:"button","aria-label":"Close modal"},on:{click:e.close}},[e._v("\n          Close me!\n        ")])],2)])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Footer:r(499).default})},544:function(e,t,r){"use strict";r.r(t);r(45),r(31),r(38),r(78),r(44),r(79);var o=r(6),n=r(35),l=(r(37),r(526)),c=r(77),d=r.n(c),m=r(59);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.default={name:"home",components:{modal:l.default},data:function(){return{isModalVisible:!1,message:"Hii",user:"",balance:0,banks:[],channels:["Web","POS"]}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(m.b)(["getUser"])),mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,e.$store.dispatch("getUser");case 3:e.getWalletBalance(),e.BankList();case 5:case"end":return t.stop()}}),t)})))()},methods:{BankList:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,d.a.post("http://52.149.222.131:5009/api/v1/paysure/lookup/transfers/banks?pageNumber=1&recordsPerPage=30",{},{headers:{Authorization:"Bearer ".concat(JSON.parse(e.getUser).token)}});case 3:r=t.sent,e.banks=r.data.data;case 5:case"end":return t.stop()}}),t)})))()},getWalletBalance:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,d.a.get("http://52.149.222.131:5009/api/v1/paysure/lookup/walletbalance/"+JSON.parse(e.getUser).walletId,{headers:{Authorization:"Bearer ".concat(JSON.parse(e.getUser).token)}});case 3:r=t.sent,e.balance=r.data.data.walletBalance;case 5:case"end":return t.stop()}}),t)})))()}}}},594:function(e,t,r){var content=r(642);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("72c25ebe",content,!0,{sourceMap:!1})},641:function(e,t,r){"use strict";r(594)},642:function(e,t,r){var o=r(55)(!1);o.push([e.i,".card{box-shadow:0 3px 15px rgba(0,0,0,.14118);background:var(--body-color)}.action-btn{background-color:var(--primary-color);color:var(--white-color);border-radius:9px;height:52px;width:247px}.card-head{color:var(--primary-color);padding:20px}",""]),e.exports=o},670:function(e,t,r){"use strict";r.r(t);var o=r(6),n=(r(37),r(497)),l=r(503),c=r(498),d=r(544),m={name:"sendmoney",props:["billname"],components:{Loader:n.default,Status:c.default},mixins:[d.default],data:function(){return{show:Boolean,loader:!1,status:!1,state:null,message:null,form:{amount:"",beneficiaryBankCode:"",beneficiaryAccountNumber:"",beneficiaryName:"",pin:"",senderName:"",senderAccountNumber:"",channel:"",narration:""}}},methods:{resetState:function(){this.status=!1},bankLookup:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={bankCode:e.form.beneficiaryBankCode,accountNumber:e.form.beneficiaryAccountNumber,amount:e.form.amount},t.prev=1,e.loader=!0,t.next=5,Object(l.a)().post("http://52.149.222.131:5009/api/v1/paysure/lookup/transfers/accountlookup",r,{headers:{Authorization:"Bearer ".concat(JSON.parse(e.getUser).token)}});case 5:0===(o=t.sent).data.responseCode?(e.loader=!1,e.form.beneficiaryName=o.data.data.accountName):(e.loader=!1,e.$toast.open({message:'<p style="color:white;">Invalid Account Number</p>',type:"error",duration:5e3,dismissible:!0,position:"top-right"})),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),e.loader=!1,e.$toast.open({message:'<p style="color:white;">'.concat(t.t0,"</p>"),type:"error",duration:5e3,dismissible:!0,position:"top-right"});case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()},sendRequest:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={amount:e.form.amount,beneficiaryBankCode:e.form.beneficiaryBankCode,beneficiaryAccountNumber:e.form.beneficiaryAccountNumber,beneficiaryName:e.form.beneficiaryName,pin:e.form.pin,walletId:JSON.parse(e.getUser).walletid,senderName:JSON.parse(e.getUser).merchantAccountName,senderAccountNumber:JSON.parse(e.getUser).merchantAccountNumber,merchantCode:JSON.parse(e.getUser).merchantCode,channel:"Web",narration:e.form.narration,encryptedData:"",extraFields:""},t.prev=1,e.loader=!0,t.next=5,Object(l.a)().post("http://52.149.222.131:5009/api/v1/paysure/transaction/transfers/fundtransfer",r,{headers:{Authorization:"Bearer ".concat(JSON.parse(e.getUser).token)}});case 5:0===t.sent.data.responseCode?(e.loader=!1,e.status=!0,e.state="success",e.message="Operation Sucessful"):(e.loader=!1,e.status=!0,e.state="failed",e.message="Operation Failed"),t.next=16;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),e.loader=!1,e.status=!0,e.state="failed",e.message="Operation Failed";case 16:case"end":return t.stop()}}),t,null,[[1,9]])})))()}}},f=(r(641),r(63)),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container center col-lg-12"},[r("Loader",{directives:[{name:"show",rawName:"v-show",value:e.loader,expression:"loader"}]}),e._v(" "),e.status?r("Status",{attrs:{state:e.state,message:e.message,resetState:e.resetState}}):e._e(),e._v(" "),r("div",{staticClass:"col-lg-5 card"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.sendRequest(t)}}},[r("h5",{staticClass:"center card-head bold-text"},[e._v("Send Money")]),e._v(" "),r("div",{staticClass:" "},[r("div",{staticClass:"col"},[r("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[e._v("Amount")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.amount,expression:"form.amount"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"",autocomplete:"off",required:""},domProps:{value:e.form.amount},on:{input:function(t){t.target.composing||e.$set(e.form,"amount",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:" "},[r("div",{staticClass:"col"},[r("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[e._v("Select Bank")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.beneficiaryBankCode,expression:"form.beneficiaryBankCode"}],staticClass:"form-control",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"beneficiaryBankCode",t.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:"",disabled:""}},[e._v("Select a Bank")]),e._v(" "),e._l(e.banks,(function(t,o){return r("option",{key:o,domProps:{value:t.bankCode}},[e._v(e._s(t.bankName))])}))],2)]),e._v(" "),r("div",{staticClass:"col"},[r("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[e._v("Account No")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.beneficiaryAccountNumber,expression:"form.beneficiaryAccountNumber"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"",autocomplete:"off",required:""},domProps:{value:e.form.beneficiaryAccountNumber},on:{blur:e.bankLookup,input:function(t){t.target.composing||e.$set(e.form,"beneficiaryAccountNumber",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:" mt-3"},[r("div",{staticClass:"col"},[r("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[e._v("Beneficiary Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.beneficiaryName,expression:"form.beneficiaryName"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"",autocomplete:"off",disabled:"",required:""},domProps:{value:e.form.beneficiaryName},on:{input:function(t){t.target.composing||e.$set(e.form,"beneficiaryName",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col"},[r("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[e._v("Pin")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.pin,expression:"form.pin"}],staticClass:"form-control",attrs:{type:"password",id:"formGroupExampleInput",placeholder:"",autocomplete:"off",required:""},domProps:{value:e.form.pin},on:{input:function(t){t.target.composing||e.$set(e.form,"pin",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col"},[r("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[e._v("Narration")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.narration,expression:"form.narration"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"",autocomplete:"off"},domProps:{value:e.form.narration},on:{input:function(t){t.target.composing||e.$set(e.form,"narration",t.target.value)}}})])]),e._v(" "),e._m(0)])])],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"center mt-5",staticStyle:{padding:"20px"}},[r("button",{staticClass:"action-btn",attrs:{type:"submit"}},[e._v("\n          Proceed\n        ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Loader:r(497).default,Status:r(498).default})}}]);