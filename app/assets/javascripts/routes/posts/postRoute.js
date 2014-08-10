Easiwed.PostRoute = Ember.Route.extend({
    model: function(params) {
        var post = this.store.find('post', params.id);
        return post;
    }
});