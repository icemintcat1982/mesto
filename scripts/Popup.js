export class Popup {
constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector('.popup__close');
}


open() {
this._popupElement.classList.add('popup_active');
document.addEventListener("keyup", this._handleEscClose);
}3

close() {
    this._popupElement.classList.remove('popup_active');
    document.removeEventListener("keyup", this._handleEscClose);
}

_handleEscClose = (evt) => {
    if(evt.key === "Escape") {
        this.close();
    }
}


setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
        if (evt.target.classList.contains('popup_active')) {
            this.close();
        }})
    this._popupCloseBtn.addEventListener("click", () => {
        this.close();
    })
}

}