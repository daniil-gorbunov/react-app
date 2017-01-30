import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/register">register</Link></li>
                    <li><Link to="/articles">articles</Link></li>
                    <li><Link to="/authors">authors</Link></li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    };

}

export default App;
