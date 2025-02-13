"use strict"
import "./styles.css";
import "./modal.css";
import { projectContainer } from "./module/project-container-logic";
import { populateContent, emptyContent } from "./module/project-content";
import { displayProject, emptyProject, addProject, addTodo} from "./module/project-container-dom";
export {storeToLocal};

const projectContainerDom = document.querySelector('.project-container');

getFromLocal();
displayProject();
if(projectContainer.array[0]){
    populateContent(0);
}

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
    document.querySelector('#todo-name').value = '';
    document.querySelector('#todo-date').value = '';
    document.querySelector('#todo-note').value = '';
});
document.querySelector('.modal-btn-add-project').addEventListener('click', () => {
    const name = document.querySelector('#project-name');
    const desc = document.querySelector('#project-desc');
    addProject(name.value || 'Unnamed', desc.value || 'Description not added.');
    document.querySelector('.modal-add-project').close();
    name.value = '';
    desc.value = '';
    emptyContent();
    populateContent(projectContainer.array.length-1);
});

document.querySelector('#modal-btn-add-todo').addEventListener('click', () => {
    let index = document.querySelector('.list-add').getAttribute('data-project-index');
    let name = document.querySelector('#todo-name');
    let date = document.querySelector('#todo-date');
    let note = document.querySelector('#todo-note');
    let rush = document.querySelector('input[name="priority"]:checked');
    if(name.value == ''){
        alert('Name cannot be empty!');
        return;
    }
    addTodo(index, name.value, date.value, note.value, rush.value);
    document.querySelector('.modal-add-todo').close();
    document.querySelector('.modal-add-todo>form').reset();
});

document.querySelector('#close-project-edit-modal').addEventListener('click', () => {
    document.querySelector('#modal-edit-project').close();
});
document.querySelector('.modal-btn-edit-project').addEventListener('click', () => {
    let index = document.querySelector('.content').getAttribute('data-project-index')
    projectContainer.editProject(
        index,
        document.querySelector('#edit-project-name').value,
        document.querySelector('#edit-project-desc').value
    );
    emptyContent();
    populateContent(index);
    emptyProject();
    displayProject();
    document.querySelector('#modal-edit-project').close();
});

let modalConfirm = document.querySelector('#confirm-delete');
document.querySelector('#yes').addEventListener('click', () => {
    let projectIndex = modalConfirm.getAttribute('data-project-index');
    projectContainer.removeProject(projectIndex);
    emptyContent();
    emptyProject();
    displayProject();
    if(projectIndex == 0){
        console.log('asd')
        if(projectContainer.array[0]){
            populateContent(0);
        }
    }else{
        if(projectContainer.array[projectIndex-1]){
            populateContent(projectIndex-1);
        }
    }
    modalConfirm.close();
    
});
document.querySelector('#no').addEventListener('click', () => {
    modalConfirm.close();
});

function storeToLocal(){
    localStorage.setItem('info', JSON.stringify(projectContainer.array));
}
function getFromLocal(){
    let array = JSON.parse(localStorage.getItem('info'));
    if(array){
        array.forEach((project, projectIndex) => {
            projectContainer.addProjectToContainer(project.projectName, project.description);
            project.todoList.forEach((item, index) => {
                projectContainer.addTodoToProject(projectIndex, item.todoName, item.dateTime, item.note, item.priority);
            });
        });
    }
}