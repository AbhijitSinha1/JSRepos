var BTItrator = function(tree) {
	if(!(tree instanceof BTree)) {
		throw new Error('BTree expected as argument');
	}
	var bTree = tree;
	var current;
	this.next = function() {
		if(!current) {
			current = tree.getHead();
		} else {
			if(current.getLeft()) {
				current = current.getLeft();
			} else if(current.getRight()) {
				current = current.getRight();
			}
		}
		return current;
	}
};