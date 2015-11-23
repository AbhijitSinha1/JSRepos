var set = function() {
	var arr = [];
	this.insert = function(n) {
		if(n instanceof Array) {
			console.error("cannot insert array in set");
			return;
		}
		if(n instanceof Object) {
			console.error("cannot insert object in set");
			return;
		}
		if(arr.indexOf(n) >= 0) {
			console.error("cannot insert duplicates in set");
			return;
		}
		arr.push(n);
	};
	this.remove = function(n) {
		var temp = arr.filter(function(x) {
			return x !== n;
		});
		arr = temp;
	};
	this.display = function() {
		return arr.filter(function() {
			return true;
		});
	};
	this.copy = function() {
		var copySet = new set();
		arr.forEach(function(n) {
			copySet.insert(n);
		});
		return copySet;
	};
	this.subsetOf = function(other) {
		if(!(other instanceof set)) {
			return false;
		}
		
		return arr.filter(function(n) {
			return other.display().indexOf(n) < 0;
		}).length === 0;
	};
	this.supersetOf = function(other) {
		if(!(other instanceof set)) {
			return false;
		}
		
		return other.subsetOf(this);
	};
	this.equals = function(other) {
		if(!(other instanceof set)) {
			return false;
		}
		
		return this.subsetOf(other) && other.subsetOf(this);
	};
	this.cardinality = function() {
		return arr.length;
	}
}