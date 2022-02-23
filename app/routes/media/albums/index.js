import Route from '@ember/routing/route';

export default class MediaAlbumsIndexRoute extends Route {
    
     model() {
        return this.store
            .findAll('album', { include: 'images', reload: true })
    }
    serialize(model) {
        return { album_slug: model.get('slug') };
    }
}
