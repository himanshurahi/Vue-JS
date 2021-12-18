const app = Vue.createApp({ // data, functions, template
    data() {
        return {showBooks: true, title: 'Book Name', author: 'himanshurahi', count: 1, users : [
            {name : "himanshirahi"},
            {name : "new himanshu rahi"},
            {name : "old himanshu rahi"}
        ]}
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
