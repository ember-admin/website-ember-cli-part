import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'admin-app/tests/helpers/start-app';


var application;

module('Acceptance | search', {
  beforeEach: function() {
    application = startApp();
    server.createList('user', 25);
    server.createList('avatar', 25);
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('search panel contains model search fields and buttons', function(assert) {
  assert.expect(2);
  visit('/users');
  andThen(function() {
    assert.equal(find('form.search input[name="email"]').length, 1);
    assert.equal(find('.search-button').length, 2);
  });
});

test('search results are shown in table', function(assert) {
  assert.expect(1);
  visit('/users');
  fillIn('input[name="email"]', 'person0@test.com');
  click('button[type="submit"]');
  andThen(function() {
    assert.equal(find("tbody tr").length, 1);
  });
});

test('autocomplete search', function(assert) {
  visit('/users');
  Ember.$('.typeahead').typeahead('val', '12');
  click('button[type="submit"]');
  andThen(function(){
    assert.equal(find('form.search .controls').length, 1);
  });
});
