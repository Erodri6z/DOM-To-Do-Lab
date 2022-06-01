
const input = document.querySelector("#task")
const btn = document.querySelector("#submit-button")
const todoList = document.querySelector("#todo-list")
let task, newItem

btn.addEventListener('click',list)

function list(){
    console.log("list running")
    if(input.value !== ''){
    let newItem = document.createElement('li')
    newItem.textContent = input.value
    todoList.appendChild(newItem)
    input.value = null
    }
}
