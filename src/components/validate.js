
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = inputElement.nextElementSibling;
  inputElement.classList.add('form__input_invalid');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__error_visible');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = inputElement.nextElementSibling;
  inputElement.classList.remove('form__input_invalid');
  errorElement.classList.remove('form__error_visible');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
    fieldsetList.forEach(function (fieldSet) {
      setEventListeners(fieldSet);
    });

  });
};

enableValidation();

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.removeAttribute('disabled');
  }
};

export { enableValidation };
