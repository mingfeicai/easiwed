// for more details see: http://emberjs.com/guides/models/defining-models/

Easiwed.Tour = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	durationMinutes: DS.attr('integer'),
	guide: DS.belongsTo('guide'),
	place: DS.belongsTo('place')
});
