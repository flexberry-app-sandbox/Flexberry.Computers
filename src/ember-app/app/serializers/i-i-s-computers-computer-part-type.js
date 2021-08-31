import { Serializer as ComputerPartTypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-computers-computer-part-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ComputerPartTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
