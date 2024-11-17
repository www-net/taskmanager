import BoardComponent from './components/board';
import BoardController from './controllers/board';
import FilterController from './controllers/filter';
import SiteMenuComponent from './components/site-menu';
import TasksModel from './models/tasks';
import {generateTasks} from './mock/task';
import {render} from './utils/render';


const TASK_COUNT = 18;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
render(siteHeaderElement, new SiteMenuComponent());

const tasks = generateTasks(TASK_COUNT);
const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const filterController = new FilterController(siteMainElement, tasksModel);
filterController.render();

const boardComponent = new BoardComponent();
const boardController = new BoardController(boardComponent, tasksModel);
render(siteMainElement, boardComponent);
boardController.render();
