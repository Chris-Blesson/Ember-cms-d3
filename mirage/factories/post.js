import { Factory, trait } from 'miragejs';
import faker from 'faker';
export default Factory.extend({

    title() {
        return faker.company.catchPhrase();
    },

    text() {
        return faker.lorem.paragraphs(3).split('\n').join('\n<br /><br />');
    },

    author() {
        return faker.name.findName();
    },

    category(i) {
        let categories = ['Economics', 'Programming', 'Literature'];

        return categories[i % categories.length];
    },

    date() {
        return faker.date.past().toISOString();
    },

    commentsCount() {
        return faker.datatype.number({ min: 0, max: 13 });
    },

    long: trait({
        title(i) {
            return `Long post #${i}`;
        },

        text: faker.lorem.paragraphs(30).split('\n').join('\n<br /><br />')
    }),

    withComments: trait({
        afterCreate(post, server) {
            server.create('comment', { post });
            server.create('comment', 'long', { post });
            server.create('comment', { post });
        }
    })

});
