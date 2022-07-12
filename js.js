function registerTask(){
    let task = document.querySelector("input[name='txtbox']").value
    let newListValue = document.createElement("li")
    newListValue.innerText = task
    let removebutton = document.createElement("button")
    removebutton.type = "button"
    removebutton.innerText = "Feito"
    removebutton.setAttribute("onclick","completeTask(this)")

    newListValue.appendChild(removebutton)

    document.getElementById("tasklist").appendChild(newListValue)
}

function completeTask(button){
    liToRemove = button.parentNode
    document.getElementById("tasklist").removeChild(liToRemove)
}