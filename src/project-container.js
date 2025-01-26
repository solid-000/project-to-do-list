export const projectContainer = (function (){
    let array = [];

    function addProjectToContainer(projectName, description){
        array.push(new Project(projectName, description));
    }

    function removeProject(index){
        array.splice(index , 1);
    }

    function addTodoToProject(index, name, date, time, note){
        array[index].addT(name, date, time, note);
    }

    function removeTodoFromProject(projectIndex, itemIndex){
        array[projectIndex].removeT(itemIndex);
    }

    function markAsDone(projectIndex, itemIndex){
        array[projectIndex].todoList[itemIndex].done();
    }

    function setToLow(projectIndex, itemIndex){
        array[projectIndex].todoList[itemIndex].setPriority(1);
    }
    function setToMedium(projectIndex, itemIndex){
        array[projectIndex].todoList[itemIndex].setPriority(2);
    }
    function setToHigh(projectIndex, itemIndex){
        array[projectIndex].todoList[itemIndex].setPriority(3);
    }

    function viewArray(){
        console.log(array);
    }

    return {
        addProjectToContainer,
        addTodoToProject,
        removeTodoFromProject,
        removeProject,
        markAsDone,
        setToLow,
        setToMedium,
        setToHigh,
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
        this.isDone = false;
        this.priority = 0;
        this.date = date;
        this.time = time;
        this.note = note;
    }

    done(){
        this.isDone = true;
    }

    setPriority(level){
        this.priority = level;
    }
}
