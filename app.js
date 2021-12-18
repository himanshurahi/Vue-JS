const app = Vue.createApp({ // data, functions, template
    data() {
        return {showBooks: true, title: 'Book Name', author: 'himanshurahi', count: 1}
    },
    methods: {
        changeTitle(data) {
            this.title = data;
        },

        HideOrShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')
