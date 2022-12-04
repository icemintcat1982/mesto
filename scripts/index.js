const POPUP_ACTIVE_CLASS = "popup_active";

const BtnOpenPopup = document.querySelector(".profile__button_type_edit");
const PopupAddCardOpen = document.querySelector(".profile__button_type_add");
const popup = document.querySelector(".popup");
const popupContent = popup.querySelector(".popup__content");
const popupProfile = document.querySelector(".popup_profile_submit");
const popupCard = document.querySelector(".popup_card_submit");
const popupEditForm = popup.querySelector(".popup__edit-form");
const popupAddCard = popup.querySelector(".popup__add-card");
const popupCloseBtn = popup.querySelector(".popup__close");
const popupCardCloseBtn = popupCard.querySelector(".popup__close-card");
const popupPhotoCloseBtn = document.querySelector(".popup__close-photo");
const form = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_name");
const decriptionInput = document.querySelector(".popup__input_description");
const ProfileNameEdit = document.querySelector(".profile__name");
const ProfileDescriptionEdit = document.querySelector(".profile__description");
const ChangesSave = document.querySelector(".popup__submit");
const placeInput = document.querySelector(".popup__input_place");
const linkInput = document.querySelector(".popup__input_link");
const cardElements = document.querySelector(".elements");
const cardTemplate = document.querySelector("#element__card").content;
const popupPhoto = document.querySelector(".popup_photo_open");
const contentPhoto = document.querySelector(".popup__photo");
const captionPhoto = document.querySelector(".popup__caption");

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

const createCard = (element) => {
    const cardItem = cardTemplate
        .querySelector(".element__card")
        .cloneNode(true);
    const cardPhoto = cardItem.querySelector(".element__image");
    cardItem.querySelector(".element__text").textContent = element.name;
    cardPhoto.src = element.link;
    cardPhoto.alt = element.name;
    cardItem
        .querySelector(".element__button")
        .addEventListener("click", function (evt) {
            evt.target.classList.toggle("element__button_active");
        });
    cardItem
        .querySelector(".element__delete")
        .addEventListener("click", function (evt) {
            evt.target.closest(".element__card").remove();
        });
    cardPhoto.addEventListener("click", function (evt) {
        contentPhoto.src = element.link;
        captionPhoto.textContent = element.name;
        contentPhoto.alt = element.name;
        openPopup(popupPhoto);
    });
    return cardItem;
};

initialCards.forEach(function (element) {
    const card = createCard(element);
    cardElements.prepend(card);
});

function addCardSubmit(evt) {
    evt.preventDefault();
    const newPlaceName = placeInput.value;
    const newPlaceLink = linkInput.value;
    const newCard = createCard({
        name: newPlaceName,
        link: newPlaceLink,
        alt: newPlaceName,
    });

    cardElements.prepend(newCard);
    placeInput.value = " ";
    linkInput.value = " ";
    closePopup(popupCard);
}

popupCard.addEventListener("submit", addCardSubmit);

function openPopup(popup) {
    popup.classList.add(POPUP_ACTIVE_CLASS);
}

function openPopupProfile(evt) {
    openPopup(popupProfile, evt);
    nameInput.value = ProfileNameEdit.textContent;
    decriptionInput.value = ProfileDescriptionEdit.textContent;
}

BtnOpenPopup.addEventListener("click", openPopupProfile);

function handleSubmitProfileForm(evt) {
    evt.preventDefault();
    ProfileNameEdit.textContent = nameInput.value;
    ProfileDescriptionEdit.textContent = decriptionInput.value;
    popup.classList.remove(POPUP_ACTIVE_CLASS);
}

form.addEventListener("submit", handleSubmitProfileForm);

function openPopupCard(evt) {
    openPopup(popupCard, evt);
}

PopupAddCardOpen.addEventListener("click", openPopupCard);

function closePopup(popup, evt) {
    popup.classList.remove(POPUP_ACTIVE_CLASS);
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
