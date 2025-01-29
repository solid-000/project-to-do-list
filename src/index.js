"use strict"
import "./styles.css";
import { projectContainer } from "./module/project-container-logic";
import { populateContent, emptyContent } from "./module/project-content";
import { displayProject, addProject} from "./module/project-container-dom";

const projectContainerDom = document.querySelector('.project-container');

projectContainer.addProjectToContainer('Default', 'All unlisted tasks are added to this project.')
projectContainer.addTodoToProject(0, 'todo-1', 22, 'note-1');
projectContainer.addTodoToProject(0, 'todo-2', 22, 'note-2');
projectContainer.addProjectToContainer('CSS', 'Learn Css');
projectContainer.addTodoToProject(1, 'yo', 22, 'note-1');

console.log(projectContainer.array);

displayProject();
populateContent(0);

console.log(projectContainer.array);

projectContainerDom.addEventListener('click', (event) =>{
    let target = event.target;
    if(target.getAttribute('data-project-index')){
        emptyContent();
        populateContent(target.getAttribute('data-project-index'));
    }

});


