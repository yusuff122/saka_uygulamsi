import { resimGetir } from "./unsplash_api.js";
import {sakaGetir}  from './jokapi.js';
import { ceviriYapmaMethod } from "./translation.js";



class Ekran {

    constructor(){
         this.sakaGetirButton = document.querySelector('.button-saka-getir');
         this.sakaGetirButton.addEventListener('click',()=> this.sakaGetir());
    }

    async sakaGetir(){

       const rastgeleResim = await resimGetir();
       const rastgeleSaka = await sakaGetir();
       const ceviri = await ceviriYapmaMethod();
       this.sonucYazdir();
    }

    sonucYazdir(){
        document.querySelector('.sonuc').innerHTML=`            <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-centered">inglizce şaka</p>
            </div>
          </div>
             <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-centered">Türkçe şaka</p>
            </div>
          </div>
        </div>
      </div>
</div>`
    }
}

export default function uygulamaBaslat(){
  new Ekran();
}