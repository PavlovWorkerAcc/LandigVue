<script setup>
import Header from "@/components/homePageComp/Header.vue";
import Footer from "@/components/homePageComp/Footer.vue";
import Footer_Second from "@/components/homePageComp/Footer_Second.vue";
</script>

<template>
 <Header/>
    <div class="news_container">
      <div class="news_content">
        <div class="news_searchbar">
          <form action="">
            <input type="text" placeholder="Search...">
          </form>
          <div class="news_search_icons">
            <img class="glass" src="../../img/loupe(1).png" alt="">
            <img class="cross" src="../../img/close.png" alt="">
          </div>
        </div>
        <div class="news_result" >
            <div class="event_card"  v-for="(article , index) in articles" :key="index" data-aos-duration="3000" data-aos="flip-left" data-aos-easing="easy-out">
              <div class="event_card_photo">
                <img :src="article.thumbnail">
              </div>
              <div class="event_card_content">
                <div class="event_card_Teg">
                     <span>
                      {{article.source}}
                    </span>
                </div>
                <div class="event_card_label">
                    <span>
                      {{article.title}}
                    </span>
                </div>
                <div class="event_card_text">
                    <a :href="article.url">
                      GO TO ARTICLE PAGE
                      <span>➜</span>
                    </a>

                </div>
                <div class="card_footer">
                  <div class="event_card_date">
                     <span>
                       {{article.published}}
                     </span>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
    </div>
  <Footer/>
  <Footer_Second/>
</template>

<script>
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8eca5808femsh7ae851a5cc822d3p1c5894jsnd926d337d89a',
    'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com'
  }
};


export default {
  name: "Page-news-item",
  data(){
    return{
      apiKey: '5bfe9ed318c34fc0bdf38ff83dcf7ad9',
      apiUrl: '',
      isBusy: false,
      showloader: false,
      currentPage: 1,
      totalResults: 0,
      maxPerPage: 20,
      searchword: '',
      image_url: null,
      articles: [],
      country: "us"
    }
  },
  methods:{
    resetData(){
      this.currentPage = 1;
      this.articles = [];
    },
    fetchTopNews(){
      this.apiUrl = 'https://climate-news-feed.p.rapidapi.com/page/1?limit=5'
      this.isBusy = true
      this.searchword = "";

      this.resetData();
      this.fetchData()
    },
    fetchData(){
        let req = new Request(this.apiUrl , options);
        fetch(req)
          .then((resp) => resp.json())
          .then((data) => {
            this.totalResults = data.totalResults;
            data.articles.forEach(elem => {
              this.articles.push(elem);
            });
            this.isBusy = false;
            this.showloader = false;
          })
          .catch((err) => {
            console.log(err)
          })
    }
  },
  created() {
    this.fetchTopNews()
  }
}
</script>

<style scoped lang="scss">
  .news_container {
    display: flex;
    padding: 25px 0;

    .news_content {
      text-align: center;

      .news_searchbar {
        position: relative;
        width: 100%;
        font-size: 1.5rem;

        input {
          margin: 0;
          padding: 0 100px 0 20px;
          width: calc(100% - 50px);
          height: 60px;
          border: none;
          font-size: 2rem;
          color: #fff;
          background-color: #222;
          border-radius: 15px;

          &:focus {
            outline: none;
          }
        }

        .glass, .cross {
          left: 870px;
          bottom: 47px;
          cursor: pointer;
        }

        .cross {
          margin-left: 15px;
        }
      }
    }

    .news_result {

      .event_card {
        display: flex;
        width: 1000px;
        margin-bottom: 50px;

        .event_card_photo {
          text-align: center;
          border-radius: 16px 0px 0px 16px;
          margin: 0;

          img{
            width: 300px;
            height: 100%;
          }
        }

        .event_card_content {
          border-radius: 0px 16px 16px 0px;
          padding: 0 35px;
          background-color: #EEF6FF;

          margin: 0;
          .event_card_Teg {
            margin: 32px 0 25px 0;

            span {
              font-family: 'Open Sans', sans-serif;
              font-style: normal;
              font-weight: 600;
              font-size: 20px;
              line-height: 27px;

              /* Additional text */
              color: #6E798C;
            }
          }

          .event_card_label {
            margin-bottom: 15px;

            span {
              font-family: 'DM Serif Display', sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 40px;
              line-height: 46px;

              /* or 115% */

              /* Heading text */
              color: #081F32;
            }
          }

          .event_card_text {
            margin-bottom: 35px;

            a {
              font-family: 'Open Sans', sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 18px;
              line-height: 27px;
              text-decoration: none;
              /* or 150% */

              /* Body text */
              color: #374A59;
            }
          }

          .card_footer {
            display: flex;
            margin: 0;

            .event_card_date {


              span {
                font-family: 'Open Sans', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 25px;

                /* Additional text */
                color: #6E798C;


              }
            }

            .event_card_link {
              margin-right: 40px;

              span {
                font-family: 'Open Sans', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 25px;

                /* identical to box height */
                text-align: right;

                /* Cards 2 / main */
                color: #007AE9;

                a {
                  text-decoration: none;
                }
              }
            }
          }
        }
      }

      @media screen and (min-width: 1031px) {
        .event_card {

          .event_card_content {

            .card_footer {

              .event_card_date {
                margin-left: 0;
              }
            }
          }
        }
      }
      @media screen and (max-width: 1030px) {
        .event_card {
          flex-flow: column;
          width: 400px;

          .event_card_photo {
            border-radius: 16px 16px 0px 0px;
          }

          .event_card_content {
            border-radius: 0px 0px 16px 16px;
            text-align: center;
            padding-bottom: 15px;
          }
        }
      }
      @media screen and (min-width: 441px) {
        .event_card {


        }
      }
      @media screen and (max-width: 440px) {
        .event_card {
          width: 314px;

          .event_card_photo {
            width: 314px;
          }
        }
      }
    }
  }
</style>