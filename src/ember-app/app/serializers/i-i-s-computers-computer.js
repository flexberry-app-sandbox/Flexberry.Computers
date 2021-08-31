import { Serializer as ComputerSerializer } from
  '../mixins/regenerated/serializers/i-i-s-computers-computer';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ComputerSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
