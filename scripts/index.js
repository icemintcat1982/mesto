const POPUP_ACTIVE_CLASS = "popup_active";

const openPopupBtn = document.querySelector(".profile__button_type_edit");
const popup = document.querySelector(".popup");
const popupEditForm = popup.querySelector(".popup__edit-form");
const popupCloseBtn = popup.querySelector(".popup__close");
const form = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_name");
const decriptionInput = document.querySelector(".popup__input_description");
const editProfileName = document.querySelector(".profile__name");
const editProfileDescription = document.querySelector(".profile__description");
const saveChanges = document.querySelector(".popup__submit");

openPopupBtn.addEventListener("click", (event) => {
    popup.classList.add(POPUP_ACTIVE_CLASS);
});

popup.addEventListener("click", (event) => {
    if (!popupEditForm.contains(event.target) || event.target === popupCloseBtn) {
        popup.classList.remove(POPUP_ACTIVE_CLASS);

    }
});

function openPopup() {
    popup.classList.add(POPUP_ACTIVE_CLASS);
    nameInput.value = editProfileName.textContent;
    decriptionInput.value = editProfileDescription.textContent;
}

openPopupBtn.addEventListener("click", openPopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    editProfileName.textContent = nameInput.value;
    editProfileDescription.textContent = decriptionInput.value; 
    popup.classList.remove(POPUP_ACTIVE_CLASS);
}

form.addEventListener("submit", formSubmitHandler);


