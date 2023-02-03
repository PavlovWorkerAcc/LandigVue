<script setup>

</script>
<template>
  <div class="log_container" style="overflow-x: hidden">
    <div class="log_content">

      <div class="log_form" data-aos="fade-right" data-aos-duration="2500">
        <div class="log_form_header">
          <div class="log_form_header_label">
            <span>Sign In</span>
          </div>

          <div class="log_form_header_text">
            <span>If you don’t have an account register</span>
            <span>You can  <RouterLink to="/Reg">Register here !</RouterLink></span>
          </div>
        </div>

        <form class="log_inputsANDbtns">
          <div class="log_input email">
            <span>Email</span>
            <input type="text" placeholder="Enter your email address">
            <hr>
          </div>

          <div class="log_input password">
            <span>Password</span>
            <input type="password" placeholder="Enter your Password">
            <hr>
          </div>


          <button class="log_btn">
            <span>Login</span>
          </button>

          <div class="link_to_home">
            <RouterLink to="/" class="homelink"><span class="btn_header">Return to Home Page</span></RouterLink>
            <RouterView/>
          </div>


        </form>
      </div>

      <div class="log_photo" data-aos="fade-down" data-aos-duration="2500">

        <div class="log_photo_container">

          <img src="../../img/Reg_Logo_Photo.svg" alt="" data-aos="fade-in" data-aos-duration="3000">

          <div class="log_photo_text">
            <span class="log_photo_text_heading">Sign Up to Netbook</span>
            <span class="log_photo_text_label">Lorem Ipsum is simply</span>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Login",

}
</script>

<style scoped lang="scss">
.log_container{
  font-family: 'Poppins' ,  sans-serif;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  .log_content{
    margin-top: 30px;
    display: flex;
    align-items: center;

    .log_form{

      .log_form_header{
        margin-bottom: 52px ;

        .log_form_header_label{
          margin-bottom: 22px;
          span{
            font-weight: 500;
            font-size: 30px;
            line-height: 45px;
            color: #000000  ;
          }
        }
        .log_form_header_text{
          display: flex;
          flex-flow: column;
          span{
            margin: 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #000842;
          }
        }
      }
      .log_inputsANDbtns{

        .log_input{
          margin-bottom: 42px;
          display: flex;
          flex-flow: column;
          span , input , hr{
            margin: 0 0 5px 0;
          }
          span{
            font-weight: 500;
            font-size: 13px;
            line-height: 20px;

            /* identical to box height */

            color: #999999;
          }
          input{
            border: none;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;

            /* identical to box height */

            color: #000842;
            outline: none;
          }
        }
        .email{
          span{
            display: flex;
            &:before{
              content: url("src/components/icons/Log_Reg_Icons/messageIcon.png");
              margin: 0 5px 0 0;
            }
          }
        }
        .password{
          span{
            display: flex;
            &:before{
              content: url("src/components/icons/Log_Reg_Icons/padlockIcon.png");
              margin: 0 5px 0 0;
            }
          }
        }
        .log_btn{
          background-color: #217BF4;
          box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.25);
          border-radius: 32px;
          border: none;
          height: 53px;
          transition: 0.6s;
          margin-top: 40px;
          span{
            font-weight: 500;
            font-size: 17px;
            line-height: 26px;

            /* identical to box height */

            color: #FFFFFF;
          }
          &:hover{
            background-color: rgba(33 , 123, 244 , 0%);
            color:rgba(33, 123, 244, 1);
            transition: 0.6s;
            border: 1px solid #217BF4;
            span{
              color: #217BF4;
              transition: 0.6s;
            }
          }
        }
        .log_btn_back{
          margin-top: 15px;
          background-color: #217BF4;
          box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.25);
          border-radius: 32px;
          width: 50%;
          border: none;
          height: 53px;
          transition: 0.6s;
        }
      }
      .link_to_home{
        text-align: center;
        margin-top: 10px;

        .homelink{
          text-decoration: none ;
        }
        span{
          color: #217BF4;
          text-decoration: none;
        }
      }
    }
    .log_photo{
      padding: 130px 88px;
      background: #000842;
      border-radius: 15px;

      .log_photo_container{

        img{

          margin-bottom: 90px;
        }

        .log_photo_text{
          display: flex;
          flex-flow: column;
          .log_photo_text_heading{
            margin: 0;
            font-weight: 600;
            font-size: 40px;
            line-height: 60px;

            /* identical to box height */

            color: #FFFFFF;
          }
          .log_photo_text_label{
            margin: 0;
            font-weight: 300;
            font-size: 20px;
            line-height: 30px;

            /* identical to box height */

            color: #FFFFFF;


          }
        }
      }
    }
  }
}
@media screen and (min-width: 1311px){
  .log_form{
    margin-right: 127px;
  }
}


@media screen and (max-width: 1312px) {
  .log_photo{
    display: none;
  }
  .log_form{
    text-align: center;
  }
}
@media screen and (min-width: 460px) {
  .log_btn{
    width: 100%;
  }
  .log_form{
    width: 400px;
  }
}
@media screen and (max-width: 461px) {
  .log_btn{
    width: 65%;
  }
}
</style>