import {FilterType} from "../const";
import {isOneDay, isOverdueDate, isRepeating} from "./common";

// Получение задач в архиве
export const getArchiveTasks = (tasks) => {
  return tasks.filter((task) => task.isArchive);
};

// Получение задач не из архива
export const getNotArchiveTasks = (tasks) => {
  return tasks.filter((task) => !task.isArchive);
};

// Получение избранных задач
export const getFavoriteTasks = (tasks) => {
  return tasks.filter((task) => task.isFavorite);
};

// Получение просроченных задач
export const getOverdueTasks = (tasks, date) => {
  return tasks.filter((task) => {
    const dueDate = task.dueDate;
    if (!dueDate) {
      return false;
    }
    return isOverdueDate(dueDate, date);
  });
};

// Получение повторяющихся задач
export const getRepeatingTasks = (tasks) => {
  return tasks.filter((task) => isRepeating(task.repeatingDays));
};

// Получение задач за сегодняшний день
export const getTasksInOneDay = (tasks, date) => {
  return tasks.filter((task) => isOneDay(task.dueDate, date));
};

export const getTasksByFilter = (tasks, filterType) => {
  const nowDate = new Date();

  switch (filterType) {
    case FilterType.ALL:
      return getNotArchiveTasks(tasks);
    case FilterType.ARCHIVE:
      return getArchiveTasks(tasks);
    case FilterType.FAVORITES:
      return getFavoriteTasks(getNotArchiveTasks(tasks));
    case FilterType.OVERDUE:
      return getOverdueTasks(getNotArchiveTasks(tasks), nowDate);
    case FilterType.REPEATING:
      return getRepeatingTasks(getNotArchiveTasks(tasks));
    case FilterType.TODAY:
      return getTasksInOneDay(getNotArchiveTasks(tasks), nowDate);
  }

  return tasks;
};

