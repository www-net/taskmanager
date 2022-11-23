import BoardComponent from './components/board';
import FilterComponent from './components/filter';
import LoadMoreButtonComponent from './components/load-more-button';
import TaskEditComponent from "./components/task-edit";
import TaskComponent from './components/task';
import TasksComponent from './components/tasks';
import SiteMenuComponent from './components/site-menu';
import SortComponent from './components/sort';
import {generateTasks} from './mock/task';
import {generateFilters} from './mock/filter';
import {render, RenderPosition} from './utils';

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

const renderTask = (taskListElement, task) => {
  const onEditButtonClick = () => {
    taskListElement.replaceChild()
  }
};

const renderBoard = () => {};



render(siteHeaderElement, new SiteMenuComponent().getElement());
render(siteMainElement, new FilterComponent(filters).getElement());

//----------------------




// render(siteHeaderElement, createSiteMenuTemplate());
// render(siteMainElement, createFiltersTemplate(filters));
// render(siteMainElement, BoardComponent);

// const boardElement = siteMainElement.querySelector(`.board`);

// render(boardElement, createTasksTemplate());

// const taskListElement = siteMainElement.querySelector(`.board__tasks`);

// render(boardElement, createSortingTemplate(), RenderPosition.AFTERBEGIN);
// render(taskListElement, createTaskEditTemplate(tasks[0]));

// let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

// tasks.slice(1, showingTasksCount)
//   .forEach((task) => render(taskListElement,
//     createTaskTemplate(task)));

// render(boardElement, createLoadMoreButtonTemplate());

// const loadMoreButton = boardElement.querySelector(`.load-more`);

// loadMoreButton.addEventListener(`click`, () => {
//   const prevTasksCount = showingTasksCount;
//   showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

//   tasks.slice(prevTasksCount, showingTasksCount)
//     .forEach((task) => render(taskListElement,
//       createTaskTemplate(task)));

//   if (showingTasksCount >= tasks.length) {
//     loadMoreButton.remove();
//   }
// });
