//переменные для попапа
const profilePopup = document.querySelector('#profile-popup');
const btnOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const placePopup = document.querySelector('#cards-popup');
const btnOpenAddCardPopup = document.querySelector('.profile__add-button');
const imagePopup = document.querySelector('#image-popup');
const popupCardImage = imagePopup.querySelector('.popup__image');
const popupCardCaption = imagePopup.querySelector('.popup__caption');


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
  authorName.textContent = artistName.value;
  hobby.textContent = artistHobby.value;
  closePopup(profilePopup);
};

export { profilePopup, btnOpenEditProfilePopup, placePopup, btnOpenAddCardPopup, imagePopup, formEditProfile, openPopup, closePopup, handleProfileFormSubmit, openImagePopup }
