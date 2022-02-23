import Model, { hasMany, attr } from '@ember-data/model';

export default class PostModel extends Model {

    @hasMany('activity') activities;
    @hasMany('tag') tags;
    @hasMany('comment') comments;
    @attr('string') title;
    @attr('string') text;
    @attr('string') author;
    @attr('string') category;
    @attr('string') date;
    @attr('string') commentsCount;
}
