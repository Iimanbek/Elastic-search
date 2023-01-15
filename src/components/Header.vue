<template>
    <div class="nav-inner">
        <h1>Home.PAGE</h1>
      <div class="links-nav">
        <input type="text" @input="searchInput" placeholder="search" v-model="movieInput.movieInputs">
        <router-link to="/shows">MOVIES</router-link>
        <router-link to="/people">PEOPLE</router-link>
        <router-link to="/input">SIGN UP</router-link>
        <router-link to="/input">SIGN IN</router-link>
      </div>
    </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useGetInput } from '../stores/getdata';
export default {
  data() {
    return {
      movieInput:''
    }
  },
  methods: {
    searchInput(){
      console.log(this.movieInput.movieInputs)  
    }
  },
  mounted() {
    this.movieInput = getInput()
    console.log(this.movieInput.movieInputs)
  },
  computed: {
      ...mapStores(useGetInput)
  },
}
</script>
<style lang="css">
    
</style>