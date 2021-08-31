import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  office: DS.belongsTo('i-i-s-computers-office', { inverse: null, async: false }),
  owner: DS.belongsTo('i-i-s-computers-person', { inverse: null, async: false }),
  parts: DS.hasMany('i-i-s-computers-computer-part', { inverse: 'computer', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-computers-computer.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  office: {
    descriptionKey: 'models.i-i-s-computers-computer.validations.office.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  owner: {
    descriptionKey: 'models.i-i-s-computers-computer.validations.owner.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  parts: {
    descriptionKey: 'models.i-i-s-computers-computer.validations.parts.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ComputerE', 'i-i-s-computers-computer', {
    name: attr('Name', { index: 0 }),
    office: belongsTo('i-i-s-computers-office', 'Office', {
      address: attr('Address', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'address' }),
    owner: belongsTo('i-i-s-computers-person', 'Owner', {
      name: attr('Name', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'name' }),
    parts: hasMany('i-i-s-computers-computer-part', 'Parts', {
      name: attr('Name', { index: 0 }),
      serialNumber: attr('Serial number', { index: 1 }),
      sizeOrCapacity: attr('Size or capacity', { index: 2 }),
      computerPartType: belongsTo('i-i-s-computers-computer-part-type', 'Computer part type', {
        name: attr('Name', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('ComputerL', 'i-i-s-computers-computer', {
    name: attr('Name', { index: 0 }),
    office: belongsTo('i-i-s-computers-office', 'Address', {
      address: attr('Address', { index: 1 })
    }, { index: -1, hidden: true }),
    owner: belongsTo('i-i-s-computers-person', 'Name', {
      name: attr('Name', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
