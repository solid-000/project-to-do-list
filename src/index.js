"use strict"
import { projectContainer } from "./project-container";
// import { format, compareAsc } from "date-fns";



projectContainer.addProjectToContainer('tax', 'how to evade');
projectContainer.addProjectToContainer('home', 'yeas');
projectContainer.addTodoToProject(0, 'aa', 'd' , 1 , 3, 'aadasd');
projectContainer.addTodoToProject(0, 'aaasd', 'ddsd' , 1 , 3, 'aadasd');
projectContainer.addTodoToProject(1, 'aa', 'd' , 1 , 3, 'aadasd');
projectContainer.setToHigh(0, 0)
projectContainer.setToMedium(0, 1)

projectContainer.viewArray();
