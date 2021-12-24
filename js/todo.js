const todoForm = document.querySelector("#todo form");
const todoInput = document.querySelector("#todo input");

function PrintToDo(event){
    event.preventDefault();
    const span = document.createElement("span");
    span.setAttribute("class","todo-text");
    const div = document.createElement("div");
    div.setAttribute("class","todo-buttonBox");
    const delButton = document.createElement("button");
    delButton.setAttribute("class","todo-delete");
    const cplButton = document.createElement("button");
    cplButton.setAttribute("class","todo-complete");

}

todoForm.addEventListener(todoForm,PrintToDo);