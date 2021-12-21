export default({
    state: {
        counter: 0,
        users: [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                }
            }, {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "address": {
                    "street": "Victor Plains",
                    "suite": "Suite 879",
                    "city": "Wisokyburgh",
                    "zipcode": "90566-7771",
                    "geo": {
                        "lat": "-43.9509",
                        "lng": "-34.4618"
                    }
                },
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net",
                "company": {
                    "name": "Deckow-Crist",
                    "catchPhrase": "Proactive didactic contingency",
                    "bs": "synergize scalable supply-chains"
                }
            },
        ]
    },
    getters: {
        allUsers: state => state.users,
        counter: state => state.counter
    },

    actions: {
        async getUsers({commit}) {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await res.json();
            commit("setUsers", json)
        },
        addCounter({commit}) {
            commit('addCounter')
        },
        addUser({
            commit
        }, user) {
            commit("AddUser", user)
        },
        deleteUser({
            commit
        }, id) {
            commit("deleteUser", id)
        }
    },
    mutations: {
        setUsers: (state, users) => (state.users = users),
        addCounter: (state) => {
            state.counter = state.counter + 1;
        },
        AddUser: (state, user) => {
            let updatedData = state.users
            updatedData.push(user)
            state.users = updatedData
        },
        deleteUser: (state, id) => {
            state.users = state.users.filter(user => user.id != id)
        }
    },
    modules: {}
})
