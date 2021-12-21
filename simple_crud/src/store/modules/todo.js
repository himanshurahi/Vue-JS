import {firestore} from "../../firebase/config";
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
        todos: [],
        error: null,
        loading: false

    },
    getters: {
        allTodos: state => state.todos,
        error: state => state.error,
        loading: state => state.loading
    },
    actions: {
        async getTodos({commit}) {
            commit("loading", true)
            try {
                const todoRef = collection(firestore, "todos");
                const snapshot = await getDocs(todoRef);
                let todos = snapshot.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    };
                });
                if (todos.length == 0) {
                    throw new Error("No Todos Found");
                }
                commit("setTodos", todos)
                commit("loading", false)
            } catch (e) {
                console.log(e)
                commit("error", e.message)
                commit("loading", false)
            }
        },


        async saveTodo({
            commit
        }, todo) {
            try {
                let todoRef = collection(firestore, 'todos');
                const res = await addDoc(todoRef, todo);
            } catch (e) {
                console.log(e)
            }
        },

        async deleteTodo({
            commit
        }, id) {
            try {
                const res = await deleteDoc(doc(firestore, 'todos', id))
                commit("deleteTodo", id)
            } catch (e) {
                console.log(e)
            }
        }

    },
    mutations: {
        setTodos: (state, todos) => {
            state.todos = todos
        },
        error: (state, error) => {
            state.error = error
        },
        loading: (state, status) => {
            state.loading = status
        },
        deleteTodo: (state, id) => {
            state.todos = state.todos.filter(todo => todo.id != id)
        },
        clearTodos: (state) => {
            state.todos = [];
        }
    }

})
