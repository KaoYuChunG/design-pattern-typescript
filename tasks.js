import { TaskStatus } from "./types/TaskStatus.js";
let tasks = [];
document.querySelector(".addTask").addEventListener('click', () => {
    const taskNameInput = document.querySelector(".taskName");
    const taskName = taskNameInput.value;
    if (taskName) {
        const taskItem = {
            name: taskName,
            status: TaskStatus.Todo
        };
        createTask(taskItem);
    }
});
function createTask(task) {
    tasks.push(task);
    updateTask();
}
function updateTask() {
    let taskListHTML = '';
    tasks.forEach((task) => {
        taskListHTML += `<li>${task.name} - ${task.status} </li>`;
    });
    document.querySelector(".taskList").innerHTML = taskListHTML;
}
