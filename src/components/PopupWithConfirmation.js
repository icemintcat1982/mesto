
import {Popup} from "./Popup";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitCardDelete = document.querySelector(".popup__delete-confirm");
  }

setCardDelete(cardItem) {
  this._catdItem = cardItem;
}

setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener("click", (event) => {
    event.preventDefault();
    this._handleCardSubmit();
  })
}


}