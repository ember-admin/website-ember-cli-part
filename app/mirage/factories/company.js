import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title: function(i) {
    return 'Company# ' + i;
  },
  lat: 20,
  long: 20,
  zoom: 20
});

