const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');

let draggedTask = null;

tasks.forEach(task => {
    task.addEventListener('dragstart', () => {
        draggedTask = task;
        task.classList.add('dragging');
    });

    task.addEventListener('dragend', () => {
        draggedTask = null;
        task.classList.remove('dragging');
    });
});

columns.forEach(column => {
    column.addEventListener('dragover', (e) => {
        e.preventDefault();
        column.classList.add('drag-over');
    });

    column.addEventListener('dragleave', () => {
        column.classList.remove('drag-over');
    });

    column.addEventListener('drop', () => {
        if (draggedTask) {
            column.appendChild(draggedTask);
        }
        column.classList.remove('drag-over');
    });
});
