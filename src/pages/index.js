import {Card} from "../components/Card.js";
import {FormValidator} from "../components/FormValidator.js";
import {config} from "../scripts/validate.js";
import {Section} from "../components/Section.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm } from "../components/PopupWithForm.js";
import {UserInfo} from "../components/UserInfo.js";
import "./index.css";


const btnOpenPopup = document.querySelector(".profile__button_type_edit");
const popupAddCardOpen = document.querySelector(".profile__button_type_add");
const popupProfile = document.querySelector(".popup_profile_submit");
const popupCard = document.querySelector(".popup_card_submit");
const nameInput = document.querySelector(".popup__input_name");
const decriptionInput = document.querySelector(".popup__input_description");

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


const user = new UserInfo({nameSelector: ".profile__name", descriptionSelector: ".profile__description"});

const popupWithImage = new PopupWithImage(".popup_photo_open");
popupWithImage.setEventListeners();
const handleCardClick = (name, link) => {
    popupWithImage.open(name, link);
};

const popupWithCard = new PopupWithForm({ popupSelector: ".popup_card_submit", handleCardSubmit: (card) => {
    cardList.addItem(createCard(card));
}})
popupWithCard.setEventListeners();

const popupWithProfile = new PopupWithForm({popupSelector: ".popup_profile_submit", handleCardSubmit: (description) => {
user.setUserInfo(description)
}})
popupWithProfile.setEventListeners();




function createCard(item) {
    const card = new Card(item.name, item.link, "#element__card", handleCardClick);
    const newCard = card.generateCard();
    return newCard;
}




const cardList = new Section({
    items: initialCards,
    renderer:(item) => {
        cardList.addItem(createCard(item))
    }}, ".elements");
    cardList.renderItems();





const validationProfile = new FormValidator(config, popupProfile);
validationProfile.enableValidation();

const validationCard = new FormValidator(config, popupCard);
validationCard.enableValidation();



btnOpenPopup.addEventListener("click", () => {
validationProfile.resetValidation();
popupWithProfile.open();
const {name, description} = user.getUserInfo();
nameInput.value = name;
decriptionInput.value = description;
})


popupAddCardOpen.addEventListener("click", () => {
    validationCard.resetValidation();
    popupWithCard.open();
});



function openPopupCard() {
    validationCard.resetValidation();
    popupWithCard.open();
}

popupAddCardOpen.addEventListener("click", openPopupCard);

