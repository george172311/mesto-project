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
const body = document.querySelector('body');

// Открытие/закрытие попапа
function openPopup(element) {
  element.classList.add('popup_opened');
}

function closePopup(element) {
  element.classList.remove('popup_opened');
}

function closePopupOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(profilePopup);
    closePopup(placePopup);
    closePopup(imagePopup);
  }
}

function closePopupEscape(evt) {
  if (evt.key === 'Escape') {
    closePopup(profilePopup);
    closePopup(placePopup);
    closePopup(imagePopup);
  }
}

btnOpenEditProfilePopup.addEventListener('click', () => openPopup(profilePopup));
btnCloseEditProfilePopup.addEventListener('click', () => closePopup(profilePopup));
btnOpenAddCardPopup.addEventListener('click', () => openPopup(placePopup));
btnCloseAddCardPopup.addEventListener('click', () => closePopup(placePopup));
imagePopup.querySelector('.popup__close-button').addEventListener('click', () => closePopup(imagePopup));
profilePopup.addEventListener('click', closePopupOverlay);
placePopup.addEventListener('click', closePopupOverlay);
imagePopup.addEventListener('click', closePopupOverlay);
body.addEventListener('keydown', closePopupEscape);


//отправка формы информации об авторе
const formEditProfile = document.querySelector('#profile-form');
const artistName = document.querySelector('#name');
const artistHobby = document.querySelector('#hobby');
const authorName = document.querySelector('.profile__name');
const hobby = document.querySelector('.profile__author-hobby');

function subProfInfo(evt) {
  evt.preventDefault();
  authorName.textContent = artistName.value;
  hobby.textContent = artistHobby.value;
  closePopup(profilePopup);
}

formEditProfile.addEventListener('submit', subProfInfo);


//добавление карточек из массива
const elementsGrid = document.querySelector('.elements-grid');
const elementTemplate = document.querySelector('#element-template').content;
const nameInput = document.querySelector('#place-name');
const imageInput = document.querySelector('#place-image');
const cardForm = document.querySelector('#card-form');


initialCards.forEach(function (item) {
  const card = createCard(item.link, item.name);
  elementsGrid.prepend(card);
})


//добавляем новые карточки
function addCard() {
  const card = createCard(imageInput.value, nameInput.value);
  cardForm.reset();
  elementsGrid.prepend(card);
}

cardForm.addEventListener('submit', function (evt) {
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
}


// Валидация форм

formEditProfile.addEventListener('input', evt => {
  checkValidation(evt, formEditProfile);
});
cardForm.addEventListener('input', evt => {
  checkValidation(evt, cardForm);
});

function checkValidation(evt, form) {
  const key = evt.target.name;
  const value = evt.target.value;
  const formData = new FormData(evt.currentTarget);
  const arrData = Object.fromEntries(formData);
  const error = validate(key, value);
  // console.log(form.checkValidity());
  // console.log(evt.target.validationMessage);
  console.log(evt.target)
  console.log(evt.currentTarget)

  if (!error) {
    return clearError(key, form);
  }
  if (error) {
    return setError(key, error, form);
  }

  // function isValid(form) {
  //  const inputs = form.querySelectorAll('.form__input');
  //  let isFormValid = true;
  //  for(input of inputs) {

  //  }

  // }

  // if (isValid) {
  //   return clearError(key, form);
  // }
  // if (!isValid) {
  //   return setError(key, error, form);
  // }
}

function validate(key, value) {
  const validator = validators[key];
  return validator(value);
};

const validators = {
  authorname: validateAuthorName,
  authorhobby: validateAuthorHobby,
  placename: validatePlaceName,
  placeimage: validatePlaceImage
};

function validateAuthorName(value) {
  if (!value) {
    return 'поле обязательно для заполнения';
  }
  if (value.length < 2) {
    return 'в поле «Имя» должно быть от 2 до 40 символов';
  }
  if (value.length > 40) {
    return 'в поле «Имя» должно быть от 2 до 40 символов';
  }
  return null;
};

function validateAuthorHobby(value) {
  if (!value) {
    return 'поле обязательно для заполнения';
  }
  if (value.length < 2) {
    return 'в поле «О себе» должно быть от 2 до 200 символов';
  }
  if (value.length > 200) {
    return 'в поле «О себе» должно быть от 2 до 200 символов';
  }
  return null;
};

function validatePlaceName(value) {
  if (!value) {
    return 'поле обязательно для заполнения';
  }
  if (value.length < 2) {
    return 'в поле «Место» должно быть от 2 до 30 символов';
  }
  if (value.length > 30) {
    return 'в поле «Место» должно быть от 2 до 30 символов';
  }
  return null;
};

function validatePlaceImage(value) {
  if (!value) {
    return 'поле обязательно для заполнения';
  }
  return null;
};

function setError(key, errorMessage, form) {
  const input = form.querySelector(`.form__input[name=${key}]`);
  const error = input.nextElementSibling;
  const button = form.querySelector('.form__button');

  input.classList.add('form__input_invalid');
  error.textContent = errorMessage;
  error.classList.add('form__error_visible');
  button.setAttribute('disabled', true);

};

function clearError(key, form) {
  const input = form.querySelector(`.form__input[name=${key}]`);
  const error = input.nextElementSibling;
  const button = form.querySelector('.form__button');

  input.classList.remove('form__input_invalid');
  error.textContent = '';
  error.classList.remove('form__error_visible');
  button.removeAttribute('disabled');
};

