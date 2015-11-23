var testSetOperations = function() {
	var op, a, b;
	var contains = function(arr1,arr2) {
		var res = arr2.filter(function(n) {
			return arr1.indexOf(n) < 0;
		});
		if(res.length !== 0) {
			console.warn('not found in array');
			console.warn(res);
		}
		return res.length === 0;
	};
	var isEqual = function(arr1, arr2) {
		return contains(arr1,arr2) && contains(arr2,arr1);
	}
	var initialize = function() {
		op = new setOperations();
		a = new set();
		b = new set();
	}
	var insert = function(s, arr) {
		if(!(s instanceof set)) {
			console.error('illegal argument given. expected set');
			return;
		}
		arr.forEach(function(n) {
			s.insert(n);
		});
	}
	// public functions
	this.testUnion = function() {
		initialize();
		var arrA = [1,2,3], arrB = [2,3,4,5], res = [1,2,3,4,5];
		insert(a,arrA);
		insert(b,arrB);
		var c = op.union(a,b);
		return isEqual(c.display(),res);
	};
	this.testIntersection = function() {
		initialize();
		var arrA = [1,2,3], arrB = [2,3,4,5], res = [2,3];
		insert(a,arrA);
		insert(b,arrB);
		var c = op.intersection(a,b);
		return isEqual(c.display(),res);
	};
	this.testDifference = function() {
		initialize();
		var arrA = [1,2,3], arrB = [2,3,4,5], res1 = [1], res2 = [4,5];
		insert(a,arrA);
		insert(b,arrB);
		var c = op.difference(a,b), d = op.difference(b,a);
		return isEqual(c.display(),res1) && isEqual(d.display(),res2);
	};
}