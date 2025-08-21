const container = document.querySelector('.grid-container');
const gridSize = 16;

let isMouseDown = false;

document.addEventListener('mousedown', () => isMouseDown=true);
document.addEventListener('mouseup', () => isMouseDown=false);

function paintCell(cell) {
	cell.style.backgroundColor = 'blue';
}

function createGrid(size) {
	container.innerHTML = '';

	for (let i = 0; i < gridSize * gridSize; i++) {
		const cell = document.createElement('div');
		cell.classList.add('cell');

		cell.addEventListener('click', () => paintCell(cell));
		cell.addEventListener('mouseover', () => {
			if (isMouseDown) paintCell(cell)
		});
		container.appendChild(cell);
	}
}

createGrid(gridSize);