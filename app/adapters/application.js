import DS from 'ember-data';

var adapter = DS.ActiveModelAdapter.extend({
  namespace: 'admin/api/v1'
});

export default adapter;