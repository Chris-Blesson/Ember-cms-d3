import Model,{attr} from '@ember-data/model';

export default class ActivityModel extends Model {
    @attr('string') text;
    @attr('string') createdAt;
}
