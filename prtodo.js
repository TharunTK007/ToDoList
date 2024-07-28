const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    //task input bar should be empty alert messg occur enter a task
    if(inputBox.value ===""){
        alert("Please enter a task");
    }
    else{
        // creating list inside the unordered list
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // listContainer child kella create pandrow
        // delete the value span
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = " ";
    // everytime you open the browser show store or updated like previous data
    saveData();
}

// add function to click function
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        // show the stored or updated data
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // show the stored or updated data
        saveData()
    }
}, false);
// storing data in local-storage
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
// data can be stored in browser local-storage in name (data)
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()
