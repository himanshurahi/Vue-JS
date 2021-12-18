const app = Vue.createApp({ // data, functions, template
    data() {
        return {
            showBooks: true,
            title: 'Book Name',
            author: 'himanshurahi',
            url : "https://google.com",
            count: 1,
            isClass : false,
            users: [
                {
                    name: "himanshirahi",
                    isFav : false
                }, {
                    name: "new himanshu rahi",
                    isFav : true
                }, {
                    name: "old himanshu rahi",
                    isFav : false
                }
            ]
        }
    },
    methods: {
        changeTitle(data) {
            this.title = data;
        },

        HideOrShowBooks() {
            this.showBooks = !this.showBooks
        },

        toggleClass(user){
            user.isFav = !user.isFav;
        }
    }
})

app.mount('#app')
