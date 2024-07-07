import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import '../../App.css';
import axios from "axios";
import CommentItem from "../../components/CommentItem";

const PostDetailedVIew = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => {
            setPost(response.data);
            console.log(response.data);
        }).catch((reason) => {
            console.log(reason);
        })

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then((response) => {
            setComments(response.data);
            console.log(response.data);
        }).catch((reason) => {
            console.log(reason);
        })
    }, [id]);

    return (
        <div className={"PostsListView"}>
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

            {
                comments.length > 0 &&
                comments.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} />
                ))
            }
        </div>
    );
};

export default PostDetailedVIew;