<template>
    <div>
        <nav>
    <div class="nav-inner">
      <router-link to="/"><h1>MOVIES</h1></router-link>
      <div class="links-nav">
        <!-- <input type="text" @input="searchInputValue" placeholder="search" v-model="searchValueAbout"> -->
        <router-link to="/about">MOVIES</router-link>
        <router-link to="/home">PEOPLE</router-link>
        <router-link to="/input">SIGN UP</router-link>
        <router-link to="/input">SIGN IN</router-link>
      </div>
    </div>
        </nav>
        <div v-if="show">
            <div class="item-image">
                <img :src="show?.image?.original || 'https://thumbs.dreamstime.com/b/portrait-young-beautiful-girl-fashion-photo-29870052.jpg' " alt="">
            </div>
        </div>
        <div v-for="item in cast">
            <v-cast :cast="item"/>
        </div>
    </div>
</template>
<script>
import castShow from '../components/castShow.vue'
export default {
    data() {
        return {
            show:null,
            season:null,
            cast:null
        }
    },
    components:{
        'v-cast': castShow
    },
    methods:{
        async getShow(){
            const URL = 'https://api.tvmaze.com/shows/'
            const res = await fetch(`${URL}${this.$route.params.id}`)
            const data = await res.json()
            this.show = await data
            console.log(data);
        },
        async getCasts(){
            const URL = `https://api.tvmaze.com/shows/${this.$route.params.id}/cast`
            const res = await fetch(`${URL}`)
            const data = await res.json()
            this.cast = await data
            console.log(data);
        },
        // async getSeason(){
        //     const URL = 'https://api.tvmaze.com/shows/1/seasons'
        //     const res = await fetch(`${URL}${this.$route.params.id}`)
        //     const data = await res.json()
        //     this.show = await data
        //     console.log(data);
        // }
    },
    mounted() {
        this.getShow()
        this.getCasts()
    },

}
</script>
<style lang="css">
.item-image{
    width: 100%;
    height: auto;
}
</style>