<template>
  <div class="error_container">
    <div class="error_content">
      <div class="error_heading" data-aos="fade-down" data-aos-duration="3000">
        <span>
          404
        </span>
      </div>

      <div class="error_label">
        <span id="error_label_type">
        </span>
      </div>

      <div class="error_text">
        <span id="error_text_type"></span>
        <RouterLink to="/" class="home_link" @click="changeHrefVis" data-aos="fade-in" data-aos-duration="3000"><span id="error_link_type"></span></RouterLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NotFound",
  methods: {
    changeHrefVis() {
      setTimeout(() => {
        let link = document.querySelector('.home_link')
        link.style.display = 'none'
      }, 2000);
    },
  },
}
</script>

<style scoped lang="scss">
.error_container {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  display: flex;
  margin: 0 auto;

  .error_content {
    margin-top: 30px;
    display: flex;
    text-align: center;
    flex-flow: column;
    .error_heading{

      span{
        font-size: 250px;
        font-weight: 800;
      }
    }
    .error_label{

      span{
        font-size: 36px
      }
    }
    .error_text{
      width: 550px;
      span{
        font-size: 16px;
      }
      a{
        color: #217BF4;
        font-style: italic ;
      }
    }
  }
}
</style>