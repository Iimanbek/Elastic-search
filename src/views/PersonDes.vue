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
        <div class="main-wrapper">
            <div class="image-wrapper">
                <img :src="show?.image?.original || 'https://thumbs.dreamstime.com/b/portrait-young-beautiful-girl-fashion-photo-29870052.jpg'">
            </div>
            <div class="item-wrapper">
                k
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show:null,
        }
    },
    methods: {
        async getShow(){
            const URL = 'https://api.tvmaze.com/people/'
            const res = await fetch(`${URL}${this.$route.params.id}`)
            const data = await res.json()
            this.show = await data
            console.log(data);
        },
    },
    mounted() {
        this.getShow()
    },
}
</script>
<style lang="css">
.main-wrapper{
    display: flex;
    gap: 20px ;
}
.image-wrapper {
    height: 60vh;
    width: 28vw;
    box-sizing: border-box;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.image-wrapper img{
    /* height: 60vh;    */
    width: 100%;
}
</style>