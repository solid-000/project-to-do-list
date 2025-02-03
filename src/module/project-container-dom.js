import { projectContainer } from "./project-container-logic";
import { emptyContent, populateContent } from "./project-content";
const projectContainerDom = document.querySelector('.project-container');

function displayProject(){
    projectContainer.array.forEach((element, index)=> {
        const project = document.createElement('button');
        project.textContent = element.projectName;
        project.setAttribute('class', 'project');
        project.setAttribute('data-project-index', `${index}`);
        projectContainerDom.appendChild(project);
    });
}
function addProject(name, description){
    projectContainer.addProjectToContainer(name, description);
    emptyProject();
    displayProject();
}
function emptyProject(){
    while(projectContainerDom.firstChild){
        projectContainerDom.firstChild.remove();
    }
}
function addTodo(index, name, date, note, rush){
    projectContainer.addTodoToProject(index, name, date, note, rush);
    emptyContent();
    populateContent(index);
}

export {displayProject, emptyProject, addProject, addTodo};