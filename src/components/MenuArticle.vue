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

.menu-article{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-bottom: 20px;

    .add-to-cart{
        width: 2.5rem;
        height: 2.5rem;
        background-color: $secondary-color;
        border: none;
        border-radius: 50%;
        margin: 0 20px 0 0;

        img{
            width:60%;
        }
    }

    .text-wrapper{
        flex-grow: 1;
        
    }
}


</style>