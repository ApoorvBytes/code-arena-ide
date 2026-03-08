export function enableDrag(splitter, prev, next){

let isDragging = false

splitter.addEventListener("mousedown",()=>{
isDragging = true
})

document.addEventListener("mousemove",(e)=>{

if(!isDragging) return

const offset = e.clientX

prev.style.width = offset + "px"

})

document.addEventListener("mouseup",()=>{
isDragging = false
})

}