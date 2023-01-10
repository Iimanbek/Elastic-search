<template>
    <div>
        <v-header>
            <main>
                <slot/>                 
            </main>
        </v-header>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
export default {
    components:{
        'v-header': Header
    }
}
</script>
<style lang="css">
    
</style>