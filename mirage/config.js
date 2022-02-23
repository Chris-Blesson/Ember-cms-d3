import faker from 'faker';
import moment from 'moment';
import filterable from './utils/filterable';

faker.seed(123);
export default function () {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  this.timing = 200;

  this.resource('tags');
  this.resource('posts');
  // this.get('/posts', { errors: [ 'The database is on vacation' ] }, 500);

  this.patch('/posts/:id', function (schema, request) {
    let post = schema.posts.find(request.params.id);
    let attrs = this.normalizedRequestAttrs();
    let activityText;
    let currentTags = post.tags;
    let newTags = schema.tags.find(attrs.tagIds);
    let didAddTag = newTags.length > currentTags.length;
    let didRemoveTag = newTags.length < currentTags.length;
    let tagsDidChange = didAddTag || didRemoveTag;

    if (didAddTag) {
      let addedTag = newTags.filter(tag => !currentTags.includes(tag)).models[0];
      activityText = `The ${addedTag.name} tag was added`;

    } else if (didRemoveTag) {
      let removedTag = currentTags.filter(tag => !newTags.includes(tag)).models[0];
      activityText = `The ${removedTag.name} tag was removed`;
    }

    post.update(attrs);

    if (tagsDidChange) {
      let activity = schema.activities.create({
        text: activityText,
        createdAt: moment().toISOString()
      });

      post.activities.add(activity);
      post.save();
    }

    return post;
  });
  // this.patch('/posts/:id', { errors: [ ] }, 500);

  this.get('albums', filterable('albums', ['slug']));
  this.get('images', filterable('images', ['slug', 'style']));
  this.get('tags', filterable('tags', ['slug']));

  this.passthrough('https://api.github.com/search/repositories');


}
