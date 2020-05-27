<template>
  <div class="menu">
    <top />
    <h1>Menu</h1>
    <img src="@/assets/graphics/loader.png" v-if="loading">
    <div v-else class="list-wrapper">
      <menuArticle
      v-for="article in menuArticles"
      :key="article.id"
      :article="article"
      v:style="margin-bottom: 10px"
      />
    </div>
    <bottom class="bottom" />
  </div>
</template>
<script>
import Top from "@/components/Top";
import Bottom from "@/components/Bottom";
import MenuArticle from "@/components/MenuArticle";

export default {
  components: {
    Top,
    Bottom,
    MenuArticle: MenuArticle
  },

  data() {
    return {
      loading: false
    }
  },

  methods: {},
  computed:{
    menuArticles(){
      return this.$store.state.menu
    }
  },
  async created(){
    this.loading = true;
    await this.$store.dispatch('loadMenu')
      this.loading = false
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.menu {
  min-height: 100vh;
  background-color: $primary-color;
  box-sizing: border-box;

  .list-wrapper{
    padding: 0 20px 0 20px;
    box-sizing: border-box;
  }

  .bottom {
    position: fixed;
    bottom: 0;
    transform: translateY(1rem);
  }
}
</style>