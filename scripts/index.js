import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";
import {config} from "./validate.js";
import {Section} from "./Section.js";
import {PopupWithImage} from "./PopupWithImage.js";
import {PopupWithForm } from "./PopupWithForm.js";
import {UserInfo} from "./UserInfo.js";


const POPUP_ACTIVE_CLASS = "popup_active";

const btnOpenPopup = document.querySelector(".profile__button_type_edit");
const popupAddCardOpen = document.querySelector(".profile__button_type_add");
const popup = document.querySelector(".popup");
const popupContent = popup.querySelector(".popup__content");
const popupProfile = document.querySelector(".popup_profile_submit");
const popupCard = document.querySelector(".popup_card_submit");
const popupEditForm = popup.querySelector(".popup__edit-form");
const popupAddCard = popup.querySelector(".popup__add-card");
const popupCloseBtn = popup.querySelector(".popup__close");
const popupCardCloseBtn = popupCard.querySelector(".popup__close-card");
const popupPhotoCloseBtn = document.querySelector(".popup__close-photo");
const formProfile = popupProfile.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_name");
const decriptionInput = document.querySelector(".popup__input_description");
const profileNameEdit = document.querySelector(".profile__name");
const profileDescriptionEdit = document.querySelector(".profile__description");
const changesSave = document.querySelector(".popup__submit");
const placeInput = document.querySelector(".popup__input_place");
const linkInput = document.querySelector(".popup__input_link");
const cardElements = document.querySelector(".elements");
const cardTemplate = document.querySelector("#element__card").content;
const popupPhoto = document.querySelector(".popup_photo_open");
const contentPhoto = document.querySelector(".popup__photo");
const captionPhoto = document.querySelector(".popup__caption");
const popupInput = popup.querySelector(".popup__input");

const initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
];






// function handleCardClick(name, link) {
//     contentPhoto.src = link;
//     captionPhoto.textContent = name;
//     contentPhoto.alt = name;
//     openPopup(popupPhoto);
// };

const user = new UserInfo({nameSelector: ".name", descriptionSelector: ".description"});



const popupWithImage = new PopupWithImage(".popup_photo_open");
popupWithImage.setEventListeners();
const handleCardClick = (name, link) => {
    popupWithImage.open(name, link);
};



const popupWithCard = new PopupWithForm({ popupSelector: ".popup__add-card", handleCardSubmit: (card) => {
    cardList.addItem(createCard(card));
    popupWithCard.close();
}})
popupWithCard.setEventListeners();

const popupWithProfile = new PopupWithForm({popupSelector: ".popup__edit-form", handleSubmitProfileForm: (text) => {
user.setUserInfo(text)
popupWithProfile.close();
}})
popupWithProfile.setEventListeners();


// function handleSubmitProfileForm(evt) {
//     evt.preventDefault();
//     profileNameEdit.textContent = nameInput.value;
//     profileDescriptionEdit.textContent = decriptionInput.value;
//     closePopup(popupProfile);
// }


function createCard(item) {
    const card = new Card(item.name, item.link, "#element__card", handleCardClick);
    const newCard = card.generateCard();
    return newCard
}

initialCards.forEach((item) => {

    cardElements.append(createCard(item));

});

const cardList = new Section({
    items: initialCards,
    renderer:(item) => {
        cardList.addItem(createCard(item))
    }
});

function addCardSubmit(evt) {
    evt.preventDefault();
    const newPlaceName = placeInput.value;
    const newPlaceLink = linkInput.value;

    cardElements.prepend(createCard({
        name: newPlaceName,
        link: newPlaceLink
    }));
 
    closePopup(popupCard);

}



const validationProfile = new FormValidator(config, popupProfile);
validationProfile.enableValidation();

const validationCard = new FormValidator(config, popupCard);
validationCard.enableValidation();



popupCard.addEventListener("submit", addCardSubmit);


function openPopup(popup) {
    
    popup.classList.add(POPUP_ACTIVE_CLASS);
    document.addEventListener("keyup", closePopupEsc);
    popup.addEventListener("click", closePopupOverlay);
}

function openPopupProfile(evt) {
    validationProfile.resetValidation()
    nameInput.value = profileNameEdit.textContent;
    decriptionInput.value = profileDescriptionEdit.textContent;
    openPopup(popupProfile, evt);
}

btnOpenPopup.addEventListener("click", openPopupProfile);


function handleSubmitProfileForm(evt) {
    evt.preventDefault();
    profileNameEdit.textContent = nameInput.value;
    profileDescriptionEdit.textContent = decriptionInput.value;
    closePopup(popupProfile);
}

formProfile.addEventListener("submit", handleSubmitProfileForm);

function openPopupCard(evt) {
    validationCard.resetValidation();
    openPopup(popupCard, evt);
}

popupAddCardOpen.addEventListener("click", openPopupCard);

function closePopup(popup) {
    popup.classList.remove(POPUP_ACTIVE_CLASS);
    document.removeEventListener("keyup", closePopupEsc);
    popup.removeEventListener("click", closePopupOverlay);
}

function closePopupEsc(evt) {
    if (evt.key === "Escape") {
        const popupOpened = document.querySelector(".popup_active");
        closePopup(popupOpened);
    }
}

function closePopupOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target.closest(".popup"));
    }
}

function closePopupProfile(evt) {
    closePopup(popupProfile, evt);
}
popupCloseBtn.addEventListener("click", closePopupProfile);

function closePopupCard(evt) {
    closePopup(popupCard, evt);
}
popupCardCloseBtn.addEventListener("click", closePopupCard);

function closePopupPhoto(evt) {
    closePopup(popupPhoto, evt);
}
popupPhotoCloseBtn.addEventListener("click", closePopupPhoto);

const ValidationProfile = new FormValidator(config, popupProfile);
ValidationProfile.enableValidation();

const ValidationCard = new FormValidator(config, popupCard);
ValidationCard.enableValidation();
