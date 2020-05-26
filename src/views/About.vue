<template>
  <div class="about">
    <top class="top"></top>About Page
    <bottom class="bottom"></bottom>
  </div>
</template>
<script>
import Top from "../components/Top";
import Bottom from "../components/Bottom";
export default {
  components: {
    Top,
    Bottom
  },
  data: () => ({}),

  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.about {
  min-height: 100vh;
  background-color: $primary-color;
}
.bottom {
  position: fixed;
  bottom: 0;
  transform: translateY(1rem);
}
</style>
