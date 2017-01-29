import React from 'react';

class Comment extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <p>Comment: {this.props.comment}</p>
                <p>Author: {this.props.author}</p>
                <p>Pubdate: {this.props.pubdate}</p>
            </div>
        )
    };
}

export default Comment;
