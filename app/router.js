import Ember from 'ember';
import MetaRoute from 'ember-cli-admin/dsl/meta-route';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  return this.route("dashboard", {path: "/"});
});

MetaRoute.map(Router, function() {
  this.resources("users");
  this.resources("companies");
  this.resources("products");
});

export default Router;
