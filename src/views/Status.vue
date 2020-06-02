<template>
  <div class="status">
    <div class="status-container">
      <div class="ordernumberAndIcon">
        <p v-if="currentOrder">
          Ordernummer
          <strong>#{{currentOrder.id}}</strong>
        </p>
        <img src="@/assets/graphics/drone.svg" alt="drone" />
      </div>
      <div v-if="currentOrder" class="deliveryTime">
        <h1>Din beställning är på väg!</h1>
        <p>
          <strong>{{getETA}}</strong> minuter
        </p>
      </div>
      <div>
      <button v-if="currentOrder" class="myButton" @click="gotoProfile">Ok, cool!</button>
      <h1 v-if="!currentOrder">Ops, hittade ingen pågående order!</h1>
      <button v-if="!currentOrder" class="myButton" @click="gotoMenu">Lägg en order!</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Status",
  methods: {
    gotoProfile() {
      this.$router.push("/profile");
    },
    gotoMenu() {
      this.$router.push("/menu");
    }
  },
  computed: {
    // getOrdernumber() {
    //   return "#12DV23F";
    // },
    fakeETA() {
      return Math.floor(Math.random() * 15) + 5;
    },
    getETA() {
      let eta = new Date(this.$store.state.confirmedOrder.eta);
      let now = new Date();
      let diff = (eta - now);
      diff = Math.round((diff/1000)/60)
      return diff;
    },
    currentOrder(){
      return this.$store.state.confirmedOrder
    }
  },
};
</script>

<style lang="scss" scoped>
.status {
  color: white;
  padding: 1rem;
  min-height: 100vh;
  background: rgb(225, 92, 69);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.status-container {
  padding: 2rem;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.ordernumberAndIcon img {
  margin: 2rem 0 0 0;
}
.deliveryTime h1 {
  margin: 0;
  font-size: 2.2rem;
}
</style>