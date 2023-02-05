import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
    constructor({popupSelector, handleCardSubmit}) {
        super(popupSelector);
        this._handleCardSubmit = handleCardSubmit;
        this._form = this._popupElement.querySelector('.popup__card_submit');
        this._input = Array.from(this._popupElement.querySelector('.popup__input'));
    }

_getInputValues() {
    const inputValues = {};
    this._input.forEach(input => {
        inputValues[input.name] = input.value;
    });
    return inputValues;
}

setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", element => {
        element.preventDefault();
        this._handleCardSubmit(this._getInputValues());
    });
}

close() {
    super.close();
    this._form.reset();
}
}