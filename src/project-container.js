export const projectContainer = (function (){
    let array = [];

    function addProjectToContainer(projectName, description){
        array.push(new Project(projectName, description));
    }

    function addTodoToProject(index, name, status, date, time, note){
        array[index].addT(name, status, date, time, note);
    }

    function removeTodoFromProject(projectIndex, itemIndex){
        array[projectIndex].removeT(itemIndex);
    }

    function viewArray(){
        console.log(array);
    }

    return {
        addProjectToContainer,
        addTodoToProject,
        removeTodoFromProject,
        viewArray
    }
})();

class Project{
    constructor(projectName, description){
        this.projectName = projectName;
        this.description = description;
        this.todoList = [];
    }

    addT(name, date, time, note){
        this.todoList.push(new todoItem(name, date, time, note));
    }

    removeT(index){
        this.todoList.splice(index, 1);
    }
}

class todoItem{
    constructor(name, date, time, note){
        this.todoName = name;
        this.status = new Boolean(0);
        this.date = date;
        this.time = time;
        this.note = note;
    }
}
