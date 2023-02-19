export class Api {
    constructor(options) {
        this._url = options.url,
        this._headers = options.headers
    }


_checkResult(res) {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject('Ошибка: ${res.status}')
}

getUserInfo() {
    return fetch(this._url + '/users/me', {
        method: 'GET',
        headers: this._headers
    })
    .then(this._checkResult)
}

getCards() {
    return fetch(this._url + '/cards', {
        method: 'GET',
        headers: this._headers
    })
    .then(this._checkResult)
}

updateUserInfo(userData) {
    return fetch(this._url + '/users/me', {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
            name: userData.name,
            about: userData.about
        })
    })
    .then(this._checkResult)
}

addNewCard(data) {
    return fetch(this._url + '/cards', {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
            name: data.name,
            link: data.link
        })
    })
    .then(this._checkResult)
}

likeCard(id) {
    return fetch(this._url + `/cards/${id}/likes`, {
        method: 'PUT',
        headers: this._headers
    })
    .then(this._checkResult)
}

dislikeCard(id) {
    return fetch(this._url + `/cards/${id}/likes`, {
        method: 'DELETE',
        headers: this._headers
    })
    .then(this._checkResult)
}

deleteCard(id) {
    return fetch(this._url + `/cards/${id}`, {
        method: 'DELETE',
        headers: this._headers
    })
    .then(this._checkResult)
}

changeUserAvatar(data) {
    return fetch(this._url + `/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
            avatar: data.userAvatar,
          })
    })
    .then(this._checkResult)
}
}