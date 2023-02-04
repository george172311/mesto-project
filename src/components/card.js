import { openImagePopup } from "./modal.js";
import { addCardToServ } from "./api.js";



//добавление карточек из массива
const elementsGrid = document.querySelector('.elements-grid');
const elementTemplate = document.querySelector('#element-template').content;
const nameInput = document.querySelector('#place-name');
const imageInput = document.querySelector('#place-image');
const cardForm = document.querySelector('#card-form');


//добавляем новые карточки
function addCard() {
  const card = createCard(imageInput.value, nameInput.value);
  addCardToServ(imageInput.value, nameInput.value);
  const button = cardForm.querySelector('.form__button');
  cardForm.reset();
  button.setAttribute('disabled', true);
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
  cardImage.addEventListener('click', function () {
    openImagePopup(image, name);
  })
  return card;
};

export {cardForm, addCard, createCard, elementsGrid}


