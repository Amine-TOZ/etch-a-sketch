for(let i = 0; i < 256; i++){
let div = document.createElement("div");
let container = document.getElementById("container");
    div.setAttribute("class","childDiv");
    container.appendChild(div);
}

container.addEventListener("mouseover",(event)=>{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    event.target.style.backgroundColor="rgb("+ r + "," + g + "," + b + ")";
    
    const style = window.getComputedStyle(event.target);
    const opacity = style.opacity;
    if(+opacity < 1){
    event.target.style.opacity = `${+opacity+0.1}`
    }      
})

let button = document.getElementsByTagName("button")

button[0].addEventListener("click",()=>{
    let promptInput = prompt("🤔");
    const promptInputNum = +promptInput
    if(promptInputNum <= 100 && promptInputNum !== NaN && promptInputNum > 0){
      let childDiv = container.querySelectorAll(".childDiv");
          childDiv.forEach(element => {
              element.remove();
          });
    for(let i = 0; i < (promptInputNum*promptInputNum); i++){
          div = document.createElement("div");
          container = document.getElementById("container");
          div.setAttribute("class","childDiv");
          container.appendChild(div);
       }
       container.style.width = `${promptInputNum*8}px`
       container.style.height = `${promptInputNum*8}px`
    }else {alert("You need to enter a number < 100")}   
})