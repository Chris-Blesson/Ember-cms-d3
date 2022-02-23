import Route from '@ember/routing/route';

export default class TagsTagRoute extends Route {

    model(params) {
    let slug = params.tag_slug;

    return this.store
      .query('tag', {
        filter: { slug },
        include: 'posts'
      })
      .then(tags => tags.get('firstObject'));
  }

  serialize(model) {
    return { tag_slug: model.get('slug') };
  }
}
