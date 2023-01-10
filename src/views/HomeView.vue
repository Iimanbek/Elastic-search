<template>
  <nav>
    <div class="nav-inner">
      <router-link to="/"><h1>PEOPLPE</h1></router-link>
      <div class="links-nav">
        <input type="text" @input="search" placeholder="search" v-model="searchValue">
        <router-link to="/about">MOVIES</router-link>
        <router-link to="/home">PEOPLE</router-link>
        <router-link to="/input">SIGN UP</router-link>
        <router-link to="/input">SIGN IN</router-link>
      </div>
    </div>
  </nav>
  <div v-if="resulty.length">
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
  </div>
  <!-- <card :dataB="resulty"/> -->
</template>

<script>
import Card from '../components/card.vue'
export default {
  components:{
    Card
  },
  data: () => ({
    searchValue: '',
    controller: new AbortController(),
    resulty:'',
  }),
  methods: {
    async defaultDatt(){
      const url = 'https://api.tvmaze.com/people'
      const res = await fetch(url)
      this.resulty = await res.json()
    },
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
  mounted() {
    this.defaultDatt()
  },
  watch: {
    searchValue() {
      console.log('fsdfsd');
      if(!this.searchValue.length) {
        this.defaultDatt()
      }
    } 
  }
}
</script>

<style lang="css">
.item-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 50px ;

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
