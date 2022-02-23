import Model, { belongsTo, attr } from '@ember-data/model';

export default class ImageModel extends Model {
    @belongsTo('album') album;
    @attr('string') title;
    @attr('string') slug;
    @attr('string') url;
    @attr('string') style;
}
