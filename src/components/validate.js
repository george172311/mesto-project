
const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = inputElement.nextElementSibling;
  inputElement.classList.add(settings.invalidInput);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.visibleError);
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = inputElement.nextElementSibling;
  inputElement.classList.remove(settings.invalidInput);
  errorElement.classList.remove(settings.visibleError);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, settings) => {

  if(inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.error);
  } else {
    inputElement.setCustomValidity('');
  };

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  };
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(`.${settings.input}`));
  const buttonElement = formElement.querySelector(`.${settings.button}`);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement,) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

function enableValidation(settings) {
  const formList = Array.from(document.querySelectorAll(`.${settings.form}`));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
};

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
