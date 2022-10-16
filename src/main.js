import {createFiltersTemplate} from './components/filters';
import {createSiteMenuTemplate} from './components/site-menu';
import {createBoardTemplate} from './components/board';
import {createTaskTemplate} from './components/task';
import {createTaskEditTemplate} from './components/task-edit';
import {createLoadMoreButtonTemplate} from './components/load-more-button';
import {createSortingTemplate} from './components/sorting';
import {generateFilters} from './mock/filter';
import {generateTasks} from './mock/task';


const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;


const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFiltersTemplate(filters));
render(siteMainElement, createBoardTemplate());

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

render(boardElement, createSortingTemplate(), `afterbegin`);
render(taskListElement, createTaskEditTemplate(tasks[0]));

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

for (let i = 1; i < showingTasksCount; i++) {
  render(taskListElement, createTaskTemplate(tasks[i]));
}

render(boardElement, createLoadMoreButtonTemplate());

const loadMoreButton = boardElement.querySelector(`.load-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => render(taskListElement,
      createTaskTemplate(task)));

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
