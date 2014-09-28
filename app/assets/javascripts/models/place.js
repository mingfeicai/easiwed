// for more details see: http://emberjs.com/guides/models/defining-models/

Easiwed.Place = DS.Model.extend({
	name: DS.attr('string'),
	description: DS.attr('string'),
	street1: DS.attr('string'),
	street2: DS.attr('string'),
	city: DS.attr('string'),
	state: DS.attr('string'),
	zip: DS.attr('string'),
	country: DS.attr('string')
});
