let input = document.getElementById('dark-mode')
let dark_items = document.getElementById('dark_items')
let heading = document.getElementById('heading')

function yo(){
if(input.checked == true){
    dark_items.style.backgroundColor = "black"
    dark_items.style.transition = "3s"
    heading.style.color = "white"
    heading.style.transition = "3s"
    heading.innerHTML = "You are now using Dark mode"
}else {
    dark_items.style.backgroundColor = "white"
    heading.style.color = "black"
    heading.innerHTML = "You are now using Light mode"
}
}
input.addEventListener("click", yo)