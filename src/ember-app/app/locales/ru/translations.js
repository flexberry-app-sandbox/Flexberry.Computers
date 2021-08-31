import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Computers',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Computers',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Computers',
          title: 'Computers'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        computers: {
          caption: 'Computers',
          title: 'Computers',
          'i-i-s-computers-office-l': {
            caption: 'Office',
            title: ''
          },
          'i-i-s-computers-person-l': {
            caption: 'Persons',
            title: ''
          },
          'i-i-s-computers-computer-l': {
            caption: 'Computers',
            title: ''
          },
          'i-i-s-computers-computer-part-type-l': {
            caption: 'Computer part types',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
