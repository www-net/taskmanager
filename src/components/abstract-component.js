import {createElement} from "../utils";

export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }

    this._element = null;
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getelement());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

