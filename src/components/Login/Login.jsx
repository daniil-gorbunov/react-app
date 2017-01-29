import React from 'react';

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            loginOk: true
        }
    }

    render() {
        return( <div>
            <input type="text"/>
            <input type="password"/>
            <button onClick={this.login.bind(this)}>Log In</button>
            {this.state.loginOk ? <span/> : <span>Wrong Creds</span>}
        </div>)
    };

    login(evt){
        const inputs = evt.target.parentNode.querySelectorAll('input');

        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        const init = {
            method: 'POST',
            headers: headers,
            body: `login=${inputs[0].value}&password=${inputs[1].value}`
        };
        fetch('http://localhost:3000/login', init)
            .then((response) => {
                this.setState({
                    loginOk: response.ok
                });
            })
    }
}

export default Login;
