<template>
    <nav>
    <div class="nav-inner">
        <h1>{{ main }}.PAGE</h1>
      <div class="links-nav">
        <!-- <input type="text" @input="searchInputValue" placeholder="search" v-model="searchValueAbout"> -->
        <router-link to="/about">MOVIES</router-link>
        <router-link to="/home">PEOPLE</router-link>
        <router-link to="/input">SIGN UP</router-link>
        <router-link to="/input">SIGN IN</router-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    data() {
        return {
            main:"MAIN"
        }
    },
}
</script>
<style>
    
</style>