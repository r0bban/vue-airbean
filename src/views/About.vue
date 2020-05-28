<template>
  <div class="about">
    <top class="top"></top>
    <div class="about-container">
      <h1>Vårt kaffe</h1>
      <article class="about-text">
        <p><strong>Pumping spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</strong></p>
        <p>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.</p>
        <p>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>
      </article>
      <div class="owner">
        <img src="@/assets/graphics/eva-cortado.jpg" alt="owner-eva-cortado">
        <h3>Eva Cortado</h3>
        <p>VD & Grudare</p>
      </div>
    </div>
    <bottom class="bottom"></bottom>
  </div>
</template>
<script>
import Top from "../components/Top";
import Bottom from "../components/Bottom";
export default {
  components: {
    Top,
    Bottom
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.about {
  min-height: 100vh;
  background-color: $primary-color;
}
.bottom {
  position: fixed;
  bottom: 0;
  transform: translateY(1rem);
}
p {
  font-size: 0.7rem;
}

.about-container {
  margin: 0rem 2rem 2rem 2rem;
  text-align: left;
}
.owner {
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.owner img {
  border-radius: 50%;
}
.owner h3 {
  margin: 0.2rem 0 0 0;
}
.owner p {
  margin: 0;
}
</style>
