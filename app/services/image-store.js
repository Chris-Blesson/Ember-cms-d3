import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class ImageStoreService extends Service {

    @tracked meta = {
         albums: {},
            album: {}
    }
    
}
