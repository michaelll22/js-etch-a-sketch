// make grid 16x16
function makeGrids(size) {
    let screen = document.querySelector(".sketch-screen")
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 1; j <= size; j++) {
            let row = document.createElement("row");
            row.classList.add("row");
            column.appendChild(row);
        }
        screen.appendChild(column);
    }
}

// functionality
function active(row) {
    row.addEventListener("mouseenter", ()  => {
        if (mouseActive === true) {
            color(row);
        }  
    });
}

function click(row) {
    row.addEventListener("mousedown", () => {
        mouseActive = true;
        color(row);
        console.log(mouseActive);
    });
    row.addEventListener("mouseup", () => {
        mouseActive = false; 
        console.log(mouseActive);
    });
}

function leave(screen) {
    screen.addEventListener("mouseleave", () => {
        mouseActive = false;
        console.log(mouseActive);
    });
}

function color(row) {
    row.style.backgroundColor = "black"
}

// generate rows

const inputSize = document.querySelector("#mySlider");
const currentSize = document.querySelector(".gridSize");

const gridSizes = [16, 32, 64, 128];


function getValue() {
    let index = inputSize.value - 1;
    return gridSizes[index];
}

currentSize.textContent = `${getValue()} x ${getValue()}`

function inialize() {
    const rows = document.querySelectorAll(".row");
    const reset = document.querySelector(".btn");
    mouseActive = false;

    rows.forEach(row => {
        row.ondragstart = (event) => event.preventDefault();
        click(row);
        active(row);
    });

    reset.addEventListener("click", () => {
        mouseActive = false;
        rows.forEach(row => {
            if (row.style.backgroundColor) {
                row.style.backgroundColor = "";
            }
        });
    });
    leave(screen);
}
const screen = document.querySelector(".sketch-screen");

inputSize.addEventListener("input", () => {
    screen.innerHTML = "";
    currentSize.textContent = `${getValue()} x ${getValue()}`

    makeGrids(getValue());
    inialize();
});



makeGrids(getValue());
inialize();
