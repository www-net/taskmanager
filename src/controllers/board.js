import LoadMoreButtonComponent from '../components/load-more-button';
import TasksComponent from '../components/tasks';
import NoTasksComponent from '../components/no-tasks';
import SortComponent, {SortType} from '../components/sort';
import {remove, render} from '../utils/render';


const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderTasks = (taskListElement, tasks) => {
  tasks.forEach((task) => {
    renderTask(taskListElement, task);
  });
};

const getSortedTasks = (tasks, sortType, from, to) => {
  let sortedTasks = [];
  const showingTasks = tasks.slice();

  switch (sortType) {
    case SortType.DATE_UP:
      sortedTasks = showingTasks.sort((a, b) => a.dueDate - b.dueDate);
      break;
    case SortType.DATE_DOWN:
      sortedTasks = showingTasks.sort((a, b) => b.dueDate - a.dueDate);
      break;
    case SortType.DEFAULT:
      sortedTasks = showingTasks;
      break;
  }

  return sortedTasks.slice(from, to);
};

export default class BoardController {
  constructor(container) {
    this._container = container;

    this._noTasksComponent = new NoTasksComponent();
    this._sortComponent = new SortComponent();
    this._tasksComponent = new TasksComponent();
    this._loadMoreButtonComponent = new LoadMoreButtonComponent();
  }

  render(tasks) {
    const container = this._container.getElement();
    const isAllTasksArchived = tasks.every((task) => task.isArchive);

    if (isAllTasksArchived) {
      render(container, this._noTasksComponent);
      return;
    }

    render(container, this._sortComponent);
    render(container, this._tasksComponent);

    const taskListElement = container.querySelector(`.board__tasks`);

    let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

    renderTasks(taskListElement, tasks.slice(0, showingTasksCount));
  }

  _renderLoadMoreButton() {

    if (showingTasksCount >= tasks.length) {
      return;
    }

    render(container, this._loadMoreButtonComponent);

    this._loadMoreButtonComponent.setClickHandler(() => {
      const prevTasksCount = showingTasksCount;
      showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

      const sortedTasks = getSortedTasks(tasks, this._sortComponent.getSortType(), prevTasksCount, showingTasksCount);

      renderTasks(taskListElement, sortedTasks);

      if (showingTasksCount >= tasks.length) {
        remove(this._loadMoreButtonComponent);
      }
    });
  }


  _onSortTypeChange(sortType) {

    showingTasksCount = SHOWING_TASKS_COUNT_BY_BUTTON;

    const sortedTasks = getSortedTasks(tasks, sortType, 0, showingTasksCount);

    taskListElement.innerHTML = ``;

    renderTasks(taskListElement, sortedTasks);

    renderLoadMoreButton();
  }
}

