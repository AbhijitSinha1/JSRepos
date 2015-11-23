var setOperations = function() {
	this.union = function(setA, setB) {

		if(!(setA instanceof set)) {
			return;
		}
		if(!(setB instanceof set)) {
			return;
		}

		var setC = new set();
		setA.display().forEach(function(s) {
			setC.insert(s);
		});
		setB.display().forEach(function(s) {
			setC.insert(s);
		});
		return setC;
	};
	this.intersection = function(setA, setB) {

		if(!(setA instanceof set)) {
			return;
		}
		if(!(setB instanceof set)) {
			return;
		}
		
		var setC = new set();
		setA.display().filter(function(a) {
			return setB.display().indexOf(a) >= 0;
		}).forEach(function(n) {
			setC.insert(n);
		});
		return setC;
	};
	this.difference = function(setA, setB) {

		if(!(setA instanceof set)) {
			return;
		}
		if(!(setB instanceof set)) {
			return;
		}
		
		var setC = new set();
		setA.display().filter(function(a) {
			return setB.display().indexOf(a) < 0;
		}).forEach(function(n) {
			setC.insert(n);
		});
		return setC;
	}
}