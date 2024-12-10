for(let i = 0; i < 256; i++){
let div = document.createElement("div");
let container = document.getElementById("container");
    div.setAttribute("class","childDiv");
    container.appendChild(div);
}

container.addEventListener("mouseover",(event)=>{
   event.target.style.backgroundColor="black";

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