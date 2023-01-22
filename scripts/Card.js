export class Card {
constructor(name, link, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;

}

_getTemplate() {
   const cardItem = document.querySelector(this._templateSelector).content.querySelector(".element__card").cloneNode(true);
   
   return cardItem;
}

generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".element__text").textContent = this._name;
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__text").alt = this._name;


    return this._element;
}

_setEventListeners() {
this._element.querySelector(".element__button").addEventListener("click", (evt) => {
this._handleCardLike(evt);
});
this._element.querySelector(".element__delete").addEventListener("click", () => {
    this._handleCardDelete();
});
this._element.querySelector(".element__image").addEventListener("click", () => {
    this._handleCardClick(this._name, this._link);
});
}

_handleCardLike(evt) {
    evt.target.classList.toggle("element__button_active");
}

_handleCardDelete() {
this._element.remove();
}
}