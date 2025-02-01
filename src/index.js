"use strict"
import "./styles.css";
import "./modal.css";
import { projectContainer } from "./module/project-container-logic";
import { populateContent, emptyContent } from "./module/project-content";
import { displayProject, addProject, addTodo} from "./module/project-container-dom";

const projectContainerDom = document.querySelector('.project-container');

projectContainer.addProjectToContainer('Default', 'All unlisted tasks are added to this project.')
projectContainer.addTodoToProject(0, 'todo-1', 22, 'note-1');
projectContainer.addTodoToProject(0, 'todo-2', 22, 'note-2');
projectContainer.addProjectToContainer('CSS', 'Learn Css');
projectContainer.addTodoToProject(1, 'yo', 22, 'note-1');

displayProject();
populateContent(0);

console.table(projectContainer.array)

projectContainerDom.addEventListener('click', (event) =>{
    let target = event.target;
    if(target.getAttribute('data-project-index')){
        emptyContent();
        populateContent(target.getAttribute('data-project-index'));
    }
});

document.querySelector('.add-project').addEventListener('click', () => {
    document.querySelector('.modal-add-project').showModal();
});
document.querySelector('#close-project-modal').addEventListener('click', () => {
    document.querySelector('.modal-add-project').close();
    document.querySelector('#project-name').value = '';
    document.querySelector('#project-desc').value = '';
});
document.querySelector('#close-todo-modal').addEventListener('click', () => {
    document.querySelector('.modal-add-todo').close();
});
document.querySelector('.modal-btn-add-project').addEventListener('click', () => {
    const name = document.querySelector('#project-name');
    const desc = document.querySelector('#project-desc');
    addProject(name.value || 'Unnamed', desc.value || 'Description not added.');
    document.querySelector('.modal-add-project').close();
    name.value = '';
    desc.value = '';
});

document.querySelector('#modal-btn-add-todo').addEventListener('click', () => {
    let index = document.querySelector('.list-add').getAttribute('data-project-index');
    let name = document.querySelector('#todo-name');
    let date = document.querySelector('#todo-date');
    let note = document.querySelector('#todo-note');
    let rush = document.querySelector('input[name="priority"]:checked').value;
    addTodo(index, name.value, date.value, note.value, rush);
    document.querySelector('.modal-add-todo').close();
    name.value = '';
    date.value = '';
    note.value = '';
});