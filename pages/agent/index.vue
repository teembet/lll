<template>
  <div>
    <Nav />
    <section class="box section-head">
      <div class="container mt-5">
        <div
          class="row d-flex section-head  mx-n2 mx-lg-n3"
          style="margin:0% 5%"
        >
          <div class="col-lg-5">
            <img src="../../assets/images/agent-1.png" class="img-fluid" />
          </div>
          <div class="col-lg-6 left">
            <h1 class="white-text">Become An Agent</h1>
            <p class="white-text mt-3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren
            </p>
            <div class="input-group mb-3 mt-5">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                v-model="email"
              />
              <div class="input-group-append">
                <router-link
                  tag="button"
                  :to="{ path: '/agent-register', params: { email } }"
                  class="btn btn-search white-text"
                  type="button"
                  >Get Started</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="">
      <div class="mt-5">
        <h3 class="center">Benefits of Becoming an agent</h3>
        <div class="container mt-3 bkg">
          <div class="row section-head mt-5">
            <div class="col-lg-4">
              <div class="card">
                <div class="center">
                  <img class="img-fluid " src="../../assets/images/41.svg" />
                </div>

                <h3 class="center">Sales Improvement</h3>
                <div class="card-body center">
                  Gain valuable tips and hacks you need to create an appealing
                  resume and navigate interview scenarios.
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="center">
                  <img class="img-fluid " src="../../assets/images/41.svg" />
                </div>

                <h3 class="center">Sales Improvement</h3>
                <div class="card-body center">
                  Gain valuable tips and hacks you need to create an appealing
                  resume and navigate interview scenarios.
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="center">
                  <img class="img-fluid " src="../../assets/images/41.svg" />
                </div>

                <h3 class="center">Sales Improvement</h3>
                <div class="card-body center">
                  Gain valuable tips and hacks you need to create an appealing
                  resume and navigate interview scenarios.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="">
      <div class="mt-5">
        <h3 class="center">Benefits of Becoming an agent</h3>
        <div class="container mt-3 bkg">
          <div class="row section-head mt-5">
            <div class="col-lg-4">
              <div class="card">
                <div class="center">
                  <img class="img-fluid " src="../../assets/images/41.svg" />
                </div>

                <h3 class="center">Sales Improvement</h3>
                <div class="card-body center">
                  Gain valuable tips and hacks you need to create an appealing
                  resume and navigate interview scenarios.
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="center">
                  <img class="img-fluid " src="../../assets/images/41.svg" />
                </div>

                <h3 class="center">Sales Improvement</h3>
                <div class="card-body center">
                  Gain valuable tips and hacks you need to create an appealing
                  resume and navigate interview scenarios.
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="center">
                  <img class="img-fluid " src="../../assets/images/41.svg" />
                </div>

                <h3 class="center">Sales Improvement</h3>
                <div class="card-body center">
                  Gain valuable tips and hacks you need to create an appealing
                  resume and navigate interview scenarios.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="">
      <div class="container center">
        <div class="col-lg-8">
          <h2 style="text-align:center">
            Become a Paysure Agent Today!
          </h2>
          <div class="search">
            <div class="input-group mb-3 mt-3">
              <input
                type="email"
                class="form-control"
                placeholder="Enter your Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <router-link
                  tag="button"
                  :to="{ name: 'agentonboarding', params: { email } }"
                  class="btn btn-search white-text"
                  type="button"
                  >Get Started</router-link
                >
              </div>
            </div>
          </div>
          <p class="mt-3" style="text-align:center">
            Already have an account?
            <span style="color:var(--primary-color)">Sign In</span>
          </p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/nav";
import Footer from "@/components/footer";
export default {
  name: "becomeAgent",
  components: { Nav, Footer },
  data() {
    return {
      email: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
.box {
  background: url(../../assets/images/cover-agent.png) round;
  background-size: cover;
  max-width: 100%;
  height: auto;
}

.section-head {
  display: flex;
  justify-content: center;
  align-items: center;
}
.left {
  margin-left: 75px;
}

@media screen and (max-width: 992px) {
  .left {
    margin-left: 0px;
  }
}
section {
  margin-bottom: 1rem;
}

.btn-search {
  background-color: var(--primary-color);
}
blockquote {
  border: none;
  margin: 0;
  font-family: Georgia, Times, serif;
  font-style: italic;
  font-size: 32px;
  color: white;
}
.card-body {
  text-align: center !important;
  font-size: var(--smaller-font-size);
  color: var(--text-color);
}
h3 {
  font-size: var(--normal-font-size);
}

.card {
  background-color: var(--body-color);
}
.bkg {
  background-color: var(--body-color);
}
section {
  background-color: var(--body-color);
}
input {
  text-decoration: none;
  outline: 1px solid var(--primary-color);
}
</style>
