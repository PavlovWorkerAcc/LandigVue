import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.scss'
import './img/logo.png'
import './components/Header.vue'
import router from "./router";
const app = createApp(App)
import AOS from 'aos';
import 'aos/dist/aos.css';
app.use(router)
app.mount('#app');
AOS.init()
window.onload = () => {


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