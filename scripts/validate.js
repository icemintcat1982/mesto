

function showInputError(object, form, input, errorMessage) {
    const error = form.querySelector(`.#${input.id}-error`)
    input.classList.add(object.inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(object.errorClass);
 
}

function hideInputError(object, form, input) {
    const error = form.querySelector(`.#${input.id}-error`)
    input.classList.remove(object.inputErrorClass);
    error.classList.remove(object.errorClass);
    error.textContent = "";
    
}


function isValid(object, form, input) {
    if (!input.validity.valid) {
        showInputError(object, form, input, input.validationMessage);
    } else {
        hideInputError(object, form, input);
    };
}


function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

function toggleBtnState(object, inputList, submitBtn ) {
    if (hasInvalidInput(inputList)) {
        submitBtn.classList.add(object.offBtnSelector);
        submitBtn.disabled = true;
    } else {
        submitBtn.classList.remove(object.offBtnSelector);
       submitBtn.disabled = false;
    };
}



function setEventListener(object, form) {
    const inputList = Array.from(form.querySelectorAll(object.inputSelector));
    const submitBtn = form.querySelector(object.submitBtnSelector);
    inputList.forEach((input) => {
       input.addEventListener("input", () => {
        isValid(object, form, input);
        toggleBtnState( object, inputList, submitBtn);
       }) ;      
    });
}


function enableValidation(object) {
    const popupList = Array.from(document.querySelectorAll(object.formSelector));
    popupList.forEach((form) => {
        setEventListener(object, form);
    });
}



enableValidation({
    formSelector: ".form",
    inputSelector: ".popup__input",
    submitBtnSelector: ".popup__submit",
    offBtnSelector: ".popup__submit_inactive",
    inputErrorClass: ".popup__input-error",
    errorClass: ".popup__input-error_active"
});


