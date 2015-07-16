import TableViewController from 'ember-cli-admin/mixins/controllers/table-view';
import Ember from 'ember';
import SearchLogic from 'ember-cli-admin/dsl/search';
import config from '../config/environment';

export default Ember.Controller.extend(TableViewController, {
  formAttributes: ['price'],
  sortFields: ['id', 'title', 'price'],
  sortAssetsBy: "position",
  tableAttributes: ['title', 'price', 'company', 'user', 'is_active'],

  locales: config.locales,

  companies: function(){
    return this.store.findAll('company');
  }.property(),
  users: function(){
    return this.store.findAll('user');
  }.property(),

  searchForm: (function() {
    return new SearchLogic().form(this.get('q'), function() {
      this.input('title', {type: 'autocomplete', url: 'admin/api/v1/products/autocomplete'});
      this.input('price', {type: 'number'});
    });
  }).property('q'),

  batchActions: [{title: "Toggle Active", action: "toggleActive"}],

  actions: {
    toggleActive: function(model) {
      model.toggleProperty('is_active');
      model.save();
    }
  }
});
