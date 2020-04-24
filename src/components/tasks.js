import AbstractComponent from "./abstract-component.js";


const createTasksTemplate = () => {
  return (
    `<div class="board__tasks"></div>`
  ).trim();
};


export default class Tasks extends AbstractComponent {
  getTemplate() {
    return createTasksTemplate();
  }
}
