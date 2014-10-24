import Asset from 'ember-cli-admin/logics/asset';
import DS from 'ember-data';

var avatar = Asset.extend({
  type: DS.attr('string', {defaultValue: 'Logo'})
});

export default avatar;