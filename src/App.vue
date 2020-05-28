<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
  },
  data: () => ({})
};
</script>


<style lang="scss">
@import "./assets/scss/_variables.scss";

body {
  margin: 0;
  min-width: 375px;
}

#app {
  font-family: $primary-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  position: relative;

  p{
    font-family: $secondary-font;
  }

  button:not(.add-to-cart){
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    height: 3rem;
    border: 0;
    border-radius: 50px;
    font: 700 1.5rem $secondary-font;
    color: $secondary-color;
    background: $primary-color; 

    

  }
  .dark:not(.add-to-cart) {
      color: $primary-color;
      background: $secondary-color;
    }
  
  
  
}
</style>
