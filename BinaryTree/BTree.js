var BTree = function(node) {
	var head, tail;
	var size = 0;
	var deapth;
	var addNodeTo = function(child, parent) {
		if(child.getValue() <= parent.getValue()) {
			if(parent.getLeft()) {
				addNodeTo(child, parent.getLeft())
			} else {
				parent.setLeft(child);
				child.setParent(parent);
				var d = child.getDeapth();
				if(d > deapth) {
					deapth = d;
					tail = child;
				}
				size++;
			}
		} else {
			if(parent.getRight()) {
				addNodeTo(child, parent.getRight())
			} else {
				parent.setRight(child);
				child.setParent(parent);
				var d = child.getDeapth();
				if(d > deapth) {
					deapth = d;
					tail = child;
				}
				size++;
			}
		}
	};
	this.addNode = function(node) {
		if(!(node instanceof BNode)) {
			throw new Error('agrument must be a BNode');
		}
		if(!head) {
			head = node;
			head.setParent(null);
			deapth = 0;
			tail = head;
			size++;
		} else{
			addNodeTo(node,head);
		}
	};
	this.getHead = function() {
		return head;
	};
	this.getTail = function() {
		return tail;
	};
	this.getDeapth = function() {
		return deapth;
	};
	this.getSize = function() {
		return size;
	};
}