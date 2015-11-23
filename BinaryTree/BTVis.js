var BTVis = function() {
	var generateData = function(node) {
		var ret = {
			name: node.getValue()
		};
		if(node.getLeft()) {
			ret.children = [];
			ret.children.push(generateData(node.getLeft()));
		}
		if(node.getRight()) {
			ret.children = ret.children || [];
			ret.children.push(generateData(node.getRight()));
		}
		return ret;
	};

	this.visualizeData = function(bTree) {
		if(!(bTree instanceof BTree)) {
			throw new Error('argument of type BTree expected');
		}
		return generateData(bTree.getHead());
	}
}