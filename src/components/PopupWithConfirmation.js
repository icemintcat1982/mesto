
import {Popup} from "./Popup";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, deleteCard) {
    super(popupSelector);
    this._confirmBtn = document.querySelector(".popup__submit");
    this._form = this._popupElement.querySelector('.popup__form');
    this._deleteCard = deleteCard;
  }

setCardDelete(cardItem) {
  this._catdItem = cardItem;
}

setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener("submit", (event) => {
    event.preventDefault();
    this._deleteCard();
  })
}

}