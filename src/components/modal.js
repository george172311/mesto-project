import { addProfileInfoToServ, addAvatarToServ } from "./api.js";


//переменные для попапа
const profilePopup = document.querySelector('#profile-popup');
const btnOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const placePopup = document.querySelector('#cards-popup');
const btnOpenAddCardPopup = document.querySelector('.profile__add-button');
const imagePopup = document.querySelector('#image-popup');
const popupCardImage = imagePopup.querySelector('.popup__image');
const popupCardCaption = imagePopup.querySelector('.popup__caption');
const profileAvatar = document.querySelector('.profile__avatar');
const avatarPopup = document.querySelector('#avatar-popup');
const avatarInput = document.querySelector('#avatar-image');


// Открытие/закрытие попапа
function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
};

function closePopup(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
};



function closePopupEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  showOnLoad(evt, true);
  addProfileInfoToServ(artistName.value, artistHobby.value)
    .then((data) => {
      authorName.textContent = data.name;
      hobby.textContent = data.about;
    })
    .then(() => {
      closePopup(profilePopup)
    })
    .catch(err => console.log(err))
    .finally(() => showOnLoad(evt, false))
};



export function showOnLoad(evt, isLoad) {
  if(isLoad) {
    evt.submitter.textContent = 'Сохранение...';
  } else {
    evt.submitter.textContent = 'Сохранить';
  }
}

export { authorName, hobby, profilePopup, btnOpenEditProfilePopup, placePopup, btnOpenAddCardPopup, imagePopup, formEditProfile, profileAvatar, avatarPopup, avatarInput, artistName, artistHobby, openPopup, closePopup, handleProfileFormSubmit, openImagePopup }
