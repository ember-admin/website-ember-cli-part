import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'admin-app/tests/helpers/start-app';

var application;

module('Acceptance | sample', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /sample', function(assert) {
  visit('/sample');

  andThen(function() {
    assert.equal(currentURL(), '/sample');
  });
});
