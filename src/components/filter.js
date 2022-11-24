import {createElement} from "../utils";

// Создание разметки одного фильтра
const createFilterMarkup = (filter, isChecked) => {
  const {name, count} = filter;

  return (
    `<input
        type="radio"
        id="filter__"
        class="filter__input visually-hidden"
        name="filter"
        ${isChecked ? `checked` : ``}
    />
    <label for="filter__${name}" class="filter__label">
        ${name} <span class="filter__${name}-count">${count}</span></label
    >`
  );
};

// Создание шаблон для фильтров
const createFiltersTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);
  return (
    `<section class="main__filter filter container">
      ${filtersMarkup}
    </section>`
  );
};


// Класс для фильтров
export default class Filter {
  // Конструктор класса
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  // Возвращаяет шаблон задачи
  getTemplate() {
    return createFiltersTemplate(this._filters);
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
