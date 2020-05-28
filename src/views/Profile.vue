<template>
  <div class="profile">
    <top class="top" />
    <div id="transition" class="transition" v-if="!this.loggedIn">
      <login-form @login="test" />
    </div>
    <section class="order-history" v-show="this.loggedIn">
      <img src="../assets/graphics/placeholder-person.svg" alt />
      <h1>{{this.user.name}}</h1>
      <h2>{{this.user.email}}</h2>

      <article class="history">
        <h1 class="heading">Orderhistorik</h1>
        <div class="order" v-for="(order, index) in this.user.orders" :key="index">
          <h1 class="order-name">{{order.name}}</h1>
          <h2 class="order-date">{{order.date}}</h2>
          <p>total ordersumma</p>

          <h2 class="order-amount">{{order.amount}}</h2>
          <h3
            class="divider"
          >--------------------------------------------------------------------------------------------------------------------------------</h3>
        </div>
        <div class="total">
          <h1>Totalt spenderat</h1>
          <P class="total-amount">#### kr</P>
        </div>
      </article>
    </section>
  </div>
</template>
<script>
import Top from "../components/Top";
import LoginForm from "../components/LoginForm";
export default {
  Name: "Profile",
  components: {
    Top,
    LoginForm
  },
  data: () => ({
    user: {
      name: "Sixten Kaffelövér",
      email: "sixten.kaffelover@zocom.se",
      orders: [
        {
          name: "#AB1123282323Z",
          amount: "443 kr",
          date: "20/03/06"
        },
        {
          name: "#AB1128382323X",
          amount: "333 kr",
          date: "20/03/03"
        },
        {
          name: "#AB1444482323X",
          amount: "893 kr",
          date: "20/02/21"
        },
        {
          name: "#AB1444482323X",
          amount: "893 kr",
          date: "20/02/21"
        },
        {
          name: "#AB1444482323X",
          amount: "893 kr",
          date: "20/02/21"
        },
        {
          name: "#AB1444482323X",
          amount: "893 kr",
          date: "20/02/21"
        },
        {
          name: "#AB1444482323X",
          amount: "893 kr",
          date: "20/02/21"
        },
        {
          name: "#AB1444482323X",
          amount: "893 kr",
          date: "20/02/21"
        },
        {
          name: "#AB1444482323X",
          amount: "893 kr",
          date: "20/02/21"
        },
      ]
    },
    loggedIn: true //change to true during development
  }),

  methods: {
    test(user) {
      // document.getElementById("login").style.height = "0%";
      this.user = user;
      this.loggedIn = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.profile {
  background-color: $secondary-color;
  color: $secondary-color;
  min-height: 100vh;
  padding-block-end: 5rem;
  
  .transition {
    height: 100%;
    position: fixed;
    // z-index: 1;
    left: 0;
    overflow-y: hidden;
    transition: 1s;

    .transition-enter-active,
    .transition-leave-active {
      transition: height 1s;
    }
    .transition-enter, .transition-leave-to /* .transition-leave-active below version 2.1.8 */ {
      height: 0%;
    }
  }

  .order-history {
    margin: 0;
    align-content: left;

    color: $primary-color;
    margin-top: 2rem;

    .heading {
      margin-bottom: 1.5rem;
      font-size: 1.7rem;
    }
    h1 {
      margin: 0;
      font-family: $primary-font;
      font-size: 2rem;
      font-weight: bold;
    }
    h2 {
      margin: 0;
      font-family: $secondary-font;
      font-size: 1rem;
      font-weight: 400;
    }

    .history {
      margin-top: 2rem;
      padding: 2rem;
      text-align: left;
      font-family: $primary-font;

      .order {
        display: grid;
        grid-template-columns: 2fr 1fr;
        margin-top: 1rem;

        h1 {
          font-size: 1.2rem;
          font-weight: 700;
        }
        h2 {
          text-align: right;
        }
        h3 {
          margin: 0;
          font-size: 0.5rem;
          grid-column-start: 1;
          grid-column-end: 3;
        }
        p {
          margin: 0;
          font-size: 1rem;
          font-family: $secondary-font;
          font-weight: 400;
        }
      }
      .total {
        display: flex;
        justify-content: space-between;

        h1,
        p {
          font-family: $primary-font;
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0;
          margin-top: 0.3rem;
          
        }
      }
    }
  }
}
</style>