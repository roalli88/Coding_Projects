/* This part had to be put here because the button doesn't fire when this part
is in the index.html file. 
*/
document.addEventListener(
    "DOMContentLoaded", () => {
        document.getElementById('my-button').addEventListener(
            "click", () => {
                addImage()
            }
        )
    }
)


/* 
    This function allows images to dynamically added and removed.
*/
function addImage() {
    // Image url
    let url = document.getElementById('image-input').value;
    if (url) {
        console.log(url);
        // The fetched image diplays here
        let display =  document.getElementById('display');
        // Div to store the image
        let imgDiv = document.createElement('div');
        // Add a class to the div element
        imgDiv.classList.add('image-item');
        // The image element fetched via the url
        let imgElement = document.createElement('img');
        // Update image attributes
        imgElement.src = url;
        imgElement.style.height ='500px';
        imgElement.style.width = '500px';
        // Create the remove button 
        let removeBtn = document.createElement('button');
        // Update attributes of the remove button
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-button');
        //Event listener for the remove button
        removeBtn.onclick = () => display.removeChild(imgDiv)
        // Add the new image to the display 
        imgDiv.appendChild(imgElement);
        imgDiv.appendChild(removeBtn);
        display.appendChild(imgDiv);
        // Get the input element and clear its value.
        let addImgBtn = document.getElementById('image-input');
        addImgBtn.value = '';
    }


}