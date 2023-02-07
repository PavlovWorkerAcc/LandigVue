<template>
  <Header/>

  <div class="events_cards_container">
    <div class="events_cards_content">
      <div class="events_heading">
        <span class="events_heading_label">
          Our upcoming events
        </span>
        <span class="events_heading_text">We will be glad to see you</span>
      </div>
      <Event_Card/>
    </div>
  </div>


  <Footer/>
  <Footer_Second/>
</template>

<script>
import Header from "../components/homePageComp/Header.vue";
import Footer from "../components/homePageComp/Footer.vue";
import Footer_Second from "../components/homePageComp/Footer_Second.vue";
import Event_Card from "../components/Events/Event_Card.vue";
export default {
  name: "Events",
  components: {Footer_Second, Footer, Header , Event_Card}
}
</script>

<style scoped lang="scss">
.events_cards_container {
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  .events_heading {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 30px;
    font-family: "Poppins", monospace;
    font-style: normal;
   .events_heading_label {
      font-size: 45px;
      color: #333333;
    }
    .events_heading_text{
      font-size: 24px;
      color: #333333;
    }
  }
}
</style>