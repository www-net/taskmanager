import AbstractComponent from "./abstract-component";

// Создание разметки одного фильтра
const createFilterMarkup = (filter, isChecked) => {
  const {name, count} = filter;

  return (
    `<input
        type="radio"
        id="filter__${name}"
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
const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);
  return (
    `<section class="main__filter filter container">
      ${filtersMarkup}
    </section>`
  );
};


// Класс для фильтров
export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  // Возвращаяет шаблон задачи
  getTemplate() {
    return createFilterTemplate(this._filters);
  }
}
