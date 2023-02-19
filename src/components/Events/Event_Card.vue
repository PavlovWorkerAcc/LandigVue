<template>
  <div class="event_card">
      <div class="event_card_photo" :style="item.EventBackGround">
        <img :src="item.EventLogo">
      </div>
      <div class="event_card_content">
        <div class="event_card_Teg">
          <span>
            {{item.EventTeg}}
          </span>
        </div>
        <div class="event_card_label">
          <span>
            {{item.EventLabel}}
          </span>
        </div>
        <div class="event_card_text">
          <span>
            {{item.EventText}}
          </span>
        </div>
        <div class="card_footer">
          <div class="event_card_date">
           <span>
             {{item.EventDate}}
           </span>
          </div>
      </div>
    </div>
   </div>
</template>

<script>

import Eventitem from '@/pages/Event.vue';
export default {
  name: "Event_Card-item",
  props: {
            item: {
                type: Object,
                required: true,
            },
            index: {
                type: Number,
            }
        },
  data(){
    return{
      events:Eventitem
    }
  },

}

</script>

<style scoped lang="scss">

  .event_card{
    display: flex;
    width: 1000px;
    margin-bottom: 50px;
    .event_card_photo{
      text-align: center;

      border-radius: 16px 0px 0px 16px;
      padding: 80px;

    }
    .event_card_content{
      border-radius: 0px 16px 16px 0px;
      padding: 0 35px;
      background-color: #EEF6FF;

      .event_card_Teg{
        margin: 32px 0 25px 0;

        span{
          font-family: 'Open Sans' , sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 27px;

          /* Additional text */
          color: #6E798C;
        }
      }
      .event_card_label{
        margin-bottom: 15px;
        span{
          font-family: 'DM Serif Display' , sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 40px;
          line-height: 46px;

          /* or 115% */

          /* Heading text */
          color: #081F32;
        }
      }
      .event_card_text{
        margin-bottom: 35px;
        span{
          font-family: 'Open Sans' , sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;

          /* or 150% */

          /* Body text */
          color: #374A59;
        }
      }
      .card_footer{
        display: flex;
        margin: 0;

        .event_card_date{
          margin-left:0;

          span{
            font-family: 'Open Sans' , sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 25px;

            /* Additional text */
            color: #6E798C;


          }
        }
        .event_card_link{
            margin-right: 40px;
          span{
            font-family: 'Open Sans' , sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 25px;

            /* identical to box height */
            text-align: right;

            /* Cards 2 / main */
            color: #007AE9;

            a{
              text-decoration: none;
            }
          }
        }
      }
    }
  }
</style>