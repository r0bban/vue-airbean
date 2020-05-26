<template>
  <div class="landing">
    <img
      src="../assets/graphics/intro-graphic-left.svg"
      alt="Bush illustration right left"
      class="left"
    />

    <img src="../assets/graphics/airbean-landing.svg" alt class="middle" />

    <img
      src="../assets/graphics/intro-graphic-right.svg"
      alt="Bush illustration right"
      class="right"
    />
  </div>
</template> 
<script>
export default {
  data: () => ({}),

  methods: {}
};
</script>

<style lang="scss" scoped>
.landing {
  margin: 0;
  background-color: #38846d;
  position: relative;
  // display: grid;
  height: 100vh;
  // grid-template-columns: repeat(3, 1fr);
  display: flex;
  justify-content: space-between;

  .middle {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 100%;
  }

  img:not(.middle) {
    height: 100%;
    object-fit: cover;
  }
}
</style>