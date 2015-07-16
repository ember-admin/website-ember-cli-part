import TreeViewController from 'ember-cli-admin/mixins/controllers/tree-view';
import Ember from 'ember';

export default Ember.ObjectController.extend(TreeViewController, {
  formAttributes: ['name'],

  roots: function(){
    if(!this.get('model.items')){
      return [];
    }
    return this.get('model.items').filter(function(item){
      return Ember.isEmpty(item.get('parent_id'));
    });
  }.property('model.items.[]'),


});