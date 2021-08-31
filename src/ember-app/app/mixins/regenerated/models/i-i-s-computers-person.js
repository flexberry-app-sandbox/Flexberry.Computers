import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  phone: DS.attr('string')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-computers-person.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phone: {
    descriptionKey: 'models.i-i-s-computers-person.validations.phone.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PersonE', 'i-i-s-computers-person', {
    name: attr('Name', { index: 0 }),
    phone: attr('Phone', { index: 1 })
  });

  modelClass.defineProjection('PersonL', 'i-i-s-computers-person', {
    name: attr('Name', { index: 0 }),
    phone: attr('Phone', { index: 1 })
  });
};
