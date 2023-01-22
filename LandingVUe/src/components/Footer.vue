<template>
  <footer>
    <div class="footer_content">
        <div class="footer_navs_newsLetter">

          <div class="footer_nav_items">

            <div class="footer_nav_item_home item">

              <span class="nav_item_label">Home</span>

              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Contact</a></li>
              </ul>

            </div>

            <div class="footer_nav_item_Resource item">

              <span class="nav_item_label">Resource</span>

              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Guides</a></li>
                <li><a href="#">Help Center</a></li>
              </ul>

            </div>

            <div class="footer_nav_item_Community item">

              <span class="nav_item_label">Community</span>

              <ul>
                <li><a href="#">ANewsFeed</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Friends</a></li>
                <li><a href="#">Forums</a></li>
              </ul>

            </div>

            <div class="footer_nav_item_MainLinks item">

              <span class="nav_item_label">Mail Links</span>

              <ul>
                <li><a href="#">Members</a></li>
                <li><a href="#">Activity</a></li>
                <li><a href="#">Groups</a></li>
                <li><a href="#">Private Group</a></li>
              </ul>

            </div>

          </div>

            <div class="footer_newsLetter">

              <div class="footer_newsLetter_label">
                <span>Subscribe Cirkle Newsletter</span>
              </div>

              <div class="footer_newsLetter_banner">
                <span>Subscribe to be the first one to know about updates. Enter your email</span>
              </div>

              <form action="" class="footer_newsLetter_form">
                <input placeholder="Email Address">
                <button>Subscribe</button>
              </form>
            </div>
      </div>
        <div class="footer_socials_logo">

          <div class="footer_creater">
            <span>Dimitriy Pavlov</span>
          </div>

          <div class="footer_logo">
            <img src="src/img/logo(1).png" alt="">
          </div>

          <div class="footer_socials">
            <img src="src/img/socials/Twitter.png" alt="">
            <img src="src/img/socials/instagram.png" alt="">
            <img src="src/img/socials/facebook.png" alt="">
            <img src="src/img/socials/Linkedin.png" alt="">
          </div>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
  footer{
    line-height: 1.5;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 0 auto;
    padding: 125px 0 0 0;
    background-color: #2B2B39;;
    .footer_content {

      .footer_navs_newsLetter {
        display: flex;
        align-items: center;

        .footer_nav_items {
          display: flex;

          .item {
            margin-right: 100px;

            .nav_item_label {
              font-family: 'Inter', sans-serif;
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 20px;

              /* identical to box height, or 100% */

              color: #FFFFFF;
            }

            ul {
              margin-top: 22px;
              padding: 0;

              li {
                list-style-type: none;

                a {
                  text-decoration: none;
                  font-family: 'Inter', sans-serif;
                  font-style: normal;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 46px;

                  /* or 288% */
                  letter-spacing: 0.0125em;
                  transition: 0.5s;
                  color: #E7E7E7;

                  &:hover {
                    transition: 0.5s;
                    color: #217BF4;
                  }
                }
              }
            }
          }
        }
        .footer_newsLetter{
            margin-left: 163px;
          .footer_newsLetter_label{
            width: 179px;
            margin:0 auto 18px 0;
            span{
              font-family: 'Inter' ,sans-serif;
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 32px;

              /* or 160% */

              color: #FFFFFF;
            }
          }
          .footer_newsLetter_banner{
            width: 299px;
            margin: 0 auto 32px 0;
            span{
              font-family: 'Inter' , sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 28px;

              /* or 175% */

              color: #E7E7E7;
            }
          }
          .footer_newsLetter_form{
            display: flex;
            input{

              font-family: 'Inter' , sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 12px;

              background:none;
              /* identical to box height, or 86% */
              padding-left: 15px;
              letter-spacing: 0.0125em;


              text-align: left;
              width: 339px;
              height: 47px;


              outline: none;
              color: #717179;
              border: 1px solid rgba(255, 255, 255, 0.85);
              border-radius: 12px;
            }
            button{
              position: relative;
              right: 125px;
              width: 126px;
              height: 48px;

              font-family: 'Inter' ,sans-serif;
              font-style: normal;
              font-weight: 500;
              font-size: 16px;
              line-height: 16px;

              /* identical to box height, or 100% */
              text-align: center;

              color: #2B2B39;

              border: none;
              background: #FFFFFF;
              border-radius: 12px;
              transition: 0.5s;
              &:hover{
                transition: 0.5s;
                font-size: 20px;
                color: white;
                background: none;
              }
            }
          }
        }
      }
    }
  }
</style>