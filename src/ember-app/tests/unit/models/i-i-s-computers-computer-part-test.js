import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-computers-computer-part', 'Unit | Model | i-i-s-computers-computer-part', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-computers-computer-part-type',
    'model:i-i-s-computers-computer-part',
    'model:i-i-s-computers-computer',
    'model:i-i-s-computers-office',
    'model:i-i-s-computers-person',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
