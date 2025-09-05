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

makeGrids(128);

// functionality
function active(row) {
    row.addEventListener("mouseenter", ()  => {
        if (mouseActive === true) {
            color(row);
        }  
    });
}

function color(row) {
    row.classList.contains("active") ? row.classList.toggle("active") : row.classList.toggle("active");
}

const rows = document.querySelectorAll(".row");
const reset = document.querySelector(".btn");
mouseActive = true;

rows.forEach(row => {
    active(row);
});

