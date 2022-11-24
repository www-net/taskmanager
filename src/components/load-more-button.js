import {createElement} from "../utils";

// Создание шаблона кнопки "Load more"
const createLoadMoreButtonTemplate = () => {
  return (
    `<button class="load-more" type="button">load more</button>`
  );
};

// Класс кнопки Load more
export default class LoadMoreButton {
  // Конструктор класса
  constructor() {
    this._element = null;
  }

  // Возвращает шаблон кнопки
  getTemplate() {
    return createLoadMoreButtonTemplate();
  }

  // Возвращает DOM элемент
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
