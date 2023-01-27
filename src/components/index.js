/*-----------------------ОБРАБОТЧИКИ СОБЫТИЙ-----------------------*/
import '../pages/index.css';
import { profilePopup, btnOpenEditProfilePopup, btnCloseEditProfilePopup, placePopup, btnOpenAddCardPopup, btnCloseAddCardPopup, imagePopup, body, formEditProfile, openPopup, closePopup, closePopupOverlay, closePopupEscape, handleProfileFormSubmit } from './modal.js';
import { cardForm, addCard } from './card.js';
import { enableValidation } from './validate.js';
// открытие/закрытие окон

btnOpenEditProfilePopup.addEventListener('click', () => openPopup(profilePopup));
btnCloseEditProfilePopup.addEventListener('click', () => closePopup(profilePopup));
btnOpenAddCardPopup.addEventListener('click', () => openPopup(placePopup));
btnCloseAddCardPopup.addEventListener('click', () => closePopup(placePopup));
imagePopup.querySelector('.popup__close-button').addEventListener('click', () => closePopup(imagePopup));
profilePopup.addEventListener('click', closePopupOverlay);
placePopup.addEventListener('click', closePopupOverlay);
imagePopup.addEventListener('click', closePopupOverlay);
body.addEventListener('keydown', closePopupEscape);

// Submits

formEditProfile.addEventListener('submit', handleProfileFormSubmit);
cardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addCard();
  closePopup(placePopup);
});

// Валидация
enableValidation();
// formEditProfile.addEventListener('input', evt => {
//   checkValidation(evt, formEditProfile);
//   disableButton(formEditProfile);
// });
// cardForm.addEventListener('input', evt => {
//   checkValidation(evt, cardForm);
//   disableButton(cardForm);
// });
