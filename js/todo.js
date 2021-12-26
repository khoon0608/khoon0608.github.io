const todoForm = document.querySelector("#todo form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector("ul");

const TODOS_KEY="todos"
let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}


function completeToDo(event){
    const li = event.target.parentElement.parentElement;
    const span = li.querySelector("span")
    const cplButton = li.querySelector(".todo-complete")
    for (const i in toDos){
        if(toDos[i].id === parseInt(li.id)){
            if(toDos[i].check === true){
                span.classList.remove("complete");
                cplButton.innerText="⬜";
                toDos[i].check = false;
            }   else    {
                span.classList.add("complete");
                cplButton.innerText="✅";
                toDos[i].check = true;
            }
            
        }
    }
    saveToDos();
}

function generateToDO(event){
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";
    const newToDoObj={
        text:newToDo,
        id:Date.now(),
        check:false,
    }
    toDos.push(newToDoObj);
    PrintToDo(newToDoObj);
    saveToDos();
}

function PrintToDo(newToDoObj){
    const li = document.createElement("li")
    li.setAttribute("class", "todo-box");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.setAttribute("class","todo-text");
    const div = document.createElement("div");
    div.setAttribute("class","todo-buttonBox");
    const delButton = document.createElement("button");
    delButton.setAttribute("class","todo-delete");
    delButton.innerText="❌";
    delButton.addEventListener("click", deleteToDo);
    const cplButton = document.createElement("button");
    cplButton.setAttribute("class","todo-complete");
    cplButton.addEventListener("click",completeToDo);
    cplButton.innerText="⬜";
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(div);
    div.appendChild(cplButton);
    div.appendChild(delButton);

    span.innerText = `${newToDoObj.text}`;
    if(newToDoObj.check === true){
        span.classList.add("complete");
        cplButton.innerText="✅";
    }
}


todoForm.addEventListener("submit", generateToDO);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(PrintToDo);
}
