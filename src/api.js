import Task from "./models/task";

const API = class {
  constructor(authorization) {
    this._authorization = authorization;
  }

  getTasks() {
    const headers = new Headers();
    headers.append(`Authorization`, this._authorization);
    return fetch(`https://jsonplaceholder.typicode.com/todos`, {headers})
    .then((response) => response.json())
    .then(Task.parseTasks);
  }
};
export default API;

