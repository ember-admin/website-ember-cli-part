import DS from 'ember-data';

export default DS.Model.extend({
  title_en: DS.attr('string'),
  title_de: DS.attr('string'),
  title_fr: DS.attr('string'),
  title_ru: DS.attr('string'),
  price: DS.attr('number'),
  company: DS.belongsTo('company'),
  user: DS.belongsTo('user'),
  product_images: DS.hasMany('product_image', {
    async: true
  }),
  updated_at: DS.attr('date'),
  created_at: DS.attr('date'),
  is_active: DS.attr('boolean'),

  title: function() {
    return this.get('title_en');
  }.property('title_en'),

  fileuploads: ["product_images"],

  additionalActions: function() {
    var actions = [];
    if (this.get('is_active')) {
      actions.pushObject({
        title: "Toggle Active",
        class: "btn btn-small btn-info",
        action: "toggleActive",
        iconClass: "glyphicon glyphicon-remove"
      });
    } else {
      actions.pushObject({
        title: "Toggle Active",
        class: "btn btn-small btn-info",
        action: "toggleActive",
        iconClass: "glyphicon glyphicon-ok"
      });
    }
    return actions;

  }.property('is_active')
});
