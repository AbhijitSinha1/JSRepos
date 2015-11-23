var Graph = function() {
	var nodes = [];
	this.addAdjacentNode = function(node1, node2) {
		if(!(node1 instanceof Node)) {
			throw new Error('1st argument must be Node');
		}
		if(!(node2 instanceof Node)) {
			throw new Error('2nd argument must be Node');
		}
		node1.addNext(node2);
		node2.addNext(node1);
	};
}