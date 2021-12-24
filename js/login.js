const loginForm = document.querySelector("#login form");
const main = document.querySelector("#main");
const loginInput = document.querySelector("#login input");
const greeting = document.querySelector(".greeting");
const logoutBtn = document.querySelector("#logout-btn");

const ACCOUNT_KEY = "account";
const HIDDEN_CLASS = "hidden";


function login(event){
    event.preventDefault();
    savedlocal();
    showGreeting();
    afterLogin();
}

function savedlocal(){
    const account = loginInput.value;
    localStorage.setItem(ACCOUNT_KEY,account);
}

function showGreeting(){
    const loginAccount = localStorage.getItem(ACCOUNT_KEY);
    greeting.innerHTML = `Hello! <strong>${loginAccount}</strong> </br> Have a nice day!`;
}

function beforeLogin(){
    main.classList.add(HIDDEN_CLASS);
    loginForm.classList.remove(HIDDEN_CLASS);
}

function afterLogin(){
    loginForm.classList.add(HIDDEN_CLASS);
    main.classList.remove(HIDDEN_CLASS);
}

const loginAccount = localStorage.getItem(ACCOUNT_KEY);

if(loginAccount === null){
    beforeLogin();
    loginForm.addEventListener("submit", login);
}   else{
    afterLogin();
    showGreeting();
}



