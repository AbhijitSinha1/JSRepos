var BTOperations = function() {
	// private methods
	var inOrderTravel = function(node) {
		if(!(node instanceof BNode)) {
			throw new Error('argument of type BNode expected');
		}
		var left = node.getLeft();
		var right = node.getRight();
		return "("+(left?inOrderTravel(left):"")+" - "+node.getValue()+" - "+(right?inOrderTravel(right):"")+")";
	};
	var headLeftRightTravel = function(node) {
		if(!(node instanceof BNode)) {
			throw new Error('argument of type BNode expected');
		}
		var left = node.getLeft();
		var right = node.getRight();
		return "("+node.getValue()+" - "+(left?headLeftRightTravel(left):"")+" - "+(right?headLeftRightTravel(right):"")+")";
	};
	var minimal = function(node) {
		if(!(node instanceof BNode)) {
			throw new Error('argument of type BNode expected');
		}
		var left = node.getLeft();
		return left?minimal(left):node;
	};
	var maximal = function(node) {
		if(!(node instanceof BNode)) {
			throw new Error('argument of type BNode expected');
		}
		var right = node.getRight();
		return right?maximal(right):node;
	};
	var DFS = function(name, node) {
		var leftSearch, rightSearch;
		if(node.getLeft()) {
			leftSearch = DFS(name, node.getLeft());
			if(leftSearch) {
				return leftSearch;
			}
		}
		if(node.getRight()) {
			rightSearch = DFS(name, node.getRight());
			if(rightSearch) {
				return rightSearch;
			}
		}
		if(node.getName() === name) {
			return node;
		}
		return null;
	};
	var BFS = function(name, node) {
		var arr = [];
		flatten(node, arr);
	return arr.sort(function(a, b) {
		return a.getDeapth() - b.getDeapth();
		}).filter(function(n) {
			return n.getName() === name;
		});
	};
	var search = function(value, node) {
		if(!node) {
			return null;
		}
		var v = node.getValue();
		if(v === value) {
			return node;
		} else if(value < v) {
			return search(value, node.getLeft());
		} else {
			return search(value, node.getRight());
		}
	};
	var flatten = function(bNode, bTreeArr) {
		bTreeArr.push(bNode);
		if(bNode.getLeft()) {
			flatten(bNode.getLeft(), bTreeArr);
		}
		if(bNode.getRight()) {
			flatten(bNode.getRight(), bTreeArr);
		}
	}
	var getNodeHeight = function(node) {
		if(!node) {
			return 0;
		}
		return 1 + Math.max(getNodeHeight(node.getLeft()),getNodeHeight(node.getRight()));
	}
	
	
	// public enums
	this.travelType = Object.freeze({
		IOT: 'inOrderTravel',
		HLR: 'headLeftRightTravel',
	});
	this.extremalType = Object.freeze({
		minimal: 'minimal',
		maximal: 'maximal'
	});
	this.searchType = Object.freeze({
		DFS: 'DFS',
		BFS: 'BFS'
	});

	// public methods
	this.traversal = function(bTree, type) {
		if(!bTree) {
			throw new Error('argument expected');
		}
		if(!(bTree instanceof BTree)) {
			throw new Error('argument of type BTree expected');
		}
		return type === this.travelType.HLR ? headLeftRightTravel(bTree.getHead()) : inOrderTravel(bTree.getHead());
	};
	this.findExtrimal = function(bTree, type) {
		if(!bTree) {
			throw new Error('argument expected');
		}
		if(!(bTree instanceof BTree)) {
			throw new Error('argument of type BTree expected');
		}
		return type === this.extremalType.minimal ? minimal(bTree.getHead()) : maximal(bTree.getHead());
	};
	this.search = function(value, bTree, isName, type) {
		if(!bTree) {
			throw new Error('argument expected');
		}
		if(!(bTree instanceof BTree)) {
			throw new Error('argument of type BTree expected');
		}
		if(!isName) {
			return search(value, bTree.getHead());
		}
		return type === this.searchType.DFS ? DFS(value, bTree.getHead()) : BFS(value, bTree.getHead());
	};
	this.flatten = function(bTree) {
		if(!(bTree instanceof BTree)){
			throw new Error('argument of type BTree expected');
		}
		var bTreeArr = [];
		flatten(bTree.getHead(), bTreeArr);
		return bTreeArr;
	};
	this.height = function(bTree) {
		if(!(bTree instanceof BTree)) {
			throw new Error('argument of type BTree expected');
		}
		return getNodeHeight(bTree.getHead());
	}
};