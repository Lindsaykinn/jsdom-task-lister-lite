const tasks = [];


function main() {
  return document.getElementById('main')
}

function descriptionInput() {
  return document.getElementById('description');
}

function form() {
  return document.getElementById('form')
}

function list() {
  return document.getElementById('list')
}

function formLink(){
  return document.getElementById('form-link');
}

function tasksLink(){
  return document.getElementById('tasks-link')
}

function resetFormInputs() {
  descriptionInput().value = "";
}

function resetMain() {
  main().innerHTML = '';
}

function formTemplate() {
  return `
    <h2>Create Task</h2>
    <form id="form">
        <label for="description">Task description:</label>
        <input type="text" id="description" name="description" placeholder="description">
        <input id='submit' type="submit" value="Create New Task">
        </form>
        `
}

function taskListTemplate() {
  return `    
    <h2>My Todos</h2>
    <ul id="tasks">

    </ul>
    `
}

function renderTask(task) {
  let div = document.createElement('div');
  let h4 = document.createElement('h4');
  let tasksDiv = document.getElementById('tasks');

  h4.innerText = task.description;

  div.appendChild(h4);

  tasksDiv.appendChild(div);

}

function renderForm() {
  resetMain();
  main().innerHTML = formTemplate();
  form().addEventListener('submit', submitForm);
}

function renderTasks() {
    resetMain();
  main().innerHTML = taskListTemplate();
  
  tasks.forEach(function(task) {
    renderTask(task);
  })
}

function submitForm(e) {
  e.preventDefault();
  alert('form has been submitted')

  tasks.push({
    description: descriptionInput().value
  })

  renderTasks();
}

function formLinkEvent(){
  formLink().addEventListener('click', function(e){
    e.preventDefault();

    renderForm();
  });
}

function tasksLinkEvent(){
  tasksLink().addEventListener('click', function(e){
    e.preventDefault();

    renderTasks();
  });
}

  document.addEventListener("DOMContentLoaded", () => {
    renderForm();
    // renderTasks();
    // your code here
    // document.getElementById('submit').addEventListener('click', function(e){
    //   e.preventDefault()
    // });
    formLinkEvent();
    tasksLinkEvent();
  });

