let taskIdCounter = 0;
let currentTaskId = null;
let previousColumn = null;

function showForm(isEdit = false, taskId = null, isConfirm = false) {
    document.getElementById("task-form").style.display = "flex";
    document.getElementById("form-title").textContent = isEdit ? "Editar/Confirmar" : "Adicionar Tarefa";
    const saveButton = document.querySelector("#task-form button:first-of-type");
    saveButton.textContent = isConfirm ? "Salvar / Confirmar" : "Salvar";
    saveButton.style.backgroundColor = isConfirm ? "green" : "";
    if (isEdit && taskId) {
        currentTaskId = taskId;
        const task = document.getElementById(taskId);
        document.getElementById("task-title").value = task.querySelector("strong").textContent;
        document.getElementById("task-description").value = task.childNodes[2].nodeValue.trim();
        document.getElementById("task-priority").value = task.childNodes[4].nodeValue.trim().split(": ")[1];
        document.getElementById("task-due-date").value = task.childNodes[6].nodeValue.trim().split(": ")[1];
        document.getElementById("task-responsible").value = task.childNodes[8].nodeValue.trim().split(": ")[1];
    } else {
        currentTaskId = null;
        document.getElementById("task-title").value = "";
        document.getElementById("task-description").value = "";
        document.getElementById("task-priority").value = "";
        document.getElementById("task-due-date").value = "";
        document.getElementById("task-responsible").value = "";
    }
}

function hideForm() {
    document.getElementById("task-form").style.display = "none";
}

function saveTask() {
    const taskTitle = document.getElementById("task-title").value;
    const taskDescription = document.getElementById("task-description").value;
    const taskPriority = document.getElementById("task-priority").value;
    const taskDueDate = document.getElementById("task-due-date").value;
    const taskResponsible = document.getElementById("task-responsible").value;

    if (currentTaskId) {
        const task = document.getElementById(currentTaskId);
        task.innerHTML = `
            <strong>${taskTitle || ''}</strong><br>
            ${taskDescription || ''}<br>
            Prioridade: ${taskPriority || ''}<br>
            Vencimento: ${taskDueDate || ''}<br>
            Responsáveis: ${taskResponsible || ''}
            <button class="delete-btn" onclick="deleteTask('${task.id}')">X</button>
            <button class="edit-btn" onclick="showForm(true, '${task.id}')">✏️</button>
        `;
        checkDueDate(task, taskDueDate);
    } else {
        const task = document.createElement("div");
        task.className = "task";
        task.setAttribute("draggable", "true");
        task.setAttribute("id", `task-${taskIdCounter++}`);
        task.innerHTML = `
            <strong>${taskTitle || ''}</strong><br>
            ${taskDescription || ''}<br>
            Prioridade: ${taskPriority || ''}<br>
            Vencimento: ${taskDueDate || ''}<br>
            Responsáveis: ${taskResponsible || ''}
            <button class="delete-btn" onclick="deleteTask('${task.id}')">X</button>
            <button class="edit-btn" onclick="showForm(true, '${task.id}')">✏️</button>
        `;
        task.addEventListener("dragstart", dragStart);
        document.getElementById("todo").querySelector(".task-list").appendChild(task);
        checkDueDate(task, taskDueDate);
    }
    hideForm();
}

function deleteTask(taskId) {
    const task = document.getElementById(taskId);
    task.parentNode.removeChild(task);
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
    previousColumn = event.target.closest(".column").querySelector(".task-list");
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text");
    const task = document.getElementById(taskId);
    const targetColumn = event.target.closest(".column").querySelector(".task-list");
    targetColumn.appendChild(task);
    showForm(true, taskId, true);
}

function checkDueDate(task, dueDate) {
    const currentDate = new Date();
    const [day, month, year] = dueDate.split('-');
    const taskDueDate = new Date(`${year}-${month}-${day}`);
    const timeDiff = taskDueDate - currentDate;
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (daysDiff <= 3 && task.closest(".column").id !== "done") {
        task.style.backgroundColor = "red";
    } else {
        if (task.closest(".column").id === "todo") {
            task.style.backgroundColor = "#d3d3d3";
        } else if (task.closest(".column").id === "in-progress") {
            task.style.backgroundColor = "#add8e6";
        } else if (task.closest(".column").id === "done") {
            task.style.backgroundColor = "#90ee90";
        }
    }
}

document.querySelectorAll(".task-list").forEach(column => {
    column.addEventListener("dragover", allowDrop);
    column.addEventListener("drop", drop);
});
