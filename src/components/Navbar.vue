<template>
  <div class="navBar">
    <div v-if="isLanding" class="landingNav" v-on:click="openNav"></div>

    <div v-if="!isLanding" class="btn" v-on:click="openNav" >
      <img src="../assets/graphics/navicon.svg" alt="Navigation icon" />
    </div>
    <div id="nav" class="overlay">
      <div class="btn" v-on:click="closeNav">
        <img src="../assets/graphics/close.svg" alt="Close btn"  />
      </div>

      <div class="overlay-content">
        <router-link tag="a" to="/menu">Meny</router-link>_______
        <router-link tag="a" to="/about">Vårt kaffe</router-link>_______
        <router-link tag="a" to="/Profile">Min profil</router-link>_______
        <router-link tag="a" to="/status">Order Status</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({}),

  methods: {
    openNav() {
      document.getElementById("nav").style.width = "100%";
    },
    closeNav() {
      document.getElementById("nav").style.width = "0%";
    }
  },
  computed: {
    isLanding() {
      if (this.$route.name == "Landing") {
        return true;
      } else {
        return false;
      }
    },
    
  },

watch:{
    $route (){
       this.closeNav()
    }
} 
};
</script>

<style lang="scss" scoped>
.btn {
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  position: absolute;
  top: 20px;
  left: 15px;
  background-color: #f1f1f1;
  border-radius: 50%;
  display: flex;

  img {
    width: inherit;
  }
}

.landingNav {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 1; /* Sets navbar in correct layer between landingpage and nav overlay */
}

.overlay {
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0); /* Black fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */

  .overlay-content {
    position: relative;
    top: 25%; /* 25% from the top */
    width: 100%; /* 100% width */
    text-align: center; /* Centered text/links */
    margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */

    a {
      padding: 8px;
      text-decoration: none;
      font-size: 36px;
      font-weight: bold;
      color: #f1f1f1;
      display: block; /* Display block instead of inline */
      transition: 0.3s; /* Transition effects on hover (color) */

      &.router-link-exact-active {
        color: #42b983;
      }
    }

    a:hover {
      color: #42b983;
    }
  }
}
</style>