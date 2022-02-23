import Model, { hasMany, attr } from '@ember-data/model';

export default class TagModel extends Model {
    @hasMany('post') posts;

    @attr('string') name;
    @attr('string') slug;
}
