import { addTask, toggleTask, removeTask, getTasks } from './tasks.js';

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
        renderTasks();
    }
});

function renderTasks() {
    taskList.innerHTML = '';
    getTasks().forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.style.textDecoration = task.completed ? 'line-through' : 'none';

        li.addEventListener('click', () => {
            toggleTask(index);
            renderTasks();
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            removeTask(index);
            renderTasks();
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

renderTasks();
