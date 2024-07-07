import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import PostsListView from "../views/posts/PostsListView";
import PostDetailedVIew from "../views/posts/PostDetailedVIew";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/posts">
                    <Route index element={<PostsListView/>}/>
                    <Route path={":id"} element={<PostDetailedVIew/>}/> {/* /posts/id */}


                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;