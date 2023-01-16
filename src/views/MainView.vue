<template>
  <Layout>
    <div>
      <div>
        <v-banner/>
      </div>
      <div>
        <showsSlider/>
      </div>
    </div>
  </Layout>
</template>
<script>
import ShowsSlider from '../components/ShowsSlider.vue';
import banner from '../components/banner.vue';
export default {
    data() {
        return {
            // main: "MAIN",
            genres:{
              thriller:[],
              comedy:[],
              horror:[],
              romantic:[],
              drama:[],
              action:[],
              crime:[],
              fantasy:[],
              detective:[],
            }
        };
    },
    components:{
      ShowsSlider,
      'v-banner': banner
    },
    mounted() {
      console.log(this.genres);
    },
}
</script>
<style>
</style>