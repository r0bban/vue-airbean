<template>
  <div class="status">
    <div class="status-container">
      <div class="ordernumberAndIcon">
        <p>Ordernummer <strong>{{getOrdernumber}}</strong></p>
        <img src="@/assets/graphics/drone.svg" alt="drone">
      </div>
      <div class="deliveryTime">
        <h1>Din beställning är på väg!</h1>
        <p><strong>{{getDeliverytime}}</strong> minuter</p>
      </div>
      <button class="coolBtn" @click="gotoProfile">Ok, cool!</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Status",
  methods: {
    gotoProfile(){
      this.$router.push("/profile")
    }
  },
  computed: {
    getOrdernumber() {
      return "#12DV23F"
    },
    getDeliverytime(){
      return Math.floor(Math.random() * 15) + 5;
    }
  }
};
</script>

<style lang="scss" scoped>
.status {
  color: white;
  padding: 1rem;
  min-height: 100vh;
  background: rgb(225,92,69);
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
.coolBtn {
  
  
}
.ordernumberAndIcon img {
  margin: 2rem 0 0 0;
}
.deliveryTime h1 {
  margin: 0;
  font-size: 2.2rem;
}
</style>