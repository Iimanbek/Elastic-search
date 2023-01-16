<template>
    <Layout>
        <div v-if="show">
            <div class="item-image">
                <img :src="show?.image?.original || 'https://thumbs.dreamstime.com/b/portrait-young-beautiful-girl-fashion-photo-29870052.jpg' " alt="">
            </div>
            <div>
                <h2>{{ show.name }}</h2>
            </div>
        </div>
        <div v-for="item in cast">
            <v-cast :cast="item"/>
        </div>
    </Layout>
</template>
<script>
import castShow from '../components/castShow.vue'
import Layout from '../layout/Layout.vue'
export default {
    data() {
        return {
            show:null,
            season:null,
            cast:null
        }
    },
    components:{
    "v-cast": castShow,
    Layout
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