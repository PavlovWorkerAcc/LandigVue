<template>
  <div class="about_container">
    <div class="about_content">

      <div class="about_description">

        <div class="about_description_label">
          <span>Whats Netbooks?</span>
        </div>

        <div class="about_description_banner">
          <span>Why Join to Netbook Social Netwokr?</span>
        </div>

        <div class="about_description_underBantext">
          <span>Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</span>
        </div>

        <div class="about_description_list">
          <ul>
            <li>Groups</li>
            <li>Message</li>
            <li>Share</li>
          </ul>
        </div>
      </div>

      <div class="about_photo_video">

        <div class="about_video">

          <video id="player" playsinline controls data-poster="/path/to/poster.jpg">
            <source style="border-radius: 15px" src="src/assets/PromoVideo.mp4" type="video/mp4" />
            <source style="border-radius: 15px" src="src/assets/PromoVideo.mp4" type="video/webm" />
          </video>

        </div>

        <div class="about_photo">
          <img src="src/img/AboutFirstImg.png" alt="">

          <img src="src/img/AboutSecondImg.png" alt="">
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AboutUs"
}
</script>

<style scoped lang="scss">
  .about_container{
    line-height: 1.5;
    display: flex;
    align-items: center;
    margin: 96px auto 96px auto;

    .about_content{
      display: flex;
      align-items: center;
      .about_description{

        margin-right: 350px;
        .about_description_label{

          span{
            font-family: 'Inter' , sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 18px;
            color: #217BF4;
          }
        }
        .about_description_banner{
          width: 464px;
          margin: 10px auto 16px 0 ;
          span{
            font-family: "Inter", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 46px;
            line-height: 66px;
            color: #0A093D;
          }
        }
        .about_description_underBantext{
          margin: 0 auto 36px 0;
          width: 380px;
          span{

            font-family: 'Inter' ,sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;

            color: #656464;
          }
        }
        .about_description_list{

          ul{
            padding-left: 15px;
            li {
              list-style-position: outside;
              list-style-image: url("src/components/icons/Group 1000001767.png");
              padding-left:10px;


              font-family: 'Inter' , sans-serif;
              font-style: normal;
              font-weight: 500;
              font-size: 18px;


              color: #171648;


              &:not(:last-child){
                margin-bottom: 16px ;
              }
            }
          }
        }
      }
      .about_photo_video{
        display: flex;
        align-items: center;

        .about_photo{
          display: flex;
          flex-flow: column;

          img:not(:last-child){
            margin-bottom: 32px ;
          }
        }
        .about_video{
          margin-right: 26px;
          video{
            height: 250px;
            border-radius: 15px;
          }
        }
      }
    }
  }
</style>