<template>
  <div class="home">
    <Nav />
    <div class="container not-found center">
      <div class="row center">
        <div class="col-lg-5">
          <h1 class="not-heading">Error 404</h1>
          <h4 class="mt-3 text-color">
            The page you're looking for cannot be found
          </h4>
        </div>
        <div class="col-lg-7">
          <img src="../../assets/images/not-found.png" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/nav";
export default {
  name: "notfound",
  components: {
    Nav
  }
};
</script>

<style>
.not-found {
  height: 90vh;
  background: var(--body-color);
}
.not-heading {
  font-weight: 900;
  color: var(--text-color);
}
</style>
