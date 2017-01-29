import React from 'react';
import {Link} from 'react-router';
import Author from '../Author';

class ArticlePreview extends React.Component {
    constructor() {
        super();
    }

    render() {
        const article = this.props.article;
        return (
            <div>
                <h2><Link to={`/article/${article._id}`}>{article.header}</Link></h2>
                <p>{article.description}</p>
                <p>
                    <span>Posted {article.pub_date} by <Author id={article.author}/></span>
                    <br/>
                    <span>Viewed {article.views} times</span>
                </p>
            </div>
        );
    };
}

export default ArticlePreview;
