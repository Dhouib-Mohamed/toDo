let name = document.querySelector("#name")
let n = document.querySelector("#new")
let content = document.querySelector("#content")
const b = document.querySelector("button")
b.addEventListener("click",(e)=>{
    if(name.value!=""&&content.value!="") {
        n.innerHTML+=`<div class = "node">${name.value} : ${content.value}  <img src="bin.jpg" alt="bin"></div>`
        name.value="";content.value=""
    }
    else{
        alert("Please insert something")
    }
})
n.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG") {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode)
    }
})

