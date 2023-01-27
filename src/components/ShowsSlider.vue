<template>
    <div>
      <div v-for="genreArray in genreStore.genres">
        <div v-for="n in genreStore.genresAll">
          <h2>{{ n.namee }}</h2>
        </div>
        <swiper class="mobileSwiper" :watchSlidesProgress="true" :slidesPerView="5">
          <swiper-slide  v-for="genre in genreArray" >
            <router-link to="">
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
    
</style>