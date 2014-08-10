Easiwed.PostsNewRoute = Ember.Route.extend({
    model: function(){
        return this.store.createRecord('post', {author: "current user"});
    }
});