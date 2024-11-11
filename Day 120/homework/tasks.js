let tasks = [];

export function addTask(text) {
    const task = { text, completed: false };
    tasks.push(task);
    saveTasks();
}

export function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
}

export function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
}

export function getTasks() {
    return tasks;
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

loadTasks();
