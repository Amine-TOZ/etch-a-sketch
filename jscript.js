for(let i = 0; i < 256; i++){
let div = document.createElement("div");
let container = document.getElementById("container");
    div.setAttribute("class","childDiv");
    container.appendChild(div);
}

container.addEventListener("mouseover",(event)=>{
   event.target.style.backgroundColor="green";

})

let button = document.getElementsByTagName("button")

button[0].addEventListener("click",()=>{
   let prompt = prompt("🤔");
   
})