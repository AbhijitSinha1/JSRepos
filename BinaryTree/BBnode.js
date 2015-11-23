var BBNode = function(n,v) {
var left, right, parent;
var leftHeight, rightHeight;
var value, name;

	var setName = function(nm) {
		name = nm;
	};
	
	var setValue = function(val) {
		value = val;
	};

	this.setParent = function(p) {
		parent = p;
	};
	
	this.getParent = function() {
		return  parent;
	};
	
	this.setLeft = function(node) {
		if(!(node instanceof BBNode)) {
			throw Error('argument of type BBNode expected');
		}
		if(!left) {
			leftHeight++;
		}
		left = node;
	};

	this.setRight = function(node) {
		if(!(node instanceof BBNode)) {
			throw Error('argument of type BBNode expected');
		}
		if(!right) {
			rightHeight++;
		}
		right = node;
	};
	
	this.getLeft = function() {
		return left;
	};

	this.getRight = function() {
		return right;
	};
	
	this.getLeftHeight = function() {
		return leftHeight;
	};

	this.getRightHeight = function() {
		return rightHeight;
	};
	
	if(!n) {
		throw Error('BBNode needs a name');
	}
	if(!v) {
		throw Error('BBNode needs a numeric value');
	}
	if(isNaN(v)) {
		throw Error('BBNode needs a numeric value');
	}
	
	setName(n);
	setValue(v);
	leftHeight = 0;
	rightHeight = 0;
}