import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'admin-app/tests/helpers/start-app';
import Mirage from 'ember-cli-mirage';

var application;

module('Acceptance | layout', {
  beforeEach: function() {
    application = startApp();
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('layout has nav links', function(assert){
  assert.expect(2);
  visit('/');
  andThen(function(){
    assert.equal(find('.navbar-brand').text(), "admin-app");
    assert.equal(find('ul.nav li').length, 6);
  });
});

test(('breadcrumbs works fine'), function(assert){
  visit('/categories');
  andThen(function(){
    assert.equal(find('li.active').text(), "Categories");
  });
});