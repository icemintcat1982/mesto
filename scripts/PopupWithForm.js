import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
    constructor(popupSelector, handleCardSubmit) {
        super(popupSelector);
        this._handleCardSubmit = handleCardSubmit;
        this._form = this._popupElement.querySelector('.popup__form');
        this._inputs = Array.from(this._popupElement.querySelectorAll('.popup__input'));
    }

_getInputValues() {
    const inputValues = {};
    this._inputs.forEach(input => {
        inputValues[input.name] = input.value;
    });
    return inputValues;
}

setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
        event.preventDefault();
        this._handleCardSubmit(this._getInputValues());
    });
}

close() {
    super.close();
    this._form.reset();
}
}