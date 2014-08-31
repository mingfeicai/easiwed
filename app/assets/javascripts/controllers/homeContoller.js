Easiwed.HomeController = Ember.ObjectController.extend({
	actions: {
		delete: function () {
			this.store.find('post').then(function (post) {
				post.destroyRecord();
			});
		}
	}
});
