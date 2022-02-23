import { Factory } from 'miragejs';
import faker from 'faker';
export default Factory.extend({
    text() {
    return faker.lorem.sentence();
  },

  createdAt() {
    return new Date();
  }
});
