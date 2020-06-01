<template>
<article class="menu-article">
    <button class="add-to-cart"
    v-on:click="addToCart">
        <img src="@/assets/graphics/add.svg" alt="Add to cart">
    </button>
    <div class="text-wrapper">
        <h2 class="article-title">{{article.title}}</h2>
        <p class="article-desc">{{article.desc}}</p>
    </div>
    <h2 class="article-price">{{article.price}} kr</h2>
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
}



}
</script>


<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

p, h2 {
    margin:0;
    text-align: left
}

h2.article-title {
    padding-right: 0.3rem;
}

h2.article-price {
    white-space: nowrap;
    align-self: flex-start;
}

.menu-article{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-bottom: 20px;
    align-items: center;

    button.add-to-cart{
        min-width: 2rem;
        width: 2rem;
        height: 2rem;
        // min-height: 2rem;
        background-color: $secondary-color;
        border: none;
        border-radius: 50%;
        margin: 0 20px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            width:60%;
        }
    }

    .text-wrapper{
        flex-grow: 1;
        
    }
}


</style>