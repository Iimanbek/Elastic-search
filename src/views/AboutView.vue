<template>
  <div class="about">
    <nav>
    <div class="nav-inner">
      <router-link to="/"><h1>MOVIES</h1></router-link>
      <div class="links-nav">
        <input type="text" @input="searchInputValue" placeholder="search" v-model="searchValueAbout">
        <router-link to="/about">MOVIES</router-link>
        <router-link to="/home">PEOPLE</router-link>
        <router-link to="/input">SIGN UP</router-link>
        <router-link to="/input">SIGN IN</router-link>
      </div>
    </div>
  </nav>
    <div v-if="result.length">
      <div v-if="result.length" class="item-wrapper">
        <div v-for="item in result">
          <card :dataB="item"/>
        </div>
      </div>
      <div v-else>
        <div>
          <p>not found</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  // import Card from '../components/card.vue'
  import Card from '../components/card.vue'
export default {
  components:{
    Card
  },
  data: () => ({
    searchValueAbout: '',
    result: '',
    controller: new AbortController(),

  }),
  methods: {
    async defaultData(){
      const url = "https://api.tvmaze.com/shows"
      const res = await fetch(url)
      this.result = await res.json()
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
    }
  },
  mounted(){
    this.defaultData()
  },
  watch: {
    searchValueAbout() {
      console.log('fsdfsd');
      if(!this.searchValueAbout.length) {
        this.defaultData()
      }
    } 
  }
}
</script>

<style>
</style>
