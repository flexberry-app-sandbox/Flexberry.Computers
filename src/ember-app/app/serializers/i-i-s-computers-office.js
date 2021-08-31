import { Serializer as OfficeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-computers-office';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(OfficeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
