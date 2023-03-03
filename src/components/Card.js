export class Card {
constructor(data, templateSelector, handleCardClick, userId, likeCard, handleDeleteClick) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._likeCard = likeCard;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;

 
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
    this._element.querySelector(".element__image").alt = this._name;
    this._totalLikes = this._element.querySelector(".element__like-counter");
    this._isDeleteCard();
    return this._element;

}

_setEventListeners() {
this._buttonLike = this._element.querySelector(".element__button");

this._buttonLike.addEventListener('click', () => {
this._likeCard(this, this._id);
  });

this._element.querySelector(".element__delete").addEventListener("click", () => {
    this._handleDeleteClick(this);
});
this._element.querySelector(".element__image").addEventListener("click", () => {
    this._handleCardClick(this._name, this._link);
});
}


isLiked() {
  const userLike = this._likes.some(like => like._id === this._userId);
  return userLike;
}

_isDeleteCard() {
    if (this._ownerId != this._userId) {
        this._element.querySelector(".element__delete").remove();
    } 
}

handleCardLike(likes) {
  this._likes = likes;
  this._buttonLike.classList.toggle("element__button_active");
  this._totalLikes.textContent = this._likes.length;
}

handleCardDelete = () => {
this._element.remove();
this._element = null;
}
}