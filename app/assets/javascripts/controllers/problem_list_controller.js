// for more details see: http://emberjs.com/guides/controllers/

Easiwed.ProblemListController = Ember.Controller.extend({
	problemsPerPage: 5,
	queryParams: ['topics', 'challenge-min', 'challenge-max', 'page'],
	isFilterPaneOpen: false,

	filteredProblems: function() {
		var topics = this.get('topics') && this.get('topics').split(',');
		var challengeMin = this.get('challenge-min');
		var challengeMax = this.get('challenge-max');
		var allProblems = this.get('model').problems;

		var filteredProblems = allProblems;
		if (topics) {
			filteredProblems = filteredProblems.filter(function(item) {
				var allTags = item.get('tags').map(function(topic){
					return topic.get('name').toUpperCase();
				}).uniq();
				var allTopics = topics.map(function(topic){
					return topic.toUpperCase();
				}).uniq();
				// check if allTags contain topics
				return allTags.filter(function (tag) {
					return allTopics.indexOf(tag) > -1;
				}).length == allTopics.length;
			});
		}
		if(challengeMin) {
			filteredProblems = filteredProblems.filter(function(item){
				return item.get('challenge') >= challengeMin;
			});
		}
		if(challengeMax) {
			filteredProblems = filteredProblems.filter(function(item){
				return item.get('challenge') <= challengeMax;
			});
		}
		return filteredProblems;
	}.property('topics', 'model', 'challenge-min', 'challenge-max'),

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
	}.property('filteredProblems', 'problemsPerPage'),
	filters: function(){
		var allFilters = [];
		var topics = this.get('topics') && this.get('topics').split(',');
		var challengeMin = this.get('challenge-min');
		var challengeMax = this.get('challenge-max');
		if(topics) {
			topics.forEach(function(topic){
				allFilters.push(topic);
			})
		}
		if(challengeMin && challengeMax) {
			if(challengeMin === challengeMax) {
				allFilters.push("Challenge:"+ challengeMin);
			} else {
				allFilters.push("Challenge:" + challengeMin + "-" + challengeMax);
			}
		} else if(challengeMin && !challengeMax) {
			allFilters.push("Challenge "+ "> " + challengeMin);
		} else if(!challengeMin && challengeMax) {
			allFilters.push("Challenge "+ "< " + challengeMax);
		}
		return allFilters;
	}.property('topics', 'challenge-min', 'challenge-max'),
	actions: {
		openFilterPane: function () {
			this.set('isFilterPaneOpen', true);
		},
		closeFilterPane: function () {
			this.set('isFilterPaneOpen', false);
		}
	}
});
