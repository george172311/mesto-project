/*-----------------------ОБРАБОТЧИКИ СОБЫТИЙ-----------------------*/
import '../pages/index.css';
import { profilePopup, btnOpenEditProfilePopup, btnCloseEditProfilePopup, placePopup, btnOpenAddCardPopup, btnCloseAddCardPopup, imagePopup, body, formEditProfile, openPopup, closePopup, closePopupOverlay, closePopupEscape, handleProfileFormSubmit } from './modal.js';
import { cardForm, addCard } from './card.js';
import { enableValidation } from './validate.js';
// открытие/закрытие окон

btnOpenEditProfilePopup.addEventListener('click', () => openPopup(profilePopup));
btnOpenAddCardPopup.addEventListener('click', () => openPopup(placePopup));

const popups = document.querySelectorAll('.popup');

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        };
        if (evt.target.classList.contains('popup__close-button')) {
          closePopup(popup)
        };
    });
});


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
