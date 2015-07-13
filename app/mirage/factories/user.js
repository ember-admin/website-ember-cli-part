import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  email: function(i) {                  // and functions
    return 'person' + i + '@test.com';
  },
  avatar_id: function(i) {
    return i + 1 ;
  }
});

