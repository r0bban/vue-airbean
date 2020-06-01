<template>
  <article class="order-article">
    <div class="text-wrapper">
      <div class="article-and-price">
        <h2 class="article-title">{{article.title}}</h2>
        <p class="article-price">{{article.price}} kr</p>
      </div>
    </div>
    <div class="amount-wrapper">
      <button class="item-amount increase" v-on:click="increaseQuant">
        <img class="arrow" src="@/assets/graphics/arrow-up.svg" alt="arrow-up" />
      </button>
      <p class="amount">{{quantity}}</p>
      <button class="item-amount decrease" v-on:click="reduceQuant">
        <img class="arrow" src="@/assets/graphics/arrow-down.svg" alt="arrow-down" />
      </button>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    article: Object
  },
  data() {
    return {
      quantity: this.article.quantity
    };
  },
  methods: {
    addToCart() {
      this.$store.commit("addProductToCart", this.article);
    },
    increaseQuant() {
      this.quantity = this.quantity + 1;
      this.$store.commit("increaseQuantOrderProd", this.article);
    },
    reduceQuant() {
      this.quantity = this.quantity - 1;
      this.$store.commit("reduceQuantOrderProd", this.article);
    }
  },
  computed: {
    // orderArticle() {
    //   return this.article
    // },
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

p,
h2 {
  margin: 0;
  text-align: left;
}

h2.article-title {
  padding-right: 0.3rem;
}

h2.article-price {
  white-space: nowrap;
  align-self: flex-start;
}

.order-article {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 20px;
  align-items: center;

  .text-wrapper {
    flex-grow: 1;
  }

  .amount-wrapper {
    margin: 0 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button.item-amount {
      background: none;
      border: none;
      margin: 0 0 0 0;
      display: flex;
      align-items: center;
      justify-content: center;

      img.arrow {
        height: 0.5rem;
      }
    }

    p.amount {
      font-weight: 650;
    }
  }
}
</style>