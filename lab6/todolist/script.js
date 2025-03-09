const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let todos = [];

function addTodo() {
    const todoText = todoInput.value.trim();
    
    if (todoText.length === 0) {
        alert("Task cannot be empty!");
        return;
    }
    
    if (todoText.length > 50) {
        alert("Task must be 50 characters or less!");
        return;
    }

    const todo = {
        id: Date.now(),
        text: todoText,
        completed: false,
    };

    todos.push(todo);
    todoInput.value = "";
    renderTodos();
}

function deleteTodo(id) {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
        todos = todos.filter(todo => todo.id !== id);
        renderTodos();
    }
}

function toggleCompleted(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
    renderTodos();
}

function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach(todo => {
        const todoItem = document.createElement("li");
        if (todo.completed) {
            todoItem.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", () => toggleCompleted(todo.id));

        const todoText = document.createElement("span");
        todoText.textContent = todo.text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", () => deleteTodo(todo.id));

        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
    });
}

form.addEventListener("submit", event => {
    event.preventDefault();
    addTodo();
});

renderTodos();
