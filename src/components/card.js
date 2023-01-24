import { openImagePopup } from "./modal.js";

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

//добавление карточек из массива
const elementsGrid = document.querySelector('.elements-grid');
const elementTemplate = document.querySelector('#element-template').content;
const nameInput = document.querySelector('#place-name');
const imageInput = document.querySelector('#place-image');
const cardForm = document.querySelector('#card-form');


initialCards.forEach(function (item) {
  const card = createCard(item.link, item.name);
  elementsGrid.prepend(card);
});


//добавляем новые карточки
function addCard() {
  const card = createCard(imageInput.value, nameInput.value);
  cardForm.reset();
  elementsGrid.prepend(card);
};

// функция создания новой карточки
function createCard(image, name) {
  const card = elementTemplate.querySelector('.element').cloneNode(true);
  const cardImage = card.querySelector('.element__image');
  const like = card.querySelector('.element__like');
  cardImage.setAttribute('src', image);
  cardImage.setAttribute('alt', 'Изображение ' + name);
  card.querySelector('.element__name').textContent = name;
  like.addEventListener('click', function () {
    like.classList.toggle('element__like_active');
  })
  card.querySelector('.element__delete').addEventListener('click', function () {
    card.remove();
  })
  cardImage.addEventListener('click', function () {
    openImagePopup(image, name);
  })
  return card;
};

export {cardForm, addCard}


