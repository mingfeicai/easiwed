Easiwed.DestinationSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    images: {embedded: 'always'}
  }
});