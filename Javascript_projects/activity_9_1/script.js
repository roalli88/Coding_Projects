document.getElementById('add-btn').addEventListener(
            "click", () => addTasks()
        )



let taskList = [];




function addTasks() {
    let task = document.getElementById('input-field');
    if (task.value) {     
        taskList.push(task.value);
        task.value = '';
        displayTasks();
    } else {
        alert("Please enter an item!");
    }

}

function displayTasks() {
    //Item to display all current tasks to the user
    let display = document.getElementById('display');
    //Clear the current task list.
    display.innerHTML = '';
    taskList.forEach((val, index) =>{
        if (val) {
            //Create the list item to hold the current task
            let li = document.createElement('li');
            //Insert the task into the list item
            li.textContent = val;
            li.style.display = "flex";
            li.style.width = "100%";
            li.style.justifyContent = "space-between";
            li.style.marginRight = "10px";
            li.style.marginBottom = "20px";
            li.style.listStyle = 'none';
            display.appendChild(li);
            let removeBtn = document.createElement('button');
            removeBtn.onclick = () => removeItem(index);
            removeBtn.textContent = 'Remove';
            li.appendChild(removeBtn);
            display.appendChild(li);
            document.getElementById('input-field').value = '';
        }
    }) 
}

function removeItem(index) {
    //delete the index of the current task
    taskList.splice(index,1);
    //render the list to the user.
    displayTasks();
}
