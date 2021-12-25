const date = document.querySelector(".date");
const time = document.querySelector(".time");

function clockFunc(){
    const today = new Date();
    const hour = String(today.getHours()).padStart(2,"0");
    const min = String(today.getMinutes()).padStart(2,"0"); 
    time.innerText = `${hour}:${min}`;
}
clockFunc();
setInterval(clockFunc, 10000);

    