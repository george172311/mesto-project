

// Проверка валидности

function checkValidation(evt, form) {
  const key = evt.target.name;
  const value = evt.target.value;
  // const formData = new FormData(evt.currentTarget);
  // const arrData = Object.fromEntries(formData);
  const error = validate(key, value, evt);

  if (!error) {
    return clearError(key, form);
  }
  if (error) {
    return setError(key, error, form);
  }
};

function validate(key, value, evt) {
  const validator = validators[key];
  return validator(value, evt);
};

const validators = {
  authorname: validateAuthorName,
  authorhobby: validateAuthorHobby,
  placename: validatePlaceName,
  placeimage: validatePlaceImage
};

// Добавление ошибок инпутам

function setError(key, errorMessage, form) {
  const input = form.querySelector(`.form__input[name=${key}]`);
  const error = input.nextElementSibling;

  input.classList.add('form__input_invalid');
  error.textContent = errorMessage;
  error.classList.add('form__error_visible');
};

function clearError(key, form) {
  const input = form.querySelector(`.form__input[name=${key}]`);
  const error = input.nextElementSibling;

  input.classList.remove('form__input_invalid');
  error.textContent = '';
  error.classList.remove('form__error_visible');
};

// Доступность кнопки отправки

function disableButton(form) {
  const button = form.querySelector('.form__button')
  const inputs = form.querySelectorAll('.form__input');
  const inputList = Array.from(inputs);

  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return inputElement.classList.contains('form__input_invalid');
    });
  };

  if (hasInvalidInput(inputList)) {
    button.setAttribute('disabled', true);
  }
  if (!hasInvalidInput(inputList)) {
    button.removeAttribute('disabled');
  }
};

//  функции валидаторы

function validateAuthorName(value, evt) {
  if (!value) {
    return evt.target.validationMessage;
  }
  if (value.length < 2) {
    return 'в поле «Имя» должно быть от 2 до 40 символов';
  }
  if (value.length > 40) {
    return 'в поле «Имя» должно быть от 2 до 40 символов';
  }
  return null;
};

function validateAuthorHobby(value, evt) {
  if (!value) {
    return evt.target.validationMessage;
  }
  if (value.length < 2) {
    return 'в поле «О себе» должно быть от 2 до 200 символов';
  }
  if (value.length > 200) {
    return 'в поле «О себе» должно быть от 2 до 200 символов';
  }
  return null;
};

function validatePlaceName(value, evt) {
  if (!value) {
    return evt.target.validationMessage;
  }
  if (value.length < 2) {
    return 'в поле «Место» должно быть от 2 до 30 символов';
  }
  if (value.length > 30) {
    return 'в поле «Место» должно быть от 2 до 30 символов';
  }
  return null;
};

function validatePlaceImage(value, evt) {
  if (!value) {
    return evt.target.validationMessage;
  }
  if (evt.target.checkValidity) {
    return evt.target.validationMessage;
  }
  return null;
};

export {checkValidation, disableButton}
