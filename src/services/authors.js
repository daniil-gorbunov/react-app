import constants from './constants';

module.exports = {
    getAuthors(){
        return fetch(`${constants.API.BASE}${constants.API.AUTHOR}`, {
            headers: new Headers({'Content-Type': 'application/json'}),
        })
            .then((data) => data.json())
            .catch((error) => console.log('Error', error));
    },

    getAuthor(id){
        return fetch(`${constants.API.BASE}${constants.API.AUTHOR}/${id}`, {
            headers: new Headers({'Content-Type': 'application/json'})
        })
            .then((data) => data.json())
            .catch((error) => console.log('Error', error));
    }
};
