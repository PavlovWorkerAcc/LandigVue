import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.scss'
import './img/logo.png'
import './components/Header.vue'
import router from "./router";
const app = createApp(App)
app.use(router)
app.mount('#app');

AOS.init()
window.onload = () => {

    window.scrollTo(0, 0);

    function hamburger(){
        let hamburger = document.querySelector(".hamburger");

        hamburger.addEventListener("click", function() {

            hamburger.classList.toggle("is-active");

        });
    }
   hamburger()

    function checkWidth(){
        let div = document.querySelector('#header_media_ch')
        console.log(document.documentElement.clientWidth)
        if (document.documentElement.clientWidth < 700){
            div.style.display = 'none'
        }
    }
    checkWidth()

}