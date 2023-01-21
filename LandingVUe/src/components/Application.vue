<template >
  <div class="appl_container">
    <div class="appl_content">
      <div class="appl_description">
        <div class="appl_description_label">
          <span>Get Our Aplication</span>
        </div>

        <div class="appl_description_banner">
          <span>You Can Easily Find This App…!</span>
        </div>

        <div class="appl_description_underBanText">
          <span>I say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.</span>
        </div>

        <div class="appl_description_btns">

          <a href="https://www.apple.com/ua/app-store/"><img src="src/img/download_btn/image%20288.png" alt=""></a>
          <a href="https://play.google.com/store/apps?hl=ru&gl=US&pli=1"><img src="src/img/download_btn/image%20289.png" alt=""></a>

        </div>
        
      </div>
      
      <div class="appl_photo">
        <img src="src/img/Mask%20Group.png" alt="">
      </div>
    </div>
  </div>
</template >

<script>
export default {
  name: "Application",
}
</script>

<style scoped lang="scss">
.appl_container {
  line-height: 1.5;
  display: flex;
  align-items: center;
  padding: 125px 0 0 0 ;
  margin-bottom: 100px;
  background: #E5F0FD;

  .appl_content {
    display: flex;
    align-items: center;

    .appl_description {
      height: 340px;
      margin-left: 250px;

      .appl_description_label {

        span {
          font-family: 'Inter', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 18px;
          margin: 0;
          /* identical to box height, or 100% */

          color: #217BF4;
        }
      }

      .appl_description_banner {
        width: 351px;
        margin: 10px auto 18px 0;

        span {
          font-family: 'Inter', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 36px;
          line-height: 48px;

          /* or 133% */

          color: #0A093D;
        }
      }

      .appl_description_underBanText {
        width: 340px;
        margin: 0 auto 36px 0;

        span {

          font-family: 'Inter', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 175%;

          /* or 175% */

          color: #656464;


        }
      }

      .appl_description_btns {
        display: flex;
        align-items: center;

        a{
          position: relative;
          left: -33px;
        }
      }
    }

    .appl_photo{
      margin-left: 350px;
      position: relative;
      top: 5px;
    }
  }
}
</style>