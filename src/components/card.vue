<script>
import { useHeaderStore } from '../stores/header'
import { mapStores } from 'pinia'
export default {
  data() {
    return {
      inChart: false,
    }
  },
  props: {
    dataB: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed:{
    ...mapStores(useHeaderStore),
    detailUrl(){
      const type = this.$route.name
      if (type === 'shows') {
        return 'shows'
      }else{
        return 'person'
      }
    },
    status(){
      if (this.headerStore.favourite) {
        return this.headerStore.favourite.find(item => item.id === this.dataB.id) || null
      }
    }
  },
  methods: {
    addFavourite() {
      if (this.status) {
        this.$emit('deleteFavourite', this.dataB)  
      }else{
        this.$emit('addFavourite', this.dataB)
      }
    },
  },
}
</script>

<template>
  <router-link :to="`/${detailUrl}/${dataB.id}`">
    <!-- <div class="item__wrapper">
      <div class="bg">
        <img class="image" :src="dataB?.image?.medium || dataB?.image?.original || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' ">
        <div class="overlay">
        <h2 class="h2ofexmaple">See more !</h2>
        </div>
      </div>
      <div>
        <p class="textItem">{{ dataB.name }}</p>
      </div>
      <div class="btnOfChart">
        <v-btn 
        :class="status ? 'inChartClass' : 'outOfChart','notbtn'"
        @click.prevent="addFavourite"
        variant="plain">
        <span v-if="!status">Add to </span>
        <v-icon v-if="!status" class="icon___vtfy" dark>mdi-heart</v-icon>
        <span  v-if="status">Delete</span>
        <v-icon  v-if="status" class="icon___vtfy" dark>mdi-delete</v-icon>
        </v-btn>
      </div>
    </div> -->
    <div class="card">
      <img class="image" :src="dataB?.image?.medium || dataB?.image?.original || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' ">
      <div class="intro">
        <h2 class="movieName">{{ dataB.name }}</h2>
        <p class="movieDes">rating : {{ dataB.rating.average }} <v-icon dark>mdi-star</v-icon> </p>
        <div class="chip_wrapper">
        <v-chip class="movieRating" v-for="genre in dataB.genres" draggable>{{ genre }}</v-chip>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style>
 .bg:hover .overlay {
	 opacity: 1;
}
 .bg:hover .image {
	 -webkit-filter: blur(2px);
	 filter: blur(2px);
}
.overlay {
  position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    opacity: 0;
}
.h2ofexmaple{
  padding-top: 50%;
  font-size: 34px;
  font-weight: 600;
  font-family: 'Droid Serif', serif;
  text-align: center;
}
.pofexmaple{
  font-family: 'Julius Sans One', sans-serif;
}
/* .image{
    width: 200px;
    padding: 20px 0;
} */
.v-btn.inChartClass{
  background: red;
}
.v-btn.outOfChart{
  border: 0.5px solid red;
}
.item__wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.icon___vtfy{
  margin-left: 5px ;
}



.card{
  box-shadow: 5px 5px 20px black ;
  width: 230px;
  box-sizing: border-box;
}
.image{
  border-radius: 3px;
  width: 100%;
  transition: 1s ;
}
.intro{
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  position: absolute;
  background: rgb(27,27,27,.5);
  color: white ;
  bottom: 5px;
  transition: .5s;
}
.movieName {
  margin: 10px;
  /* font-size: 40px ; */
}
.movieDes{
  font-size: 14px;
  margin: 20px;
  visibility: hidden;
  opacity: 0;
  transition: .5s;
}
.chip_wrapper{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  gap: 5px;
}
.movieRating{
  /* margin: 5px; */
  visibility: hidden;
  opacity: 0;
  transition: .5s;
}
.card:hover .movieRating{
  opacity: 1;
  visibility: visible;
}
.card:hover .intro{
  height: 220px;
  width: 100%;
  bottom: 5px;
  background: #000;
}
.card:hover .movieDes{
  opacity: 1;
  visibility: visible;
}
.card:hover .image{
  transform: scale(1.1);
}
</style>
