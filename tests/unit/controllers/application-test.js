import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:application', 'Unit | Controller | application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

// test('set city', function(assert) {
//   const ctrl = this.subject();
//   ctrl.send('showMeWather', 'Prague')
//   assert.equal(ctrl.get('shownCity'), 'Prague', 'City is OK');
// });
