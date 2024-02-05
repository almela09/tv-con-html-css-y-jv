

const buttons = document.getElementsByClassName("btn");

let arrayButtons = Array.from("btn");

let screen = document.getElementById("screen");

arrayButtons.forEach(item => {
    item.addEventListener("click", (evento)=>{
        const currentClass = screen.classList[screen.classList.length -1];
        if (currentClass.startsWith("canal")){
            screen.classList.remove(currentClass);
        }
        screen.classList.add("canal"+ evento.target.id.slice(-1));
    });
});

