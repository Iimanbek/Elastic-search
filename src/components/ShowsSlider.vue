<template>
    <div>
        <swiper class="mobileSwiper" :watchSlidesProgress="true" :slidesPerView="5">
        <swiper-slide  v-for="n in 40" >
          <div>
            <div>
              <!-- <img :src="item?.image?.medium" alt=""> -->
              1
            </div>
              <span>1</span>
          </div>
        </swiper-slide>
      </swiper>
      <!-- 
      <swiper class="desstopSwiper" :watchSlidesProgress="true" :slidesPerView="2">
        <swiper-slide v-for="n in 10" >
          <div>
            <div>
               <img :src="item?.image?.medium" alt="">
              n
            </div>
              <span>1</span>
          </div>
        </swiper-slide>
      </swiper> -->
    </div>
</template>
<script>
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/css';
export default {
    data() {
        return {
            
        }
    },
    props:{
        shows:{
            type: Array,
            default: []
        },
        title:{
            type: String,
            default: ''
        }
    },  
    components: {
      // Swiper, 
      // SwiperSlide,
    },
}
</script>
<style lang="css">
@media screen and ( max-width:400px ) {
      .mobileSwiper{
        display: hidden;
      }
    }
  .desstopSwiper{
    display: hidden;
  }
    
</style>