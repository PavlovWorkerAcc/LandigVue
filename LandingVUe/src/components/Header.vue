<template>
  <header>
    <div class="logo_header">
      <img src="/src/img/logo.png" alt="">
    </div>

    <nav class="nav_header">
      <ul class="ul_header_elem">
        <li class="li_header_elem"><a href="">Home</a></li>
        <li class="li_header_elem"><a href="">Community</a></li>
        <li class="li_header_elem"><a href="">Blog</a></li>
        <li class="li_header_elem"><a href="">Events</a></li>
      </ul>
    </nav>

    <form class="form_header">
      <div class="glass_logo_form_header"><img src="/src/img/MagnifyingGlass.png" style="width: 15px"></div>
      <input class="form_header_input" type="search" placeholder="Search Here...">
      <button class="btn_header">Log in</button>
    </form>
  </header>
  <hr>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
hr{
  opacity: 0.1;
  border: 1px solid #217BF4;
}
header {
  line-height: 1.5;
  display: flex;
  align-items: center;
  background-color: rgba(33 , 123, 244 , 4%) ;
  margin: 0 auto;
}
.logo_header {
  margin-right: 0;
}
.nav_header{
  margin-left: 0;
  margin-right: 0;
  .ul_header_elem {
    display: flex;
    margin: 40px 72px;
  }
  .li_header_elem {
    list-style-type: none;
    font-family: 'Inter' , sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 14px;
    letter-spacing: 0.01em;
    &:not(:first-child) {
      margin-left: 32px;
    }

    a {
      color: #656464;
      text-decoration: none;
      transition: 0.5s;
      font-weight: 700;
    }
    a:hover{
      transition: 0.5s;
      color: rgba(43, 43, 57, 1);
    }
    a:after {
      display: block;
      content: "";
      margin-top: 1px;
      height: 2px;
      width: 0%;
      background-color: #0061ff;
      transition: width .3s ease-in-out;
    }
    a:hover:after,
    a:focus:after {
      width: 100%;
    }
  }
}

.form_header {
  display: flex;
  align-items: center;
  margin-left: 379px;
  padding-left: 379px;
  .form_header_input {
    margin-left: 7px;
    margin-right: 42px;
    border: none;
    width: 80px;
    height: 25px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    background-color: rgba(0, 0, 0, 0);
    outline: none;
  }

  .btn_header {
    width: 123px;
    height: 50px;
    background: #217BF4;
    box-shadow: 0 7px 22px -6px rgba(33, 123, 244, 0.34);
    border: none;
    border-radius: 14px;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;

    text-align: center;
    transition: 0.4s;
    color: #FFFFFF;

    &:hover{
      background-color: rgba(33 , 123, 244 , 0%);
      color:rgba(33, 123, 244, 1);
      transition: 0.6s;
      border: 1px solid #217BF4;
    }
  }
}
</style>