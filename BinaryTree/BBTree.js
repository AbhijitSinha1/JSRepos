var BBTree = function() {
	
	var head;
	
	var heightDiff = function(node) {
		return node.getLeftHeight() - node.getRightHeight();
	}
	
	var balance = function(node) {
		if(!node.getParent()) {
			// at the root node
			return;
		}
		
		var diff = heightDiff(node.getParent());
		
		if(diff > 1) {
			
		} else if(diff < -1) {
			
		}

		balance(node.getParent());
	};
	
	var addNodeTo = function(child, parent) {
		if(child.getValue() <= parent.getValue()) {
			if(!parent.getLeft()) {
				parent.setLeft(child);
				child.setParent(parent);
				balance(child);
			} else {
				addNodeTo(child, parent.getLeft());
			}
		} else {
			if(!parent.getRight()) {
				parent.setRight(child);
				child.setParent(parent);
				balance(child);
			} else {
				addNodeTo(child, parent.getRight());
			}
		}
	};
	
	this.addNode = function(bbNode) {
		if(!(bbNode instanceof BBNode)) {
			throw Error('argument of type BBNode expected');
		}
		if(!head) {
			head = bbNode;
			head.setParent(null);
		} else {
			addNodeTo(bbNode, head);
		}
	};
	
	this.getHead = function() {
		return head;
	};
}