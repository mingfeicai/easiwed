// for more details see: http://emberjs.com/guides/controllers/

Easiwed.ProblemListController = Ember.Controller.extend({
	queryParams: ['category'],
	category: null,
	filteredProblems: function() {
		var category = this.get('category');
		var problems = this.get('model').problems;

		if (category) {
			return problems.filter(function(item) {
				return item.get('category').get('name') == category;
			});
		} else {
			return problems;
		}
	}.property('category', 'model')
});
