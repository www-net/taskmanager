import {COLOR} from "../const";
import {generateRepeatingDays, getRandomArrayItem, getRandomDate} from "../mock/task";

export default class Task {
  constructor(data) {
    this.id = data[`id`];
    this.description = data[`title`] || ``;
    this.dueDate = data[`completed`] ? null : getRandomDate();
    this.repeatingDays = data[`repeating_days`] || generateRepeatingDays();
    this.color = data[`color`] || getRandomArrayItem(COLOR);
    this.isFavorite = Boolean(data[`is_favorite`]) || data[`completed`];
    this.isArchive = Boolean(data[`is_archived`]) || Math.random() > 0.5;
  }
  static parseTask(data) {
    return new Task(data);
  }
  static parseTasks(data) {
    return data.map(Task.parseTask);
  }
}
