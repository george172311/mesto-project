import { openImagePopup } from "./modal.js";
import { deleteCard, putLike, deleteLike } from "./api.js";
import { userId } from "./index.js";




//добавление карточек из массива
const elementsGrid = document.querySelector('.elements-grid');
const elementTemplate = document.querySelector('#element-template').content;
const nameInput = document.querySelector('#place-name');
const imageInput = document.querySelector('#place-image');
const cardForm = document.querySelector('#card-form');

// функция создания новой карточки
function createCard(card) {
  const newCard = elementTemplate.querySelector('.element').cloneNode(true);
  const cardImage = newCard.querySelector('.element__image');
  const like = newCard.querySelector('.element__like');
  const likeCount = newCard.querySelector('.element__like-count');
  likeCount.textContent = card.likes.length;
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', 'Изображение ' + card.name);
  newCard.querySelector('.element__name').textContent = card.name;
  if (card.owner._id === userId) {
    newCard.querySelector('.element__delete').classList.add('element__delete_visible');
    newCard.querySelector('.element__delete').addEventListener('click', function () {
      deleteCard(card)
        .then(() => {
          newCard.remove()
        })
        .catch(err => console.log(err))
    })
  }
  let likeAuthor = card.likes.find(item => item._id === userId);
  if (likeAuthor) {
    like.classList.add('element__like_active');
  }
  like.addEventListener('click', function () {
    if (!likeAuthor) {
      putLike(card._id)
        .then((data) => {
          likeCount.textContent = data.likes.length
        })
        .then(() => {
          likeAuthor = true;
          like.classList.add('element__like_active');
        })
        .catch(err => console.log(err))
    } else {
      deleteLike(card._id)
        .then((data) => {
          likeCount.textContent = data.likes.length
        })
        .then(() => {
          likeAuthor = false;
          like.classList.remove('element__like_active');
        })
        .catch(err => console.log(err))
    }
  })
  cardImage.addEventListener('click', function () {
    openImagePopup(card.link, card.name);
  })
  return newCard;
};

export { cardForm, createCard, elementsGrid, imageInput, nameInput }


