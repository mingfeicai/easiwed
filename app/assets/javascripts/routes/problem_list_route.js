// For more information see: http://emberjs.com/guides/routing/

Easiwed.ProblemListRoute = Ember.Route.extend({
	model: function(){
		return Ember.RSVP.hash({
			categories: this.store.find('category'),
			problems: this.store.find('problem')
		});
	}
});
