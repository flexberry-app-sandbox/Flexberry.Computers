import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISComputersComputerLForm from './forms/i-i-s-computers-computer-l';
import IISComputersComputerPartTypeLForm from './forms/i-i-s-computers-computer-part-type-l';
import IISComputersOfficeLForm from './forms/i-i-s-computers-office-l';
import IISComputersPersonLForm from './forms/i-i-s-computers-person-l';
import IISComputersComputerEForm from './forms/i-i-s-computers-computer-e';
import IISComputersComputerPartTypeEForm from './forms/i-i-s-computers-computer-part-type-e';
import IISComputersOfficeEForm from './forms/i-i-s-computers-office-e';
import IISComputersPersonEForm from './forms/i-i-s-computers-person-e';
import IISComputersComputerPartTypeModel from './models/i-i-s-computers-computer-part-type';
import IISComputersComputerPartModel from './models/i-i-s-computers-computer-part';
import IISComputersComputerModel from './models/i-i-s-computers-computer';
import IISComputersOfficeModel from './models/i-i-s-computers-office';
import IISComputersPersonModel from './models/i-i-s-computers-person';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-computers-computer-part-type': IISComputersComputerPartTypeModel,
    'i-i-s-computers-computer-part': IISComputersComputerPartModel,
    'i-i-s-computers-computer': IISComputersComputerModel,
    'i-i-s-computers-office': IISComputersOfficeModel,
    'i-i-s-computers-person': IISComputersPersonModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        computers: {
          caption: 'computers',
          title: 'computers',
          'i-i-s-computers-office-l': {
            caption: 'i-i-s-computers-office-l',
            title: 'i-i-s-computers-office-l'
          },
          'i-i-s-computers-person-l': {
            caption: 'i-i-s-computers-person-l',
            title: 'i-i-s-computers-person-l'
          },
          'i-i-s-computers-computer-l': {
            caption: 'i-i-s-computers-computer-l',
            title: 'i-i-s-computers-computer-l'
          },
          'i-i-s-computers-computer-part-type-l': {
            caption: 'i-i-s-computers-computer-part-type-l',
            title: 'i-i-s-computers-computer-part-type-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-computers-computer-l': IISComputersComputerLForm,
    'i-i-s-computers-computer-part-type-l': IISComputersComputerPartTypeLForm,
    'i-i-s-computers-office-l': IISComputersOfficeLForm,
    'i-i-s-computers-person-l': IISComputersPersonLForm,
    'i-i-s-computers-computer-e': IISComputersComputerEForm,
    'i-i-s-computers-computer-part-type-e': IISComputersComputerPartTypeEForm,
    'i-i-s-computers-office-e': IISComputersOfficeEForm,
    'i-i-s-computers-person-e': IISComputersPersonEForm
  },

});

export default translations;
