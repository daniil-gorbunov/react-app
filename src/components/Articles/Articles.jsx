import React from 'react';
import articlesService from '../../services/articles'
import ArticlePreview from '../ArticlePreview';

class Articles extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        this.loadArticles()
    }

    loadArticles = () => {
        const params = {};
        if (this.props.location.query.author) {
            params['author'] = this.props.location.query.author;
        }
        articlesService.getArticles(params)
            .then((articles) => this.setState({
                articles: articles,
            }))
            .catch((error) => console.log('Error', error));
    };

    render() {
        return (
            <div>
                {this.state.articles.map((article) => (
                    <ArticlePreview key={article._id} article={article}/>
                ))}
            </div>
        );
    };
}

export default Articles;
