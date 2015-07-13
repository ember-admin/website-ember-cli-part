import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title: function(i) {                  // and functions
    return 'Product #' + i;
  },
  price: 200
});

