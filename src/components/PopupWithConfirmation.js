
import {Popup} from "./Popup";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupElement.querySelector(".popup__form");
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm();
    });
  }

  setSubmitCallback(callback) {
    this._handleSubmitForm = callback;
  }
}