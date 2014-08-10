Easiwed.PostController = Ember.ObjectController.extend({
    isEditing: false,

    actions: {
        edit: function() {
            this.set('isEditing', true);
        },

        doneEditing: function() {
            this.model.save();
            this.set('isEditing', false);
        }
    }
});