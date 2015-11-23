var BBTCreator = function() {
	var getHieght = function(node) {
		if(!node) {
			return 0;
		}
		if(!node.getLeft() && !node.getRight()) {
			return 0;
		}
		return 1 + Math.max(getHieght(node.getLeft()), getHieght(node.getRight()));
	};
	
	var balanceFactor = function(node) {
		var leftHeight = node.getLeft() ? getHieght(node.getLeft()) : 0;
		var rightHeight = node.getRight() ? getHieght(node.getRight()) : 0;
		return leftHeight - rightHeight ;
	};
	
	var rotateLeft = function(node) {
		if(!node.getParent()) {
			throw Error('cannot rotate root node');
		}
		var parent = node.getParent();
		
		if(parent.getParent()) {
			var grandParent = parent.getParent();
			grandParent.setLeft(node);
			node.setParent(grandParent);
		}
		
		if(node.getLeft()) {
			parent.setRight(node.getLeft());
			parent.getRight().setParent(parent);
		}
		
		node.setLeft(parent);
		parent.setParent(node);
	};
	
	var rotateRight = function(node) {
		if(!node.getParent()) {
			throw Error('cannot rotate root node');
		}
		var parent = node.getParent();
		
		if(parent.getParent()) {
			var grandParent = parent.getParent();
			grandParent.setRight(node);
			node.setParent(grandParent);
		}
		
		if(node.getRight()) {
			parent.setLeft(node.getRight());
			parent.getLeft().setParent(parent);
		}
		
		node.setRight(parent);
		parent.setParent(node);
	};
	
	var balance = function(node) {
		if(!node.getParent()) {
			return;
		}
		parent = node.getParent();
		var diff = balanceFactor(parent);

		if(parent.getLeft() && parent.getLeft().getName() === node.getName()) { // left child
			if(diff == 1) {
				if(balanceFactor(node) == -1) {
					rotateLeft(node);
				}
				rotateRight(parent);
			}
		} else { // right child
			if(diff == -1) {
				if(balanceFactor(node) == 	1) {
					rotateRight(node);
				}
				rotateLeft(parent);
			}
		}
		
		balance(node.getParent());
	}
	
	
	var bTree = new BTree();
	
	var names = [];
	
	this.addNode = function(bNode) {
		if(!(bNode instanceof BNode)) {
			throw Error('argument must be BNode');
		}
		if(names.indexOf(bNode.getName()) >= 0) {
			throw Error('Node names must be unique');
		}
		names.push(bNode.getName());
		bTree.addNode(bNode);
		if(!bNode.getParent()) {
			balance(bNode);
		}
	};
	
	this.getTree = function() {
		return bTree;
	}
}