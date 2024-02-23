import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {postService} from "../services/postService";
import {Post} from "../components/PostsContainer/Post";

const PostsPage = () => {
    const [post, setPost] = useState(null);
    const {state:{postId}} = useLocation();
    console.log(postId);

    useEffect(() => {
        postService.getById(postId).then(({data})=>setPost(data))
    }, [postId]);
    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {PostsPage};