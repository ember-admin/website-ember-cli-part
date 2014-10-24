import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  avatar:  DS.belongsTo('avatar'),
  products: DS.hasMany('product', {async: true}),
  updated_at: DS.attr('date'),
  created_at: DS.attr('date'),

  fileuploads: ["avatar"]
});