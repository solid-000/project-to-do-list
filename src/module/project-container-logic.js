export const projectContainer = (function (){
    let array = [];

    function addProjectToContainer(projectName, description){
        array.push(new Project(projectName, description));
    }

    function removeProject(index){
        array.splice(index , 1);
    }

    function addTodoToProject(index, name, dateTime, note, priority){
        array[index].addT(name, dateTime, note ,priority);
    }

    function removeTodoFromProject(projectIndex, itemIndex){
        array[projectIndex].removeT(itemIndex);
    }

    function markAsDone(projectIndex, itemIndex){
        array[projectIndex].todoList[itemIndex].done();
    }
    function editProject(index, name, desc){
        array[index].projectName = name;
        array[index].description = desc;
    }




    return {
        addProjectToContainer,
        addTodoToProject,
        removeTodoFromProject,
        removeProject,
        markAsDone,
        editProject,
        array
    }
})();

class Project{
    constructor(projectName, description){
        this.projectName = projectName;
        this.description = description;
        this.todoList = [];
    }

    addT(name, dateTime, note, priority){
        this.todoList.push(new todoItem(name, dateTime, note, priority));
    }

    removeT(index){
        this.todoList.splice(index, 1);
    }
}

class todoItem{
    constructor(name, dateTime, note , priority){
        this.todoName = name;
        this.isDone = false;
        this.priority = priority;
        this.dateTime = dateTime;
        this.note = note;
    }

    done(){
        this.isDone = true;
    }
}
