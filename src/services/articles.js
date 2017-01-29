module.exports = {
    getArticles(params){
        return fetch(`http://localhost:3000/api/v1/article?query=${JSON.stringify(params)}`, {
            headers: new Headers({'Content-Type': 'application/json'}),
            body: params
        })
            .then((data) => data.json())
            .catch((error) => console.log('Error', error));
    },

    getArticle(id){
        return fetch(`http://localhost:3000/api/v1/article/${id}`, {
            headers: new Headers({'Content-Type': 'application/json'})
        })
            .then((data) => data.json())
            .catch((error) => console.log('Error', error));
    }
};
