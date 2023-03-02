(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._name=t.name,this._link=t.link,this._likes=t.likes,this._likeCard=i,this._id=t._id,this._ownerId=t.owner._id,this._userId=o,this._templateSelector=n,this._handleCardClick=r,this._handleDeleteClick=u}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element__card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".element__text").textContent=this._name,this._element.querySelector(".element__image").src=this._link,this._element.querySelector(".element__image").alt=this._name,this._totalLikes=this._element.querySelector(".element__like-counter"),this._isDeleteCard(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._buttonLike=this._element.querySelector(".element__button"),this._buttonLike.addEventListener("click",(function(){e._likeCard(e,e._id)})),this._element.querySelector(".element__delete").addEventListener("click",(function(){e._handleDeleteClick(e)})),this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"_isDeleteCard",value:function(){this._ownerId!=this._userId&&this._element.querySelector(".element__delete").remove()}},{key:"handleCardLike",value:function(e){this._likes=e,this._buttonLike.classList.toggle("element__button_active"),this._totalLikes.textContent=this._likes.length}},{key:"handleCardDelete",value:function(){this._element.remove(),this._element=null}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n,this._errorElement=this._formElement.querySelector(this._config.inputErrorClass),this._btnElement=this._formElement.querySelector(this._config.submitBtnSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector))}var t,n;return t=e,(n=[{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.add(this._config.inputErrorClass),this._errorElement.textContent=t,this._errorElement.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.remove(this._config.inputErrorClass),this._errorElement.classList.remove(this._config.errorClass),this._errorElement.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleBtnState",value:function(){this._hasInvalidInput()?(this._btnElement.classList.add(this._config.offBtnSelector),this._btnElement.disabled=!0):(this._btnElement.classList.remove(this._config.offBtnSelector),this._btnElement.disabled=!1)}},{key:"resetValidation",value:function(){var e=this;this._toggleBtnState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListener",value:function(){var e=this;this._toggleBtnState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleBtnState()}))}))}},{key:"enableValidation",value:function(){this._setEventListener()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u={formSelector:".popup__form",inputSelector:".popup__input",submitBtnSelector:".popup__submit",offBtnSelector:"popup__submit_inactive",inputErrorClass:"popup__error",errorClass:"popup__input-error_active"};function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,p(r.key),r)}}function p(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===s(t)?t:String(t)}var y=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=p(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popupElement=document.querySelector(t),this._popupCloseBtn=this._popupElement.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_active"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_active"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){t.target.classList.contains("popup_active")&&e.close()})),this._popupCloseBtn.addEventListener("click",(function(){e.close()}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._elementImage=t._popupElement.querySelector(".popup__photo"),t._elementText=t._popupElement.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._elementImage.src=t,this._elementText.textContent=e,this._elementImage.alt=e,d(v(u.prototype),"open",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleCardSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleCardSubmit=r,t._form=t._popupElement.querySelector(".popup__form"),t._inputs=Array.from(t._form.querySelectorAll(".popup__input")),t._submitBtn=t._form.querySelector(".popup__submit"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;k(w(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleCardSubmit(e._getInputValues())}))}},{key:"close",value:function(){k(w(u.prototype),"close",this).call(this),this._form.reset()}},{key:"popupLoading",value:function(e){this._submitBtn.textContent=e?"Сохранение...":"Сохранить"}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}var P=function(){function e(t){var n=t.nameSelector,r=t.descriptionSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._description=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={name:this._name.textContent,description:this._description.textContent,avatar:this._avatar.src},this._userInfo}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._description.textContent=e.about,this._id=e.id,this._avatar.src=e.avatar}},{key:"getUserId",value:function(){return this._id}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var I=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResult",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ${res.status}")}},{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{method:"GET",headers:this._headers}).then(this._checkResult)}},{key:"getCards",value:function(){return fetch(this._url+"/cards",{method:"GET",headers:this._headers}).then(this._checkResult)}},{key:"updateUserInfo",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.description})}).then(this._checkResult)}},{key:"addNewCard",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResult)}},{key:"likeCard",value:function(e){return fetch(this._url+"/cards/".concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResult)}},{key:"dislikeCard",value:function(e){return fetch(this._url+"/cards/".concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResult)}},{key:"deleteCard",value:function(e){return fetch(this._url+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResult)}},{key:"changeUserAvatar",value:function(e){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResult)}},{key:"getAllData",value:function(){return Promise.all([this.getUserInfo(),this.getCards()])}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var U,A,V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._confirmBtn=document.querySelector(".popup__submit"),n._form=n._popupElement.querySelector(".popup__form"),n._deleteCard=t,n}return t=u,(n=[{key:"setCardDelete",value:function(e){this._catdItem=e}},{key:"setEventListeners",value:function(){var e=this;B(D(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._deleteCard()}))}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y),N=document.querySelector(".profile__button_type_edit"),J=document.querySelector(".profile__button_type_add"),G=document.querySelector(".popup_profile_submit"),H=document.querySelector(".popup_card_submit"),z=document.querySelector(".popup__input_name"),M=document.querySelector(".popup__input_description"),$=document.querySelector(".profile__avatar-edit-btn"),F=(document.querySelector(".element__delete"),new I({url:"https://mesto.nomoreparties.co/v1/cohort-59",headers:{authorization:"1f1b2dd2-b429-4573-aa4a-55a60a7ac94d","Content-Type":"application/json"}}));F.getUserInfo().then((function(e){K.setUserInfo(e),U=e._id,console.log(U)})),F.getCards().then((function(e){console.log(e),oe.renderItems(e)}));var K=new P({nameSelector:".profile__name",descriptionSelector:".profile__description",avatarSelector:".profile__avatar"}),Q=new b(".popup_photo_open");Q.setEventListeners();var W=function(e,t){Q.open(e,t)},X=new O({popupSelector:".popup_card_submit",handleCardSubmit:function(e){!function(e){X.popupLoading(!0),F.addNewCard(e).then((function(e){var t=re(e);oe.addItem(t),setTimeout((function(){return X.close()}),1500)})).catch((function(e){return console.log(e)})).finally((function(){X.popupLoading(!1)}))}(e)}});X.setEventListeners();var Y=new O({popupSelector:".popup_profile_submit",handleCardSubmit:function(e){!function(e){Y.popupLoading(!0),F.updateUserInfo(e).then((function(e){K.setUserInfo(e),setTimeout((function(){return Y.close()}),1500)})).catch((function(e){return console.log(e)})).finally((function(){Y.popupLoading(!1)}))}(e)}});Y.setEventListeners();var Z=new O({popupSelector:".popup_avatar_edit",handleCardSubmit:function(e){!function(e){Z.popupLoading(!0),F.changeUserAvatar(e).then((function(e){K.setUserAvatar(e),setTimeout((function(){return Z.close()}),1500)})).catch((function(e){return console.log(e)})).finally((function(){X.popupLoading(!1)}))}(e)}});function ee(e,t){e.isLiked()?F.dislikeCard(t).then((function(t){e.handleCardLike(t.likes)})):F.likeCard(t).then((function(t){e.handleCardLike(t.likes)}))}Z.setEventListeners(),$.addEventListener("click",(function(){Z.open()}));var te=new V(".popup_agree-delete",(function(){F.deleteCard(A._id).then((function(){A._element.remove(),te.close()})).catch((function(e){console.log(e)}))}));function ne(e){te.open(),A=e}function re(e){return new n(e,"#element__card",W,U,ee,ne).generateCard()}te.setEventListeners();var oe=new a({renderer:function(e){oe.addItem(re(e))}},".elements"),ie=new i(u,G);ie.enableValidation();var ue=new i(u,H);ue.enableValidation(),N.addEventListener("click",(function(){ie.resetValidation(),Y.open();var e=K.getUserInfo(),t=e.name,n=e.description;z.value=t,M.value=n})),J.addEventListener("click",(function(){ue.resetValidation(),X.open()})),J.addEventListener("click",(function(){ue.resetValidation(),X.open()}))})();