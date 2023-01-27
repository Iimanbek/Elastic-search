import { defineStore } from 'pinia'
// import { ref, computed } from 'vue'

export const useGenreStore = defineStore('genre', {
    state: () => ({
        genresAll:[
            {
                namee: 'thriller'
            },
            {
                namee: 'comedy'
            },
            {
                namee: 'horror'
            },
            {
                namee: 'romantic'
            },
            {
                namee: 'drama'
            },
            {
                namee: 'action'
            },
            {
                namee: 'crime'
            },
            {
                namee: 'fantasy'
            },
            {
                namee: 'detective'
            },
        ],
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
    }),
    actions:{
     async getGenres(){
        const url = 'https://api.tvmaze.com/shows'
        const response = await fetch(url)
        const data = await response.json()
        this.genres.thriller = await data.filter(item => item.genres[2] === 'Thriller')
        this.genres.horror = await data.filter(item => item.genres[1] === 'Horror')
        this.genres.crime = await data.filter(item => item.genres[1] === 'Crime')
        this.genres.detective = await data.filter(item => item.genres[1] === 'Science-Fiction')
        this.genres.comedy = await data.filter(item => item.genres[1] === 'Comedy')
        this.genres.drama = await data.filter(item => item.genres[0] === 'Drama')
        this.genres.romantic = await data.filter(item => item.genres[1] === 'Romance')
        this.genres.fantasy = await data.filter(item => item.genres[1] === 'Fantasy')
        this.genres.action = await data.filter(item => item.genres[1] === 'Action')
     }
    },
})
