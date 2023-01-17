<template>
  <Layout>
    <div class="about">
      <div>
        <input type="text" @input="searchInputValue" placeholder="search..." v-model="searchValueAbout">
      </div>
      <div v-if="result.length">
        <div v-if="result.length" class="item-wrapper">
          <div v-for="item in result">
            <card @addFavourite="addFavourite" :dataB="item"/>
          </div>
        </div>
        <div v-else>
          <div>
            <p>not found</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<script>
// import { mapStores } from 'pinia'
// import { useGetInput } from '../stores/getdata'
import Card from '../components/card.vue'
export default {
  components:{
    Card
  },
  data: () => ({
    searchValueAbout: '' ,
    result: '',
    controller: new AbortController(),

  }),
  methods: {
    async defaultData(){
      const url = "https://api.tvmaze.com/shows"
      const res = await fetch(url)
      const data = await res.json()
      this.result = data.filter(item => item.id <= 51)
    },
    async getData() {
      const url = 'https://api.tvmaze.com/search/shows?q='
      const response = await fetch(`${url}${this.searchValueAbout}`, {
        method: 'GET',
        signal: this.controller.signal
      })
      const data = await response.json()
      this.result = await data.map(item => ({
        ...item.show
      }))
    },
    searchInputValue(){
      this.controller.abort()
      this.controller = new AbortController()
      this.getData()
    },
    async addFavourite(show){
      const options = {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(show)
      }
      const URL = 'http://localhost:3000/favourite'
      const response = await fetch(URL, options)
      const data = await response.json()
    }
  },
  mounted(){
    this.defaultData()
    // console.log(this.getDataStore);
  },
  computed: {
    // ...mapStores(useGetInput)
  },
  watch: {
    searchValueAbout() {
      console.log(this.searchValueAbout);
      if(!this.searchValueAbout.length) {
        this.defaultData()
      }
    } 
  }
}
</script>

<style>
</style>
