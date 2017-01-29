module.exports = {
    getAuthors(){
        return fetch('http://localhost:3000/api/v1/author', {
            headers: new Headers({'Content-Type': 'application/json'}),
        })
            .then((data) => data.json())
            .catch((error) => console.log('Error', error));
    },

    getAuthor(id){
        return fetch(`http://localhost:3000/api/v1/author/${id}`, {
            headers: new Headers({'Content-Type': 'application/json'})
        })
            .then((data) => data.json())
            .catch((error) => console.log('Error', error));
    }
};
