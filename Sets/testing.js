var testing = function() {
	this.testAll = function(obj) {
		Object.getOwnPropertyNames(obj).forEach(function(name) {
			var res = obj[name]();
			console[(res?'log':'error')]((res?'successfully tested: ':'failed while testing: ')+name);
		});
	};
}