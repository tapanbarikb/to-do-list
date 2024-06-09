const inputBox = document.querySelector("#input-box")
const listContainer = document.querySelector("#list-container")

function AddTask() {
    if (inputBox.value === "") {
        alert("You must write something!")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        //crose icon
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        //display span
        li.appendChild(span)

    }
    inputBox.value = ''
    saveData()
}


listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

//refres data
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}
//display the data
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()