import {ref} from "vue";

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);
    const showPosts = ref(true);
    const load = async () => {
        try {
            let data = await fetch("http://localhost:3000/posts");
            if (! data.ok) {
                throw Error("No Data");
            }

            posts.value = await data.json();
        } catch (e) {
            error.value = e.message;
            console.log(error.value);
        }
    };

    return {posts, error, load, showPosts}
}

export default getPosts
