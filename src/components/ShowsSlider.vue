<template>
    <div class="cont">
      <div class="highlights">
        <h1>Фильмы</h1>
        <p>Фильмы — страшные, смешные, драматические, романические — заставляют нас переживать целый спектр эмоций. Множество фильмов — множество впечатлений!</p>
      </div>
      <div class="wrapperSlider" v-for="genreArray, index in genreStore.genres">
        <div class="nameOfGenres">
          <h2>{{ index }}</h2>
        </div>
        <swiper 
        class="mobileSwiper"
        :watchSlidesProgress="true" 
        :autoplay="true"
        :scrollbar="{ hide: false }"
        :slidesPerView="6"
        :space-between="70"
        :center-insufficient-slides="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        >
          <swiper-slide class="swipeMe"  v-for="genre in genreArray" >
            <router-link :to="`/shows/${genre.id}`">
              <div>
                <div>
                  <img :src="genre?.image?.medium" alt="no images">
                </div>
                <span> {{ genre.name }}</span>
              </div>
            </router-link>
        </swiper-slide>
        </swiper>
      </div>
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
import { mapStores } from 'pinia';
import { useGenreStore } from '../stores/genres';
import { Scrollbar, Autoplay } from "swiper";
export default {
    data() {
        return {
          modules: [Scrollbar, Autoplay],
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
    },
  computed:{
    ...mapStores(useGenreStore)
  }
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

.highlights{
  width: 45%;
  color: white;
  margin: 50px 0 30px 0 ;
}
.highlights h1{
  font-weight: bold;
  font-size: 54px;
}
.highlights p{
  font-size: 18px;
  line-height: 30px;
  font-weight: 430;
}
.nameOfGenres h2{
  margin: 40px 0 10px  0 ;
  color: white;
  font-weight: bold;
  font-size: 34px;
}
.cont{
  margin: 0 3% ;
}
.swiper-slide {
  transition: 250ms all;
}
.swiper-slide:hover {
      transform: scale(1.2);
      z-index: 1;
}
.swiper-slide:first-child:hover{
      margin:0 40px;
}
.swiper-slide:last-child:hover{
      margin:0 -40px;
}
/* .wrapperSlider{
} */
</style>