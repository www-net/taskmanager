import BoardComponent from './components/board';
import BoardController from './controllers/board';
import FilterComponent from './components/filter';
import SiteMenuComponent from './components/site-menu';
import {generateTasks} from './mock/task';
import {generateFilters} from './mock/filter';
import {render} from './utils/render';


const TASK_COUNT = 18;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

render(siteHeaderElement, new SiteMenuComponent());
render(siteMainElement, new FilterComponent(filters));

const boardComponent = new BoardComponent();
const boardController = new BoardController(boardComponent);
render(siteMainElement, boardComponent);
boardController.render(tasks);
