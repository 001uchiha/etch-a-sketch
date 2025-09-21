const container = document.querySelector('.grid-container');
const generateBtn = document.getElementById('generateBtn');
const modeBtn = document.getElementById('modeBtn');
const iconBox = document.getElementById('iconBox');
const palette = document.getElementById('palette');
const colorBar = document.getElementById('colorBar');
const gridSize = 16;

let eraserMode = false;
let isMouseDown = false;
let drawColor = '#75FBFD';

iconBox.addEventListener('click', () => {
	palette.style.display = palette.style.display === 'grid' ? 'none' : 'grid';
});


document.addEventListener('mousedown', () => isMouseDown=true);
document.addEventListener('mouseup', () => isMouseDown=false);

palette.querySelectorAll('div').forEach(div => {
	div.addEventListener('click', () => {
		drawColor = div.style.background;
		colorBar.style.background = drawColor;
	});
});

function paintCell(cell) {
	if (eraserMode) {
		cell.style.backgroundColor = 'lightgray';
	} else {
		cell.style.backgroundColor = drawColor;
	}
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

modeBtn.addEventListener('click', () => {
	eraserMode = !eraserMode;
	modeBtn.textContent = eraserMode ? 'Mode: Erase' : 'Mode: Draw';
})

createGrid(gridSize);