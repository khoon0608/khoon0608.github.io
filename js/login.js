const loginSection = document.querySelector("#login")
const loginForm = document.querySelector(".login-form");
const main = document.querySelector("#main");
const loginInput = document.querySelector(".todo-input");
const greeting = document.querySelector(".greeting");


const ACCOUNT_KEY = "account";
const HIDDEN_CLASS = "hidden";

function login(event){
    event.preventDefault();
    const account = loginInput.value;
    localStorage.setItem(ACCOUNT_KEY,account);
    const loginAccount = localStorage.getItem(ACCOUNT_KEY);
    greeting.innerText= `HELLO! ${loginAccount}`;
    loginSection.classList.add(HIDDEN_CLASS);
    main.classList.remove(HIDDEN_CLASS);
}



const loginAccount = localStorage.getItem(ACCOUNT_KEY);

if(loginAccount !== null){
    loginSection.classList.add(HIDDEN_CLASS);
    main.classList.remove(HIDDEN_CLASS);
    greeting.innerText= `HELLO! ${loginAccount}`;
}   else{
    loginSection.classList.remove(HIDDEN_CLASS);
    main.classList.add(HIDDEN_CLASS);
}

loginForm.addEventListener("submit", login);


