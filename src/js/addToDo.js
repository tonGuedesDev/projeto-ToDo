const inputElement = document.querySelector('.input__main');
const btnElement = document.querySelector('.button__main');
const sectionElement = document.querySelector('.section');
const main = document.querySelector('.main');

function createDiv(checkbox, paragraph, clearButton) {
    const div = document.createElement('div');
    div.setAttribute('id', 'jsElements');
    div.appendChild(checkbox);
    div.appendChild(paragraph);
    div.appendChild(clearButton)

    return div;
}

function createParagraph(input) {
    const paragraph = document.createElement('p');
    paragraph.innerText = input;

    return paragraph;
}

function createClearButton() {
    const clearButton = document.createElement('button');
    clearButton.innerText = 'Clear';

    return clearButton;
}

function createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'checkbox__jsElements');

    return checkbox;
}

function clearInput() {
    inputElement.value = '';
    inputElement.focus();
}

function createTask(inputText) {
    const checkbox = createCheckbox();
    const paragraph = createParagraph(inputText);
    const clearButton = createClearButton();
    const div = createDiv(checkbox, paragraph, clearButton);
    sectionElement.appendChild(div);



    clearButton.addEventListener('click', () => {
        sectionElement.removeChild(div);
        saveTasks()
    })
}

btnElement.addEventListener('click', () => {
    if (!inputElement.value) return;
    createTask(inputElement.value);
    saveTasks()
    clearInput();
});


function saveTasks() {
    const tasks = document.querySelectorAll('#jsElements p');
    const arrayTasks = [];

    for (let task of tasks) {
        const inputTasks = task.innerText;
        arrayTasks.push(inputTasks);
    }

    localStorage.setItem('tasks', JSON.stringify(arrayTasks));

}

function getLocalStorageTasks() {
    const tasks = localStorage.getItem('tasks');
    const parse = JSON.parse(tasks);

    for (task of parse) {
        createTask(task)
    }
}

getLocalStorageTasks()
