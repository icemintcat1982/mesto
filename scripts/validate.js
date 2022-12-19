function isValid(config, form, input) {
    if (!input.validity.valid) {
        showInputError(config, form, input, input.validationMessage);
    } else {
        hideInputError(config, form, input);
    }
}

function showInputError(config, form, input, errorMessage) {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.add(config.inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(config.errorClass);
}

function hideInputError(config, form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.remove(config.inputErrorClass);
    error.classList.remove(config.errorClass);
    error.textContent = "";
}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

function toggleBtnState(config, inputList, submitBtn) {
    if (hasInvalidInput(inputList)) {
        submitBtn.classList.add(config.offBtnSelector);
        submitBtn.disabled = true;
    } else {
        submitBtn.classList.remove(config.offBtnSelector);
        submitBtn.disabled = false;
    }
}

function setEventListener(config, form) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const submitBtn = form.querySelector(config.submitBtnSelector);
    inputList.forEach((input) => {
        input.addEventListener("input", () => {
            isValid(config, form, input);
            toggleBtnState(config, inputList, submitBtn);
        });
    });
}

function enableValidation(config) {
    const popupList = Array.from(
        document.querySelectorAll(config.formSelector)
    );
    popupList.forEach((form) => {
        setEventListener(config, form);
    });
}

const config = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitBtnSelector: ".popup__submit",
    offBtnSelector: "popup__submit_inactive",
    inputErrorClass: "popup__error",
    errorClass: "popup__input-error_active",
};

enableValidation(config);
