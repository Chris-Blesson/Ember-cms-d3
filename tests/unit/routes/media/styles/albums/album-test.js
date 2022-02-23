import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | media/styles/albums/album', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:media/styles/albums/album');
    assert.ok(route);
  });
});
