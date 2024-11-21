import AbstractComponent from "./abstract-component";

// Создание шаблона кнопки "Load more"
const createLoadMoreButtonTemplate = () => {
  return (
    `<button class="load-more" type="button">load more</button>`
  );
};

// Класс кнопки Load more
export default class LoadMoreButton extends AbstractComponent {

  // Возвращает шаблон кнопки
  getTemplate() {
    return createLoadMoreButtonTemplate();
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
