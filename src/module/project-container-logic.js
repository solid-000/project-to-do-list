import { storeToLocal } from "..";

export const projectContainer = (function () {
  let array = [];

  function addProjectToContainer(projectName, description) {
    array.push(new Project(projectName, description));
    storeToLocal();
  }

  function removeProject(index) {
    array.splice(index, 1);
    storeToLocal();
  }

  function addTodoToProject(index, name, dateTime, note, priority) {
    array[index].addT(name, dateTime, note, priority);
    storeToLocal();
  }

  function removeTodoFromProject(projectIndex, itemIndex) {
    array[projectIndex].removeT(itemIndex);
    storeToLocal();
  }

  function editProject(index, name, desc) {
    array[index].projectName = name;
    array[index].description = desc;
    storeToLocal();
  }

  return {
    addProjectToContainer,
    addTodoToProject,
    removeTodoFromProject,
    removeProject,
    editProject,
    array,
  };
})();

class Project {
  constructor(projectName, description) {
    this.projectName = projectName;
    this.description = description;
    this.todoList = [];
  }

  addT(name, dateTime, note, priority) {
    this.todoList.push(new todoItem(name, dateTime, note, priority));
  }

  removeT(index) {
    this.todoList.splice(index, 1);
  }
}

class todoItem {
  constructor(name, dateTime, note, priority) {
    this.todoName = name;
    this.priority = priority;
    this.dateTime = dateTime;
    this.note = note;
  }
}
