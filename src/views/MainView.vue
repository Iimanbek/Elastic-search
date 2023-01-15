<template>
  <Layout>
    <!-- <div>
    <div>
      <showsSlider/>
    </div>
  </div> -->
  </Layout>
</template>
<script>
import ShowsSlider from '../components/ShowsSlider.vue';
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
      ShowsSlider
    },
    mounted() {
      console.log(this.genres);
    },
}
</script>
<style>
</style>