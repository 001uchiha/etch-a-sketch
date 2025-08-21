const container = document.querySelector('.grid-container');
const gridSize = 16;

function createGrid(size) {
	container.innerHTML = '';

	for (let i = 0; i < gridSize * gridSize; i++) {
		const cell = document.createElement('div');
		container.appendChild(cell).className = 'cell';
	}
}

createGrid(gridSize);