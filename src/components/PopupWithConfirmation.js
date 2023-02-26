
import {Popup} from "./Popup";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmBtn = document.querySelector(".popup__submit");
    this._form = this._popupElement.querySelector('.popup__form');
  }

setCardDelete(cardItem) {
  this._catdItem = cardItem;
}

setEventListeners() {
  super.setEventListeners();
  this._confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    this._handleCardDelete();
  })
}

}