
const API = class {
  getTasks() {
    return fetch(`https://jsonplaceholder.typicode.com/todos`);
  }
};
export default API;

