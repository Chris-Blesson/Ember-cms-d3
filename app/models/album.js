import Model, { hasMany,attr } from '@ember-data/model';

export default class AlbumModel extends Model {
    @hasMany('image') images;

    @attr('string') title;
    @attr('string') slug;

}
