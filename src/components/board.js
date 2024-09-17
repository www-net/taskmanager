import AbstractComponent from "./abstract-component";

// Создание шаблона доски задач
const createBoardTemplate = () => {
  return (
    `<section class="board container"></section>`
  );
};

// Класс для доски задач
export default class Board extends AbstractComponent {

  // Возвращаяет шаблон доски задач
  getTemplate() {
    return createBoardTemplate();
  }

}
