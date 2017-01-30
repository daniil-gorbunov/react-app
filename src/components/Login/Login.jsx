import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    };

    logIn = () => {
        const username = encodeURIComponent(this.state.username);
        const password = encodeURIComponent(this.state.password);
        const formData = `username=${username}&password=${password}`;

        fetch('http://localhost:3000/login', {
            method: 'POST',
            body: formData,
            headers:  new Headers({'Content-Type': 'application/x-www-form-urlencoded'})
        })
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
    };

    handleChange = (evt) => {
        const target = evt.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <form>
                <p>
                    <input
                        name="username"
                        type="text"
                        placeholder="Login"
                        value={this.state.login}
                        onChange={this.handleChange}/>
                </p>
                <p>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}/>
                </p>
                <p>
                    <button onClick={this.logIn}>Log In</button>
                </p>
            </form>
        )
    };

    login(evt) {
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
    };
}

export default Login;
