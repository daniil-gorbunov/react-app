import React from 'react';
import {Link} from 'react-router'
import authorsService from '../../services/authors'

class Author extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
        };
    }

    componentDidMount() {
        if(!this.props.author){
            this.loadAuthor(this.props.id)
        }else{
            const author = this.props.author;
            this.setState({
                id: author._id,
                firstName: author.first_name,
                lastName: author.last_name,
            });
        }
    }

    loadAuthor(id) {
        authorsService.getAuthor(id)
            .then((author) => this.setState({
                id: author._id,
                firstName: author.first_name,
                lastName: author.last_name,
            }))
            .catch((error) => console.log('Error', error));
    };

    render() {
        return (
            <Link to={{
                pathname: `/articles`,
                query: {author: this.state.id}
            }}>{this.state.firstName} {this.state.lastName}</Link>
        )
    };
}

export default Author;
