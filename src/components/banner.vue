<template>
    <div class="promo-wrapper" :style="`height: calc(100vh - ${this.inputStore.headerHeight}px)`">
        <div class="bg-wrapper">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/935156fb-9579-4fc2-ad94-70680402b8ef/9a312cfd-acca-4fb8-b648-e7b0ed38f216/KG-ru-20230109-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="">
            <div class="inner-header">
                <h2>Фильмы, сериалы и многое другое без ограничений.</h2>
                <p>Смотрите где угодно. Отменить подписку можно в любое время.</p>
                <p>Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.</p>
                <div class="inner-eamil-wrapper">
                    <v-text-field
                        label="E-mail"
                        bg-color="white"
                        hide-details="auto"
                        required
                    ></v-text-field>
                    <button class="btnofStart" >Начать смотреть</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Navigation, Autoplay } from 'swiper';
import { useInputStore } from '../stores/getdata';
import { mapStores } from 'pinia';
export default {
data: () => ({
    modules: [Navigation, Autoplay]
}),
computed:{
    ...mapStores(useInputStore)
},
methods:{
},
mounted() {
  console.log(this.inputStore.headerHeight);  
},
}
</script>
<style>
.bg-wrapper img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.5;
    display: flex;
}
.bg-wrapper{
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center ;
}
.promo-wrapper{
    overflow: hidden;
    background: #000;
}
.inner-header{
    width: 50%;
    border-radius: 20%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.inner-header h2{
    color: white;
    font-size: 42px;
    line-height: 1.1;
    font-weight: bold;
    text-align: center;
    width: 60%;
    margin-bottom: 10px;
}
.inner-header p {
    color: white;
    font-weight: 450;
    font-size: 22px;
    text-align: center;
    margin-bottom:20px;
}
.btnofStart{
    background: red;
    color: white;
    font-size: 24px;
    padding: 0 15px;
}
.btnofStart:hover{
    background: rgb(235, 22, 22);
}
.inner-eamil-wrapper{
    display: flex;
    width: 80%;
}
</style>