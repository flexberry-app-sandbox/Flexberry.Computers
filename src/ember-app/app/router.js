import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-computers-computer-l');
  this.route('i-i-s-computers-computer-e',
  { path: 'i-i-s-computers-computer-e/:id' });
  this.route('i-i-s-computers-computer-e.new',
  { path: 'i-i-s-computers-computer-e/new' });
  this.route('i-i-s-computers-computer-part-type-l');
  this.route('i-i-s-computers-computer-part-type-e',
  { path: 'i-i-s-computers-computer-part-type-e/:id' });
  this.route('i-i-s-computers-computer-part-type-e.new',
  { path: 'i-i-s-computers-computer-part-type-e/new' });
  this.route('i-i-s-computers-office-l');
  this.route('i-i-s-computers-office-e',
  { path: 'i-i-s-computers-office-e/:id' });
  this.route('i-i-s-computers-office-e.new',
  { path: 'i-i-s-computers-office-e/new' });
  this.route('i-i-s-computers-person-l');
  this.route('i-i-s-computers-person-e',
  { path: 'i-i-s-computers-person-e/:id' });
  this.route('i-i-s-computers-person-e.new',
  { path: 'i-i-s-computers-person-e/new' });
});

export default Router;
