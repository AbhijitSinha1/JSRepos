var Node = function(n,v) {
	var name;
	var value;
	var next = [];
	this.getName = function() {
		return name;
	};
	var setName = function(n) {
		name = n;
	};
	this.setValue = function(val) {
		this.value = val;
	};
	this.getValue = function() {
		return this.value;
	};
	this.getNext = function() {
		return next.map(function(n) {
			return n;
		});
	};
	this.getNextName = function() {
		return next.map(function(n) {
			return n.getName();
		});
	};
	this.addNext = function(node) {
		if(!(node instanceof Node)) {
			throw new Error('argument must be Node');
		}
		if(this.getName() === node.getName()) {
			throw new Error('Node name must be unique');
		}
		if(next.filter(function(n) {
			return n.getName() === node.getName();
		}).length > 0) {
			throw new Error('node '+node.getName()+' already next to node '+this.getName());
		}
		next.push(node);
	};
	if(n) {
		setName(n);
	} else {
		throw new Error('every Node must be named');
	}
	if(v) {
		this.setValue(v);
	} else {
		throw new Error('every Node must have value');
	}
};