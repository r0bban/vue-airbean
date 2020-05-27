<template>
  <div class="profile">
    <top class="top" />
    <div id="login"  class="login" >
      <login-form @login="test" />
    </div>
  </div>
</template>
<script>
import Top from "../components/Top";
import LoginForm from "../components/LoginForm";
export default {
  Name: "Profile",
  components: {
    Top,
    LoginForm
  },
  data: () => ({}),

  methods: {
    test() {
      console.log("click registered");
      document.getElementById("login").style.height = "0%";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.profile {
  background-color: $secondary-color;
  color: $secondary-color;
  height: 100vh;

  .login {
    height: 100%;
    position: fixed; 
    // z-index: 1; 
    left: 0;
    overflow-y: hidden; 
    transition: 1.0s; 
  }
}
</style>