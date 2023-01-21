<template>
  <div class="Feature_container">
    <div class="Feature_content">
      <div class="Feature_heading">
        <div class="Feature_heading_label">
            <span>Our Community</span>
        </div>
        <div class="Feature_heading_banner">
          <span>Community Main Feature</span>
        </div>

        <div class="Feature_heading_UnderBanText">
          <span>The wise man therefore always holds in these matters to this principle of selection.</span>
        </div>
      </div>

      <div class="Feature_cards">

        <div class="Feature_cards_left">

          <div class="Feature_cards_card">

            <div class="Feature_cards_card_logo">
              <img src="../img/feature%20icons/Icon.png" alt="">
            </div>

            <div class="Feature_cards_card_info">
              <span class="Feature_cards_card_info_label">Members, Friends</span>
              <span class="Feature_cards_card_info_text">Members, Friends Connection ( like followers ), Private Message</span>
            </div>

          </div>

          <div class="Feature_cards_card">
            <div class="Feature_cards_card_logo">
              <img src="../img/feature%20icons/Icon-1.png" alt="">
            </div>

            <div class="Feature_cards_card_info">
              <span class="Feature_cards_card_info_label">Forum</span>
              <span class="Feature_cards_card_info_text">Forum is ready by BBPress. Your users can make topics and talk.</span>
            </div>
          </div>

          <div class="Feature_cards_card">
            <div class="Feature_cards_card_logo">
              <img src="../img/feature%20icons/Icon-2.png" alt="">
            </div>

            <div class="Feature_cards_card_info">
              <span class="Feature_cards_card_info_label">List Builder</span>
              <span class="Feature_cards_card_info_text">Members, Groups list can be modified by drag & drop live builder.</span>
            </div>
          </div>

        </div>

        <div class="Feature_cards_right">

            <div class="Feature_cards_card">
              <div class="Feature_cards_card_logo">
                <img src="../img/feature%20icons/Icon-3.png" alt="">
              </div>

              <div class="Feature_cards_card_info">
                <span class="Feature_cards_card_info_label">Groups</span>
                <span class="Feature_cards_card_info_text">Your users can create groups to let other users to join and talk</span>
              </div>
            </div>

            <div class="Feature_cards_card">
              <div class="Feature_cards_card_logo">
                <img src="../img/feature%20icons/Icon-4.png" alt="">
              </div>

              <div class="Feature_cards_card_info">
                <span class="Feature_cards_card_info_label">Custom Module</span>
                <span class="Feature_cards_card_info_text">You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder.</span>
              </div>
            </div>

            <div class="Feature_cards_card">
              <div class="Feature_cards_card_logo">
                <img src="../img/feature%20icons/Icon-5.png" alt="">
              </div>

              <div class="Feature_cards_card_info">
                <span class="Feature_cards_card_info_label">List Scroll Effects</span>
                <span class="Feature_cards_card_info_text">8 different scroll effects are ready.You can always change by your tastes.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "MainFuture"
}
</script>

<style scoped lang="scss">
  .Feature_container{
    line-height: 1.5;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding-top: 115px;
    background-color: rgba(33 , 123, 244 , 4%);

    .Feature_content{
      display: flex;
      flex-flow: column;

      .Feature_heading{
        text-align: center;
        margin-bottom: 64px ;
        .Feature_heading_label{
          span{
            font-family: 'Inter' , sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 18px;

            /* identical to box height, or 100% */
            text-align: center;

            color: #217BF4;
          }
        }
        .Feature_heading_banner{
          margin-top: 9px;
          span{
            font-family: 'Inter' ,sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 36px;

            /* identical to box height, or 100% */
            text-align: center;

            color: #0A093D;
          }
        }
        .Feature_heading_UnderBanText{
          margin-top: 19px;
          width: 421px;
          span{

            font-family: 'Inter' , sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;

            /* or 175% */
            text-align: center;

            color: #656464;
          }
        }
      }
      .Feature_cards{
        display: flex;

        .Feature_cards_left{

          .Feature_cards_card{
            display: flex;
            padding: 40px 46px 65px 44px ;
            margin: 44px ;
            border-radius: 14px;
            background-color:white ;
            align-items: center;
            .Feature_cards_card_info{
              display: flex;
              flex-flow: column;
              width: 315px;
              margin-left: 36px;
              .Feature_cards_card_info_label{
                margin: 0 auto 0 0;

                font-family: 'Inter' , sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 26px;


                color: #2F2C4A;
              }
              .Feature_cards_card_info_text{
                font-family: 'Inter' ,sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 26px;

                /* or 162% */

                color: #656464;
              }
            }
          }
        }
        .Feature_cards_right{

          .Feature_cards_card{
            display: flex;
            padding: 40px 46px 65px 44px ;
            margin: 44px ;
            border-radius: 20px;
            background-color:white ;
            align-items: center;
            .Feature_cards_card_info{
              display: flex;
              flex-flow: column;
              width: 315px;
              margin-left: 36px;
              .Feature_cards_card_info_label{
                margin: 0 auto 0 0;

                font-family: 'Inter' , sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 26px;


                color: #2F2C4A;
              }
              .Feature_cards_card_info_text{
                font-family: 'Inter' ,sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 26px;

                /* or 162% */

                color: #656464;
              }
            }
          }
        }
      }
    }
  }
</style>