// For more information see: http://emberjs.com/guides/routing/


Easiwed.Router.map(function() {
	this.resource('about');
	this.resource('home');
	this.resource('problem-list', function () {
		this.resource('problem', {path: ':id'});
	});
	this.resource('posts', function() {
		this.resource('post', { path: ':id' });
		this.route('new');
	});
});
