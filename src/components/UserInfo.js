export class UserInfo {
    constructor({nameSelector, descriptionSelector}) {
   this._name = document.querySelector(nameSelector);
   this._description = document.querySelector(descriptionSelector);
    }

    getUserInfo() {
    this._userInfo = {
        name: this._name.textContent,
        description: this._description.textContent,
    }
    return this._userInfo;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._description.textContent = data.about;
    }
}