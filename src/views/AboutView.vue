<template>
  <div class="about">
    <nav>
    <div class="nav-inner">
      <h1>HOME</h1>
      <div class="links-nav">
        <input type="text" @input="searchInput" placeholder="search" v-model="searchValueAbout">
        <router-link to="/about">SHOWS</router-link>
        <router-link to="/">HOME</router-link>
        <router-link to="/input">INPUT</router-link>
        <router-link to="/about">Sign up</router-link>
      </div>
    </div>
  </nav>
  <div v-if="result.length" class="item-wrapper" >
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
</template>


<script>
  import Card from '../components/card.vue'
export default {
  component:{
    Card
  },
  data: () => ({
    searchValueAbout: '',
    result: '',
    controller: new AbortController(),

  }),
  methods: {
    async getData() {
      const url = 'https://api.tvmaze.com/search/shows?q='
      const response = await fetch(`${url}${this.searchValueAbout}`, {
        method: 'GET',
        signal: this.controller.signal
      })
      console.log(data)
      const data = await response.json()
      this.result = await data.map(item => ({
        ...item.show
      }))
    }
  },
  mounted() {
  },
}
</script>

<style>
</style>
