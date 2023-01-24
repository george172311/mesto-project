//переменные для попапа
const profilePopup = document.querySelector('#profile-popup');
const btnOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const btnCloseEditProfilePopup = document.querySelector('#profile-close');
const placePopup = document.querySelector('#cards-popup');
const btnOpenAddCardPopup = document.querySelector('.profile__add-button');
const btnCloseAddCardPopup = document.querySelector('#place-close');
const imagePopup = document.querySelector('#image-popup');
const popupCardImage = imagePopup.querySelector('.popup__image');
const popupCardCaption = imagePopup.querySelector('.popup__caption');
const body = document.querySelector('body');

// Открытие/закрытие попапа
function openPopup(element) {
  element.classList.add('popup_opened');
};

function closePopup(element) {
  element.classList.remove('popup_opened');
};

function closePopupOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(profilePopup);
    closePopup(placePopup);
    closePopup(imagePopup);
  };
};

function closePopupEscape(evt) {
  if (evt.key === 'Escape') {
    closePopup(profilePopup);
    closePopup(placePopup);
    closePopup(imagePopup);
  };
};

// функция открытия окна с картинкой
function openImagePopup(src, caption) {
  popupCardImage.setAttribute('src', src);
  popupCardImage.setAttribute('alt', 'Изображение ' + caption);
  popupCardCaption.textContent = caption;
  openPopup(imagePopup);
};

//отправка формы информации об авторе
const formEditProfile = document.querySelector('#profile-form');
const artistName = document.querySelector('#name');
const artistHobby = document.querySelector('#hobby');
const authorName = document.querySelector('.profile__name');
const hobby = document.querySelector('.profile__author-hobby');

function subProfInfo(evt) {
  evt.preventDefault();
  authorName.textContent = artistName.value;
  hobby.textContent = artistHobby.value;
  closePopup(profilePopup);
};

export {profilePopup, btnOpenEditProfilePopup, btnCloseEditProfilePopup, placePopup, btnOpenAddCardPopup, btnCloseAddCardPopup, imagePopup, body, formEditProfile, openPopup, closePopup, closePopupOverlay, closePopupEscape, subProfInfo, openImagePopup}
