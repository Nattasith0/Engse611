document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTask');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskCategory = document.getElementById('taskCategory');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        const category = taskCategory.value;

        if (taskText !== '') {
            addTask(taskText, category);
            taskInput.value = ''; 
        }
    });

    function addTask(taskText, category) {
        const li = document.createElement('li');
        
        const taskEmoji = document.createElement('span');
        taskEmoji.textContent = getCategoryEmoji(category); 
        taskEmoji.classList.add('emoji');

        const taskDescription = document.createElement('span');
        taskDescription.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            if (confirm('คุณต้องการลบรายการนี้?')) {
                taskList.removeChild(li);
            }
        });

        li.appendChild(taskEmoji); 
        li.appendChild(taskDescription);
        li.appendChild(deleteButton);

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        taskList.appendChild(li);
    }

    function getCategoryEmoji(category) {
        const emojis = {
            Work: '💼', 
            Personal: '🏠',   
            Study: '📚'     
        };
        return emojis[category] || '❓';  
    }
});
