const container = document.getElementById("container");
const resetButton = document.querySelector(".resetButton");

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
    
    const blocks = Array.from(document.querySelectorAll(".grid-item"));
    blocks.forEach((block) => {
        block.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = returnColor();
        });
    });
}

// This method created a custom grid based on the slider input
const slider = document.getElementById("slider");
// Base size of the grid
let currentValue = 16;
slider.oninput = function () {

    currentValue = slider.value;
    // Deletes all children of the parent node
    container.replaceChildren();
    createGrid(currentValue, currentValue);
}


// Returns the current chosen color from color picker
function returnColor () {

    const colorPicker = document.querySelector(".colorPicker");
    // This method below returns an array thus I should index the first and only element
    let currentColor = document.getElementsByClassName("colorPicker")[0].value;
    colorPicker.addEventListener("input", () => {
        currentColor = document.getElementsByClassName("colorPicker")[0].value;
        return currentColor;
    });
    return currentColor;
}

function resetGrid () {
    const blocks = Array.from(document.querySelectorAll(".grid-item"));
    blocks.forEach((block) => {
        block.style.backgroundColor = "white";
    });
}

resetButton.addEventListener("click", resetGrid);

createGrid(currentValue, currentValue);
