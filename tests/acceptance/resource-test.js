import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'admin-app/tests/helpers/start-app';
import Mirage from 'ember-cli-mirage';

var application, users;

module('Acceptance | users', {
  beforeEach: function() {
    application = startApp();
    users = server.createList('user', 20);
    server.createList('avatar', 20);
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /users', function(assert) {
  visit('/users');
  andThen(function() {
    assert.equal(currentURL(), '/users');
  });
});

test('breadcrumbs contains "New" action button', function(assert) {
  assert.expect(1);
  visit('/users');

  andThen(function() {
    assert.equal(find(".breadcrumb-action button").length, 1);
  });
});

test('resource pagination', function(assert) {
  server.createList('user', 50);
  server.createList('avatar', 50);
  visit('/users');
  andThen(function(){
    assert.equal(find('ul.pagination li').length, 4);
  });
}); 

test('resource index page contains link to model#edit', function(assert) {
  assert.expect(1);
  visit('/users');

  click('tbody tr:first button[title="Edit"]');

  andThen(function() {
    assert.equal(find(".panel-heading:contains('Edit')").length, 1);
  });
});

test('resource index page contains link to model#show', function(assert) {
  assert.expect(1);
  visit('/users');

  click('tbody tr:first button[title="Show"]');

  andThen(function() {
    assert.equal(find(".panel-heading:contains('Show')").length, 1);
  });
});

test('model#show', function(assert) {
  assert.expect(2);

  let firstUser = users[0];

  visit('/users/1/show');

  andThen(function() {
    assert.equal(find('tbody td').length, 1);
    assert.equal(find("td[data-column='email']").text().trim(), users[0].email);
  });
});

test('model#delete', function(assert) {
  assert.expect(1);

  visit('/users');

  click('tbody tr:first button[title="Delete"]');
  click('button:contains("Confirm")');
  andThen(function() {
    assert.equal(find("tbody tr").length, 19);
  });
});

test('model#index', function(assert) {
  assert.expect(1);
  visit('/users');
  andThen(function() {
    assert.equal(find("tbody tr").length, 20);
  });
});

