"use strict"
import { projectContainer } from "./project-container";



projectContainer.addProjectToContainer('tax', 'how to evade');
projectContainer.addProjectToContainer('home', 'yeas');
projectContainer.addTodoToProject(0, 'aa', 'd' , 1 , 2, 3, 'aadasd');
projectContainer.addTodoToProject(0, 'aaasd', 'ddsd' , 1 , 2, 3, 'aadasd');
projectContainer.addTodoToProject(1, 'aa', 'd' , 1 , 2, 3, 'aadasd');
projectContainer.setToHigh(0, 0)
projectContainer.setToMedium(0, 1)

projectContainer.viewArray();