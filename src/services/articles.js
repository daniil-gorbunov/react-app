import constants from './constants';

module.exports = {
    getArticles(params){
        return fetch(`${constants.API.BASE}${constants.API.ARTICLE}?query=${JSON.stringify(params)}`, {
            headers: new Headers({'Content-Type': 'application/json'}),
            body: params
        })
            .then((data) => data.json())
            .catch((error) => console.log('Error', error));
    },

    getArticle(id){
        return fetch(`${constants.API.BASE}${constants.API.ARTICLE}/${id}`, {
            headers: new Headers({'Content-Type': 'application/json'})
        })
            .then((data) => data.json())
            .catch((error) => console.log('Error', error));
    }
};
