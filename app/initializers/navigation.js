import Navigation from 'ember-cli-admin/dsl/navigation';

export default {
  name: 'navigation',
  initialize: function() {
    return Navigation.map(function() {
      this.navigate("Dashboard", { route: "dashboard" });
      this.navigate("Users");
      this.navigate("Products & Companies", function() {
        this.navigate("Companies");
        this.navigate("Products");
      });
    });
  }
};