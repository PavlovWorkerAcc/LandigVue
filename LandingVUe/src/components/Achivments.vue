<template>
  <div class="ach_container">
    <div class="ach_content">

        <div class="ach_block_Rating">
          <div class="ach_block_Rating_Label">

              <div class="ach_block_Rating_Label_logo">
                <img src="../img/Star.png" alt="">
              </div>

              <div class="ach_block_Rating_Label_Text">
                <span>4.8 Rating</span>
              </div>

          </div>

          <div class="ach_block_Rating_Memembers">

              <img src="../img/people.png" alt="">


            <div class="ach_block_Rating_Memembers_Text">
              <span>Members </span>
            </div>
          </div>

          <div class="ach_block_Rating_Text">
              <span>
                More than 2 billion we people over countries use socibooks we to stay in touch with friends.
              </span>
          </div>

          <div class="ach_block_Rating_Link">
              <span><a href="#">Join Our Community ➜</a></span>
          </div>
        </div>
<!--        Awards-->
        <div class="ach_block_Awards">
          <div class="ach_block_Awards_Label">

            <div class="ach_block_Awards_Label_logo">
              <img src="../img/Trophy.png" alt="">
            </div>

            <div class="ach_block_AwardsLabel_Text">
              <span>Awards</span>
            </div>

          </div>

          <div class="ach_block_Awards_Award">
            <div class="ach_block_Awards_Award_Logo">
              <img src="../img/Ellipse%2014.png" alt="">
            </div>

            <div class="ach_block_Awards_Award_Text">
              <span class="first_chp">Best of </span><span> on Github</span>
            </div>
          </div>

          <div class="ach_block_Awards_Text">
              <span>
                More than 2 billion we people over countries use socibooks we to stay in touch with friends.
              </span>
          </div>

          <div class="ach_block_Awards_Link">
            <span><a href="#">Go To Awards ➜</a></span>
          </div>
        </div>

        <div class="ach_block_Description">

          <div class="ach_block_Description_label">
            <span>Our Achievement</span>
          </div>

          <div class="ach_block_Description_banner">
            <span>We are Connecting You The Digital Life.</span>
          </div>

          <div class="ach_block_Description_underBanText">
            <span>The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.</span>
          </div>

          <div class="ach_block_Description_btns">

            <button class="ach_block_Description_btn"><span>Discover me</span><span>➜</span></button>
            <img src="icons/ArrowRight.png" alt="">

          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Achivments"
}
</script>

<style scoped lang="scss">
  .ach_container {

    line-height: 1.5;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 125px 0 165px 0;
    background: #F2F3F4;

    .ach_content {

      display: flex;
      align-items: center;

      .ach_block_Rating {

        width: 336px;
        height: 340px;
        background: #FFFFFF;
        box-shadow: 0px 26px 49px rgba(146, 165, 184, 0.14);
        border-radius: 14px;
        margin-right: 25px;
        padding: 46px 18px 40px 44px;

        .ach_block_Rating_Label {
          display: flex;
          align-items: center;
          color: #0A093D;

          .ach_block_Rating_Label_Text {
            margin: 0 0 0 10px;

            span {

              font-family: 'Inter', sans-serif;
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 20px;


              color: #0A093D;
            }
          }

          .ach_block_Rating_Label_logo {
            margin: 0;
          }
        }

        .ach_block_Rating_Memembers {
          display: flex;
          align-items: center;
          margin: 25px 0 30px 0;

          img {
            position: relative;
            right: 19px;
            margin: 0;

          }

          .ach_block_Rating_Memembers_Text {
            margin: 0 0 0 0;
            display: flex;
            position: relative;
            top: -4px;
            left: -12px;

            span {
              font-family: 'Inter', sans-serif;
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 18px;


              letter-spacing: -0.02em;

              color: #0A093D;

              &:before {
                content: "+836k  ";
                color: #217BF4;;
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 18px;
              }
            }
          }
        }

        .ach_block_Rating_Text {
          width: 274px;

          span {
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;

            /* or 162% */

            color: #8C8C8C;
          }
        }

        .ach_block_Rating_Link {
          margin: 20px 0 0 0;

          span {
            a {
              font-family: 'Inter', sans-serif;
              font-style: normal;
              font-weight: 550;
              font-size: 16px;
              line-height: 16px;

              /* identical to box height, or 100% */

              color: #217BF4;
              text-decoration: none;
            }
          }
        }
      }

      .ach_block_Awards {

        width: 336px;
        height: 340px;
        background: #FFFFFF;
        box-shadow: 0px 26px 49px rgba(146, 165, 184, 0.14);
        border-radius: 14px;
        margin-right: 25px;
        padding: 46px 18px 40px 44px;

        .ach_block_Awards_Label {
          display: flex;
          align-items: center;
          color: #0A093D;

          .ach_block_AwardsLabel_Text {
            margin: 0 0 0 10px;

            span {

              font-family: 'Inter', sans-serif;
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 20px;


              color: #0A093D;
            }
          }

          .ach_block_Awards_Label_logo {
            margin: 0;
          }
        }

        .ach_block_Awards_Award {
          display: flex;
          align-items: center;
          margin: 25px 0 30px 0;

          .ach_block_Awards_Award_Logo {
            position: relative;
            right: 10px;
            margin: 0;

          }

          .ach_block_Awards_Award_Text {
            margin: 0 0 0 0;
            display: flex;
            position: relative;
            top: -6px;
            left: -12px;

            span {
              font-family: 'Inter', sans-serif;
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 18px;


              letter-spacing: -0.02em;

              color: #0A093D;
            }

            .first_chp:after {
              content: "  2021  ";
              color: #217BF4;;
              font-family: 'Inter', sans-serif;
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 18px;
              margin: 0 4px 0;
            }
          }
        }

        .ach_block_Awards_Text {
          width: 274px;

          span {
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;

            /* or 162% */

            color: #8C8C8C;
          }
        }

        .ach_block_Awards_Link {
          margin: 20px 0 0 0;

          span {
            color: #4A4A56;

            a {
              font-family: 'Inter', sans-serif;
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 16px;
              /* identical to box height, or 100% */

              text-decoration: none;
            }
          }
        }
      }
    }
  }

      .ach_block_Description {
        height: 340px;
        margin-left: 250px;

        .ach_block_Description_label {

          span {
            font-family: 'Inter' ,sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 18px;
            margin: 0;
            /* identical to box height, or 100% */

            color: #217BF4;
          }
        }

        .ach_block_Description_banner {
          width: 381px;
          margin: 10px auto 18px 0;

          span {
            font-family: 'Inter' , sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 48px;

            /* or 133% */

            color: #0A093D;
          }
        }

        .ach_block_Description_underBanText {
          width: 365px;
          margin: 0 auto 38px 0;

          span {

            font-family: 'Inter' , sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 175%;

            /* or 175% */

            color: #656464;


          }
        }

        .ach_block_Description_btns {

          .ach_block_Description_btn {
            width: 192px;
            height: 58px;

            background: #217BF4;
            box-shadow: 0px 7px 22px -6px rgba(33, 123, 244, 0.34);
            border-radius: 14px;
            border: none;

            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 14px;


            text-align: center;
            transition: 0.6s;


            color: #FFFFFF;
            vertical-align: center;
            span:not(:first-child){
              position: relative;
              top: 1px;
              margin: 0 0 0 7px
            }
            &:hover {
              background-color: rgba(33, 123, 244, 0%);
              color: rgba(33, 123, 244, 1);
              transition: 0.6s;
              border: 1px solid #217BF4;
            }
          }
        }
      }
</style>