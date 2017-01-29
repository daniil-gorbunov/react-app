import React from 'react';
import Author from '../Author';
import authorsService from '../../services/authors'

class Authors extends React.Component {
    constructor() {
        super();
        this.state = {
            authors: []
        };
    }

    componentDidMount() {
        this.loadAuthors()
    }

    loadAuthors() {
        authorsService.getAuthors()
            .then((authors) => this.setState({
                authors: authors,
            }))
            .catch((error) => console.log('Error', error));
    };

    render() {
        return (
            <ul>
                {this.state.authors.map((author) => (
                    <li key={author._id}><Author author={author}/></li>
                ))}
            </ul>
        );
    };
}

export default Authors;
