<template>
  <div class="event_card" v-for="item in events">
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
        <div class="event_card_link">
          <span>
          <a href="#">Read Mode ➜</a>
        </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Event_Card",
  data() {
    return {
      events: [
        {EventTeg: "Productivity" ,
          EventLabel:"7 Skills of Highly Effective Programmers" ,
          EventDate : "22.02.2023",
          EventText:"Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven skills of effective programmers..." ,
          EventLogo:"https://i.ibb.co/2WtQJph/Laptop.png",
          EventBackGround: "background: #BCD1FF;",
        } ,
        {EventTeg: "Media" ,
          EventLabel:"SMM starter pack, part 2: content promotion" ,
          EventDate : "10.02.2023",
          EventText:"This is the second part of the SMM starter pack series of articles. If you made it this far, you must be willing to learn about promoting business through social media. " ,
          EventLogo:"https://i.ibb.co/HNmjqJw/Social-Media.png",
          EventBackGround: "background: linear-gradient(135deg, #F395BA 0%, #FED182 100%);"
        } ,
        {EventTeg: "BUSINESS" ,
          EventLabel:"11 Things I Wish I Knew When I Started My Business" ,
          EventDate : "18.05.2023",
          EventText:"Here are 11 things I wish I knew when I started my business. I hope they will save you some time and some anguish because (experience is a good teacher here) the sodium from your tears acts as a corrosive melting agent..." ,
          EventLogo:"https://i.ibb.co/Ny4wJXq/Business.png",
          EventBackGround: "background: #D2EBF7;"
        } ,
      ],
    }
  }
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