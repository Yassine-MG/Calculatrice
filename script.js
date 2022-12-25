let screen = document.querySelector(".screen");
let btnclcl = Array.from(document.querySelectorAll(".btnclcl"));
let emote = document.querySelector("i");
let body = document.querySelector("body");
let btnPink = document.querySelectorAll(".pink");
emote.addEventListener('click',() =>{
    myFunction()
})
function myFunction() {
    var element = document.body;
    element.classList.toggle("black");
    emote.classList.toggle("fa-sun");
}

btnclcl.map(button =>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'Clear': 
                screen.innerText = ''
                break;
            case '=':
                if(screen.innerText == ""){
                    screen.innerText = "Error !!";
                }else{
                try{
                    screen.innerText = eval(screen.innerText);
                }catch{
                    screen.innerText = "Error !!";
                }
                }
                break
            default:
                if(screen.innerText == "" && (e.target.innerText =="/" || e.target.innerText =="+"|| e.target.innerText =="-"|| e.target.innerText =="*"|| e.target.innerText ==".")){
                    screen.innerText = ""
                }else{
                    screen.innerText += e.target.innerText;
                    // let nombre = screen.textContent.length-1;
                    // let lastNumber = screen.textContent.charAt(nombre);
            } 
        }
    })
})

// screen.textContent.charAt(screen.textContent.length)