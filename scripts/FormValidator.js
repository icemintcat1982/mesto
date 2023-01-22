export class FormValidator {
constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._errorElement = this._formElement.querySelector(this._config.inputErrorClass);
    this._btnElement = this._formElement.querySelector(this._config.submitBtnSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));

}

_isValid(inputElement) {
    if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
    } else {
        this._hideInputError(inputElement);
    }
}


_showInputError(inputElement, errorMessage) {
    this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._config.errorClass);
}

_hideInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    this._errorElement.classList.remove(this._config.errorClass);
    this._errorElement.textContent = "";
}

_hasInvalidInput() {
    return this._inputList.some((inputElement) => {
        return!inputElement.validity.valid;
    });
}

_toggleBtnState() {
    if(this._hasInvalidInput(this._inputList)) {
        this._btnElement.classList.add(this._config.offBtnSelector);
        this._btnElement.disabled = true;
    } else {
        this._btnElement.classList.remove(this._config.offBtnSelector);
        this._btnElement.disabled = false;
    }
}


resetValidation() {
    this._toggleBtnState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement) 
    });

  }

_setEventListener() {
  this._toggleBtnState();
  this._inputList.forEach((inputElement) => {
  inputElement.addEventListener("input", () => {
    this._isValid(inputElement);
    this._toggleBtnState();
});
});
}



enableValidation() {
   this._setEventListener();
}

} 