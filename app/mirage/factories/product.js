import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title_en: function(i) {
    return 'Product #' + i;
  },
  title_ru: function(i) {
    return 'Товар #' + i;
  },
  title_de: function(i) {
    return 'Produkt #' + i;
  },
  title_fr: function(i) {
    return 'Produit #' + i;
  },
  price: 200
});

