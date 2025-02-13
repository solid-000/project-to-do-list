import { projectContainer } from "./project-container-logic";

const content = document.querySelector('.content');

function populateContent(projectIndex){
    const projectControls = document.createElement('div');
    projectControls.classList.add('project-controls');
   
    const editProject = document.createElement('button');
    editProject.classList.add('edit-project');
    editProject.setAttribute('data-project-index', `${projectIndex}`);
    const deleteProject = document.createElement('button');
    deleteProject.classList.add('delete-project');
    deleteProject.setAttribute('data-project-index', `${projectIndex}`);

    projectControls.append(editProject, deleteProject);



    const projectInfo = document.createElement('div');
    projectInfo.classList.add('project-info');

    const projectNameDom = document.createElement('header');
    projectNameDom.textContent = `${projectContainer.array[projectIndex].projectName}`;
    const projectDescDom = document.createElement('div');
    projectDescDom.textContent = `${projectContainer.array[projectIndex].description}`;

    projectInfo.append(projectNameDom, projectDescDom);


    const todoList = document.createElement('div');
    todoList.classList.add('list-container');

    projectContainer.array[projectIndex].todoList.forEach((element, index) => {
        const card = document.createElement('div');
        card.classList.add('todo-card');
        card.setAttribute('data-todo-index', `${index}`);

        const topRow = document.createElement('div');
        topRow.classList.add('top-row');
        const listDone = document.createElement('button');
        const listTitle = document.createElement('span');
        listDone.classList.add('list-done');
        listTitle.classList.add('list-title');
        listTitle.textContent = element.todoName;
        listDone.setAttribute('data-todo-index', `${index}`);
        switch(element.priority){
            case '1':
                listDone.classList.add('low');
                break;
            case '2':
                listDone.classList.add('medium');
                break;
            case '3':
                listDone.classList.add('high');
                break;
        }

        topRow.append(listDone, listTitle);


        const bottomRow = document.createElement('div');
        bottomRow.classList.add('bottom-row');
        const listNote = document.createElement('span');
        const listDate = document.createElement('span');
        listNote.classList.add('list-note');
        listDate.classList.add('list-date');
        listNote.textContent = element.note;
        listDate.textContent = element.dateTime;

        bottomRow.append(listNote, listDate);


        card.append(topRow, bottomRow);
        todoList.appendChild(card);

        listDone.addEventListener('click', () => {
            projectContainer.removeTodoFromProject(projectIndex, index);
            emptyContent();
            populateContent(projectIndex);
        });
    });

    const addTodo = document.createElement('div');
    addTodo.classList.add('list-add');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('add-svg');
    svg.setAttributeNS(null, 'viewBox', '0 0 24 24');
    svg.setAttributeNS(null, 'fill', '#f7b16b');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttributeNS(null, 'd', 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
    svg.appendChild(path);

    const addTaskSpan = document.createElement('span');
    addTaskSpan.textContent = 'Add task';

    addTodo.append(svg, addTaskSpan);
    addTodo.setAttribute('data-project-index', `${projectIndex}`);

    content.append(projectControls, projectInfo, todoList, addTodo);
    content.setAttribute('data-project-index', projectIndex);



    deleteProject.addEventListener('click', () => {
        document.querySelector('#confirm-delete').setAttribute('data-project-index', projectIndex);
        document.querySelector('#confirm-delete').showModal();
    });
    addTodo.addEventListener('click', () => {
        document.querySelector('.modal-add-todo').showModal();
    });

    editProject.addEventListener('click', () => {
        document.querySelector('#modal-edit-project').showModal();
        document.querySelector('#edit-project-name').value = projectContainer.array[projectIndex].projectName;
        document.querySelector('#edit-project-desc').value = projectContainer.array[projectIndex].description;
    });
}

function emptyContent(){
    while (content.firstChild){
        content.firstChild.remove();
    }
}


export {populateContent, emptyContent};