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
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('#profile-close');
const placePopup = document.querySelector('#cards-popup');
const addButton = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('#place-close');

// Открытие/закрытие попапа
function openPopup(element) {
  console.log('openPopup');

  element.classList.add('popup_opened');
}

function closePopup(element) {
  console.log('closePopup');

  element.classList.remove('popup_opened');
}

editButton.addEventListener('click', () => openPopup(profilePopup));
closeButton.addEventListener('click', () => closePopup(profilePopup));
addButton.addEventListener('click', () => openPopup(placePopup));
closeAddButton.addEventListener('click', () => closePopup(placePopup));

//отправка формы информации об авторе
const form = document.querySelector('#profile-form');
const artistName = document.querySelector('#name');
const artistHobby = document.querySelector('#hobby');
const authorName = document.querySelector('.profile__name');
const hobby = document.querySelector('.profile__author-hobby');

form.addEventListener('submit', function (evt) {
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

const cardsArr = [];
for(i = 0; i < initialCards.length; i++) {
  const card = elementTemplate.querySelector('.element').cloneNode(true);
  const image = card.querySelector('.element__image');

  image.setAttribute('src', initialCards[i].link);
  card.querySelector('.element__name').textContent = initialCards[i].name;
  card.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  })
  card.querySelector('.element__delete').addEventListener('click', function() {
    card.remove();
  })
  const imgElement = imagePopup(initialCards[i].link, initialCards[i].name);
  image.addEventListener('click', function() {
    openPopup(imgElement);

  })
  cardsArr[i] = card;
}

for(i = 0; i < cardsArr.length; i++) {
  elementsGrid.prepend(cardsArr[i]);
}
//добавляем новые карточки
function addCard() {
  console.log('addCard');

  const card = elementTemplate.querySelector('.element').cloneNode(true);
  const image = card.querySelector('.element__image');

  image.setAttribute('src', imageInput.value);
  card.querySelector('.element__name').textContent = nameInput.value;

  card.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  })
  card.querySelector('.element__delete').addEventListener('click', function() {
    card.remove();
  })
  const imgElement = imagePopup(imageInput.value, nameInput.value);
  image.addEventListener('click', function() {
    openPopup(imgElement);
  })
  nameInput.value = '';
  imageInput.value = '';
  elementsGrid.prepend(card);
}

cardForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  addCard();
  closePopup(placePopup);

})

// функция открытия окна с картинкой
function imagePopup(image, caption) {
  console.log('imagePopup');
  const body = document.querySelector('.body')
  const imagePopupTemplate = document.querySelector('#image-popup-template').content;
  const popupImage = imagePopupTemplate.querySelector('.popup').cloneNode(true);
  popupImage.querySelector('.popup__close-button').addEventListener('click', function() {
   closePopup(popupImage);
  })
  popupImage.querySelector('.popup__image').setAttribute('src', image);
  popupImage.querySelector('.popup__caption').textContent = caption;
  body.prepend(popupImage);
  return popupImage;

}

