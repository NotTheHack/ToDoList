function registerTask(){
    let task = document.querySelector("input[name='txtbox']").value
    let newListValue = document.createElement("li")
    newListValue.innerText = task
    let removebutton = document.createElement("button")
    let completebutton = document.createElement("button")
    completebutton.type = "button"
    completebutton.innerText = "Feito"
    completebutton.setAttribute("onclick","completeTask(this)")
    removebutton.type = "button"
    removebutton.innerText = "X"
    removebutton.setAttribute("onclick","removeTask(this)")

    newListValue.appendChild(removebutton)
    newListValue.appendChild(completebutton)

    document.getElementById("tasklist").appendChild(newListValue)
}

function removeTask(button){
    liToRemove = button.parentNode
    document.getElementById("tasklist").removeChild(liToRemove)

}

function completeTask(button){
    liToRemove = button.parentNode
    document.getElementById("tasklist").appendChild(liToRemove).style.textDecoration = 'line-through';

}