let todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

class App {
  constructor(todos) {
    this.todoData = todos
    this.contextMenu = document.querySelector('.context_menu')
    this.todoContainer = document.querySelector('#todos')
    this.selectedTodoId = null;
    this.renderTodos();
    this.bindEvents();
  }

  bindEvents() {
    this.todoContainer.addEventListener('click', this.handleDeleteClick.bind(this));
    document.querySelector('#confirm-yes').addEventListener('click', this.handleConfirmYes.bind(this));
    document.querySelector('#confirm-no').addEventListener('click', this.toggleModal.bind(this));
    this.todoContainer.addEventListener('contextmenu', this.handleRightClick.bind(this));
    document.querySelector('.context_menu').addEventListener('click', this.handleContextDelete.bind(this));
  }

  // Add an event listener to the todo container that captures the "context menu event"
  // If the target is a "todo" div, display the context menu

  handleContextDelete(event) {
    if (event.target.classList.contains('remove')) {
      this.removeTodo(this.selectedTodoId);
      this.selectedTodoId = null;
      this.toggleContextMenu();
      this.renderTodos();
    }
  }

  handleRightClick(event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.tagName !== 'LI') return;
    let dataId = Number(event.target.getAttribute('data-id'));
    this.toggleContextMenu(dataId);
  }

  toggleContextMenu(dataId) {
    let display = this.contextMenu.style.display;
    if (display === 'none') {
      this.selectedTodoId = dataId;
      this.contextMenu.style.display = 'inline';
    } else {
      this.contextMenu.style.display = 'none';
    }
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