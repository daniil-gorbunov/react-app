import React from 'react';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            email: ''
        };
    }

    register = () => {

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
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}/>
                </p>
                <p><button onClick={this.register}>Register</button></p>
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
    }
}

export default Register;
