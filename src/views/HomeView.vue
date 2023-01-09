<script>
import Card from '../components/card.vue'
export default {
  components:{
    Card
  },
  data: () => ({
    searchValue: '',
    controller: new AbortController(),
    resulty:''
  }),
  methods: {
    async search() {
      const url = 'https://api.tvmaze.com/search/people?q='
      const response = await fetch(`${url}${this.searchValue}`, {
        method: 'GET',
        signal: this.controller.signal
      })
      const data = await response.json()
      this.resulty = await data.map(item => ({
        ...item.person
      }))
    },
    searchInput(){
      this.controller.abort()
      this.controller = new AbortController()
      this.search()
    }
  },
}
</script>

<template>
  <nav>
    <div class="nav-inner">
      <h1>HOME</h1>
      <div class="links-nav">
        <input type="text" @input="searchInput" placeholder="search" v-model="searchValue">
        <router-link to="/about">SHOWS</router-link>
        <router-link to="/">HOME</router-link>
        <router-link to="/input">INPUT</router-link>
        <router-link to="/about">Sign up</router-link>
      </div>
    </div>
  </nav>
  <div v-if="resulty.length" class="item-wrapper" >
    <div v-for="item in resulty">
      <card :dataB="item"/>
    </div>
  </div>
  <div v-else>
    <div>
      <p>not found</p>
    </div>
  </div>
  <!-- <card :dataB="resulty"/> -->
</template>

<style>
.item-wrapper{
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center; */
  display: grid;
  grid-template-areas: 'h1 h2 h3 h4';
  place-items: center;
}
.nav-inner{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1250px;  
}
.links-nav{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 40px;
}
nav{
  padding: 50px 0 ;
}
</style>
