var Cell = function(id, state) {
	if(isNaN(id)) {
		throw new Error('invalid cell. Numeric Cell ID required!');
	}
	var adjCells = [];
	var id = id;
	var state = state;
	this.getId = function() {
		return id;
	};
	this.addAdjCells = function(cell) {
		if(!(cell instanceof Cell)) {
			throw new Error('invalid argument. Cell required!');
		}
		if(adjCells.filter(function(c) {
			return c.getId() === cell.getId();
		}).length > 0) {
			throw new Error('invalid cell. Unique Cell ID required!');
		}
		adjCells.push(cell);
	};
	this.step = function() {
		var livingCount = adjCells.filter(function(cell) {
			return cell.getState();
		}).length;
		if(state) {
			if(livingCount < 2 || livingCount > 3) {
				state = false;
			}
		} else {
			if(livingCount === 3) {
				state = true;
			}
		}
	}
	this.getState = function() {
		return state;
	};
}