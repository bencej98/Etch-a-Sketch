const container = document.getElementById("container");

// This function creates a grid
function createGrid (rows, columns) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", columns);
    for (let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
    paintGrid();
}


// This function repaints the current block that is clicked
function paintGrid () {
    
    const containerDiv = document.getElementById("container");

    /*
    containerDiv.addEventListener("mousedown", () => {
        blocks.forEach((block) => {
            block.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "white";
            });
    });
    */
    const currentColor = document.getElementsByClassName("colorPicker")[0].value;
    const colorPicker = document.querySelector(".colorPicker");
    console.log(currentColor);
    
    const blocks = Array.from(document.querySelectorAll(".grid-item"));

    blocks.forEach((block) => {
        block.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = returnColor();
        });
    
    
    /*
    const blocks = document.getElementById("container");
    console.log(blocks)
;    blocks.addEventListener("mousedown", (e) => {
        console.log(e.target.children);
        //e.target.children.style.backgroundColor = "white";
    */

    });
}

// This method created a custom grid based on the slider input
const slider = document.getElementById("slider");
slider.oninput = function () {
    const currentValue = slider.value;
    // Deletes all children of the parent node
    container.replaceChildren();
    createGrid(currentValue, currentValue);
    console.log(currentValue);
    //gridPainter();
}


// Returns the current chosen color from color picker
function returnColor () {

    const colorPicker = document.querySelector(".colorPicker");
    let currentColor = document.getElementsByClassName("colorPicker")[0].value;
    colorPicker.addEventListener("input", () => {
        currentColor = document.getElementsByClassName("colorPicker")[0].value;
        return currentColor;
    });
    return currentColor;
}
