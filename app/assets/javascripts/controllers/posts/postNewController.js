Easiwed.PostsNewController = Ember.ObjectController.extend({
    actions: {
        save: function(){
            var thiss = this;
            this.model.save().then(function(resp){
                thiss.transitionToRoute('post', resp.id);
            });
        },
        cancel: function() {
            this.model.deleteRecord();
            this.transitionToRoute('posts');
        }
    }
});