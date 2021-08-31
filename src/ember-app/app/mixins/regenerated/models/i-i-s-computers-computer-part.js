import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  serialNumber: DS.attr('string'),
  sizeOrCapacity: DS.attr('string'),
  computerPartType: DS.belongsTo('i-i-s-computers-computer-part-type', { inverse: null, async: false }),
  computer: DS.belongsTo('i-i-s-computers-computer', { inverse: 'parts', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-computers-computer-part.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  serialNumber: {
    descriptionKey: 'models.i-i-s-computers-computer-part.validations.serialNumber.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  sizeOrCapacity: {
    descriptionKey: 'models.i-i-s-computers-computer-part.validations.sizeOrCapacity.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  computerPartType: {
    descriptionKey: 'models.i-i-s-computers-computer-part.validations.computerPartType.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  computer: {
    descriptionKey: 'models.i-i-s-computers-computer-part.validations.computer.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ComputerPartE', 'i-i-s-computers-computer-part', {
    name: attr('Name', { index: 0 }),
    serialNumber: attr('Serial number', { index: 1 }),
    sizeOrCapacity: attr('Size or capacity', { index: 2 }),
    computerPartType: belongsTo('i-i-s-computers-computer-part-type', 'Computer part type', {
      name: attr('Name', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'name' })
  });
};
