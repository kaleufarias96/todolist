// seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// funções
const saveTodo = (todo) => {

    const todo = document.createElement("div");
    todo.classList.add("todo");
    


}

// eventos
todoForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const inputValue = todoInput.value;

    if(inputValue){
        saveTodo(inputValue);
    }
})