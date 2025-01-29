import { projectContainer } from "./project-container-logic";
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

export {displayProject};