import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  parent_id: DS.attr('number'),

  prevId: DS.attr('number'),
  nextId: DS.attr('number'),
  parent: DS.attr('number'),

  categories: DS.hasMany('category', {async: true, inverse: null}),

  children: Ember.computed.alias('categories')
});