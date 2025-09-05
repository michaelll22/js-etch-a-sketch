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

