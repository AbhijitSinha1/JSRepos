var GoL = function(cols, rows) {
	if(!cols) {
		throw new Error('invalid col argument');
	}
	if(!rows) {
		throw new Error('invalid row argument');
	}
	if(isNaN(cols)) {
		throw new Error('invalid col argument');
	}
	if(isNaN(rows)) {
		throw new Error('invalid row argument');
	}
	if(cols < 2) {
		throw new Error('invalid col count');
	}
	if(rows < 2) {
		throw new Error('invalid row count');
	}
	var running = false;
	var cols = cols;
	var rows = rows;
	var cells = [];
	var timer;
	var to1D = function(i,j) {
		return i * rows + j;
	}
	for(var i = 0; i < cols; i++) {
		for(var j = 0; j < rows; j++) {
			cells.push(new Cell(to1D(i,j), Math.random() > 0.5));
		}
	}
	for(var i = 0; i < cols; i++) {
		for(var j = 0; j < rows; j++) {
			if(i > 0) {
				cells[to1D(i,j)].addAdjCells(cells[to1D(i - 1,j)]);
			}
			if(i < cols - 1) {
				cells[to1D(i,j)].addAdjCells(cells[to1D(i + 1,j)]);
			}
			if(j > 0) {
				cells[to1D(i,j)].addAdjCells(cells[to1D(i ,j - 1)]);
			}
			if(j < rows - 1) {
				cells[to1D(i,j)].addAdjCells(cells[to1D(i ,j + 1)]);
			}
			if(i > 0 && j > 0) {
				cells[to1D(i,j)].addAdjCells(cells[to1D(i - 1,j - 1)]);
			}
			if(i > 0 && j < rows - 1) {
				cells[to1D(i,j)].addAdjCells(cells[to1D(i - 1,j + 1)]);
			}
			if(i < cols - 1 && j > 0) {
				cells[to1D(i,j)].addAdjCells(cells[to1D(i + 1,j - 1)]);
			}
			if(i < cols - 1 && j < rows - 1) {
				cells[to1D(i,j)].addAdjCells(cells[to1D(i + 1,j + 1)]);
			}
		}
	}
	this.getRows = function() {
		return rows;
	};
	this.getCols = function() {
		return cols;
	}
	this.getCells = function() {
		return cells.map(function(c) {
			return c;
		});
	}
	this.step  = function() {
		cells.forEach(function(cell) {
			cell.step();
		});
	};
	this.play  = function(delay) {
		if(isNaN(delay)) {
			throw new Error('invalid delay. Numeric value required.');
		}
		if(running) {
			return;
		}
		running = true;
		timer = window.setInterval(step,delay);
	}
	this.pause = function() {
		if(!running) {
			return;
		}
		running = false;
		window.clearInterval(timer);
	}
}