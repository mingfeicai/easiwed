Easiwed.ImageModel = DS.Model.extend({
	small: DS.attr("string"),
	medium: DS.attr("string"),
	large: DS.attr("string"),
	distribution: DS.attr("string"),
	destination: DS.belongsTo("destination")
});
