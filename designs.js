/* Nanodegree Javascript Art Project: Pixel Art Maker

## Features Criteria
1. The user can create a canvas of any (reasonable) size.
2. The user can color the pixels in the grid.
3. The user can reset the grid to a blank state.

## Code Quality Criteria
1. The script.js JavaScript code works with the provided HTML and CSS files.
2. Code is neatly formatted and commented.
3. Code runs without errors in the JavaScript console.
*/


/**
 * Toggle the cell between the selected color or white.

 * @param {element} e The single cell <td> element>.
 * @param {color code} color The selected color.
 */
function colorCell(e, color) {
    e.preventDefault();
    if (e.srcElement.getAttribute('style')) {
        e.srcElement.removeAttribute('style');
    } else {
        e.srcElement.style.backgroundColor = color;
    };
}


/**
 * Create a <tbody> element to contain a grid.
 */
function newGrid() {
    if (document.querySelector('#grids') === null) {
        var tbody = document.createElement('tbody');
        tbody.id = 'grids';
        document.getElementById('pixelCanvas').appendChild(tbody);
    }
    return tbody;
}


/**
 * Create a grid of specified size under the <tbody> tag.
 *
 * @param {number} maxRow The number of rows.
 * @param {number} maxCol The number of columns.
 * @return {element} tbody The tboby element.
 */
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


/**
 * Create a new grid whenever the #sizePicker submit button is clicked.
 *
 * @param {element} e The SubmitEvent
 */
function makeGrid(e) {
    console.log(e);
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


window.onload = () => {
    createCells(sizes[0].value, sizes[1].value, tbody);
    color = colorPicker.value;
};


