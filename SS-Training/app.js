const input = document.getElementById('taskInput');
const button = document.getElementById('addTaskButton');
const list = document.getElementById('taskList');

button.onclick = function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            list.removeChild(li);
        };
        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = '';
    }
};