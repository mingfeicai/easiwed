Easiwed.HomeRoute = Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
			destinations: this.store.find('destination')
		})
	}
});