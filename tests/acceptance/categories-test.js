import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'admin-app/tests/helpers/start-app';


var application, categories;

module('Acceptance | categories', {
  beforeEach: function() {
    application = startApp();
    categories = server.createList('category', 3);
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /categories', function(assert) {
  visit('/categories');
  andThen(function() {
    assert.equal(currentURL(), '/categories');
  });
});

test(('categories is present'), function(assert) {
  visit('/categories');
  andThen(function() {
    assert.equal(find('ol li').length, 3);
  });
});

test(('each list item has config buttons'), function(assert) {
  visit('/categories');
  andThen(function() {
    assert.equal(find('button[title="Edit"]').length, 3);
    assert.equal(find('button[title="Show"]').length, 3);
    assert.equal(find('button[title="Delete"]').length, 3);
  });
});