// for more details see: http://emberjs.com/guides/controllers/

Easiwed.ProblemListController = Ember.Controller.extend({
	problemsPerPage: 5,
	queryParams: ['topics', 'page'],
	topics: null,
	page: null,

	filteredProblems: function() {
		var topics = this.get('topics');
		var allProblems = this.get('model').problems;

		var filteredProblems = allProblems;
		if (topics) {
			filteredProblems = allProblems.filter(function(item) {
				return item.get('tags').any(function(tag){
					return tag.get('name').toUpperCase() === topics.toUpperCase();
				})
			});
		}
		return filteredProblems;
	}.property('topics', 'model'),

	problemsOnCurrentPage: function() {
		var page = this.get('page');
		var problemsPerPage = this.get('problemsPerPage');
		var filteredProblems = this.get('filteredProblems');

		var pageStartIndex = (page - 1) * problemsPerPage;
		var paginatedProblemIndices = [];
		for (var i = 0; i < problemsPerPage; i++) {
			paginatedProblemIndices.push(pageStartIndex + i);
		}
		return filteredProblems.objectsAt(paginatedProblemIndices);
	}.property('filteredProblems', 'page', 'problemsPerPage'),

	pages: function(){
		var allPages = [];
		var problemsPerPage = this.get('problemsPerPage');
		var filteredProblems = this.get('filteredProblems');
		var allPageNumber =Math.ceil(filteredProblems.get('length') / problemsPerPage);
		for(var i = 1; i <= allPageNumber; i++ ) {
			allPages.push(i);
		}
		return allPages;
	}.property('filteredProblems', 'problemsPerPage')
});
