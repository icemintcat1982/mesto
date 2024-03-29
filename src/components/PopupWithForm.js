import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
    constructor({popupSelector, handleCardSubmit}) {
        super(popupSelector);
        this._handleCardSubmit = handleCardSubmit;
        this._form = this._popupElement.querySelector('.popup__form');
        this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));
        this._submitBtn = this._form.querySelector(".popup__submit");
        this._submitBtnText = this._submitBtn.textContent;
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

popupLoading(isLoading) {
if(isLoading){
this._submitBtn.textContent = "Сохранение...";
 } else {
    this._submitBtn.textContent = this._submitBtnText;
 }}
}