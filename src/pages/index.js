import {Card} from "../components/Card.js";
import {FormValidator} from "../components/FormValidator.js";
import {config} from "../scripts/validate.js";
import {Section} from "../components/Section.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm } from "../components/PopupWithForm.js";
import {UserInfo} from "../components/UserInfo.js";
import {Api} from "../components/Api.js";
import "./index.css";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";



const btnOpenPopup = document.querySelector(".profile__button_type_edit");
const popupAddCardOpen = document.querySelector(".profile__button_type_add");
const popupProfile = document.querySelector(".popup_profile_submit");
const popupCard = document.querySelector(".popup_card_submit");
const nameInput = document.querySelector(".popup__input_name");
const decriptionInput = document.querySelector(".popup__input_description");
const popupEditAvatarBtn = document.querySelector(".profile__avatar-edit-btn");
const cardDeleteBtn = document.querySelector(".element__delete");
let userId;

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

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-59',
    headers: {
        authorization: '1f1b2dd2-b429-4573-aa4a-55a60a7ac94d',
        'Content-Type': 'application/json'
    }
});

api.getUserInfo()
.then((res) => {user.setUserInfo(res);
    userId = res._id;
    console.log(userId);
});

api.getCards()
.then((res) => {console.log(res),
cardList.renderItems(res)});



const user = new UserInfo({nameSelector: ".profile__name", descriptionSelector: ".profile__description", avatarSelector: ".profile__avatar"});

const popupWithImage = new PopupWithImage(".popup_photo_open");
popupWithImage.setEventListeners();
const handleCardClick = (name, link) => {
    popupWithImage.open(name, link);
};


const addCard = (data) => {
    api.addNewCard(data)
    .then(res => {
        const cardItem = createCard(res);
        cardList.addItem(cardItem);
        popupWithCard.close();
    })
    .catch(err => console.log(err))
    .finally(() => {

    });
}

const popupWithCard = new PopupWithForm({ popupSelector: ".popup_card_submit", handleCardSubmit: data => {
    addCard(data);
}})
popupWithCard.setEventListeners();






const popupWithProfile = new PopupWithForm({popupSelector: ".popup_profile_submit", handleCardSubmit: (description) => {
user.setUserInfo(description)
}})
popupWithProfile.setEventListeners();

const editAvatar = (data) => {
    api.changeUserAvatar(data)
    .then(res => {
        user.setUserAvatar(res);
        popupWithAvatar.close();
    })
    .catch(err => console.log(err))
    .finally(() => {
    });
}

const popupWithAvatar = new PopupWithForm({popupSelector: ".popup_avatar_edit", handleCardSubmit: data => { editAvatar(data);
}});
popupWithAvatar.setEventListeners();

popupEditAvatarBtn.addEventListener("click", () => {
    popupWithAvatar.open();
})


function likeCard(card, id) {
    if (card.isLiked()) {
        api.dislikeCard(id)
        .then(res => {
            card.handleCardLike(res.likes)
        })
    }
    else {
        api.likeCard(id)
        .then(res => {
            card.handleCardLike(res.likes)
        })
    }
}

const popupWithConfirmation = new PopupWithConfirmation(".popup__delete-confirm");
popupWithConfirmation.setEventListeners();

function handleDeleteClick() {
    popupWithConfirmation.open();
}

function deleteCard(id) {

    popupWithConfirmation.handleCardSubmit(() => {
        api.deleteCard(id)
        .then(res => {
            cardItem.handleCardDelete(res);
            popupWithConfirmation.close();
        })
        .catch(err => {
            console.log(err)
        });
    });
}

function createCard(data) {
    const card = new Card(data, "#element__card", handleCardClick, userId, likeCard, handleDeleteClick);
    const newCard = card.generateCard();
    return newCard;
}


const cardList = new Section({
    renderer:(item) => {
        cardList.addItem(createCard(item))
    }}, ".elements");


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



