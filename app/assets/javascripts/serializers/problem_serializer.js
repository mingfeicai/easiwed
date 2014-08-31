Easiwed.ProblemSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs: {
		company: {embedded: 'always'},
		category: {embedded: 'always'}
	}
});