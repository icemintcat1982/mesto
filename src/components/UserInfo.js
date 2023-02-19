export class UserInfo {
    constructor({nameSelector, descriptionSelector, avatarSelector}) {
   this._name = document.querySelector(nameSelector);
   this._description = document.querySelector(descriptionSelector);
   this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
    this._userInfo = {
        name: this._name.textContent,
        description: this._description.textContent,
        avatar: this._avatar.src
    }
    return this._userInfo;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._description.textContent = data.about;
        this._id = data.id;
        this. _avatar.src = data.avatar;
    }
    
    getUserId() {
        return this._id;
    }

    setUserAvatar() {
        this._avatar.src = obj.avatar;
    }

}