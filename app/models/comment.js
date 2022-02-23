import Model, { belongsTo, attr } from '@ember-data/model';

export default class CommentModel extends Model {
    @belongsTo('post') post;

    @attr('string') text;
    @attr('string') author;
}   
