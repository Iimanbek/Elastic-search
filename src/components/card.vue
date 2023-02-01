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
    <div class="item__wrapper">
      <div class="bg">
        <img class="image" :src="dataB?.image?.medium || dataB?.image?.original ">
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
    </div>
    <!-- <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="mx-auto"
        color="grey-lighten-4"
        max-width="400"
        v-bind="props"
      >
        <v-img
          :aspect-ratio="16/9"
          cover
          :src="dataB?.image?.medium "
        >
          <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
              style="height: 100%;"
            >
              More info
            </div>
          </v-expand-transition>
        </v-img>
        <v-card-text class="pt-6">
          <div  class="font-weight-light text-grey text-h6 mb-2">
            genres: {{ dataB.genres }}
          </div>
          <h3 class="text-h4 font-weight-light text-orange mb-2">
            {{ dataB.name }}
          </h3>
          <div class="font-weight-light text-h6 mb-2">
            Our Vintage kitchen utensils delight any chef.<br>
            Made of bamboo by hand
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
  </div> -->

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
.image{
    width: 200px;
    padding: 20px 0;
}
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
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}
</style>
