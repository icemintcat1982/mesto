import {Popup} from "./Popup.js";
export class PopupWithImage extends Popup{
constructor(popupSelector) {
 super(popupSelector);
 this._elementImage = this._popupElement.querySelector('.popup__photo');
 this._elementText = this._popupElement.querySelector('.popup__caption');
}

open(name, link) {
    this._elementImage.src = link;
    this._elementText.textContent = name;
    this._elementImage.alt = name;
    super.open();

}
}