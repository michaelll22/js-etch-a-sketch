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
    });
    row.addEventListener("mouseup", () => {
        mouseActive = false; 
    });
}

function leave(screen) {
    screen.addEventListener("mouseleave", () => {
        mouseActive = false;
    });
}

function color(row) {
    row.style.backgroundColor = "black";
}

function getValue() {
    let index = inputSize.value;
    return index;
}

function draw(rows) {
    rows.forEach(row => {
        row.ondragstart = (event) => event.preventDefault();
        click(row);
        active(row);
    });
}

function clear(reset, rows) {
    reset.addEventListener("click", () => {
        mouseActive = false;
        rows.forEach(row => {
            if (row.style.backgroundColor) {
                row.style.backgroundColor = "";
            }
        });
    });
}

function initialize() {
    let rows = document.querySelectorAll(".row");
    let reset = document.querySelector(".btn");

    mouseActive = false;
    draw(rows);
    clear(reset, rows);
    leave(screen);
}

function changeSize() {
    inputSize.addEventListener("change", () => {
        screen.innerHTML = "";
        currentSize.textContent = `${getValue()} x ${getValue()}`
        makeGrids(getValue());
        initialize();
    });
}

// generate rows

const inputSize = document.querySelector("#mySlider");
const currentSize = document.querySelector(".gridSize");


currentSize.textContent = `${getValue()} x ${getValue()}`

const screen = document.querySelector(".sketch-screen");

changeSize();
makeGrids(getValue());
initialize();
