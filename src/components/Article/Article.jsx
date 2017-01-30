import React from 'react';
import articlesService from '../../services/articles'
import Comments from '../Comments';

class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: [],
        };
    }

    componentDidMount() {
        this.loadArticle(this.props.params.id)
    }

    loadArticle(id) {
        articlesService.getArticle(id)
            .then((article) => this.setState({
                header: article.header,
                content: article.content,
                author: article.author,
                tags: article.tags,
                pubdate: article.pub_date,
                views: article.views,
                comments: article.comments,
            }))
            .catch((error) => console.log('Error', error));
    };


    render() {
        return (
            <div>
                <div>
                    <h2>{this.state.header}</h2>
                    <p>{this.state.content}</p>
                    <p>
                        <span>Posted {this.state.pubdate} by {this.state.author}</span>
                        <br/>
                        <span>Viewed {this.state.views} times</span>
                    </p>
                </div>
                <div>
                    <h3>Comments</h3>
                    <Comments comments={this.state.comments}/>
                </div>
            </div>
        );
    };
}

export default Article;
