import {ref} from "vue";

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);
    const showPosts = ref(true);
    const load = async () => {
        try {
            let data = await fetch("http://localhost:3000/posts/" + id);
            if (! data.ok) {
                throw Error("Post Not Exist");
            }
            post.value = await data.json();
        } catch (e) {
            error.value = e.message;
            console.log(error.value);
        }
    };

    return {post, error, load}
}

export default getPost;
