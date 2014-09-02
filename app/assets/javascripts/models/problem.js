// for more details see: http://emberjs.com/guides/models/defining-models/

Easiwed.Problem = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	category: DS.belongsTo('category'),
	challenge: DS.attr('number'),
	company: DS.belongsTo('company'),
	answer: DS.attr('string'),
	tags: DS.hasMany('tag')
});
