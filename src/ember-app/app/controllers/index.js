import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.computers.caption'),
          title: i18n.t('forms.application.sitemap.computers.title'),
          children: [{
            link: 'i-i-s-computers-office-l',
            caption: i18n.t('forms.application.sitemap.computers.i-i-s-computers-office-l.caption'),
            title: i18n.t('forms.application.sitemap.computers.i-i-s-computers-office-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-computers-person-l',
            caption: i18n.t('forms.application.sitemap.computers.i-i-s-computers-person-l.caption'),
            title: i18n.t('forms.application.sitemap.computers.i-i-s-computers-person-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-computers-computer-l',
            caption: i18n.t('forms.application.sitemap.computers.i-i-s-computers-computer-l.caption'),
            title: i18n.t('forms.application.sitemap.computers.i-i-s-computers-computer-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-computers-computer-part-type-l',
            caption: i18n.t('forms.application.sitemap.computers.i-i-s-computers-computer-part-type-l.caption'),
            title: i18n.t('forms.application.sitemap.computers.i-i-s-computers-computer-part-type-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})