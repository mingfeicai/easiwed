// For more information see: http://emberjs.com/guides/routing/


Easiwed.Router.map(function() {
    this.resource('about');
    this.resource('posts', function() {
        this.resource('post', { path: ':id' });
        this.route('new');
    });
});