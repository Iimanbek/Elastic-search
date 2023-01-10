<template>
    <div>
        <input type="text" v-model="value" ><button @click="send">send</button>
    </div>
    <div v-for="item in header">
        <router-link :to="item.link">{{ item.name }}</router-link>
    </div>

</template>

<script>
import { mapStores } from 'pinia';
import { useValueStore } from '../stores/GetData.js'
export default {
    data: () => ({
        value: '',
        header: []
    }),
    computed: {
        ...mapStores(useValueStore)
    },
    mounted() {
        this.gethead()
        console.log(this.header);
    },
    methods: {
        send() {
            this.valueStore.value = this.value
        },
        async gethead(){
            const res = await fetch('http://localhost:3000/header')
            this.header = await res.json()
        }
    }
}
</script>

<style scoped>
button{
    background: white;
    border: none;
    font-size: 14.5px;
}
</style>