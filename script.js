// Открытие/закрытие попапа с информацией об авторе
let popup = document.querySelector('#profile-popup');
let editButton = document.querySelector('.profile__edit-button');
function openPopup() {
  popup.classList.add('popup_opened');
}
editButton.addEventListener('click', openPopup);
let closeButton = document.querySelector('.popup__close-button');
function closePopup() {
  popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closePopup);

//отправка формы информации об авторе
let form = document.querySelector('.form');
let artistName = document.querySelector('#name');
let artistHobby = document.querySelector('#hobby');
let authorName = document.querySelector('.profile__name');
let hobby = document.querySelector('.profile__author-hobby');

form.addEventListener('submit', function (evt) {
  evt.preventDefault()
  authorName.textContent = artistName.value;
  hobby.textContent = artistHobby.value;
  closePopup();
})
