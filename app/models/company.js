import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  products: DS.hasMany('product', {async: true}),
  lat:   DS.attr('number'),
  long:  DS.attr('number'),
  zoom:  DS.attr('number'),
  updated_at: DS.attr('date'),
  created_at: DS.attr('date'),
  logo:  DS.belongsTo('logo'),

  asGoogleMap: ['lat', 'long', 'zoom'],
  fileuploads: ["logo"]
});