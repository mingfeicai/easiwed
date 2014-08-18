Easiwed.DestinationModel = DS.Model.extend({
	name: DS.attr("string"),
	country: DS.attr("string"),
	currency: DS.attr("string"),
	images: DS.hasMany("image")
});