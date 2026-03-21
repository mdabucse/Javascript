let tasks = JSON.parse(localStorage.getItem("task")) || []

function hello(event) {
    event.preventDefault();
    
    let name = document.getElementById("name");
    let description = document.getElementById("description");
    
    let taskName = name.value.trim();
    let taskDesc = description.value.trim();
    
    if (!taskName || !taskDesc) {
        alert("Please fill in both fields");
        return;
    }
    
    tasks.push({
        id: Date.now(), // Unique ID for each task
        task_name: taskName,
        task_des: taskDesc
    });
    
    localSave();
    render();
    
    name.value = "";
    description.value = "";
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    localSave();
    render();
}

function updateTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    
    const newName = prompt("Enter new task name:", task.task_name);
    if (newName === null) return; // User cancelled
    
    const newDesc = prompt("Enter new description:", task.task_des);
    if (newDesc === null) return; // User cancelled
    
    task.task_name = newName.trim();
    task.task_des = newDesc.trim();
    
    localSave();
    render();
}

function localSave() {
    localStorage.setItem("task", JSON.stringify(tasks));
}

function render() {
    let container = document.getElementById("values");
    container.innerHTML = ""; // Clear existing content
    
    tasks.forEach(t => {
        let task = document.createElement("div");
        task.className = "task-item";
        
        task.innerHTML = `
            <div class="task-content">
                <h3>${t.task_name}</h3>
                <p>${t.task_des}</p>
            </div>
            <div class="task-actions">
                <button onclick="updateTask(${t.id})" class="btn-update">Edit</button>
                <button onclick="deleteTask(${t.id})" class="btn-delete">Delete</button>
            </div>
        `;
        
        container.appendChild(task);
    });
}

render();