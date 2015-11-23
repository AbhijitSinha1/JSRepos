var BNode = function(n,v) {
	// private variables
	var name;
	var value, deapth;
	var left, right, parent
	
	// private methods
	var setName = function(n) {
		name = n;
	};	
	var setValue = function(val) {
		value = val;
	};
	var setDeapth = function(d) {
		deapth = d;
	}

	// public methods
	this.getName = function() {
		return name;
	};
	this.getDeapth = function() {
		return deapth;
	}
	this.getValue = function() {
		return value;
	};
	this.setParent = function(p) {
		parent = p;
		if(!parent) {
			setDeapth(0);
		} 
		else {
			setDeapth(1 + parent.getDeapth());
		}
	};
	this.getParent = function() {
		return parent;
	};
	this.getLeft = function() {
		return left;
	};
	this.getRight = function() {
		return right;
	};
	this.setLeft = function(node) {
		if(!(node instanceof BNode)) {
			throw new Error('argument must be BNode');
		}
		left = node;
	};
	this.setRight = function(node) {
		if(!(node instanceof BNode)) {
			throw new Error('argument must be BNode');
		}
		right = node;
	};

	if(n) {
		setName(n);
	} else {
		throw new Error('every BNode must be named');
	}

	if(v) {
		setValue(v);
	} else {
		throw new Error('every BNode must have value');
	}
};