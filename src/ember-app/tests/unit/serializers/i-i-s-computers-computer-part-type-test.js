import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-computers-computer-part-type', 'Unit | Serializer | i-i-s-computers-computer-part-type', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-computers-computer-part-type',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
