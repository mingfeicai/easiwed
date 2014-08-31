Easiwed.ProblemRoute = Ember.Route.extend({
	model: function(params) {
		var problem = this.store.find('problem', params.id);
		return problem;
	}
});