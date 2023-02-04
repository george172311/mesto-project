



const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-19',
  headers: {
    authorization: 'c8a34be0-7fd7-4dd8-9a54-37c62149ea62',
    'content-type': 'application/json'
  }
}

// Получаем карточки с сервера
export function getInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => res.json())
}

//  Добавляем свою карточку
export function addCardToServ(image, name) {
  fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      link: image,
      name: name
    })
  })
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
}

// Получаем информацию об авторе
export function getInitialName() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(res => res.json())

}

export function deleteCard(card) {
   fetch(`${config.baseUrl}/cards/${card._id}`, {
    method: 'DELETE',
    headers: config.headers,
    body: JSON.stringify({
      link: card.link,
      name: card.name
    })
  })
    .then((res) => {
      return res.json()
    })
}



