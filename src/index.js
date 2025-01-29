"use strict"
import "./styles.css";
import { projectContainer } from "./project-container";
import { populateContent } from "./project-content";

const projectContainerDom = document.querySelector('.project-container');

projectContainer.addProjectToContainer('Default', 'All unlisted tasks are added to this project.')
projectContainer.addTodoToProject(0, 'todo-1', 22, 'note-1');
projectContainer.addTodoToProject(0, 'todo-2', 22, 'note-2');

console.log(projectContainer.array);

displayProject();
populateContent(0);



function displayProject(){
    projectContainer.array.forEach((element, index)=> {
        const project = document.createElement('button');
        project.textContent = element.projectName;
        project.setAttribute('class', 'project');
        project.setAttribute('data-project-index', `${index}`);
        projectContainerDom.appendChild(project);
    });
}

