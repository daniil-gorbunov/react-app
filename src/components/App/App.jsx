import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div>
                <p><Link to="/login">login</Link></p>
                <p><Link to="/articles">articles</Link></p>
                <p><Link to="/authors">authors</Link></p>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    };

}

export default App;
