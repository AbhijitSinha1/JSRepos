var OMDB = function() {
	var baseURL = 'https://www.omdbapi.com/?';
	var result;
	this.getResult = function() {
		return result;
	};
	this.getMovieByID = function(id) {
		url = baseURL + 'i='+id+'&r=json&plot=full';
		fetchURL(url);
	};
	this.getMovieByName = function(name) {
		url = baseURL + 't='+name+'&r=json';
		fetchURL(url);
	};
	var fetchURL = function(url) {
		result = null;
		$.ajax({
			url: url,
			method: 'GET',
			dataType: 'jsonp',
			success: function(data) {
				result = data;
			},
			failure: function(response) {
				console.log(failed);
			}
		});
	}
}