Easiwed.PopularDestController = Ember.ArrayController.extend({
    actions: {
        delete: function(params) {
            this.store.find('post', params.id).then(function(post){
                post.destroyRecord();
            });
        }
    },
    content1:"['ca','cb']"
});