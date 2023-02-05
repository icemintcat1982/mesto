export class Section {

constructor({items, renderer}, containerSelector) {
this._renderItems = items;
this._renderer = renderer;
this._containerSelector = document.querySelector(containerSelector);

}

addItem(element) {
    this._container.append(element);
}

renderItems() {
    this._renderItems.forEach(item => {
       this._renderer(item); 
    });
}


}