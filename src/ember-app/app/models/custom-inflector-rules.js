import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('computer', 'Computers');
inflector.irregular('office', 'Offices');
inflector.irregular('person', 'Persons');
inflector.irregular('type', 'Types');
inflector.irregular('part', 'Parts');

export default {};
