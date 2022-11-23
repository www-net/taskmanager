import { createElement } from "../utils";

// Создание шаблона меню сайта
const createSiteMenuTemplate = () => {
  return (
    `<section class="control__btn-wrap">
      <input
        type="radio"
        name="control"
        id="control__new-task"
        class="control__input visually-hidden"
      />
      <label for="control__new-task" class="control__label control__label--new-task"
      >+ ADD NEW TASK</label
      >
      <input
        type="radio"
        name="control"
        id="control__task"
        class="control__input visually-hidden"
        checked
      />
      <label for="control__task" class="control__label">TASKS</label>
      <input
        type="radio"
        name="control"
        id="control__statistic"
        class="control__input visually-hidden"
      />
      <label for="control__statistic" class="control__label">STATISTICS</label>
    </section>`
  );
};

//Класс для меню сайта
export default class SiteMenu {
  //Конструктор класса
  constructor() {
    this._element = null;
  }

  //Возвращает шаблон меню сайта
  getTemplate() {
    return createSiteMenuTemplate();
  }

  //Возврапщает DOM элемент
  getElement() {
    if(!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  //Очищяет DOM элемент
  removeElement() {
    this._element = null;
  }
}
