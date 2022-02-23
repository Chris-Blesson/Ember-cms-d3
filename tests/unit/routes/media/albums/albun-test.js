import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | media/albums/albun', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:media/albums/albun');
    assert.ok(route);
  });
});
