// Авторизация
const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-19',
  headers: {
    authorization: 'c8a34be0-7fd7-4dd8-9a54-37c62149ea62',
    'content-type': 'application/json'
  }
}

// Проверка запроса
function checkRes(res) {
  if (res.ok) {
    return res.json();
  } else {
    console.log(res.status);
  }
}

// Получаем карточки с сервера
export function getInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => checkRes(res))
}

//  Добавляем свою карточку
export function addCardToServ(image, name) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      link: image,
      name: name
    })
  })
    .then(res => checkRes(res))
}

// Обновляем информацию об авторе
export function addProfileInfoToServ(name, about) {
  fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
    .catch(err => console.log(err))
}

// Получаем информацию об авторе
export function getInitialName() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(res => checkRes(res))

}

// Удаление карточки
export function deleteCard(card) {
  return fetch(`${config.baseUrl}/cards/${card._id}`, {
    method: 'DELETE',
    headers: config.headers,
    body: JSON.stringify({
      link: card.link,
      name: card.name
    })
  })
    .catch(err => console.log(err))
}

// Обновляем аватар
export function addAvatarToServ(avatar) {
  fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar.value
    })
  })
    .catch(err => console.log(err))
}

// Добавляем.удаляем лайк

export function putLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(res => checkRes(res))
}

export function deleteLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(res => checkRes(res))
}

