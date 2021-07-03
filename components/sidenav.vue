<template>
  <div id="sidebar-wrapper">
    <ul class="sidebar-nav" id="toolBtns">
      <li class="jover mt-5">
        <router-link
          exact-active-class="active"
          to="/dashboard/overview"
          @click="activeBtn = 'btn1'"
          :class="{ active: activeBtn === 'btn1' }"
        >
          <img
            style="width:17px;margin-right:18px"
            src="../assets/images/home.svg"
            class="img-fluid"
          />
          Dashboard
        </router-link>
      </li>
      <li class="jover">
        <router-link
          exact-active-class="active"
          to="/dashboard/send-money"
          @click="activeBtn = 'btn2'"
          :class="{ active: activeBtn === 'btn2' }"
        >
          <img
            style="width:17px;margin-right:18px"
            src="../assets/images/transfer.svg"
            class="img-fluid"
          />
          Send Money
        </router-link>
      </li>
      <li class="jover">
        <router-link
          exact-active-class="active"
          to="/dashboard/airtime"
          @click="activeBtn = 'btn3'"
          :class="{ active: activeBtn === 'btn3' }"
        >
          <img
            style="width:17px;margin-right:18px"
            src="../assets/images/recharge.svg"
            class="img-fluid"
          />
          Recharge Airtime
        </router-link>
      </li>
      <li class="jover">
        <router-link
          exact-active-class="active"
          to="/dashboard/bills"
          @click="activeBtn = 'btn4'"
          :class="{ active: activeBtn === 'btn4' }"
        >
          <img
            style="width:17px;margin-right:18px"
            src="../assets/images/bills.svg"
            class="img-fluid"
          />
          Pay Bills
        </router-link>
      </li>
      <li class="jover">
        <router-link
          exact-active-class="active"
          to="/dashboard/bills"
          @click="activeBtn = 'btn4'"
          :class="{ active: activeBtn === 'btn4' }"
        >
          <img
            style="width:17px;margin-right:18px"
            src="../assets/images/bills.svg"
            class="img-fluid"
          />
          Transactions
        </router-link>
      </li>
      <li class="jover">
        <router-link
          exact-active-class="active"
          to="/dashboard/bills"
          @click="activeBtn = 'btn4'"
          :class="{ active: activeBtn === 'btn4' }"
        >
          <img
            style="width:17px;margin-right:18px"
            src="../assets/images/bills.svg"
            class="img-fluid"
          />
          Settings
        </router-link>
      </li>
      <li @click="Logout" class="jover" style="margin-top:8rem !important">
        <a>
          <img
            style="width:17px;margin-right:18px"
            src="../assets/images/logout.svg"
            class="img-fluid"
          />
          Log Out
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sidenav",
  components: {},
  data() {
    return {
      activeBtn: ""
    };
  },
  methods: {
    Logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
body {
  overflow-x: hidden;
}

/* Toggle Styles */

#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-left: 250px;
}

#sidebar-wrapper {
  z-index: 1000;
  position: relative;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background-color: var(--body-color);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  border-right: 1px solid rgb(240, 240, 240);
}

#wrapper.toggled #sidebar-wrapper {
  width: 250px;
}

#page-content-wrapper {
  width: 100%;
  position: absolute;
  padding: 15px;
}

#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
}
.icons {
  width: 20%;
}
/* Sidebar Styles */

.sidebar-nav {
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
}

.logout {
  border-bottom: 1px solid rgba(255, 255, 255, 0.02);
  cursor: pointer;
  margin: 20px 10px;
  font-size: var(--small-font-size);
  font-weight: 600;
  text-decoration: none;
  width: 180px;
  height: 50px;
  background: #fcfcfc;
  color: var(--primary-color);
  border-radius: 10px;
  text-decoration: none;
  display: flex;
  transition: 0.5s;
  align-items: center;
  justify-content: center;
}

.sidebar-nav li {
  text-indent: 20px;
  line-height: 40px;
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  text-decoration: none;
}

.jover a {
  color: var(--primary-color);
}

.space-y {
  margin-top: 8rem;
}

