var testSet = function() {
// private variables and functions
	var a, b;
	var initialize = function() {
		a = new set();
		b = new set();
	}
	var contains = function(arr1,arr2) {
		return arr2.filter(function(n) {
			return arr1.indexOf(n) < 0;
		}).length === 0;
	};
	var operate = function(s, operation, arr) {
		arr.forEach(function(n) {
			s[operation](n);
		});
	}
	var isEqual = function(arr1, arr2) {
		return contains(arr1,arr2) && contains(arr2,arr1);
	}
// public variables and test functions
// functions to test utility functions
	this.testContainsUtils = function() {
		var arr1 = [1, 2, 3, 4, 5], arr2 = [1, 2, 3];
		return contains(arr1,arr2) && !contains(arr2,arr1);
	}
	this.testIsEqualsUtils = function() {
		var arr = [1, 2, 3];
		return isEqual(arr,arr);
	}
// functions to test set operations
	this.testInsert = function() {
		initialize();
		var inserts = [1, 2, 3];
		var res = [1, 2, 3];
		operate(a, 'insert', inserts);
		return isEqual(res, a.display());
	};
	this.testAddDuplicate = function() {
		initialize();
		var inserts = [1, 2, 2, 2, 3, 3, 3];
		var res = [1, 2, 3];
		operate(a, 'insert', inserts);
		return isEqual(res, a.display());
	};
	this.testRemove = function() {
		initialize();
		var inserts = [1, 2, 3];
		var remove = [2, 3, 4];
		var res = [1];
		operate(a, 'insert', inserts);
		operate(a, 'remove', remove);
		return isEqual(res, a.display());
	};
	this.testCopy = function() {
		initialize();
		var inserts = [1, 2, 3];
		operate(a, 'insert', inserts);
		b = a.copy();
		return isEqual(inserts, b.display());
	};
	this.testSubsetOf = function() {
		initialize();
		var insertsA = [1, 2, 3, 4], insertsB = [1, 2, 3, 4, 5, 6];
		operate(a, 'insert', insertsA);
		operate(b, 'insert', insertsB);
		return a.subsetOf(b);
	};
	this.testSupersetOf = function() {
		initialize();
		var insertsA = [1, 2, 3, 4], insertsB = [1, 2, 3, 4, 5, 6];
		operate(a, 'insert', insertsA);
		operate(b, 'insert', insertsB);
		return b.supersetOf(a);
	};
	this.testEquals = function() {
		initialize();
		var inserts = [1, 2, 3, 4];
		operate(a, 'insert', inserts);
		operate(b, 'insert', inserts);
		return a.equals(b);
	};	
}