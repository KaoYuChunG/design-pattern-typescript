"use strict";
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["Todo"] = 0] = "Todo";
    TaskStatus[TaskStatus["InProgress"] = 1] = "InProgress";
    TaskStatus[TaskStatus["Done"] = 2] = "Done";
})(TaskStatus || (TaskStatus = {}));
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
