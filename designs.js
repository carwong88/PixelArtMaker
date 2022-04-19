// Nanodegree Javascript Art Project: Pixel Art Maker

function colorCell(e, color) {
    e.preventDefault();
    e.srcElement.style.backgroundColor = color;
}


function newGrid() {
    if (document.querySelector('#grids') === null) {
        var tbody = document.createElement('tbody');
        tbody.id = 'grids';
        document.getElementById('pixelCanvas').appendChild(tbody);
    }
    return tbody;
}


function createCells(maxRow, maxCol, tbody) {
    for (var row = 1; row <= maxRow; row++) {
        let rowElem = document.createElement('tr');
        for (var col = 1; col <= maxCol; col++) {
            let colElem = document.createElement('td');
            colElem.id = row + '-' + col;
            colElem.className = 'cell';
            colElem.innerText = '';
            rowElem.appendChild(colElem);
        };
        tbody.appendChild(rowElem);
    };
    tbody.addEventListener('mouseup', (e) => {
        colorCell(e, color);
    });
}


function makeGrid(e) {
    e.preventDefault();
    const sizes = e.target.querySelectorAll('input');

    if (document.getElementById('grids') === null) {
        var tbody = newGrid();
    } else {
        document.getElementById('grids').remove();
        var tbody = newGrid();
    }

    tbody = createCells(sizes[0].value, sizes[1].value, tbody);
}


const sizePicker = document.querySelector('#sizePicker');
const sizes = sizePicker.querySelectorAll('input');
const tbody = document.getElementById('grids');
const colorPicker = document.getElementById('colorPicker');
var color = '';


sizePicker.addEventListener('submit', (e) => {
    makeGrid(e);
});


colorPicker.onchange = () => {
    color = colorPicker.value;
};


window.onload = (e) => {
    createCells(sizes[0].value, sizes[1].value, tbody);
    color = colorPicker.value;
};


