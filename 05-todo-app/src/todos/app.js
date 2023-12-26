
import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw'; // raw es algo para que funcione en vite
import { renderTodos, renderPending } from './use-cases';
/**
 * 
 * @param {String} elementId 
 */

const elementIDs = {
    TodoList: '.todo-list',
    newTodoInput: '#new-todo-input',
    clearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count',
}
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(elementIDs.TodoList, todos);
        updatePendingCount();
    }
    const updatePendingCount = () =>{
        renderPending(elementIDs.PendingCountLabel);

    }

    (() => { // funciona anonima autoinvocada
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();

    })();

    //Referencias html
    const { newTodoInput, TodoList, clearCompleted, TodoFilters } = elementIDs;
    const newDescriptionInput = document.querySelector(newTodoInput);
    const todoListUL = document.querySelector(TodoList);
    const clearCompletedButton = document.querySelector(clearCompleted);
    const filtersLIs = document.querySelectorAll(TodoFilters);


    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]'); //busca el padre mas cercano que tenga data-id
        todoStore.toogleTodo(element.getAttribute('data-id'));
        displayTodos(); //Renderiza de nuevo
    });

    clearCompletedButton.addEventListener('click', (event) => {
        todoStore.deleteCompleted(event.target.value);
        displayTodos();
        event.target.value = '';
    });

    filtersLIs.forEach(element => {
        element.addEventListener('click', (element) => {
            filtersLIs.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');

            switch (element.target.text) {
                case 'Todos':
                    todoStore.setFilter(Filters.All)
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending)
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed)
                    break;


            }
            displayTodos();

        });

    });

}
