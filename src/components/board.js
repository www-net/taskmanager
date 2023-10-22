import {createElement} from "../utils";

// Создание шаблона доски задач
const createBoardTemplate = () => {
  return (
    `<section class="board container"></section>`
  );
};

// Класс для доски задач
export default class Board {
  constructor() {
    this._element = null;
  }

  // Возвращаяет шаблон доски задач
  getTemplate() {
    return createBoardTemplate();
  }

  // Возвращаяет элемент DOM
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  // Очищает элемент DOM
  removeElement() {
    this._element = null;
  }
}
