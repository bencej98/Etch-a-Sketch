const container = document.getElementById("container");

// This function creates a grid
function createGrid (rows, columns) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", columns);
    for (let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

// This method created a custom grid based on the slider input
const slider = document.getElementById("slider");
slider.oninput = function () {
    const currentValue = slider.value;
    // Deletes all children of the parent node
    container.replaceChildren();
    createGrid(currentValue, currentValue);
    console.log(currentValue);
}


 /*
 document.getElementById("form").onsubmit = function () {
    const quantity = document.getElementById("quantity").value;
    console.log(document.getElementById("quantity").value);
    createGrid(quantity, quantity);

 }
 */