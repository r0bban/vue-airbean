<template>
  <article class="login-form">
    <header>
      <div class="logo">
        <img src="../assets/graphics/logo-black.svg" alt />
      </div>

      <h1>Välkommen till AirBean-familjen!</h1>
      <h2>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</h2>
    </header>
    <div class="input-form">
      <p class="name">Name</p>

      <input type="text" class="name" v-model="newUser.name" />

      <p class="email">Email</p>
      <input type="text" class="email" v-model="newUser.email" />

      <div class="gdpr-btn">
        <input type="checkbox" name="gdpr" id="gdpr" />
        <label for="gdpr">GDPR ok!</label>
      </div>
      <br />
      <button @click="handleRequest">Brew me a cup!</button>
    </div>
  </article>
</template>
<script>
export default {
  Name: "LoginForm",

  data() {
    return {
        newUser: {
            name: "",
            email: "",

        },
    };
  },

  methods: {
    handleRequest() {
        this.$emit('login', this.newUser)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.logo {
  background-color: rgba(0, 0, 0, 0.2);
  // padding: 0.1rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
  }
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  background-color: $primary-color;
  border-radius: 0.2rem;
  box-shadow: 10px 10px 24px 0px rgba(0, 0, 0, 0.75);

  input {
    font-family: Work Sans;
    background-color: $primary-color;
    font-size: 1rem;
    text-indent: 0.5rem;
    height: 2.5rem;
    border: 1px solid #2f2926;
    box-sizing: border-box;
    border-radius: 6px;
  }

  .gdpr-btn {
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
  }

  button {
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
  }

  p {
    font-family: Work Sans;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
      font-family: PT Serif;
      font-style: normal;
      font-weight: bold;
      font-size: 2rem;
      line-height: 120%;
      margin: 0;
    }
    h2 {
      font-family: Work Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      line-height: 150%;
    }
  }
}
</style>