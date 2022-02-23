import Route from '@ember/routing/route';


export default class MediaAlbumsAlbumIndexRoute extends Route {
     model() {
    let slug = this.paramsFor('media.albums.album').album_slug;
    let hasLoadedAllAlbums = this.get(`store.meta.albums.hasLoadedAll`)
    let hasLoadedAlbum = this.get(`store.meta.album.${slug}`)

    if (hasLoadedAllAlbums || hasLoadedAlbum) {
      return this.store
        .peekAll('album')
        .filterBy('slug', slug)[0];

    } else {
      return this.store
        .query('album', {
          filter: { slug },
          include: 'images'
        })
        .then(albums => {
          return albums.get('firstObject')
        });
    }
  }
}
