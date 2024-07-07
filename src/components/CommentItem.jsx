import React from 'react';

const CommentItem = ({comment}) => {
    return (
        <div className="commentItem">
            <div className="commentUser">
                {comment.email}
            </div>
            <h1 className={"commentTitle"}>{comment.name}</h1>
            <span className={"commentBody"}>{comment.body}</span>
        </div>
    );
};

export default CommentItem;