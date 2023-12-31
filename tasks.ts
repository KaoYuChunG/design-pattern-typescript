import { Task } from "./types/Task.js";
import { TaskStatus } from "./types/TaskStatus.js";


let tasks: Task[] = [];

document.querySelector(".addTask")!.addEventListener('click', () => {
    const taskNameInput = <HTMLInputElement>document.querySelector(".taskName");
    const taskName = taskNameInput.value;
    if (taskName) {
        const taskItem: Task = {
            name: taskName,
            status: TaskStatus.Todo
        }
        createTask(taskItem);
    }
})

function createTask(task: Task) {
    tasks.push(task);
    updateTask();
}

function updateTask() {
    let taskListHTML = '';
    tasks.forEach((task) => {
        taskListHTML += `<li>${task.name} - ${task.status} </li>`
    })
    document.querySelector(".taskList")!.innerHTML = taskListHTML;
}

