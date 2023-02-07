/*-----------------------ОБРАБОТЧИКИ СОБЫТИЙ-----------------------*/
import '../pages/index.css';
import { profilePopup, btnOpenEditProfilePopup, placePopup, btnOpenAddCardPopup, artistName, artistHobby, formEditProfile, openPopup, closePopup, handleProfileFormSubmit, profileAvatar, avatarPopup, avatarInput, authorName, hobby, showOnLoad } from './modal.js';
import { enableValidation } from './validate.js';
import { createCard, elementsGrid, imageInput, nameInput, cardForm } from './card.js'
import { getInitialCards, getInitialName, addCardToServ, addAvatarToServ } from './api.js'
// открытие/закрытие окон

btnOpenEditProfilePopup.addEventListener('click', () => {
  openPopup(profilePopup);
  artistName.value = authorName.textContent;
  artistHobby.value = hobby.textContent;
});
btnOpenAddCardPopup.addEventListener('click', () => openPopup(placePopup));

const btnOpenAvatarPopup = document.querySelector('.profile__avatar-button')
btnOpenAvatarPopup.addEventListener('click', () => openPopup(avatarPopup));

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

formEditProfile.addEventListener('submit', (evt) => {
  handleProfileFormSubmit(evt)
});
cardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  showOnLoad(evt, true);
  addCardToServ(imageInput.value, nameInput.value)
    .then((data) => {
      elementsGrid.prepend(createCard(data))
    })
    .then(() => {
      closePopup(placePopup)
    })
    .catch(err => console.log(err))
    .finally(() => showOnLoad(evt, false))
});

const avatarForm = document.querySelector('#avatar-form');
avatarForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  showOnLoad(evt, true);
  addAvatarToServ(avatarInput)
    .then((data) => {
      profileAvatar.src = data.avatar;
    })
    .then(() => {
      closePopup(avatarPopup)
    })
    .catch(err => console.log(err))
    .finally(() => showOnLoad(evt, false))
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
