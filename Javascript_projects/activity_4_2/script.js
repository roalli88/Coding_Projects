//Fires so a user can add items to the taskList
document.getElementById('add-btn').addEventListener(
            "click", () => addTasks())

// Changes the styling of the theme button when the moves over it.
document.getElementById('button-div').addEventListener(
"mouseenter", (e) => {
        let target = document.getElementById('checkbox-btn');
        target.style.cursor = "grab";        
        target.style.backgroundColor = 'lightgray';
        target.style.borderRadius = '5px';

    }
)
document.getElementById('button-div').addEventListener(
    "mouseleave", (e) => {
        let target = document.getElementById('checkbox-btn');
        target.style.backgroundColor = 'white';
        let texts = document.getElementsByClassName('text');
        for (let index = 0; index < texts.length; index++) {
            texts[index].style.color = "black";
            
        }
    }
)
document.getElementById('checkbox-btn').addEventListener(
    "click", () => {
        lightOrDarkTheme()

    }
)

document.addEventListener(
    "keypress" ,(event) =>{
        if (event.key === "Enter") {
            event.preventDefault();
            addTasks();
        }
    }
)

let taskList = [];



// Adds each task into the taskList and updates the input field
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
            let mySpan = document.createElement('span');
            

            //Insert the task into the list item
            mySpan.textContent = val;
            li.appendChild(mySpan);
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

function lightOrDarkTheme() {
    //change the theme from default dark to white
    document.body.classList.toggle('darkmode');
    let theme = document.getElementById('button-span');
    // Update the content of the button accordingly
    if (theme.innerText === "Dark mode") {
        theme.innerText = "Light mode";
    } 
    else if(theme.innerText === 'Light mode') {
        theme.innerText = 'Dark mode'
    }
        
}
