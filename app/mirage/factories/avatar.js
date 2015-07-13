import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  url: faker.image.avatar,
  thumb_url: faker.image.avatar
});