<template>
  <div class="cart-wrapper">
    <button v-if="!displayOrder" v-on:click="toggleShowOrder" class="cart-btn-minimized">
      <div class="cart-amount">
        <p class="amount">{{orderQuant}}</p>
      </div>
      <img src="@/assets/graphics/bag.svg" alt="Show cart" />
    </button>

    <div v-if="displayOrder" class="cart-lightbox-background">
      <div class="btn-wrapper">
        <button v-on:click="toggleShowOrder" class="cart-btn">
          <div class="cart-amount">
            <p class="amount">{{orderQuant}}</p>
          </div>
          <img src="@/assets/graphics/bag.svg" alt="Show cart" />
        </button>
        <div v-if="displayOrder" class="arrow-up"></div>
      </div>
      <div v-if="displayOrder" class="order-wrapper">
        <h1>Din beställning</h1>
        <div class="list-wrapper">
          <orderArticle
            v-for="article in orderArticles"
            :key="article.id"
            :article="article"
            v:style="margin-bottom: 10px"
          />
          <div class="total-amount">
            <h2>Total</h2>
            <h2>{{orderAmount}} kr</h2>
          </div>
          <p>inkl moms + drönarleverans</p>
          <button
            id="confirm-order"
            class="myButton dark"
            :class="{loading : requestingOrder}"
            v-on:click="placeOrder"
          >
            <span v-if="!requestingOrder">Take my money!</span>
            <img class="loader" src="@/assets/graphics/loader.png" v-if="requestingOrder" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderArticle from "@/components/OrderArticle";

export default {
  components: {
    OrderArticle: OrderArticle
  },
  data() {
    return {
      displayOrder: this.showOrder,
      requestingOrder: false
    };
  },

  props: {
    showOrder: Boolean
  },
  computed: {
    orderArticles() {
      return this.$store.state.cart;
    },
    orderQuant() {
      return this.$store.state.totalOrderQuantity;
    },
    orderAmount() {
      return this.$store.state.totalOrderAmount;
    }
  },
  methods: {
    toggleShowOrder() {
      this.displayOrder = !this.displayOrder;
    },
    async placeOrder() {
      if (!this.requestingOrder) {
        this.requestingOrder = true;
        await this.$store.dispatch("requestOrder");
        this.requestingOrder = false;
        this.toggleShowOrder()
        this.$router.push({name: "Status"})
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.cart-btn-minimized {
  position: absolute;
  top: 20px;
  right: 15px;
  min-width: 4rem;
  width: 4rem;
  height: 4rem;
  background-color: $secondary-color;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 35%;
  }

  .cart-amount {
    background: red;
    position: absolute;
    top: -4px;
    right: -2px;
    border: none;
    border-radius: 50%;
    width: 1.6rem;
    min-width: 1.6rem;
    height: 1.6rem;
    min-height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      position: absolute;
      top: 0.35rem;
      margin: 0;
      color: white;
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
}

.cart-lightbox-background {
  position: absolute;
  width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.815);
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn-wrapper {
    border: 0 solid cadetblue;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;

    button.cart-btn {
      position: relative;
      margin-top: 20px;
      margin-right: 15px;
      min-width: 4rem;
      width: 4rem;
      height: 4rem;
      background-color: $secondary-color;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 35%;
      }

      .cart-amount {
        background: red;
        position: absolute;
        top: -4px;
        right: -2px;
        border: none;
        border-radius: 50%;
        width: 1.6rem;
        min-width: 1.6rem;
        height: 1.6rem;
        min-height: 1.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          position: absolute;
          top: 0.35rem;
          margin: 0;
          color: white;
          font-size: 0.9rem;
          font-weight: 900;
        }
      }
    }
    .arrow-up {
      position: relative;
      margin-right: 2.2rem;
      bottom: 0.8rem;

      width: 0;
      height: 0;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;

      border-bottom: 12px solid white;
    }
  }

  .order-wrapper {
    position: relative;
    width: 95%;
    min-height: 300px;
    bottom: 0.9rem;
    border: 0 solid black;
    background: white;
    box-sizing: border-box;
    max-width: 640px;
    border: 0 solid white;
    border-radius: 5px;
    padding: 0 20px 0 20px;

    .amount {
      display: flex;
      flex-direction: column;
    }
    #confirm-order {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      width: 100%;
      &.loading {
        background: $secondary-color-inactive;
      }
      .loader {
        height: 2rem;
      }
    }
    .total-amount {
      // padding: 0 1rem 0 1rem;
      display: flex;
      justify-content: space-between;
    }
  }
}

@media only screen and (min-width: 640px) {
  .cart-lightbox-background {
    flex-direction: column;
    align-items: flex-end;

    .order-wrapper {
      margin-right: 15px;
    }
  }
}
</style>