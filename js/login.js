const loginSection = document.querySelector("#login");
const loginForm = document.querySelector("#login form");
const main = document.querySelector("#main");
const loginInput = document.querySelector("#login input");
const greeting = document.querySelector(".greeting");
const logoutBtn = document.querySelector("#logout-btn");

const ACCOUNT_KEY = "account";
const HIDDEN_CLASS = "hidden";
let timeCheck = new Date().getHours();
setInterval(setTime,(1000*60*5));

function setTime(){
    timeCheck = new Date().getHours();
}

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
    if(timeCheck > 5 && timeCheck <= 12){
        greeting.innerHTML = `Good morning, ${loginAccount}`;
    } else if(timeCheck > 12 && timeCheck<=17){
        greeting.innerHTML = `Good afternoon, ${loginAccount}`;
    }   else   {
        greeting.innerHTML = `Good evening, ${loginAccount}`;
    }
    
}

function beforeLogin(){
    main.classList.add(HIDDEN_CLASS);
    loginSection.classList.remove(HIDDEN_CLASS);
}

function afterLogin(){
    loginSection.classList.add(HIDDEN_CLASS);
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



