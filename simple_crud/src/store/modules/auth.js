import {firestore} from "../../firebase/config";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase/config";
import router from "../../router"
import {
    query,
    getDocs,
    orderBy,
    collection,
    addDoc,
    deleteDoc,
    doc
} from "firebase/firestore";
export default({
    state: {
        user: null,
        error: null,
        loading: false
    },
    getters: {
        getUser: state => state.user
    },
    actions: {
        async login({
            commit
        }, userDetails) {
            commit("loading", true)
            try {
                const res = await signInWithEmailAndPassword(auth, userDetails.email, userDetails.password);
                commit("setUser", res.user)
                commit("loading", false)
                router.push({name: "Home"})
            } catch (e) {
                commit("error", e.message)
                commit("loading", false)
            }
        },
        async signup({
            commit
        }, userDetails) {
            commit("loading", true)
            try {
                const res = await createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password);
                commit("loading", false)
            } catch (e) {
                commit("error", e.message)
                commit("loading", false)
            }
        },

        async logout({commit}) {
            try {
                const res = await auth.signOut();
                commit("setUser", null)
                commit("error", null)
                commit("clearTodos")
                router.push({name: "Login"})
            } catch (e) {
                commit("error", e.message)
            }
        },
        async fetchUser({commit}) {
            auth.onAuthStateChanged(user => {
                if (user) {
                    commit("setUser", user)
                } else {
                    console.log("Not LoggedIn")
                }
            })
        }
    },
    mutations: {
        error: (state, error) => {
            state.error = error
        },
        loading: (state, status) => {
            state.loading = status
        },
        setUser: (state, user) => {
            state.user = user
        }
    }
})
