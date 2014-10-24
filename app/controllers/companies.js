import TableViewController from 'ember-cli-admin/mixins/controllers/table-view';
import Ember from 'ember';
import SearchLogic from 'ember-cli-admin/dsl/search';

export default Ember.ObjectController.extend(TableViewController, {
  formAttributes: ['title', 'lat', 'long', 'zoom'],
  sortFields: ['id', 'title', 'lat', 'long', 'zoom'],
  searchForm: (function() {
    return new SearchLogic().form(this.get('q'), function() {
      this.input('title', {type: 'autocomplete', url: 'admin/api/v1/companies/autocomplete'});
      this.input('lat', {type: 'number'});
      this.input('long', {type: 'number'});
    });
  }).property('q')
});