import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'admin-app/tests/helpers/start-app';

var application;

module('Acceptance | users', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /users', function(assert) {
  visit('/users');
});
