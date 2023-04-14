import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const elementsIDs = {
  TodoList: '.todo-list',
  newTodoInput: '#new-todo-input',
};

/**
 *
 * @param {String} elementId
 */

export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(elementsIDs.TodoList, todos);
  };

  // Cuando la funcion App se llama
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  // Referencias HTML
  const newDescriptionInput = document.querySelector(elementsIDs.newTodoInput);

  // Listeners

  newDescriptionInput.addEventListener('keyup', (e) => {
    if (e.keyCode !== 13) return;
    if (e.target.value.trim().length === 0) return;

    todoStore.addTodo(e.target.value);
    displayTodos();
    e.target.value = '';
  });
};
