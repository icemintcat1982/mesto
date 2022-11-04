const POPUP_ACTIVE_CLASS = "popup_active";

const openPopupBtn = document.querySelector(".profile__button_type_edit");
const openPopupAddCard = document.querySelector(".profile__button_type_add");
const popup = document.querySelector(".popup");
const popupProfile = document.querySelector(".popup_profile-submit");
const popupCard = document.querySelector(".popup_card-submit");
const popupEditForm = popup.querySelector(".popup__edit-form");
const popupAddCard = popup.querySelector(".popup__add-card");
const popupCloseBtn = popup.querySelector(".popup__close");
const popupCardCloseBtn = popup.querySelector(".popup__close-card");
const form = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_name");
const decriptionInput = document.querySelector(".popup__input_description");
const editProfileName = document.querySelector(".profile__name");
const editProfileDescription = document.querySelector(".profile__description");
const saveChanges = document.querySelector(".popup__submit");
const placeInput = document.querySelector(".popup__input_place");
const linkInput = document.querySelector(".popup__input_link");

const cardElements = document.querySelector(".elements");
const cardTemplate = document.querySelector("#element__card").content;

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];


  const createCard = (element) => {
    const cardItem = cardTemplate.querySelector(".element__card").cloneNode(true);
    cardItem.querySelector(".element__text").textContent = element.name;
    cardItem.querySelector(".element__image").src = element.link;
    cardItem.querySelector(".element__image").alt = element.name;
    return cardItem;
}

  initialCards.forEach(function(element) {
    const card = createCard(element);
    cardElements.prepend(card);
 })

const addCardSubmit = (evt) => {
   evt.preventDefault();

cardElements.prepend(createCard({
    link: linkInput.value,
    name: placeInput.value
}));

  }

function openPopup(popup, evt) {
    popup.classList.add(POPUP_ACTIVE_CLASS);
}

function openPopupProfile(evt) {
    nameInput.value = editProfileName.textContent;
    decriptionInput.value = editProfileDescription.textContent;
    openPopup(popupProfile, evt);
}

openPopupBtn.addEventListener("click", openPopupProfile);

function openPopupCard(evt) {
    openPopup(popupCard, evt);
}

openPopupAddCard.addEventListener("click", openPopupCard);

function closePopup(popup, evt) {
    if (!popup.querySelector(".popup__content").contains(event.target) || event.target === popup.querySelector(".popup__close")) {
        popup.classList.remove(POPUP_ACTIVE_CLASS);
    }
}

function closePopupProfile(evt) {
    closePopup(popupProfile, evt);    
}

popupProfile.addEventListener("click", closePopupProfile);

function closePopupCard(evt) {
    closePopup(popupCard, evt);
}

popupCard.addEventListener("click",closePopupCard);

function formSubmitHandler(evt) {
    evt.preventDefault();
    editProfileName.textContent = nameInput.value;
    editProfileDescription.textContent = decriptionInput.value; 
    popup.classList.remove(POPUP_ACTIVE_CLASS);
}


