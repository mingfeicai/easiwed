Easiwed.HomeController = Ember.ObjectController.extend({
	actions: {
		delete: function () {
			this.store.find('posdt').then(function (post) {
				post.destroyRecord();
			});
		}
	}
});
