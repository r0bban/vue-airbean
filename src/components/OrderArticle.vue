<template>
<article class="order-article">
    <button class="add-to-cart"
    v-on:click="addToCart">
        <img src="@/assets/graphics/add.svg" alt="Add to cart">
    </button>
    <div class="text-wrapper">
        <div class="article-and-price">
            <h2 class="article-title">{{article.title}}</h2>
            <p class="article-price">{{article.price}} kr</p>
        </div>
        <div class="amount">
            <button class="increase-amount" v-on:click="increaseAmount">
                <img src="@/assets/graphics/arrow-up.svg" alt="arrow-up">
            </button>
            <p>{{amount}}</p>
            <button class="reduce-amount" v-on:click="reduceAmount">
                <img src="@/assets/graphics/arrow-down.svg" alt="arrow-down">
            </button>
        </div>
    </div>
</article>
  
</template>

<script>
export default {
props:{
    article: Object
},
methods: {
    addToCart(){
        this.$store.commit('addProductToCart', this.article)
    },
    increaseAmount(){
        this.amount++
    },
    reduceAmount(){
        this.amount--
    }
}



}
</script>


<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.text-wrapper {
    padding: 0 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.article-and-price {
    display: flex;
    flex-direction: column;
    text-align: left;
}
.article-and-price > h2, p {
    margin: 0;
}
</style>