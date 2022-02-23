import Route from '@ember/routing/route';

export default class MediaAlbumsAlbumImageRoute extends Route {

    model(params) {
    let slug = params.image_slug;

    return this.store
      .query('image', {
        filter: { slug },
        include: 'album'
      })
      .then(images => images.get('firstObject'));
  }

  serialize(model) {
    return { image_slug: model.get('slug') };
  }
}
