module.exports = {
    isLoggedIn(){
        return true;
    }
    // login(evt){
    //     const inputs = evt.target.parentNode.querySelectorAll('input');
    //
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //
    //     const init = {
    //         method: 'POST',
    //         headers: headers,
    //         body: `login=${inputs[0].value}&password=${inputs[1].value}`
    //     };
    //     fetch('http://localhost:3000/login', init)
    //         .then((response) => {
    //             this.setState({
    //                 loginOk: response.ok
    //             });
    //         })
    // }
};
