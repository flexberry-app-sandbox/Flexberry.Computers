import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  address: DS.attr('string'),
  floor: DS.attr('number')
});

export let ValidationRules = {
  address: {
    descriptionKey: 'models.i-i-s-computers-office.validations.address.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  floor: {
    descriptionKey: 'models.i-i-s-computers-office.validations.floor.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OfficeE', 'i-i-s-computers-office', {
    address: attr('Address', { index: 0 }),
    floor: attr('Floor', { index: 1 })
  });

  modelClass.defineProjection('OfficeL', 'i-i-s-computers-office', {
    address: attr('Address', { index: 0 }),
    floor: attr('Floor', { index: 1 })
  });
};
