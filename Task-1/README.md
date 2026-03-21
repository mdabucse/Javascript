# To-Do List Application

A simple and elegant to-do list web application built with vanilla JavaScript. Create, edit, delete, and manage your tasks with persistent local storage.

---

## Features

- **Add Tasks**: Create tasks with name and description
- **Edit Tasks**: Update existing task details
- **Delete Tasks**: Remove unwanted tasks
- **Local Storage**: Tasks persist across browser sessions
- **Responsive Design**: Works on all screen sizes

---

## File Structure

```
todo-app/
├── index.html   # HTML structure
├── script.js    # JavaScript logic
└── styles.css   # CSS styling
```


## Usage

### Adding a Task
1. Enter task name and description
2. Click "Submit"
3. Task appears in the list below

### Editing a Task
1. Click "Edit" button on any task
2. Enter new details in the prompts
3. Task updates automatically

### Deleting a Task
1. Click "Delete" button on any task
2. Task is removed from the list

---

## How It Works

### Key Functions
- `hello(event)` - Adds new tasks
- `deleteTask(id)` - Removes tasks
- `updateTask(id)` - Edits task details
- `localSave()` - Saves to localStorage
- `render()` - Displays all tasks

### Data Structure
```javascript
{
    id: 1234567890,
    task_name: "Buy groceries",
    task_des: "Milk, eggs, bread"
}
```

---

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling
- **JavaScript (ES6)** - Logic
- **localStorage** - Data Json

