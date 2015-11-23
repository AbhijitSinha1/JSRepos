var pair = function() {
	var x, y;
	this.setX = function(v) {
		this.x = v;
	}
	this.setY = function(v) {
		this.y = v;
	}
	this.getX = function() {
		return this.x;
	}
	this.getY = function() {
		return this.y;
	}
	this.equals = function(other) {
		return x === other.getX() && y === other.getY();
	}
};