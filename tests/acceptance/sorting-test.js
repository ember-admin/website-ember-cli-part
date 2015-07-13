import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'admin-app/tests/helpers/start-app';


var application, users;

module('Acceptance | sorts', {
  beforeEach: function() {
    application = startApp();
    users = server.createList('user', 5);
    server.createList('avatar', 5);
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('records in table are sorted by ASC', function(assert) {
  assert.expect(1);
  visit('/users');
  click('th:contains("id")');
  andThen(function() {
    assert.equal(find('tbody tr:first td[data-column="id"]:contains("1")').length, 1);
  });
});

test('records in table are sorted by DESC', function(assert) {
  assert.expect(1);
  visit('/users');
  click('th:contains("id")');
  click('th:contains("id")');
  andThen(function() {
    assert.equal(find('tbody tr:first td[data-column="id"]:contains("5")').length, 1);
  });
});


test('records in table are sorted by combine of properies', function(assert) {
    assert.expect(1);

    let user = users[2];
    user.email = 'Aaron@gmail.com';

    visit('/users');

    click('th:contains("id")');
    click('th:contains("id")');
    click('th:contains("email")');

    andThen(function() {
      assert.equal(find('tbody tr:first td[data-column="id"]:contains("3")').length, 1);
    });
  });