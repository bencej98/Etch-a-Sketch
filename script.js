const container = document.getElementById("container");

// This function creates a grid
function createGrid (rows, columns) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", columns);
    for (let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        // cell.innerText = (i + 1);
        container.appendChild(cell).className = "grid-item";
    }
}

createGrid(8, 8)

/*
const slider = document.getElementById("slider");
slider.oninput = function () {
    const currentValue = slider.value;
    createGrid(currentValue, currentValue);
    console.log(currentValue);
}
 ̇*/