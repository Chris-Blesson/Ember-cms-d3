import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | albums/album/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:albums/album/index');
    assert.ok(route);
  });
});
