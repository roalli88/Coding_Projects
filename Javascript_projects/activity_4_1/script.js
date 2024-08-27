let taskList = []; // Array to store the tasks entered by the user. 


function newTask(){
    let input = document.getElementById('task-input');
    let task = input.value;
    if (task) {
        taskList.push(task);
        input.value = '';
        updateList();
    }
    else{
        alert("Please supply a task");
    }
}

function updateList() {      
    let toDoList = document.getElementById('task-display');
    //clear the current items in the TODO list
    toDoList.innerHTML = '';
    taskList.forEach((task, index) =>{
        let listItem = document.createElement('li');
        listItem.style.listStyleType = 'none';
        //create delete button
        let deleteButton = document.createElement('button');
        let span = document.createElement('span');
        span.innerHTML = '&#10007';
        span.className = 'cross';
        span.style.color = 'red';
        deleteButton.appendChild(span);
        //Delete the current item when the delete button is clicked
        deleteButton.onclick = () => removeTask(index);
        //Add the next item that are not deleted to the TODO list
        listItem.style.color = 'darkblue';
        listItem.append(task, ' ', deleteButton);
        //display the TODO list to the user
        toDoList.appendChild(listItem);
    });

}

function removeTask(index) {
    //remove an item from the list of tasks
    taskList.splice(index,1);
    //update the user.
    updateList();
}
