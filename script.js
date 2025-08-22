const container = document.querySelector('.grid-container');
const generateBtn = document.getElementById('generateBtn');
const gridSize = 16;

let isMouseDown = false;

document.addEventListener('mousedown', () => isMouseDown=true);
document.addEventListener('mouseup', () => isMouseDown=false);

function paintCell(cell) {
	cell.style.backgroundColor = 'blue';
}

function createGrid(size) {
	container.innerHTML = '';

	container.style.setProperty('--grid-size', size);
	for (let i = 0; i < size * size; i++) {
		const cell = document.createElement('div');
		cell.classList.add('cell');

		cell.addEventListener('click', () => paintCell(cell));
		cell.addEventListener('mousemove', () => {
			if (isMouseDown) paintCell(cell)
		});
		container.appendChild(cell);
	}
}

generateBtn.addEventListener('click', () => {
	let size = prompt('');
	if (isNaN(size) || size < 1) size = 1;
	if (size > 100) size = 100;
	createGrid(size);
});

createGrid(gridSize);