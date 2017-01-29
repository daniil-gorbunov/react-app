import React from 'react';

import Comment from '../Comment'

class Comments extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div>
                {this.props.comments.map((comment) => (
                    <Comment
                        key={comment._id}
                        comment={comment.comment}
                        author={comment.author}
                        pubdate={comment.pub_date}
                    />
                ))}
            </div>
        );
    };
}

export default Comments;
