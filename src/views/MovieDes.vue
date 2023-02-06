<template>
    <Layout>
        <div class="container">
            <div v-if="show" class="film-wrapper">
                <div class="item-image">
                    <img :src="show?.image?.original || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' " alt="">
                </div>
                <div class="item-summary">
                    <h2>{{ show.name }}</h2>
                    <v-chip v-for="genre in show.genres" draggable>
                        {{ genre }}
                    </v-chip>
                    <div>{{show.summary}}</div>
                </div>
            </div>
            <div v-for="item in cast">
                <v-cast :cast="item"/>
            </div>
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
    width: 20%;
    height: auto;
}
.item-image img{
    width: 100%;
    object-fit: cover;
}
.film-wrapper{
    display: flex;
    gap: 3%;
}
.item-summary{
    width: 50%;
}
</style>