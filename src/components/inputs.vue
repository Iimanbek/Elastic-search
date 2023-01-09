<template>
    <div>
        <input type="text" v-model="value" ><button @click="send">send</button>
    </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useValueStore } from '../stores/GetData.js'
export default {
    data: () => ({
        value: ''
    }),
    computed: {
        ...mapStores(useValueStore)
    },
    mounted() {
        
    },
    methods: {
        send() {
            this.valueStore.value = this.value
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