//массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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


// Открытие/закрытие попапа
function openPopup(element) {
  element.classList.add('popup_opened');
}

function closePopup(element) {
  element.classList.remove('popup_opened');
}

btnOpenEditProfilePopup.addEventListener('click', () => openPopup(profilePopup));
btnCloseEditProfilePopup.addEventListener('click', () => closePopup(profilePopup));
btnOpenAddCardPopup.addEventListener('click', () => openPopup(placePopup));
btnCloseAddCardPopup.addEventListener('click', () => closePopup(placePopup));
imagePopup.querySelector('.popup__close-button').addEventListener('click', () => closePopup(imagePopup));

//отправка формы информации об авторе
const formEditProfile = document.querySelector('#profile-form');
const artistName = document.querySelector('#name');
const artistHobby = document.querySelector('#hobby');
const authorName = document.querySelector('.profile__name');
const hobby = document.querySelector('.profile__author-hobby');

formEditProfile.addEventListener('submit', function (evt) {
  evt.preventDefault();
  authorName.textContent = artistName.value;
  hobby.textContent = artistHobby.value;
  closePopup(profilePopup);
})

//добавление карточек из массива
const elementsGrid = document.querySelector('.elements-grid');
const elementTemplate = document.querySelector('#element-template').content;
const nameInput = document.querySelector('#place-name');
const imageInput = document.querySelector('#place-image');
const cardForm = document.querySelector('#card-form');


initialCards.forEach(function(item) {
  const card = createCard(item.link, item.name);
  elementsGrid.prepend(card);
})


//добавляем новые карточки
function addCard() {
  const card = createCard(imageInput.value, nameInput.value);
  cardForm.reset();
  elementsGrid.prepend(card);
}

cardForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  addCard();
  closePopup(placePopup);
})

// функция открытия окна с картинкой
function openImagePopup(src, caption) {
  popupCardImage.setAttribute('src', src);
  popupCardImage.setAttribute('alt', 'Изображение ' + caption);
  popupCardCaption.textContent = caption;
  openPopup(imagePopup);
}

// функция создания новой карточки
function createCard(image, name) {
  const card = elementTemplate.querySelector('.element').cloneNode(true);
  const cardImage = card.querySelector('.element__image');
  const like = card.querySelector('.element__like');
  cardImage.setAttribute('src', image);
  cardImage.setAttribute('alt', 'Изображение ' + name);
  card.querySelector('.element__name').textContent = name;
  like.addEventListener('click', function() {
    like.classList.toggle('element__like_active');
  })
  card.querySelector('.element__delete').addEventListener('click', function() {
    card.remove();
  })
  cardImage.addEventListener('click', function() {
    openImagePopup(image, name);
  })
  return card;
}
