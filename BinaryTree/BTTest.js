var BTTest = function() {
	this.generateBTree = function(size) {
		size = size || 10;
		var bTree = new BTree();
		var bNodes = [];
		var arr = [];
		for(var i = 0; i < size; i++) {
			var value = 1 + parseInt(Math.random() * 5000000);
			if(value){
				arr.push(value);
			}
		}
		
		arr.map(function(n,i) {
			return new BNode(""+i,n);
		}).forEach(function(node) {
			bTree.addNode(node);
		});
		
		/*
		arr.forEach(function(n, i) {
			bNodes.push(new BNode(""+i,n));
		});
		bNodes.forEach(function(node) {
			bTree.addNode(node);
		});
		*/
		
		return bTree;
	}
}