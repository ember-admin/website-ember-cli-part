import TableViewController from 'ember-cli-admin/mixins/controllers/table-view';
import Ember from 'ember';
import SearchLogic from 'ember-cli-admin/dsl/search';

export default Ember.ObjectController.extend(TableViewController, {
  formAttributes: ['email'],
  sortFields: ['id', 'email'],

  searchForm: (function() {
    return new SearchLogic().form(this.get('q'), function() {
      this.input('email', {type: 'autocomplete', url: 'admin/api/v1/users/autocomplete'});
    });
  }).property('q')
});