import Route from '@ember/routing/route';

export default class MediaAlbumsAlbumRoute extends Route {
     serialize(model) {
        return { album_slug: model.get('slug') };
    }
}
