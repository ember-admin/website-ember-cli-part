import Ember from 'ember';
import {module, test} from 'qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - Secret', {
  setup: function(){
    App = startApp();
  },

  teatdown: function(){
    Ember.run(App, 'destroy');
  }
});

test("DO smthb", function(assert){
  assert.expect(1);
  visit('/users');

  andThen(function(){

    assert.equal(find('input').length);

  });
});