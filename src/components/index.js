/*-----------------------ОБРАБОТЧИКИ СОБЫТИЙ-----------------------*/
import '../pages/index.css';
import { profilePopup, btnOpenEditProfilePopup, placePopup, btnOpenAddCardPopup, imagePopup, formEditProfile, openPopup, closePopup, handleProfileFormSubmit, profileAvatar, avatarPopup, changeAvatar, avatarInput } from './modal.js';
import { cardForm, addCard } from './card.js';
import { enableValidation } from './validate.js';
import { authorName, hobby } from './modal.js'
import { createCard, elementsGrid, imageInput, nameInput } from './card.js'
import { getInitialCards, getInitialName, deleteCard, putLike, deleteLike, addCardToServ } from './api.js'
// открытие/закрытие окон

btnOpenEditProfilePopup.addEventListener('click', () => openPopup(profilePopup));
btnOpenAddCardPopup.addEventListener('click', () => openPopup(placePopup));
profileAvatar.addEventListener('click', () => openPopup(avatarPopup));

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
  addCardToServ(imageInput.value, nameInput.value)
    .then((data) => {
      // console.log(data)
      elementsGrid.prepend(createCard(data))
    })
  closePopup(placePopup);
});

const avatarForm = document.querySelector('#avatar-form');
avatarForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  changeAvatar(avatarInput);
  closePopup(avatarPopup);
})

// Валидация

enableValidation({
  invalidInput: 'form__input_invalid',
  visibleError: 'form__error_visible',
  input: 'form__input',
  button: 'form__button',
  form: 'form',
});


export let userId

Promise.all([getInitialCards(), getInitialName()])
  .then(([cards, user]) => {
    userId = user._id;
    authorName.textContent = user.name;
    hobby.textContent = user.about;
    profileAvatar.src = user.avatar;
    cards.forEach((card) => {
      const newCard = createCard(card);
      elementsGrid.prepend(newCard);
    })
  })
