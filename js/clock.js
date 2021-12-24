const date = document.querySelector(".date");
const time = document.querySelector(".time");

function clockFunc(){
    const today = new Date();
    const year = String(today.getFullYear()).padStart(2,"0");
    const month = String(today.getMonth()+1).padStart(2,"0");
    const day = String(today.getDate()).padStart(2,"0");
    const hour = String(today.getHours()).padStart(2,"0");
    const min = String(today.getMinutes()).padStart(2,"0"); 
    date.innerText = `${year}-${month}-${day}`;
    time.innerText = `${hour}:${min}`;
}
clockFunc();
setInterval(clockFunc, 60000);

    