<script setup>

</script>
<template>
  <div class="reg_container" style="overflow-x: hidden">
    <div class="reg_content">

      <div class="reg_form" data-aos="fade-right" data-aos-duration="2000">
        <div class="reg_form_header">
          <div class="reg_form_header_label">
            <span>Sign Up</span>
          </div>

          <div class="reg_form_header_text">
            <span>If you already have an account register</span>
            <span>You can  <RouterLink to="/Login">Login here !</RouterLink></span>
          </div>
        </div>

        <form class="reg_inputsANDbtns">
          <div class="reg_input email">
            <span>Email</span>
            <input type="text" placeholder="Enter your email address">
            <hr>
          </div>

          <div class="reg_input username">
            <span>Username</span>
            <input type="text" placeholder="Enter your User name">
            <hr>
          </div>

          <div class="reg_input password">
            <span>Password</span>
            <input type="password" placeholder="Enter your Password">
            <hr>
          </div>

          <div class="reg_input password">
            <span>Confirm Password</span>
            <input type="password" placeholder="Confrim your Password">
            <hr>
          </div>

          <button class="Reg_btn">
            <span>Register</span>
          </button>

          <div class="link_to_home">
            <RouterLink to="/" class="homelink"><span class="btn_header">Return to Home Page</span></RouterLink>
            <RouterView/>
          </div>


        </form>
      </div>

      <div class="reg_photo" data-aos="fade-down" data-aos-duration="2000">

        <div class="reg_photo_container">

          <img src="../../img/Reg_Logo_Photo.svg" alt="">

          <div class="reg_photo_text">
            <span class="reg_photo_text_heading">Sign Up to Netbook</span>
            <span class="reg_photo_text_label">Lorem Ipsum is simply</span>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reg",
}
</script>

<style scoped lang="scss">
  .reg_container{
    font-family: 'Poppins' ,  sans-serif;
    font-style: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    .reg_content{
      margin-top: 30px;
      display: flex;
      align-items: center;

      .reg_form{
          margin-top: 40px;
        .reg_form_header{
          margin-bottom: 52px ;

          .reg_form_header_label{
              margin-bottom: 22px;
            span{
              font-weight: 500;
              font-size: 30px;
              line-height: 45px;
              color: #000000  ;
            }
          }
          .reg_form_header_text{
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
        .reg_inputsANDbtns{

          .reg_input{
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
          .username{
            span{
              display: flex;
              &:before{
                content: url("src/components/icons/Log_Reg_Icons/userIcon.png");
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
          .Reg_btn{
            background-color: #217BF4;
            box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.25);
            border-radius: 32px;
            border: none;
            height: 53px;
            transition: 0.6s;

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
          .Reg_btn_back{
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
      .reg_photo{
        padding: 130px 88px;
        background: #000842;
        border-radius: 15px;

        .reg_photo_container{

          img{

            margin-bottom: 90px;
          }

          .reg_photo_text{
            display: flex;
            flex-flow: column;
            .reg_photo_text_heading{
              margin: 0;
              font-weight: 600;
              font-size: 40px;
              line-height: 60px;

              /* identical to box height */

              color: #FFFFFF;
            }
            .reg_photo_text_label{
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
    .reg_form{
      margin-right: 127px;
    }
  }


  @media screen and (max-width: 1312px) {
    .reg_photo{
      display: none;
    }
    .reg_form{
      text-align: center;
    }
  }
  @media screen and (min-width: 460px) {
    .Reg_btn{
      width: 100%;
    }
    .reg_form{
      width: 400px;
    }
  }
  @media screen and (max-width: 461px) {
   .Reg_btn{
     width: 65%;
   }
  }
</style>