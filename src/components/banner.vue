<template>
    <div class="promo-wrapper" :style="`height: calc(100vh - ${this.inputStore.headerHeight}px)`">
        <div>
        </div>
        <div class="bg-wrapper">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/935156fb-9579-4fc2-ad94-70680402b8ef/9a312cfd-acca-4fb8-b648-e7b0ed38f216/KG-ru-20230109-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="">
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
mounted() {
  console.log(this.inputStore.headerHeight);  
},
}
</script>
<style>
.bg-wrapper img {
    width: 100%;
    height: 100%;
    z-index: 111;
}
.bg-wrapper{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
}
.promo-wrapper{
    overflow: hidden;
}
</style>