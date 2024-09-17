import AbstractComponent from "./abstract-component";

// Создает шаблон для списка задач
const createTasksTemplate = () => {
  return (
    `<div class="board__tasks"></div>`
  );
};

export default class Tasks extends AbstractComponent {
  getTemplate() {
    return createTasksTemplate();
  }
}