.sidebar-nav li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.02);
  cursor: pointer;
  margin: 20px 10px;
  font-size: var(--small-font-size);
  font-weight: 600;
  text-decoration: none;
  width: 180px;
  height: 50px;
  background: #fcfcfc;
  color: var(--primary-color);
  border-radius: 10px;
  text-decoration: none;
  display: flex;
  transition: 0.5s;
  align-items: center;
}

.sidebar-nav li:hover {
  width: 180px;
  font-size: var(--small-font-size);
  height: 50px;
  background: #eee8ff;
  color: var(--primary-color);
  border-radius: 10px;
  text-decoration: none;
  display: flex;
  transition: 0.5s;
  align-items: center;
}
.active {
  width: 180px;
  font-size: var(--small-font-size);
  height: 50px;
  background: #eee8ff;
  color: var(--primary-color);
  border-radius: 10px;
  text-decoration: none;
  display: flex;
  transition: 0.5s;
  align-items: center;
  justify-content: center;
  /* transform: translate(10px); */
}

@media (min-width: 768px) {
  #wrapper {
    padding-left: 250px;
  }

  #wrapper.toggled {
    padding-left: 0;
  }

  #sidebar-wrapper {
    width: 250px;
  }

  #wrapper.toggled #sidebar-wrapper {
    width: 0;
  }

  #page-content-wrapper {
    padding: 20px;
    position: relative;
  }

  #wrapper.toggled #page-content-wrapper {
    position: relative;
    margin-right: 0;
  }
}
</style>

<!-- <template>
//   <div>
//     <div class="fix-right">
//   <div class="flex"></div>
//   <span class="social">Twitter</span>
//     <span class="social">Facebook</span>
//   <span class="social">Instagram</span>

// </div>  -->
//
<!-- <div class="fix-left">
//     <div class="flex">

//         <div class="home side-btn">
//            <router-link>Home</router-link>
//         </div>
//         <br>
//         <div class="airtime mt-3 side-btn">
//           <router-link> Buy Airtime</router-link>
//         </div>
//         <br>
//         <div class="bills mt-3 side-btn">
//  <router-link>Pay Bills</router-link>
//         </div>
//         <br>
// <div class="transfer mt-3 side-btn">
//     <router-link> Transfer</router-link>
// </div>
//     </div>

//     </div>
// <div class="fix-right">
// <div class="container ">
//   <div class="row">
//     <div class="col-lg-3">
// <div class="card">
// <div class="icon">

// </div>
// <div class="body">
//   <h4>Buy Airtime</h4>
//   <p>
//     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
//   </p>
// </div>
// </div>
//     </div>
//     <div class="col-lg-3">
//       <div class="card">
// <div class="icon">

// </div>
// <div class="body">
//   <h4>Buy Airtime</h4>
//   <p>
//     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
//   </p>
// </div>
//       </div>
//     </div>
//     <div class="col-lg-3">
//       <div class="card">
// <div class="icon">

// </div>
// <div class="body">
//   <h4>Buy Airtime</h4>
//   <p>
//     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
//   </p>
// </div>
//       </div>
//     </div>
//     </div>
//   </div>
// </div>

//   </div>
// </template>

// <script>
// export default {
// name:'SideNav'
// }
// </script>

// <style scoped>
// @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');

// .flex{
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
// }
// .fix-right{
//   position: fixed;
//     top: 300px;
//   right: 0px;

//   /* transform-origin: left top 0; */
// }
// .fix-left{
//   position: fixed;
//     top: 200px;
//   left: 40px;

//   /* transform-origin: left top 0; */
// }
// .social{
//     font-family: 'Rubik', sans-serif;
//     font-size: 12px;
//    margin-left: 4rem;

// }
// .side-btn{
// display: flex;
// align-items: center;


// }

// router-link{
//  width:100px;
//    height: 60px;
//    background: #5323D7;
//    transition: 2s;
// }
// router-link:hover{
//     width:100px;
//    height: 60px;
//    left: 30px;
//    background: #fff;

// }

// @media screen and (max-width:768px) {
//     .fix-right{
//         display: none;
//     }
//     .fix-left{
//         display: none;
//     }
// };
// </style>-->
