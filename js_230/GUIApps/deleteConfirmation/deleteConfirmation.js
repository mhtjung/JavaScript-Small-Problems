todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

class App {
  constructor(todos) {
    this.todoData = todos
    this.renderTodos();
    this.todoContainer = document.querySelector('#todos')

    this.bindEvents();
  }

  bindEvents() {
    this.todoContainer.addEventListener('click', this.handleDeleteClick.bind(this));
    document.querySelector('#confirm-yes').addEventListener('click', this.handleConfirmYes.bind(this));
    document.querySelector('#confirm-no').addEventListener('click', this.toggleModal.bind(this));
  }

  renderTodos() {
    let div = document.querySelector("#todos")
    let ul = document.createElement('ul');
    this.todoData.forEach(todoObj => {
      let li = document.createElement('li');
      li.innerText = todoObj.title;
      li.setAttribute('data-id', todoObj.id);
      let deleteButton = document.createElement("span");
      deleteButton.classList.add('remove')
      li.appendChild(deleteButton);
      ul.appendChild(li);
    })
    div.innerHTML = ul.innerHTML;
  }

  toggleModal(dataId) {
    let modal = document.querySelector('#modal');
    modal.style.visibility = modal.style.visibility == 'visible' ? 'hidden' : 'visible';
    if (dataId) modal.setAttribute('data-id', dataId)
  }

  removeTodo(dataId) {
    this.todoData = this.todoData.filter(todoObj => todoObj.id !== Number(dataId));
  }

  handleConfirmYes(event) {
    let dataId = event.target.parentNode.getAttribute('data-id');
    this.removeTodo(dataId);
    this.toggleModal();
    this.renderTodos();
  }

  handleDeleteClick(event) {
    if (event.target.tagName !== 'SPAN') return;
    let dataId = event.target.parentNode.getAttribute('data-id');
    this.toggleModal(dataId);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const Application = new App(todo_items);
})