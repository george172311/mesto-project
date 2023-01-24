/*-----------------------ОБРАБОТЧИКИ СОБЫТИЙ-----------------------*/
import {profilePopup, btnOpenEditProfilePopup, btnCloseEditProfilePopup, placePopup, btnOpenAddCardPopup, btnCloseAddCardPopup, imagePopup, body, formEditProfile,  openPopup, closePopup, closePopupOverlay, closePopupEscape, subProfInfo} from './modal.js'
import {cardForm, addCard} from './card.js'
import {checkValidation, disableButton} from './validate.js'
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

formEditProfile.addEventListener('submit', subProfInfo);
cardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addCard();
  closePopup(placePopup);
});

// Валидация

formEditProfile.addEventListener('input', evt => {
  checkValidation(evt, formEditProfile);
  disableButton(formEditProfile);
});
cardForm.addEventListener('input', evt => {
  checkValidation(evt, cardForm);
  disableButton(cardForm);
});
