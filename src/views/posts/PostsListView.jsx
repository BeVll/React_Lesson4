import React, {useEffect, useState} from 'react';
import axios from "axios";
import '../../App.css';
import {Link} from "react-router-dom";
const PostsListView = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            setPosts(response.data);
            console.log(response.data);
        }).catch((reason) => {
            console.log(reason);
        })
    }, [])

    return (
        <div className="PostsListView">
            {
                posts.length > 0 &&
                posts.map((post) => (
                    <Link style={{textDecoration: "none"}} to={`/posts/${post.id}`}>
                        <div key={post.id} className='postContainer'>
                            <div className='header'>
                                <div className='postId'>
                                    {post.id}
                                </div>
                                <h1 className={"title"}>{post.title}</h1>
                            </div>
                            <span className={"bodyPost"}>
                            {post.body}
                        </span>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default PostsListView;