Easiwed.HomeController = Ember.ObjectController.extend({
	actions: {
		delete: function (params) {
			this.store.find('post', params.id).then(function (post) {
				post.destroyRecord();
			});
		}
	}
});
